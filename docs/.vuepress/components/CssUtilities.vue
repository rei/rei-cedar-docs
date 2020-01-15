<template>
  <div class="utility-wrapper">
    <template v-for="(v,k) in utilityData">
      <template v-if="nextIsCategory(v)">
        <!-- Title -->
        <component
          :is="`h${level}`"
          class="utility-class-title"
        >{{ capitalize(k) }}</component>
        <!-- Recurse -->
        <css-utilities
          :level="level + 1"
          :data-path="[...dataPath, k]"
        />
      </template>

      <template v-else>
        <!-- Title -->
        <component
          :is="`h${level}`"
          class="utility-class-title"
        >{{ capitalize(k) }}</component>
        <!-- Table -->
        <table class="utility-table cdr-mb-space-four-x">
          <tbody>
            <tr v-for="(data, name) in v">
              <td>
                <p><b>{{ name }}</b></p>
              </td>
              <td>
                <p>{{ data.description }}</p>
                <p><b>Value:</b> {{ data.context.value }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </template>
  </div>
</template>

<script>
import cssData from '@rei/cedar/dist/cssdocdata.json';

export default {
  name: 'css-utilities',
  props: {
    level: {
      type: Number,
      default: 2,
    },
    dataPath: {
      type: Array,
      default: () => ['utility'],
    },
  },
  data() {
    return {
      cssData,
    };
  },
  mounted() {
    this.$parent.$emit('update-toc');
  },
  computed: {
    utilityData() {
      return this.dataPath.reduce((prev, curr) => prev && prev[curr], this.cssData);
    },
  },
  methods: {
    nextIsCategory(o) {
      const toTest = Object.keys(o)[0];
      return !Object.prototype.hasOwnProperty.call(o[toTest], 'description');
    },
    capitalize(string) {
      return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
    }
  }
}
</script>

<style lang="scss">
@import '../theme/styles/cdr-tokens.scss';

.utility-wrapper {
  h2 {
    @include cdr-text-display-1000();
  }
  h3 {
    @include cdr-text-display-800();
  }
  h4 {
    @include cdr-text-display-600();
  }
}

.utility-table {
  width: 100%;
  td + td {
    width: 60%;
  }
}
</style>
