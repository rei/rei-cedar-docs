const glob = require('glob')
const fs = require('fs-extra')
const path = require('path')
const util = require('util')
const semver = require('semver')

let versions = {}
let verJSON = ''
const REPOSITORY = 'rei-cedar-docs'

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
        <div id="${compName}" v-html="md"></div>
      </template>
      <script>
      import md from '~/${fullPath}'
      
      export default {
        name: '${compName}-${mdFileVer}',
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
