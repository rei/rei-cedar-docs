<script>
import examplesData from '@rei/cdr-component-variables/dist/docs/examples.json';

export default {
  name: 'component-variables-page',
  data() {
    return {
      examplesData,
    };
  },
  methods: {
    formatSCSS(component, example) {
      return `.${component.name}-${example.name} {\n  ${example.scss.join('\n  ')}\n}`
    },
    formatName(name) {
      // pascalize name
      return name.split('-').map(x => `${x.charAt(0).toUpperCase()}${x.slice(1)}`).join('');
    }
  },
  mounted() {
    this.$parent.$emit('update-toc');
  },
}
</script>
<!-- pascal-ize name for TOC -->
<template>
  <div>
    <div v-for="component in examplesData" :key="component.name">
      <h3 :id="formatName(component.name)">{{formatName(component.name)}}</h3>
      <cdr-list v-if="component.notes" modifier="unordered">
        <li v-for="note in component.notes" :key="note">{{note}}</li>
      </cdr-list>
      <table class="comp-vars-examples">
        <tr><th>Example</th><th>HTML</th><th>SCSS</th></tr>
        <tr v-for="example in component.examples" :key="`${component.name}-${example.name}`">
          <td v-html="example.html"/>
          <td>{{example.html}}</td>
          <td><pre>{{formatSCSS(component, example)}}</pre></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style lang="scss">

@import '../theme/styles/cdr-tokens.scss';
@import '~@rei/cdr-component-variables/dist/docs/index.scss';

.comp-vars-examples {
  th {
    width: 33%;
  }

  td {
    background-color: $cdr-color-background-primary;
  }
}
</style>
