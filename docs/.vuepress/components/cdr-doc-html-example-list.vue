<template>
  <div class="cdr-doc-html-example-list" v-on:click="codeToConsole">
    <div class="cdr-doc-html-example-list__item" v-for="slotContent, label in $slots">
      <span class="cdr-doc-html-example-list__item-label">{{ label }}</span>
      <!-- Code is rendered as a string here, then extracted, compiled, and injected as an html example -->
      <div :id="'cdr-doc-html-example-' + label" class="cdr-doc-html-example-list__item">
        <!-- Will be replaced with the compiled template code -->
      </div>
    </div>
  </div>
</template>

<script>
  import { Vue } from '../cedar.js';
  // Note the '$vue', which is the full build of Vue, not the default runtime 'vue'. We need to import the full build to have access to the compiler
  
  // Import components that will be shown as examples
  // import { CdrButton } from '@rei/cdr-button';
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
        const codeNode = this.extractCodeNodeFromVnodeTree(this.$slots[label][0]);
        const templateSource = this.extractTextFromVnode(codeNode, '');
        this.codeToConsole(templateSource, mountId);
      }
    },
    methods: {
      extractTextFromVnode(vNode, text) {
        let newText = text;
        if (vNode.text) {
          newText += vNode.text;
        } else if (vNode.children) {
          vNode.children.forEach(childNode => {
            newText += this.extractTextFromVnode(childNode, '');
          })
        } else {
          return '';
        }
        // console.log(newText);
        return newText;
      },
      extractCodeNodeFromVnodeTree(vNode) {
        let codeNode = false;
        if (vNode.tag === 'code') {
          codeNode = vNode;
        } else if (vNode.children) {
          vNode.children.some(childNode => {
            codeNode = this.extractCodeNodeFromVnodeTree(childNode);
            return codeNode !== false;
          });
        }

        return codeNode
      },
      codeToConsole (template, mountId) {
        // This method extracts the textContent out of the markdown <pre> passed in via a <slot> and 
        // calls the Vue compiler directly to render the VUE template content as HTML
        var tempComponent = new Vue({
          template: template,
          parent: this,
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
