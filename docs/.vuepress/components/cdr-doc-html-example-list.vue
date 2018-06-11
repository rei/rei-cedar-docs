<template>
  <div class="cdr-doc-html-example-list" v-on:click="codeToConsole">
    <div class="cdr-doc-html-example-list__item" v-for="slotContent, label in $slots">
      <span class="cdr-doc-html-example-list__item-label">{{ label }}</span>
      <!-- Code is rendered as a string here, then extracted, compiled, and injected as an html example -->
      <div class="cdr-doc-html-example-list__code" :ref="'cdr-doc-html-example-list__code-source-' + label">
        <slot :name="label"/>
      </div>
      <div :id="'cdr-doc-html-example-' + label" class="cdr-doc-html-example-list__item">
        <!-- Will be replaced with the compiled template code -->
      </div>
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
        examples: []
      }
    },
    computed: {
    },
    mounted: function () {
      for (const label in this.$slots) {
        const mountId = '#cdr-doc-html-example-' + label;
        const templateSource = this.$refs['cdr-doc-html-example-list__code-source-' + label][0].querySelector('pre').textContent;
        this.codeToConsole(templateSource, mountId);
      }
    },
    methods: {
      codeToConsole (template, mountId) {
        // This method extracts the textContent out of the markdown <pre> passed in via a <slot> and 
        // calls the Vue compiler directly to render the VUE template content as HTML
        var tempComponent = new Vue({
          template: template,
          parent: this,
          components: { CdrButton }
        }).$mount(mountId)
      }
    }
  }
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';
  $cdr-doc-code-snippet-actions-background-color: $ice-age;

  .cdr-doc-html-example-list {
    border: $cdr-doc-border-separator;
  }

  .cdr-doc-html-example-list__item {
    align-items: center;
    border-bottom: $cdr-doc-border-separator;
    display: flex;
    justify-content: center;
    position: relative;

    &:last-child {
      border-bottom: 0;
    }
  }

  .cdr-doc-html-example-list__code {
    display: none;
  }

  .cdr-doc-html-example-list__item-label {
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
