<template>
  <div :class="[!isInset ? 'space-wrapper' : '', 'cdr-mb-space-one-x']">
    <div v-if="isInset" class="inset-example" :style="{boxShadow: inset, padding: pad}">content</div>
    <div v-else class="space-example" :style="{width: spaceValue, height: spaceValue}"/>
  </div>
</template>

<script>
import * as tokens from '@rei/cdr-tokens/dist/js/cdr-tokens.esm';
import camelCase from 'lodash/camelCase';

export default {
  name: 'TokensSpaceExample',
  props: {
    name: String,
    isInset: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tokens,
    };
  },
  computed: {
    spaceValue() {
      return this.tokens[camelCase(this.name)];
    },
    pad() {
      const val = this.spaceValue;
      if (val.indexOf(' ') <= 0) {
        return `${val} ${val}`;
      } else if (val.indexOf('*') > 0) {
        let [x, y] = val.split(') '); // eslint-disable-line
        return `${x}) ${y}`;
      }
      const [x, y] = val.split(' ');
      return `${x} ${y}`;
    },
    inset() {
      const val = this.spaceValue;
      if (val.indexOf(' ') <= 0) {
        return this.getInset(val, val, `-${val}`, `-${val}`);
      } else if (val.indexOf('*') > 0) {
        let [x, y] = val.split(') '); // eslint-disable-line
        const negx = `${x.slice(0, 5)}-${x.slice(5)})`;
        return this.getInset(`${x})`, y, negx, `-${y}`);
      }
      const [x, y] = val.split(' ');
      return this.getInset(x, y, `-${x}`, `-${y}`);
    },
  },
  methods: {
    getInset(posy, posx, negy, negx) {
      // console.log(posx, posy, negx, negy);
      return `inset ${negx} ${negy} 0 rgb(199, 220, 191), inset ${posx} ${posy} 0 rgb(199, 220, 191)`;
    },
  },
};
</script>

<style lang="scss">
  .inset-example {
    background-color: beige;
  }

  .space-wrapper {
    background-color: white;
    padding: 8px;
  }

  .space-example {
    background-color: black;
  }
</style>
