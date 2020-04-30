<template>
  <div class="cdr-doc-example-code-pair" :class="{'cdr-doc-example-code-pair--not-interactive': !interactive }">
    <div class="cdr-doc-example-code-pair__item"
          :class="'cdr-doc-example-code-pair__item-background--' + backgroundToggleStates[slotLabel]"
          v-for="slotContent, slotLabel in $slots">
      <div class="cdr-doc-example-code-pair__item-background-toggle" v-if="backgroundToggle">
        <label
          class="cdr-doc-item-background-toggle__button"
          :class="{'cdr-doc-item-background-toggle__button--active': backgroundToggleStates[slotLabel] === 'primary'}"
        >
          <input
            class="cdr-doc-item-background-toggle__input"
            type="radio"
            value="primary"
            v-model="backgroundToggleStates[slotLabel]">
            Primary
        </label>
        <label
          class="cdr-doc-item-background-toggle__button"
          :class="{'cdr-doc-item-background-toggle__button--active': backgroundToggleStates[slotLabel] === 'secondary'}"
        >
          <input
            class="cdr-doc-item-background-toggle__input"
            type="radio"
            value="secondary"
            v-model="backgroundToggleStates[slotLabel]">
          Secondary
        </label>
      </div>
      <span
        class="cdr-doc-example-code-pair__item-label"
        v-if="(exampleCount > 1 && showExampleLabels) ||
              label">
        {{ label || slotLabel }}
      </span>
      <div class="cdr-doc-example-code-pair__item-example">
        <!-- Will be replaced with the compiled template code on mount -->
        <component :is="`cdr-doc-html-example-${slotLabel}-${instanceId}`" />
      </div>
    </div>

    <cdr-doc-code-snippet :copy-button="copyButton" :line-numbers="lineNumbers" :max-height="codeMaxHeight" :repository-href="repositoryHref" :sandbox-href="sandboxHref" :sandbox-data="Object.assign({}, sandboxData, {code: sandboxCode, loadSprite})" :model="model" :code-toggle="codeToggle" :hide-code="hideCode">
      <slot :name="slotNames[0]"/> <!-- Only display the code snippet for the first (or only) slot content -->
    </cdr-doc-code-snippet>
  </div>
</template>

<script>
  import Vue from '$vue';
  // Note the '$vue', which is the full build of Vue, not the default runtime 'vue'. We need to import the full build to have access to the compiler

  // Import components that will be shown as examples
  import { IconInformationStroke } from '@rei/cedar';

  export default {
    name: 'CdrDocExampleCodePair',
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
      },
      copyButton: {
        default: true,
        type: Boolean
      },
      lineNumbers: {
        default: true,
        type: Boolean
      },
      codeMaxHeight: {
        default: false,
        type: Boolean
      },
      repositoryHref: {
        default: false,
        type: [String, Boolean]
      },
      sandboxHref: {
        default: false,
        type: [String, Boolean]
      },
      sandboxData: {
        default: false,
        type: [Object, Boolean]
      },
      sandboxTitle: {
        default: false,
        type: [String, Boolean]
      },
      loadSprite: {
        default: false,
        type: Boolean
      },
      codeToggle: {
        default: true,
        type: Boolean
      },
      hideCode: {
        default: true,
        type: Boolean
      },
      model: {
        type: Object,
        default: () => {}
      },
    },
    data() {
      return {
        exampleCount: 0,
        backgroundToggleStates: {},
        templateSources: {},
        slotNames: []
      }
    },
    computed: {
      instanceId() {
        return this._uid;
      },
      sandboxCode() {
        return this.slotNames.map(label => this.templateSources[label]).join('\n<br>\n')
      }
    },
    beforeMount() {
      // Loop over all the slots and set the default background color for each example. Also create an array of all the slot names so that just the first slot's code can be displayed
      for (const label in this.$slots) {
        if (this.backgroundColors[label]) {
          this.$set(this.backgroundToggleStates, label, this.backgroundColors[label]);
        } else {
          this.$set(this.backgroundToggleStates, label, this.backgroundColor);
        }
      }
      this.slotNames = Object.keys(this.$slots);
      this.exampleCount = Object.keys(this.$slots).length; // If more than one example is present, labels will be turned on by default
      // Loop over all the slots and extract the source HTML/Custom Element code from the escaped markdown code snippet. This code is saved as a Vue template string that is then rendered into a dynamically created empty div in the template
      for (const label in this.$slots) {
        const codeNode = this.extractCodeNodeFromVnodeTree(this.$slots[label][0]);
        const templateSource = this.getStoredTemplateSourceForExample(label, codeNode);
        const m = this.model
        this.$options.components[`cdr-doc-html-example-${label}-${this.instanceId}`] = { data() { return {...m} }, ...Vue.compile(`<div>${templateSource}</div>`) };
      }
    },
    methods: {
      getStoredTemplateSourceForExample(label, codeNode) {
        // This method checks a data object to see if the vue template has already been stored as a string for subsequent renders
        let templateSource = this.templateSources[label]
        if (!templateSource) {
          // If the template hasn't already been stored, it is extracted from the VNode tree that's passed in and stored in a data object
          templateSource = this.extractTextFromVnode(codeNode, '');
          this.templateSources[label] = templateSource;
        }
        return templateSource;
      },
      extractTextFromVnode(vNode, text) {
        // This method traverses a vNode tree extracting all the textContent from within the vNode
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
        // This method traverses a vNode tree until it gets to a <code> tag in the tree, at which point the <code> vNode is returned
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
    }
  }
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';

  .cdr-doc-example-code-pair {
    border: $cdr-doc-border-separator;
    border-radius: $cdr-doc-border-radius-default;
    margin-bottom: $cdr-space-one-x;

    // code snippet style overrides for composite component
    .cdr-doc-code-snippet {
      border: 0;
      margin-bottom: 0;
    }

    .cdr-doc-code-snippet__actions {
      border: 0;
      border-radius: 0;
    }

    div[class^='language-'] {
      border-bottom: 0;
      border-left: 0;
      border-right: 0;
    }

    &__item-example {
      width: 100%;
      margin-top: 15px; // prevents full-width components from displaying on top of background toggle
    }

    /* This is to overrule broad table styles needed for Markdown */
    table:not([class*="cdr-table"]) {
      width: auto;

      tr {
        background-color: transparent;
      }
    }
  }

  .cdr-doc-example-code-pair__item {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: $cdr-space-inset-two-x;
    position: relative;

    &:last-child {
      border-bottom: 0;
    }

    &:first-child {
      border-radius: $cdr-doc-border-radius-default $cdr-doc-border-radius-default 0 0;
    }
  }


  .cdr-doc-example-code-pair--not-interactive .cdr-doc-example-code-pair__item-example {
    pointer-events: none; // prevent interaction
  }

  .cdr-doc-example-code-pair__item-background--primary {
    background: $cdr-color-background-primary;
  }

  .cdr-doc-example-code-pair__item-background--secondary {
    background: $cdr-color-background-secondary;
  }

  .cdr-doc-example-code-pair__code {
    display: none;
  }

  .cdr-doc-example-code-pair__item-label {
    @include cdr-text-utility-sans-100;
    bottom: $cdr-space-half-x;
    position: absolute;
    right: $cdr-space-half-x;
  }

  .cdr-doc-example-code-pair__item-background-toggle {
    display: flex;
    position: absolute;
    right: $cdr-space-half-x;
    top: $cdr-space-half-x;
  }

  .cdr-doc-item-background-toggle__button {
    @include cdr-text-utility-sans-200;
    background-color: $cdr-color-background-primary;
    border: solid 1px $cdr-color-border-primary;
    border-right-width: 0;
    cursor: pointer;
    padding: $cdr-space-half-x;
    padding-bottom: $cdr-space-inset-half-x-squish-top-bottom;
    padding-top: $cdr-space-inset-half-x-squish-top-bottom;

    &:first-child {
      border-radius: $cdr-doc-border-radius-default 0 0 $cdr-doc-border-radius-default;
    }

    &:last-child {
      border-radius: 0 $cdr-doc-border-radius-default $cdr-doc-border-radius-default 0;
      border-right-width: 1px;
    }
  }

  .cdr-doc-item-background-toggle__button--active {
    background: $cdr-color-border-primary;
  }

  .cdr-doc-item-background-toggle__input {
    position: absolute !important;
    height: 1px; width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
  }
</style>
