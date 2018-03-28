import { CdrActivityCard } from '@rei/cdr-activity-card'
import { CdrSearch } from '@rei/cdr-search'

import cdrActivityCardPkg from '@rei/cdr-activity-card/package.json'
import cdrSearchPkg from '@rei/cdr-search-package.json'

export default {
  CdrActivityCard,
  CdrSearch
}

const cdrCompositionPkgs = {
  cdrActivityCardPkg,
  cdrSearchPkg
}

export { cdrCompositionPkgs }