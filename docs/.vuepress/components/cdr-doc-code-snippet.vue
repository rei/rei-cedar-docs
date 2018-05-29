<template>
  <div class="cdr-doc-code-snippet" v-bind:class="{ 'cdr-doc-code-snippet--show-copied-notification': copied }">
    <div class="cdr-doc-code-snippet__actions" v-if="copyButton">
      <div class="cdr-doc-code-snippet__copy-action" v-on:click="copyToClipBoard">
        <cdr-button class="cdr-doc-code-snippet__copy-action">Copy To Clipboard</cdr-button>
        <div class="cdr-doc-code-snippet__notification" v-if="copied || copyError || copyNotSupported">
          <span class="cdr-doc-code-snippet__notification-message" v-if="copied">
            Copied!
          </span>
          <span class="cdr-doc-code-snippet__notification-message" v-if="copyError">
            Could not copy to clipboard.
          </span>
          <span class="cdr-doc-code-snippet__notification-message" v-if="copyNotSupported">
            This browser does not support automatic copying to clipboard.
          </span>
        </div>
      </div>
    </div>
    <div class="cdr-doc-code-snippet__code-wrap" ref="codeWrap">
      <div class="cdr-doc-code-snippet__code" ref="source"><slot/></div>
    </div>
  </div>
</template>

<script>
import { CdrButton } from '@rei/cdr-button';

export default {
  name: 'CdrDocCodeSnippet',
  components: { CdrButton },
  props: {
    copyButton: {
      default: true,
      type: Boolean
    }
  },
  data: function() {
    return {
      copied: false,
      copyError: false,
      copyNotSupported: false
    }
  },

  methods: {
    copyToClipBoard() {
      const source = this.$refs.source.querySelector('code');

      let textarea = document.createElement('textarea');
      textarea.style.height = '0';
      textarea.style.width = '0';
      textarea.style.position = 'absolute';
      textarea.style.left = '-99999px';
      this.$refs.codeWrap.appendChild(textarea);

      textarea.textContent = source.textContent;
      textarea.select();

      try {
        var successful = document.execCommand('copy');
        if (successful) {
          this.triggerCopySuccess();
        } else {
          this.triggerCopyError();
        }
      } catch (err) {
          // Copy to clipboard not supported in this browser
          this.triggerCopyNotSupported();
      }

      this.$refs.codeWrap.removeChild(textarea);
    },
    triggerCopySuccess() {
      this.copied = true;
      this.copyError = false;
      this.copyNotSupported = false;
    },
    triggerCopyError() {
      this.copied = false;
      this.copyError = true;
      this.copyNotSupported = false;
    },
    triggerCopyNotSupported() { 
      this.copied = false;
      this.copyError = false;
      this.copyNotSupported = true;
    }
  }
}
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';
  $cdr-doc-code-snippet-actions-background-color: $ice-age;

  .cdr-doc-code-snippet {
    margin-bottom: $space-1-x;
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

  .cdr-doc-code-snippet__code-wrap div[class^='language-'] {
    background: $cdr-doc-background-color-default;
    // border: $cdr-doc-border-separator;
    // border-radius: $cdr-doc-border-radius-default;
    color: $cdr-doc-text-color-secondary;
    // font-family: 'Roboto Mono', monospace;
    // font-size: 14px;
    // line-height: 1.4;
    // padding: $inset-1-x;
    max-width: 100%;
    overflow-x: auto;

    .cdr-doc-code-snippet__actions + & {
      border-radius: 0 0 $cdr-doc-border-radius-default $cdr-doc-border-radius-default;
    }
  }

  .cdr-doc-code-snippet__copy-action {
    position: relative;
  }

  .cdr-doc-code-snippet__notification {
    background: rgba(0,0,0,0.8);
    border-radius: $cdr-doc-border-radius-default;
    bottom: 50%;
    color: $clean-slate;
    font-size: 14px;
    left: 50%;
    opacity: 0;
    padding: $inset-half-x-squish;
    position: absolute;
    text-align: center;
    transition: .4s;
    transform: translateX(-50%);
    visibility: hidden;
    z-index: 100;

    .cdr-doc-code-snippet--show-copied-notification & {
      bottom: 100%;
      opacity: 1;
      transition: .4s;
      visibility: visible;
    }
  }  
</style>
