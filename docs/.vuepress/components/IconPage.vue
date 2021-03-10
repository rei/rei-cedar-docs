<script>
const iconData = require('@rei/cedar-icons/dist/icons.js');
const upperFirst = require('lodash/upperFirst');
const camelCase = require('lodash/camelCase');

export default {
  name: 'icons-page',
  data() {
    return {
      iconData: Object.keys(iconData),
    };
  },
  methods: {
    pascalize(name) {
      return upperFirst(camelCase(name));
    }
  },
  mounted() {
    this.$parent.$emit('update-toc');
  },
}
</script>
<!-- pascal-ize name for TOC -->
<template>
  <div>
    <cdr-list>
      <li v-for="icon in iconData" :key="icon" class="icon-library__item">
        <cdr-icon size="large" :use="`#${icon}`"/>
        <br/>Icon{{pascalize(icon)}}
        <br/>{{icon}}.svg

      </li>
    </cdr-list>
  </div>
</template>

<style lang="scss">

@import '../theme/styles/cdr-tokens.scss';

.icon-library__item {
  width: 200px;
  display: inline-block;
  text-align: center;
  margin: $cdr-space-one-x $cdr-space-half-x;
  padding: $cdr-space-quarter-x;
  border: 1px solid $cdr-color-border-secondary;
  border-radius: $cdr-radius-softer;
}
</style>
