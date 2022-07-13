<template>
  <div class="cdr-doc-code-snippet" :class="{
    'cdr-doc-code-snippet--no-line-numbers': !lineNumbers,
    'cdr-doc-code-snippet--code-hidden': codeHidden,
    'cdr-doc-code-snippet--no-max-height': !maxHeight }">
    <div class="cdr-doc-code-snippet__actions" v-if="copyButton">
      <div class="cdr-doc-code-snippet__action-wrapper">
        <cdr-link modifier="standalone" class="cdr-doc-code-snippet__action" :href="repositoryHref" target="_blank" rel="noopener noreferrer" v-if="repositoryHref">
          <cdr-icon class="cdr-doc-code-snippet__action-icon" title="An outline caricature of a cat" use="#brand-github"/>
          View on GitHub
        </cdr-link>
      </div>
      <div class="cdr-doc-code-snippet__action-wrapper" v-if="sandboxHrefComputed">
        <cdr-link modifier="standalone" class="cdr-doc-code-snippet__action" :href="sandboxHrefComputed" target="_blank" rel="noopener noreferrer">
          <cdr-icon class="cdr-doc-code-snippet__action-icon" title="A hollow box with a small solid box in each box panel" use="#brand-code-sandbox"/>
          View on CodeSandbox
        </cdr-link>
      </div>

      <button class="cdr-doc-snippet__hide-code-toggle" v-on:click="toggleCodeDisplay" v-if="codeToggle">{{ hideCodeToggleText }}</button>
    </div>
    <div class="cdr-doc-code-snippet__code-wrap" ref="codeWrap">
      <div class="cdr-doc-code-snippet__code" ref="source"><slot/></div>
    </div>
  </div>
</template>

<script>
import { CdrLink } from '@rei/cedar';
import buildSandbox from '../../../utils/buildSandbox';

export default {
  name: 'CdrDocCodeSnippet',
  components: {
    CdrLink
  },
  props: {
    copyButton: {
      default: true,
      type: Boolean
    },
    lineNumbers: {
      default: true,
      type: Boolean
    },
    maxHeight: {
      default: true,
      type: Boolean
    },
    repositoryHref: {
      default: false,
      type: [String, Boolean]
    },
    sandboxData: {
      default: false,
      type: [Object, Boolean]
    },
    sandboxHref: {
      default: false,
      type: [String, Boolean]
    },
    codeToggle: {
      default: false,
      type: Boolean
    },
    hideCode: {
      default: false,
      type: Boolean
    },
    model: {
      type: Object,
      default: () => {}
    },
    computed: {
      type: Object,
      default: () => {}
    },
    methods: {
      type: Object,
      default: () => {}
    },
  },
  data: function() {
    return {
      codeHidden: false,
      hideCodeToggleText: 'Hide code',
      sandboxCode: {},
    }
  },
  created: function() {
    this.codeHidden = this.hideCode;
    this.setCodeToggleText();
  },
  mounted() {
    this.sandboxCode = {
      code: this.$refs.source.querySelector('code').textContent,
    }
  },
  computed: {
    sandboxHrefComputed() {
      return this.sandboxHref || buildSandbox(Object.assign({}, this.sandboxCode, this.sandboxData), this.model, this.computed, this.methods);
    }
  },
  methods: {
    setCodeToggleText() {
      this.hideCodeToggleText = this.codeHidden ? 'Show code' : 'Hide code';
    },
    toggleCodeDisplay() {
      this.codeHidden = !this.codeHidden;
      this.setCodeToggleText();
    },
  }
}
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';

  .cdr-doc-code-snippet {
    margin-bottom: $cdr-space-one-x;
    // max-width: 100%;
    width: 100%;
  }

  .cdr-doc-code-snippet__actions {
    align-items: center;
    background-color: $cdr-color-background-secondary;
    border: none;
    display: flex;
    padding: $cdr-space-three-quarter-x $cdr-space-inset-one-x;

    .cdr-doc-code-snippet--code-hidden & {
      border-radius: $cdr-doc-border-radius-default;
    }

    img {
      margin: 0 !important;
    }
  }

  .cdr-doc-code-snippet--code-hidden .cdr-doc-code-snippet__code-wrap{
    display: none;
  }

  .cdr-doc-code-snippet__code-wrap {
    width: 100%;
  }

  .cdr-doc-code-snippet__code-wrap div[class^='language-'] {
    background: $cdr-doc-background-color-default;
    color: $cdr-doc-text-color-secondary;
    max-height: 140px;
    max-width: 100%;
    overflow: auto;

    .cdr-doc-code-snippet--no-max-height & {
      max-height: none;
    }

    .cdr-doc-code-snippet__actions + & {
      border-radius: 0 0 $cdr-doc-border-radius-default $cdr-doc-border-radius-default;
    }
  }

  .cdr-doc-code-snippet__action-wrapper {
    position: relative;
    margin-right: $cdr-space-one-x;
    a {
      color: $cdr-doc-text-color-primary;
    }
  }

  .cdr-doc-code-snippet__action-icon {
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
  }

  .cdr-doc-code-snippet--no-line-numbers {
    .line-numbers-wrapper {
      display: none;
    }

    div[class^='language-'] pre {
      padding-left: 0;
    }
  }

  .cdr-doc-code-snippet__action {
    display: block;
    position: relative;
  }

  .cdr-doc-snippet__hide-code-toggle {
    @include cdr-text-utility-sans-200;
    border: 0;
    background: none;
    color: $cdr-doc-text-color-primary;
    cursor: pointer;
    display: block;
    margin: 0;
    margin-left: auto;
    padding: 0;

    &:active {
      color: $cdr-doc-text-color-primary;
    }
  }
</style>
