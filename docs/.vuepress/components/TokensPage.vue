<template>
  <div>
    <p>Accurate for @rei/cdr-tokens version {{ version }}</p>
    <div
      v-for="(data, platform) in filteredTokens"
      :key="platform"
    >
      <h2 class="platform-title">Platform: {{platform}}</h2>

      <div v-if="platform === 'global'">
        <p>Global token names are converted to platform specific variable naming but only shown here for SCSS/LESS:</p>
        <ul>
          <li>SCSS/LESS: kebab-case</li>
          <li>JS (commonjs): camelCase</li>
          <li>JS (esm): PascalCase</li>
          <li>Android: snake_case</li>
          <li>iOS: PascalCase</li>
        </ul>
        <p>Global token values are converted to platform specific units in the platform's package but only shown here for web</p>
      </div>

      <hr>

      <template v-for="(v, k) in data">
        <tokens-category
          v-if="v.length > 0"
          :key="k"
          :category-title="k"
          :category-data="v"
        />
      </template>
    </div>
  </div>
</template>

<script>
import tokenPackage from '@rei/cdr-tokens/package.json';
import PlatformTokens from '@rei/cdr-tokens/dist/json/platform-tokens.json';
import TokensCategory from './TokensCategory';
import filter from 'lodash/filter';

export default {
  name: 'TokensPage',
  components: {
    TokensCategory,
  },
  data() {
    return {
      version: tokenPackage.version,
      PlatformTokens,
    };
  },
  computed: {
    // filter out deprecated tokens
    filteredTokens() {
      const filteredTokens = {};

      Object.keys(this.PlatformTokens).forEach(platform => {
        filteredTokens[platform] = {};
        Object.keys(this.PlatformTokens[platform]).forEach(category => {
          filteredTokens[platform][category] = filter(this.PlatformTokens[platform][category], ['attributes.deprecated', false])
        });
      });

      return filteredTokens;
    },
  },
}
</script>

<style>

</style>