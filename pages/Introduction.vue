<template>
  <div>
    <h1 id="intro">Introduction</h1>
    <div v-html="introMD"></div>
    <cdr-list modifier="inline unstyled">
      <li>
        <cdr-icon :url="`${svg}#cdr-check-circ-stroke`"></cdr-icon>&nbsp;<span>Ready</span>
      </li>
      <li>
        <cdr-icon :url="`${svg}#cdr-warning-tri`"></cdr-icon>&nbsp;<span>Under Review</span>
      </li>
      <li>
        <cdr-icon :url="`${svg}#cdr-x-circ-stroke`"></cdr-icon>&nbsp;<span>Deprecated</span>
      </li>
      <li>
        <cdr-icon :url="`${svg}#cdr-check-service`"></cdr-icon>&nbsp;<span>Prototype</span>
      </li>
      <li>
        <cdr-icon :url="`${svg}#cdr-minus-sm`"></cdr-icon>&nbsp;<span>Not Applicable</span>
      </li>
    </cdr-list>
    <cdr-row v-for="name in componentNames" :key="name">
      <cdr-col> {{ name }} </cdr-col>
      <cdr-col> {{ namedComponentPkg(name, 'version') }} </cdr-col>
      <cdr-col><cdr-icon :url="`${svg}#cdr-check-circ-stroke`"></cdr-icon></cdr-col>
    </cdr-row>
  </div>
</template>

<script>
import introMD from '~/old_docs/Introduction.md'
import Components, { cdrComponentPkgs } from '~/components/_index'
import Compositions, { cdrCompositionPkgs } from '~/compositions/_index'
import svg from '~/assets/rei-icons.svg'
import compNamesMixin from '~/mixins/comp-names'
import util from 'util'

const CdrRow = Components.CdrRow
const CdrList = Components.CdrList
const CdrCol = Components.CdrCol
const CdrIcon = Components.CdrIcon

export default {
  mixins: [compNamesMixin],
  data() {
    return {
      cdrComponentPkgs,
      cdrCompositionPkgs,
      introMD,
      svg
    }
  },
  components: {
    CdrRow,
    CdrCol,
    CdrList,
    CdrIcon
  },
  computed: {
    componentNames () {
      return this.compNames(Components)
    },
    compositionNames () {
      return this.compNames(Compositions)
    },
  },
  methods: {
    namedComponentPkg (name, property) {
      return (cdrComponentPkgs[`${name}Pkg`] && cdrComponentPkgs[`${name}Pkg`][property]) ?
         cdrComponentPkgs[`${name}Pkg`][property] :
         'n/a'
    }
  }
}
</script>
