<template>
  <div class="cdr-doc-html-example-list" :class="{'cdr-doc-html-example-list--not-interactive': !interactive }">
    <div class="cdr-doc-html-example-list__item" 
          :class="'cdr-doc-html-example-list__item-background--' + backgroundToggleStates[slotLabel]"
          v-for="slotContent, slotLabel in $slots">
      <div class="cdr-doc-html-example-list__item-background-toggle" v-if="backgroundToggle">
        <label class="cdr-doc-item-background-toggle__button" 
                :class="{'cdr-doc-item-background-toggle__button--active': backgroundToggleStates[slotLabel] === 'light'}" 
                :for="'cdr-doc-html-example-list__toggle-light-' + slotLabel + instanceId">
          <input 
            class="cdr-doc-item-background-toggle__input"
            type="radio" 
            :id="'cdr-doc-html-example-list__toggle-light-' + slotLabel + instanceId"
            value="light"
            v-model="backgroundToggleStates[slotLabel]">
            Light
        </label>
        <label class="cdr-doc-item-background-toggle__button"
                :class="{'cdr-doc-item-background-toggle__button--active': backgroundToggleStates[slotLabel] === 'dark'}" 
                :for="'cdr-doc-html-example-list__toggle-dark-' + slotLabel + instanceId">
        <input 
          class="cdr-doc-item-background-toggle__input"
          type="radio" 
          :id="'cdr-doc-html-example-list__toggle-dark-' + slotLabel + instanceId"
          value="dark"
          v-model="backgroundToggleStates[slotLabel]">
          Dark
        </label>
      </div>
      <span 
        class="cdr-doc-html-example-list__item-label" 
        v-if="(exampleCount > 1 && showExampleLabels) || 
              label">
        {{ label || slotLabel }}
      </span>
      <div class="cdr-doc-html-example-list__item-example">
        <div :id="'cdr-doc-html-example-' + slotLabel">
          <!-- Will be replaced with the compiled template code on mount -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from '$vue';
  // Note the '$vue', which is the full build of Vue, not the default runtime 'vue'. We need to import the full build to have access to the compiler
  
  // Import components that will be shown as examples
  // import { CdrButton } from '@rei/cdr-button';
  import { IconInformationStroke } from '@rei/cdr-icon';

  export default {
    name: 'CdrDocHtmlExampleList',
    props: {
      backgroundToggle: {
        type: Boolean,
        default: true
      },
      backgroundColors: {
        type: Object,
        default: function() {
          return {};
        }
      },
      backgroundColor: {
        type: String,
        default: 'light'
      },
      interactive: {
        type: Boolean,
        default: true
      },
      label: {
        type: [String, Boolean],
        default: false
      },
      showExampleLabels: {
        type: Boolean,
        default: true
      }
    },
    data: function() {
      return {
        exampleCount: 0,
        backgroundToggleStates: {},
        instanceId: null,
        templateSources: {}
      }
    },
    created: function() {
      let backgroundToggleStates = {}
      for (const label in this.$slots) {
        if (this.backgroundColors[label]) {
          backgroundToggleStates[label] = this.backgroundColors[label];
        } else {
          backgroundToggleStates[label] = this.backgroundColor;
        }
      }
      this.backgroundToggleStates = backgroundToggleStates; // Set default background toggle states
    },
    mounted: function () {
      this.instanceId = this._uid;
      this.exampleCount = Object.keys(this.$slots).length;
      for (const label in this.$slots) {
        const mountId = '#cdr-doc-html-example-' + label;
        const codeNode = this.extractCodeNodeFromVnodeTree(this.$slots[label][0]);
        const templateSource = this.getStoredTemplateSourceForExample(label, codeNode);
        this.renderExampleFromTemplate(templateSource, mountId);
      }
    },
    methods: {
      getStoredTemplateSourceForExample(label, codeNode) {
        let templateSource = this.templateSources[label]
        if (!templateSource) {
          templateSource = this.extractTextFromVnode(codeNode, '');
          this.templateSources[label] = templateSource;
        }
        return templateSource;
      },
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
      renderExampleFromTemplate (template, mountId) {
        // This method calls the Vue compiler directly to render the VUE template content as HTML
        var tempComponent = new Vue({
          el: mountId,
          template: template,
          parent: this,
        })
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
    border-radius: $cdr-doc-border-radius-default;
    margin-bottom: $space-1-x;
  }

  .cdr-doc-html-example-list__item {
    align-items: center;
    border-bottom: $cdr-doc-border-separator;
    display: flex;
    justify-content: center;
    padding: $inset-2-x;
    position: relative;

    &:last-child {
      border-bottom: 0;
    }

    &:first-child {
      border-radius: $cdr-doc-border-radius-default $cdr-doc-border-radius-default 0 0;
    }
  }

  .cdr-doc-html-example-list--not-interactive .cdr-doc-html-example-list__item-example {
    pointer-events: none; // prevent interaction
  }

  .cdr-doc-html-example-list__item-background--light {
    background: $clean-slate;
  }

  .cdr-doc-html-example-list__item-background--dark {
    background: $lost-in-space;
  }

  .cdr-doc-html-example-list__code {
    display: none;
  }

  .cdr-doc-html-example-list__item-label {
    @include redwood-display-10;
    bottom: $space-half-x;
    position: absolute;
    right: $space-half-x;

    .cdr-doc-html-example-list__item-background--dark & {
      color: $clean-slate;
    }
  }

  .cdr-doc-html-example-list__item-background-toggle {
    display: flex;
    position: absolute;
    right: $space-half-x;
    top: $space-half-x;
  }

  .cdr-doc-item-background-toggle__button {
    @include redwood-display-20;
    background-color: $clean-slate;
    border: solid 1px $holy-smoke;
    border-right-width: 0;
    cursor: pointer;
    padding: $space-half-x;
    padding-bottom: $space-half-x-squish;
    padding-top: $space-half-x-squish;

    &:first-child {
      border-radius: $cdr-doc-border-radius-default 0 0 $cdr-doc-border-radius-default;
    }
    
    &:last-child {
      border-radius: 0 $cdr-doc-border-radius-default $cdr-doc-border-radius-default 0;
      border-right-width: 1px;
    }
  }
  
  .cdr-doc-item-background-toggle__button--active {
    background: $partly-cloudy;
  }

  .cdr-doc-item-background-toggle__input {
    position: absolute !important;
    height: 1px; width: 1px; 
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
  }
</style>
