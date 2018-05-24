<template>
  <div class="cdr-doc-code-snippet">
    <div class="cdr-doc-code-snippet__actions" v-if="copyButton">
      <button class="cdr-doc-code-snippet__copy-action">Copy To Clipboard</button>
    </div>
    <div class="cdr-doc-code-snippet__code" ref="source">
      <slot/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CdrDocCodeSnippet',
  components: {
  },
  props: {
    copyButton: {
      default: true,
      type: Boolean
    }
  },
  mounted: function() {
    var Prism = require('prismjs');
    console.log(this.$refs.source);
    const codeElement = this.$refs.source.querySelector('code');
    const code = codeElement.innerHTML;
    const highlightedCode = Prism.highlight(code, Prism.languages.html, 'html');
    codeElement.innerHTML = highlightedCode;
  }
}
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';
  $cdr-doc-code-snippet-actions-background-color: $ice-age;

  .cdr-doc-code-snippet {
    margin-bottom: $space-1-x;
    overflow: hidden;
    max-width: 100%;
  }

  .cdr-doc-code-snippet__actions {
    background-color: $cdr-doc-code-snippet-actions-background-color;
    border: $cdr-doc-border-separator;
    border-bottom: 0;
    border-radius: $cdr-doc-border-radius-default $cdr-doc-border-radius-default 0 0;
    display: flex;
    padding: $inset-half-x;
  }

  .cdr-doc-code-snippet__copy-action {
    margin-left: auto;
  }

  .cdr-doc-code-snippet__code {
    background: $cdr-doc-background-color-default;
    border: $cdr-doc-border-separator;
    border-radius: $cdr-doc-border-radius-default;
    color: $cdr-doc-text-color-secondary;
    font-family: 'Roboto Mono', monospace;
    font-size: 14px;
    padding: $inset-1-x;
    max-width: 100%;
    overflow-x: auto;

    .cdr-doc-code-snippet__actions + & {
      border-radius: 0 0 $cdr-doc-border-radius-default $cdr-doc-border-radius-default;
    }

    // Prism overrides
    .token {      
      &.property,
      .tag {
          color: #6C966A;
      }

      &.selector,
      .attr-name {
          color: #C48648;
      }

      .attr-value {
          color: $cdr-doc-text-color-primary;
      }

      .punctuation {
          color: $cdr-doc-text-color-primary;
      }
    }
  }
</style>
