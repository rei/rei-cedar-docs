<template>
  <div class="cdr-doc-color-swatch-grid">
    <cdr-doc-color-swatch v-for="name in tokenNames" :token-name="name" :key="name"></cdr-doc-color-swatch>
    <div class="cdr-doc-color-swatch-grid-dummy"></div>
    <div class="cdr-doc-color-swatch-grid-dummy"></div>
  </div>
</template>

<script>
import '@rei/cdr-tokens/dist/raw-tokens.json';
import CdrDocColorSwatch from './cdr-doc-color-swatch.vue';

export default {
  name: 'CdrDocColorSwatchGrid',
  props: {
    tokenNames: {
      type: Array,
      default: () => {
        return ['center-of-attention', 'golden-face'];
      }
    }
  },
  components: {
    CdrDocColorSwatch
  }
}
</script>

<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';

  .cdr-doc-color-swatch-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .cdr-doc-color-swatch,
  .cdr-doc-color-swatch-grid-dummy {
    max-width: 260px;
    flex: 0 0 260px;
  }
</style>
