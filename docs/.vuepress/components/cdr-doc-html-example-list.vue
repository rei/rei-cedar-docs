<template>
  <div class="cdr-doc-html-example-list" v-on:click="codeToConsole">
    <div class="cdr-doc-html-example-list-slot-wrap" ref="code">
      <slot/>
    </div>
    <div id="cdr-doc-html-example">
      <!-- Will be replaced with the compiled template code -->
    </div>
  </div>
</template>

<script>
  import Vue from '$vue'; 
  // Note the '$vue', which is the full build of Vue, not the default runtime 'vue'. We need to import the full build to have access to the compiler
  
  // Import components that will be shown as examples
  import { CdrButton } from '@rei/cdr-button';
  import { IconInformationStroke } from '@rei/cdr-icon';

  export default {
    name: 'CdrDocHtmlExampleList',
    props: {

    },
    data: function() {
      return {
        tempComponent: false
      }
    },
    computed: {
    },
    mounted: function () {
      this.codeToConsole();
    },
    methods: {
      codeToConsole () {
        // This method extracts the textContent out of the markdown <pre> passed in via a <slot> and 
        // calls the Vue compiler directly to render the VUE template content as HTML
        var tempComponent = new Vue({
          template: this.$refs.code.querySelector('pre').textContent,
          parent: this,
          components: { CdrButton }
        }).$mount("#cdr-doc-html-example")
      }
    }
  }
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';
  $cdr-doc-code-snippet-actions-background-color: $ice-age;

  .cdr-doc-html-example-list-slot-wrap {
    display: none;
  }
</style>
