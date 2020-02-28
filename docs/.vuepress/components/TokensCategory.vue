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

      <table
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
      </table>

      <template v-if="Object.keys(mixinTokens(v)).length > 0">
        <table
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
        </table>
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
      return groupBy(this.categoryData, 'docs.type');
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
