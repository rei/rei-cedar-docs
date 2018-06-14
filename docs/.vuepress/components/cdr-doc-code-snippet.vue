<template>
  <div class="cdr-doc-code-snippet" :class="{ 'cdr-doc-code-snippet--show-copied-notification': copied, 'cdr-doc-code-snippet--no-line-numbers': !lineNumbers,
    'cdr-doc-code-snippet--no-max-height': !maxHeight }">
    <div class="cdr-doc-code-snippet__actions" v-if="copyButton">
      <div class="cdr-doc-code-snippet__copy-action cdr-doc-code-snippet__action" v-on:click="copyToClipBoard">
        <button class="cdr-doc-code-snippet__copy-action">
          <img class="cdr-doc-code-snippet__action-icon" :src="$withBase('/Copy@2x.png')" alt="Copy to clipboard"/>
        </button>
        <div class="cdr-doc-code-snippet__notification" aria-live="polite">
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
      <a class="cdr-doc-code-snippet__action" :href="repositoryHref" v-if="repositoryHref">
        <img class="cdr-doc-code-snippet__action-icon" :src="$withBase('/Github@2x.png')" alt="View source in repository"/>
      </a>
      <a class="cdr-doc-code-snippet__action" :href="sandboxHref" v-if="sandboxHref">
        <img class="cdr-doc-code-snippet__action-icon" :src="$withBase('/CodeSandbox@2x.png')" alt="View in code sandbox"/>
      </a>
    </div>
    <div class="cdr-doc-code-snippet__code-wrap" ref="codeWrap">
      <div class="cdr-doc-code-snippet__code" ref="source"><slot/></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CdrDocCodeSnippet',
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
    sandboxHref: {
      default: false,
      type: [String, Boolean]
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
      textarea.tabIndex = -1;
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
  $cdr-doc-code-snippet-actions-background-color: $ice-age;

  .cdr-doc-code-snippet {
    margin-bottom: $space-1-x;
    max-width: 100%;
  }

  .cdr-doc-code-snippet__actions {
    align-items: center;
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

  .cdr-doc-code-snippet__copy-action {
    background: none;
    border: 0;
    display: block;
    margin: 0;
    padding: 0;
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

  .cdr-doc-code-snippet__action-icon {
    cursor: pointer;
    display: block;
    height: 22px;
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
    margin-right: $space-1-x;
  }
</style>
