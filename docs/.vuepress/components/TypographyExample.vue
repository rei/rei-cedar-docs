<template>
  <div class="typography-example">
    <span :style="mixinStyles">A different kind of company</span>
  </div>
</template>

<script>
import tokens from '@rei/cdr-tokens/dist/json/web.json';
import camelCase from 'lodash/camelCase';
import groupBy from 'lodash/groupBy';
import filter from 'lodash/filter';
import has from 'lodash/has';
import mapKeys from 'lodash/mapKeys';

export default {
  name: 'TypographyExample',
  props: {
    name: String,
  },
  data() {
    return {
      tokens
    };
  },
  computed: {
    mixinTokens() {
      const res = filter(this.tokens.text, (o) => {
        return has(o, 'mixin');
      });

      const grouped = groupBy(res, 'mixin');

      return mapKeys(grouped, (v, k) => camelCase(k));
    },
    mixin() {
      const camelName = camelCase(this.name);
      return this.mixinTokens[camelName];
    },
    mixinStyles() {
      let final = {};
      this.mixin.forEach(o => {
        final[o.property]= o.value;
      })
      return final;
    }
  }
}
</script>

<style lang="scss">
@import '~@rei/cdr-tokens/dist/scss/cdr-tokens';

.typography-example {
  background-color: $cdr-color-background-lightest;
}
</style>
