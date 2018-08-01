
<!-- TODO: Add tooltips on hover for copy to clipboard, github, and code sandbox links -->
<template>
  <div class="cdr-doc-code-snippet" :class="{ 
    'cdr-doc-code-snippet--show-copied-notification': copied, 
    'cdr-doc-code-snippet--no-line-numbers': !lineNumbers,
    'cdr-doc-code-snippet--code-hidden': codeHidden,
    'cdr-doc-code-snippet--no-max-height': !maxHeight }">
    <div class="cdr-doc-code-snippet__actions" v-if="copyButton">
      <div class="cdr-doc-code-snippet__copy-action cdr-doc-code-snippet__action" v-on:click="copyToClipBoard">
        <button class="cdr-doc-code-snippet__copy-action">
          <img class="cdr-doc-code-snippet__action-icon" :src="$withBase(`/Copy@2x.png`)" alt="Copy to clipboard"/>
        </button>
        <span class="cdr-doc-code-snippet__tooltip cdr-doc-code-snippet__tooltip--show-on-hover">
          Copy to clipboard
        </span>
        <span class="cdr-doc-code-snippet__tooltip cdr-doc-code-snippet__tooltip--copied-notification" aria-live="polite">
          <span class="cdr-doc-code-snippet__tooltip-message" v-if="copied">
            Copied!
          </span>
          <span class="cdr-doc-code-snippet__tooltip-message" v-if="copyError">
            Could not copy to clipboard.
          </span>
          <span class="cdr-doc-code-snippet__tooltip-message" v-if="copyNotSupported">
            This browser does not support automatic copying to clipboard.
          </span>
        </span>
      </div>
      <a class="cdr-doc-code-snippet__action" :href="repositoryHref" target="_blank" rel="noopener noreferrer" v-if="repositoryHref">
        <img class="cdr-doc-code-snippet__action-icon" :src="$withBase(`/GitHub@2x.png`)" alt="View source in repository"/>
        <span class="cdr-doc-code-snippet__tooltip cdr-doc-code-snippet__tooltip--show-on-hover">
          View in repository
        </span>
      </a>
      <a class="cdr-doc-code-snippet__action" :href="sandboxHref" target="_blank" rel="noopener noreferrer" v-if="sandboxHref">
        <img class="cdr-doc-code-snippet__action-icon" :src="$withBase(`/CodeSandbox@2x.png`)" alt="View in code sandbox"/>
        <span class="cdr-doc-code-snippet__tooltip cdr-doc-code-snippet__tooltip--show-on-hover">
          View in sandbox
        </span>
      </a>

      <button class="cdr-doc-snippet__hide-code-toggle" v-on:click="toggleCodeDisplay" v-if="codeToggle">{{ hideCodeToggleText }}</button>
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
    },
    codeToggle: {
      default: false,
      type: Boolean
    },
    hideCode: {
      default: false,
      type: Boolean
    }
  },
  data: function() {
    return {
      copied: false,
      copyError: false,
      copyNotSupported: false,
      codeHidden: false,
      hideCodeToggleText: 'Hide code'
    }
  },
  created: function() {
    this.codeHidden = this.hideCode;
    this.setCodeToggleText();
  },
  methods: {
    setCodeToggleText() {
      this.hideCodeToggleText = this.codeHidden ? 'Show code' : 'Hide code';
    },
    toggleCodeDisplay() {
      this.codeHidden = !this.codeHidden;
      this.setCodeToggleText();
    },
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
  $cdr-doc-code-snippet-actions-background-color: $moon-shot;

  .cdr-doc-code-snippet {
    margin-bottom: $space-1-x;
    // max-width: 100%;
    width: 100%;
  }

  .cdr-doc-code-snippet__actions {
    align-items: center;
    background-color: $cdr-doc-code-snippet-actions-background-color;
    border: $cdr-doc-border-separator;
    border-bottom: 0;
    border-radius: $cdr-doc-border-radius-default $cdr-doc-border-radius-default 0 0;
    display: flex;
    padding: $space-three-quarter-x $inset-1-x;

    .cdr-doc-code-snippet--code-hidden & {
      border-radius: $cdr-doc-border-radius-default;
    }

    img {
      margin: 0 !important;
    }
  }

  .cdr-doc-code-snippet--code-hidden .cdr-doc-code-snippet__code-wrap {
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

  .cdr-doc-code-snippet__copy-action {
    background: none;
    border: 0;
    display: block;
    margin: 0;
    padding: 0;
    position: relative;
  }

  $cdr-doc-code-snippet-icon-color: $taken-for-granite;
  $cdr-doc-code-snippet-tooltip-background-color: rgba(0,0,0,0.8);
  $cdr-doc-code-snippet-tooltip-caret-size: 8px;

  @mixin cdr-doc-reveal-tooltip {
    top: calc(100% + #{$cdr-doc-code-snippet-tooltip-caret-size});
    opacity: 1;
    transition: .4s .5s;
    visibility: visible;
  }
  .cdr-doc-code-snippet__tooltip {
    background: $cdr-doc-code-snippet-tooltip-background-color;
    border-radius: $cdr-doc-border-radius-default;
    color: $clean-slate;
    font-size: 14px;
    left: 50%;
    opacity: 0;
    padding: $inset-1-x-squish;
    pointer-events: none;
    position: absolute;
    text-align: center;
    top: 50%;
    transition: .4s 0s;
    transform: translateX(-50%);
    visibility: hidden;
    z-index: 100;


    &:before {
      border-color: transparent transparent $cdr-doc-code-snippet-tooltip-background-color transparent;
      border-style: solid;
      border-width: $cdr-doc-code-snippet-tooltip-caret-size;
      content: '';
      left: 50%;
      position: absolute;
      top: -($cdr-doc-code-snippet-tooltip-caret-size * 2);
      transform: translateX(-50%);
    }
  }

  .cdr-doc-code-snippet__action:hover .cdr-doc-code-snippet__tooltip--show-on-hover {
    @include cdr-doc-reveal-tooltip;

    .cdr-doc-code-snippet--show-copied-notification & {
      display: none;
    }
  }

  .cdr-doc-code-snippet__tooltip--copied-notification {
    transition: .4s 0s;

    .cdr-doc-code-snippet--show-copied-notification & {
      @include cdr-doc-reveal-tooltip;
      transition: .4s 0s;
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
    position: relative;
  }

  .cdr-doc-snippet__hide-code-toggle {
    @include redwood-display-20;
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
