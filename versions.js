const glob = require('glob')
const fs = require('fs-extra')
const path = require('path')
const util = require('util')
const semver = require('semver')

let versions = {}
let verJSON = ''
const REPOSITORY = 'rei-cedar-docs'

// find the most recent markdown documentation file for each cedar component
glob(path.resolve(__dirname) + '/+(components|compositions)/**/archive/*.md', (mdErr, mdFiles) => {
  if (mdErr) {
    throw new Error(`Error while trying to create index.vue files to \nconsume most recent md of each component: ${mdErr}`)
  }

  // create default index.vue file that consume most recent markdown documentation file
  mdFiles.forEach((mdFile) => {
    const startFileName = mdFile.lastIndexOf('/') + 1
    const endFileName = mdFile.lastIndexOf('.')
    let compName = mdFile.slice(startFileName, endFileName)
    compName = compName[0].toUpperCase() + compName.substring(1)
    const fullPathStart = mdFile.lastIndexOf(`${REPOSITORY}`) + REPOSITORY.length + 1
    const fullPath = mdFile.substring(fullPathStart)

    if(compName.toLowerCase().startsWith('cdr')) {
      let archiveVueFile =
      ` <template>
          <div id="${compName}" v-html="md"></div>
        </template>
        <script>
        import md from '~/${fullPath}'
        
        export default {
          name: '${compName}-current',
          computed: {
            md() {
              return md
            }
          }
        }
        </script>`
      
      fs.ensureDir(`./pages/${compName}`, (dirErr) => {
        if (dirErr) {
          throw new Error(`Error while trying to create archive Vue directory for ${compName}-${mdFileVer}: ${dirErr}`)
        }
        
        fs.writeFile(`./pages/${compName}/index.vue`, archiveVueFile, (crErr) => {
          if (crErr) {
            throw new Error(`Error while trying to create default index.vue file for ${compName}: ${crErr}`)
          }
        })
      })
    }
  })
})

// find all versioned mardown documentation files
glob(path.resolve(__dirname) + '/+(components|compositions)/**/versions/*.md', (mdErr, mdFiles) => {
  if(mdErr) {
    throw new Error(`Error while trying to create versioned documentation: ${mdErr}`)
  }
  
  // Create hash table of each cedar component name with an array of their archived NPM versions
  mdFiles.forEach((mdFile) => {
    const startCompName = mdFile.lastIndexOf('/') + 1
    const endCompName = mdFile.lastIndexOf('-')
    let compName = mdFile.slice(startCompName, endCompName)
    
    const starMdVer = endCompName + 1 
    const endMdVer = mdFile.lastIndexOf('.')
    const mdFileVer = mdFile.slice(starMdVer, endMdVer)

    // check that markdown file is for a cedar component and versioned
    if (compName.toLowerCase().startsWith('cdr') && semver.valid(mdFileVer)) {
      compName = compName[0].toUpperCase() + compName.substring(1)
      
      const fullPathStart = mdFile.lastIndexOf(`${REPOSITORY}`) + REPOSITORY.length + 1
      const fullPath = mdFile.substring(fullPathStart)

      if (!versions[compName]) {
        versions[compName] = []
      }
      versions[compName].push(mdFileVer)
      
      // Create Vue file for each archived markdown file
      let archiveVueFile =
    ` <template>
        <div>
          <h3>Version ${mdFileVer}</h3>
          <div id="cedar-comp" v-html="md"></div>
        </div>
      </template>
      <script>
      import md from '~/${fullPath}'
      
      export default {
        name: '${compName}-${mdFileVer.split('.').join('-')}',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>`
      
      fs.ensureDir(`./pages/${compName}`, (dirErr) => {
        if (dirErr) {
          throw new Error(`Error while trying to create archive Vue directory for ${compName}-${mdFileVer}: ${dirErr}`)
        }
        
        fs.writeFile(`./pages/${compName}/${compName}-${mdFileVer}.vue`, archiveVueFile, (crErr) => {
          if(crErr) {
            throw new Error(`Error while trying to create archived Vue file for ${compName}-${mdFileVer}: ${crErr}`)
          }
        })
      })
    }
  })

  // create file that exports this JSON object acting as a hash
  verJSON += `export default ${util.inspect(versions)}`
  fs.writeFile('./archive-versions.js', verJSON, (wrErr) => {
    if (wrErr) {
      throw new Error(`Error while creating archived versions folder`)
    }
  })
})
