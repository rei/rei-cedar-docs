<template>
  <div class="cdr-doc-code-snippet" v-bind:class="{ 'cdr-doc-code-snippet--show-copied-notification': copied }">
    <div class="cdr-doc-code-snippet__actions" v-if="copyButton">
      <div class="cdr-doc-code-snippet__copy-action" v-on:click="copyToClipBoard">
        <div class="cdr-doc__copy-action-icon"></div>
        <div class="cdr-doc-code-snippet__notification">
          <span class="cdr-doc-code-snippet__notification-message">
            Copied!
          </span>
          <span class="cdr-doc-code-snippet__notification-message" v-show="copyError">
            Could not copy to clipboard.
          </span>
          <span class="cdr-doc-code-snippet__notification-message" v-show="copyNotSupported">
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
      setTimeout(() => {
        this.copied = false;
      }, 2000);
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
  @import '../../../node_modules/@rei/cdr-button/dist/cdr-button.css';
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
    padding: $inset-1-x;
  }

  .cdr-doc-code-snippet__code-wrap div[class^='language-'] {
    background: $cdr-doc-background-color-default;
    color: $cdr-doc-text-color-secondary;
    max-height: 200px;
    max-width: 100%;
    overflow: auto;

    .cdr-doc-code-snippet__actions + & {
      border-radius: 0 0 $cdr-doc-border-radius-default $cdr-doc-border-radius-default;
    }
  }

  .cdr-doc-code-snippet__copy-action {
    position: relative;
  }

  $cdr-doc-code-snippet-icon-color: $taken-for-granite;
  $cdr-doc-code-snippet-copied-notification-background-color: rgba(0,0,0,0.8);
  $cdr-doc-code-snippet-copied-notification-caret-size: 8px;
  .cdr-doc-code-snippet__notification {
    background: $cdr-doc-code-snippet-copied-notification-background-color;
    border-radius: $cdr-doc-border-radius-default;
    bottom: -30px;
    color: $clean-slate;
    font-size: 14px;
    left: 50%;
    opacity: 0;
    padding: $inset-1-x-squish;
    position: absolute;
    text-align: center;
    transition: .4s;
    transform: translateX(-50%);
    visibility: hidden;
    z-index: 100;

    .cdr-doc-code-snippet--show-copied-notification & {
      bottom: -50px;
      opacity: 1;
      transition: .4s;
      visibility: visible;
    }

    &:before {
      border-color: transparent transparent $cdr-doc-code-snippet-copied-notification-background-color transparent;
      border-style: solid;
      border-width: $cdr-doc-code-snippet-copied-notification-caret-size;
      content: '';
      left: 50%;
      position: absolute;
      top: -($cdr-doc-code-snippet-copied-notification-caret-size * 2);
      transform: translateX(-50%);
    }
  }

  .cdr-doc__copy-action-icon {
    background-color: $cdr-doc-code-snippet-icon-color;
    cursor: pointer;
    height: 18px;
    width: 18px;
  }
</style>
