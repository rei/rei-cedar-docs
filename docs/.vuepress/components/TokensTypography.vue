<template>
  <div>
    <!-- TODO: Native? -->
    <div
      v-for="(v, k) in webMixinsByType"
      class="cdr-mb-space-two-x"
    >
      <p class="typography-example" :style="makeStyleObj(v)">A different kind of company</p>
      <cdr-text><b>{{ k }}</b> (mixin)</cdr-text>
      <cdr-text class="cdr-mb-space-one-x">{{descriptionData[k]}}</cdr-text>

      <table>
        <tbody>
          <tr v-for="token in v">
            <td>
              <cdr-text><b>{{ token.name }}</b></cdr-text>
            </td>
            <td>{{ token.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import tokenData from '@rei/cdr-tokens/dist/json/platform-tokens.json';
import descriptionData from './TokensTypographyData';
import groupBy from 'lodash/groupBy';
import kebabCase from 'lodash/kebabCase';
import filter from 'lodash/filter';

export default {
  name: 'TokensTypography',
  props: {
    platform: String,
    type: String,
  },
  data() {
    return {
      descriptionData,
    };
  },
  computed: {
    webTokensByMixin() {
      const textTokens = tokenData.web.text;
      const byMixin = groupBy(textTokens, 'mixin')

      Object.keys(byMixin).map(name => {
        const kebab = kebabCase(name);
        byMixin[kebab] = byMixin[name];
        delete byMixin[name];
      });

      return byMixin;
    },
    webMixinsByType() {
      const obj = {};
      const keys = Object.keys(this.webTokensByMixin);
      keys.forEach((k) => {
        if (k.includes(this.type)) {
          obj[k] = this.webTokensByMixin[k];
        }
      })

      return obj;
    }
  },
  methods: {
    makeStyleObj(s) {
      let final = {};
      s.forEach(o => {
        final[o.property]= o.value;
      })
      return final;
    }
  }
};
</script>

<style lang="scss">
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens';

  .typography-example {
    background-color: $cdr-color-background-lightest;
    overflow: hidden;
    white-space: nowrap;
    margin: 8px 0 8px 0; 
    padding: 16px 0 16px 8px;
  }
</style>