<template>
  <div class="cdr-container ">
    <h3 class="category-title">{{ categoryTitle }}</h3>

    <div
      v-for="(v,k) in typeData"
      :key="k"
    >
      <h4
        v-if="k !== 'undefined'"
        class="type-title"
      >{{k}}</h4>

      <cdr-table
        v-if="otherTokens(v).length > 0"
        class="prop-table"
        data-backstop="capture"
      >
        <tbody class="prop-tbody">
          <token-sorter
            v-for="(v,k) in otherTokens(v)"
            :key="k"
            :prop="v"
          />
        </tbody>
      </cdr-table>

      <template v-if="Object.keys(mixinTokens(v)).length > 0">
        <cdr-table
          v-for="(v,k) in mixinTokens(v)"
          :key="k"
          class="prop-table mixins"
          data-backstop="capture"
        >
          <tbody class="prop-tbody">
            <mixin-sorter
              :prop="v"
            />
            <type-mixin
              v-for="(v, idx) in v"
              :key="`mixin${v.name}${idx}`"
              :prop="v"
            />
          </tbody>
        </cdr-table>
      </template>
    </div>
  </div>
</template>

<script>
import TokenSorter from './TokenSorter';
import MixinSorter from './MixinSorter';
import TypeMixin from './TokenTypeMixin';
import groupBy from 'lodash/groupBy';
import filter from 'lodash/filter';
import has from 'lodash/has';


export default {
  name: 'TokensCategory',
  props: {
    categoryData: Array,
    categoryTitle: String,
  },
  components: {
    TokenSorter,
    MixinSorter,
    TypeMixin,
  },
  computed: {
    typeData() {
      const data = groupBy(this.categoryData, 'docs.type');
      if (this.categoryTitle === 'colors') {
        // ensure that generic color tokens appear before component tokens
        return {
          text: data.text,
          background: data.background,
          border: data.border,
          icon: data.icon,
          ...data,
        }
      }
      return data;
    }
  },
  methods: {
    mixinTokens(arr) {
      const res = filter(arr, (o) => {
        return has(o, 'mixin');
      });

      return groupBy(res, 'mixin');
    },
    otherTokens(arr) {
      const res = filter(arr, (o) => {
        return !has(o, 'mixin');
      });

      return res;
    },
  }
}
</script>

<style lang="scss">
@import '../theme/styles/cdr-tokens.scss';

.prop-table {
  &+& {
    margin-top: $cdr-space-one-x;
  }
}
</style>
