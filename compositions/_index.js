import { CdrActivityCard } from '@rei/cdr-activity-card'
import { CdrSearch } from '@rei/cdr-search'
import { CdrCaption } from '@rei/cdr-caption'

import CdrActivityCardPkg from '@rei/cdr-activity-card/package.json'
import CdrSearchPkg from '@rei/cdr-search/package.json'
import CdrCaptionPkg from '@rei/cdr-caption/package.json'

export default {
  CdrActivityCard,
  CdrSearch,
  CdrCaption
}

const cdrCompositionPkgs = {
  CdrActivityCardPkg,
  CdrSearchPkg,
  CdrCaptionPkg
}

export { cdrCompositionPkgs }