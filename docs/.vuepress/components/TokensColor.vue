<template>
<div>
  <template
    v-for="(tokens, type) in colorTokensByType"
  >
    <cdr-text
      tag="h2"
    >{{ makeCapital(type) }} Color Tokens</cdr-text>
    <cdr-table striped>
      <tbody>
        <template v-for="token in tokens">
          <token-type-color
            :prop="token"
            description
          />
        </template>
      </tbody>
    </cdr-table>
  </template>
</div>
</template>

<script>
import tokenData from '@rei/cdr-tokens/dist/json/platform-tokens.json';
import TokenTypeColor from './TokenTypeColor';
import groupBy from 'lodash/groupBy';
import filter from 'lodash/filter';
import capitalize from 'lodash/capitalize';
import { CdrText } from '@rei/cedar';

export default {
  name: 'TokensColor',
  components: {
    TokenTypeColor,
    CdrText,
  },
  computed: {
    colorTokensByType() {
      const allColors = [];
      Object.keys(tokenData).forEach((key) => {
        allColors.push(...tokenData[key].colors)
      });
      // filter out deprecated tokens
      const filtered = filter(allColors, ['attributes.deprecated', false]);
      const byType = groupBy(filtered, 'docs.type');

      return byType;
    },
  },
  methods: {
    makeCapital(str) {
      return capitalize(str);
    }
  }
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