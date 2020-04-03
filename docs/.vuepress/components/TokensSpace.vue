<template>
<div v-if="hasContent">
  <slot />
  <div
    v-for="token in spaceTokensByType"
    class="cdr-mb-space-two-x"
  >
    <tokens-space-example 
      :name="token.name"
      :is-inset="isInset"
    />
    <cdr-table class="space-token-table">
      <tbody>
        <tr>
          <td>
            <b v-if="insetPieces(token.name).length > 0">{{token.name}}</b>
            <span v-else>{{token.name}}</span>
          </td>
          <td>{{token.value}}</td>
        </tr>
        <tr v-for="piece in insetPieces(token.name)">
          <td>{{piece.name}} </td>
          <td>{{piece.value}}</td>
        </tr>
      </tbody>
    </cdr-table>
  </div>
</div>
</template>

<script>
import tokenData from '@rei/cdr-tokens/dist/json/platform-tokens.json';
import filter from 'lodash/filter';
import endsWith from 'lodash/endsWith';

export default {
  name: 'TokensSpace',
  props: {
    type: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      isInset: false,
    };
  },
  computed: {
    hasContent() {
      return Object.keys(this.spaceTokensByType).length !== 0;
    },
    allSpaceTokens() {
      const allSpace = [];
      Object.keys(tokenData).forEach((key) => {
        allSpace.push(...tokenData[key].spacing)
      });
      // filter out deprecated tokens
      const filtered = filter(allSpace, ['attributes.deprecated', false]);
      return filtered;
    },
    spaceTokensByType() {

      if (this.type === 'inset') {
        this.isInset = true;

        return filter(this.allSpaceTokens, o => (
          o.name.includes('inset')
          && !o.name.includes('squish')
          && !o.name.includes('stretch')
          )
        );
      } else if (this.type === 'inset-squish') {
        this.isInset = true;

        return filter(this.allSpaceTokens, o => (
          o.name.includes('inset')
          && o.name.includes('squish')
          && !(endsWith(o.name, 'top-bottom') || endsWith(o.name, 'left-right'))
          )
        );
      } else if (this.type === 'inset-stretch') {
        this.isInset = true;

        return filter(this.allSpaceTokens, o => (
          o.name.includes('inset')
          && o.name.includes('stretch')
          && !(endsWith(o.name, 'top-bottom') || endsWith(o.name, 'left-right'))
          )
        );
      }

      return filter(this.allSpaceTokens, o => !o.name.includes('inset'));
    },
  },
  methods: {
    insetPieces(tokenBaseName) {
      if (this.type === 'inset-squish') {
        return filter(this.allSpaceTokens, o => (
          o.name.includes(tokenBaseName)
          && o.name.includes('squish')
          && (endsWith(o.name, 'top-bottom') || endsWith(o.name, 'left-right'))
          )
        );
      } else if (this.type === 'inset-stretch') {
        return filter(this.allSpaceTokens, o => (
          o.name.includes(tokenBaseName)
          && o.name.includes('stretch')
          && (endsWith(o.name, 'top-bottom') || endsWith(o.name, 'left-right'))
          )
        );
      } else {
        return [];
      }
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

  .space-token-table td {
    width: 50%;
  }
</style>