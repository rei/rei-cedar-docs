const glob = require('glob')
const fs = require('fs-extra')
const path = require('path')
const util = require('util')
const semver = require('semver')

let versions = {}
let verJSON = ''
const fullPath = path.resolve(__dirname) + '/+(components|compositions)/**/versions/*.md'

glob(fullPath, (mdErr, mdFiles) => {
  if(mdErr) {
    throw new Error(`Error while trying to create versioned documentation: ${mdErr}`)
  }
  
  mdFiles.forEach((mdFile) => {
    const startCompName = mdFile.lastIndexOf('/') + 1, endCompName = mdFile.lastIndexOf('-')
    let compName = mdFile.slice(startCompName, endCompName)
    const starMdVer = endCompName + 1, endMdVer = mdFile.lastIndexOf('.')
    const mdFileVer = mdFile.slice(starMdVer, endMdVer)

    if (compName.toLowerCase().startsWith('cdr') && semver.valid(mdFileVer)) {
      compName = compName[0].toUpperCase() + compName.substring(1)

      if (!versions[compName]) {
        versions[compName] = []
      }
      versions[compName].push(mdFileVer)
    }
  })

  verJSON += `export default ${util.inspect(versions)}`
  
  fs.writeFile('./archive-versions.js', verJSON, (wrErr) => {
    if (wrErr) {
      throw new Error(`Error while creating archived versions folder`)
    }
  })
})
