<template>
  <div class="color-example" :style="{backgroundColor: colorValue}"/>
</template>

<script>
import tokens from '@rei/cdr-tokens';
import camelCase from 'lodash/camelCase';

export default {
  name: 'ColorExample',
  props: {
    color: String,
  },
  data() {
    return {
      tokens,
    };
  },
  computed: {
    colorValue() {
      return this.tokens[camelCase(this.color)];
    }
  }
}
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
