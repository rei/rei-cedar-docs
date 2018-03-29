<template>
  <div>
    <h1 id="intro">Introduction</h1>
    <div v-html="introMD"></div>
    <cdr-row v-for="name in componentNames" :key="name">
      <cdr-col> {{ name }} </cdr-col>
      <cdr-col> {{ namedComponentPkg(name, 'version') }} </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
import introMD from '~/old_docs/Introduction.md'
import Components, { cdrComponentPkgs } from '~/components/_index'
import Compositions, { cdrCompositionPkgs } from '~/compositions/_index'
import compNamesMixin from '~/mixins/comp-names'
import util from 'util'

const CdrRow = Components.CdrRow
const CdrCol = Components.CdrCol

export default {
  mixins: [compNamesMixin],
  data() {
    return {
      cdrComponentPkgs,
      cdrCompositionPkgs,
      introMD
    }
  },
  components: {
    CdrRow,
    CdrCol
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
