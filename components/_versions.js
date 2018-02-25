const glob = require('glob')
const semver = require('semver')

export default function getVersions(compPath) {
  let versions = []

  const mdFiles = glob.sync(`~/+(compositions|components)/${compPath}/archive/versions/**.md`)

  mdFiles.forEach((file) => {
    const starMdVer = mdFile.lastIndexOf(`${compPath}-`) + compPath.length + 1, endMdVer = mdFile.lastIndexOf('.')
    const mdFileVer = mdFile.slice(starMdVer, endMdVer)

    if (semver.valid(mdFileVer)) {
      versions.push(mdFileVer)
    }
  })
  return versions
}

