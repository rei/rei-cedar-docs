<template>
  <div class="cdr-doc-color-swatch">
    <div class="cdr-doc-color-swatch__sample" :style="{ backgroundColor: hex }">
    </div>
    <span
      v-if="showNames"
      class="cdr-doc-color-swatch__token-name">
      ${{ tokenName }}
    </span>
    <div class="cdr-doc-color-swatch__values">
      <span class="cdr-doc-color-swatch__hex">
        {{ hex }}
      </span>
      <span class="cdr-doc-color-swatch__rgb">
        <span class="cdr-doc-color-swatch__rgb-part">
          r{{ rgb.r }}
        </span>
        <span class="cdr-doc-color-swatch__rgb-part">
          g{{ rgb.g }}
        </span>
        <span class="cdr-doc-color-swatch__rgb-part">
          b{{ rgb.b }}
        </span>
      </span>
    </div>
  </div>
</template>

<script>
// import tokens from '@rei/cdr-tokens/dist/raw-tokens.json';
export default {
  name: 'CdrDocColorSwatch',
  props: {
    tokenName: {
      type: String,
      default: '$clean-slate',
    },
    showNames: {
      type: Boolean,
      default: true,
    }
  },
  computed: {
    tokenData() {
      return tokens.foundations.find((t) => {
        return t.name === this.tokenName;
      })
    },
    hex() {
      return this.tokenData.value;
    },
    rgb() {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.hex);
      return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
      } : null;
    }
  }
}
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';

  .cdr-doc-color-swatch {
    @include redwood-display-20;
    margin-bottom: $cdr-space-two-x;
  }

  .cdr-doc-color-swatch__sample {
    border: $cdr-doc-border-separator;
    border-radius: $cdr-doc-border-radius-default;
    height: 30px;
    margin-bottom: $cdr-space-half-x;
  }

  .cdr-doc-color-swatch__token-name {
    color: $cdr-doc-text-color-primary;
    font-weight: 600;
    margin-bottom: $cdr-space-half-x;
  }

  .cdr-doc-color-swatch__values {
    color: $cdr-doc-text-color-secondary;
  }

  .cdr-doc-color-swatch__hex {
    margin-right: $cdr-space-one-x;
    text-transform: uppercase;
  }
</style>
