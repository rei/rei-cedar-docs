<template>
  <div v-if="hasContent">
    <slot />
    <!-- Web Tokens -->
    <template v-if="platform === 'web'">
<div
  v-for="(v, k) in webMixinsByType"
>
<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-text
    :key="(k)">
      When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

  <table>
    <tbody>
      <tr>
        <th>
          Utility class
        </th>
        <td>
          <cdr-text modifier="utility-300"><b>{{ k }}</b></cdr-text>
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </template>

    <!-- Native Tokens -->
    <template v-if="platform === 'native'">
    <div
      v-for="(v, k) in nativeTokensByType"
      class="cdr-mb-space-two-x"
    >
      <!-- Native tokens don't contain enough info for web display -->
      <!-- <p class="typography-example" :style="makeNativeStyleObj(v)">A different kind of company</p> -->
      <cdr-text><b>Android:</b> {{ v[0].docs.android }}</cdr-text>
      <cdr-text><b>iOS:</b> {{ v[0].docs.ios }}</cdr-text>
      <cdr-text class="cdr-mb-space-one-x">{{v[0].docs.description}}.</cdr-text>

      <table>
        <tbody>
          <tr v-for="token in v">
            <td>
              <cdr-text>{{ token.property }}</cdr-text>
            </td>
            <td>{{ token.value }}</td>
          </tr>
        </tbody>
      </table>

    </div>
    </template>
    
  </div>
</template>

<script>
import tokenData from '@rei/cdr-tokens/dist/json/platform-tokens.json';
import groupBy from 'lodash/groupBy';
import kebabCase from 'lodash/kebabCase';
import filter from 'lodash/filter';
import uniqBy from 'lodash/uniqBy';
import Overview from './cdr-doc-example-code-pair'

export default {
  name: 'TokensTypography',
  components: { Overview },
  props: {
    platform: String,
    type: String,
  },
  computed: {
    hasContent() {
      return Object.keys(this.webMixinsByType).length !== 0 
       || Object.keys(this.nativeTokensByType).length !== 0;
    },
    webTokensByMixin() {
      const textTokens = tokenData.web.text;
      // filter out deprecated tokens
      const filtered = filter(textTokens, ['attributes.deprecated', false]);
      const byMixin = groupBy(filtered, 'mixin');

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
    },
    nativeTokensByType() {
      const obj = {}
      const textTokens = [...new Set([...tokenData.android.text, ...tokenData.ios.text])];
      // filter out deprecated tokens
      const filtered = filter(textTokens, ['attributes.deprecated', false]);
      const grouped = groupBy(filtered, 'docs.type');
      const groupedByName = groupBy(grouped[this.type], (v) => {
        if ( Object.prototype.hasOwnProperty.call(v.docs, 'android')
          && v.docs.android !== 'N/A' ) return v.docs.android;
        else if ( Object.prototype.hasOwnProperty.call(v.docs, 'ios')
          && v.docs.ios !== 'N/A' ) return v.docs.ios;
          
          return 'undefined';
      });

      const nameKeys = Object.keys(groupedByName);
      nameKeys.forEach((name) => {
        groupedByName[name] = uniqBy(groupedByName[name], 'original.value')
      });

      return groupedByName;
    }
  },
  methods: {
    makeStyleObj(s) {
      let final = {};
      s.forEach(o => {
        final[o.property]= o.value;
      })
      return final;
    },
    // makeNativeStyleObj(s) {
    //   let final = {};
    //   s.forEach(o => {
    //     final[o.property]= o.original.value;
    //   })
    //   return final;
    // },
  }
};
</script>

<style lang="scss">
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens';
</style>