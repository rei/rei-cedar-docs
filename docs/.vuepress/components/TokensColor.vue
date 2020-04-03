<template>
<div v-if="hasContent">
  <slot />
  <cdr-table>
    <tbody>
      <template
        v-for="token in colorTokensByType"
        v-if="token.attributes.deprecated !== true"
      >
        <token-type-color
          :prop="token"
          description
        />
      </template>
    </tbody>
  </cdr-table>
</div>
</template>

<script>
import tokenData from '@rei/cdr-tokens/dist/json/platform-tokens.json';
import TokenTypeColor from './TokenTypeColor';
import groupBy from 'lodash/groupBy';
import filter from 'lodash/filter';
import endsWith from 'lodash/endsWith';

export default {
  name: 'TokensColor',
  components: {
    TokenTypeColor,
  },
  props: {
    type: String,
    mode: {
      type: String,
      default: '',
    }
  },
  computed: {
    hasContent() {
      return this.colorTokensByType.length !== 0;
    },
    colorTokensByType() {
      const allColors = [];
      Object.keys(tokenData).forEach((key) => {
        allColors.push(...tokenData[key].colors)
      });
      // filter out deprecated tokens
      const filtered = filter(allColors, ['attributes.deprecated', false]);
      const byType = groupBy(filtered, 'docs.type');

      if (this.mode !== '') {
        return filter(byType[this.type], o => endsWith(o.name, `${this.mode}mode`));
      }

      return byType[this.type];
    },
  },
};
</script>

<style>
  .color-example {
    margin: 0 auto;
    border: 1px solid gray;
    border-radius: 2px;
    height: 48px;
    width: 48px;
  }
</style>