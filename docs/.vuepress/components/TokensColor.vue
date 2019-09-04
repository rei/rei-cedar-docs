<template>
<div v-if="hasContent">
  <slot />
  <table>
    <tbody>
      <tr
        v-for="token in colorTokensByType"
        v-if="token.attributes.deprecated !== true"
      >
        <td width="64"> <div class="color-example" :style="{backgroundColor: token.value}"/> </td>
        <td>
          <cdr-text><b>{{ token.name }}</b></cdr-text>
          <cdr-text v-if="token.docs.description">{{ token.docs.description }}</cdr-text>
        </td>
        <td width="160">{{ token.value }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import tokenData from '@rei/cdr-tokens/dist/json/platform-tokens.json';
import groupBy from 'lodash/groupBy';
import filter from 'lodash/filter';
import endsWith from 'lodash/endsWith';

export default {
  name: 'TokensColor',
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