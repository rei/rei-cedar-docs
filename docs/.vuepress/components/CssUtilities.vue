<template>
  <div :class="`utility-class-wrapper-${level}`">
    <template v-for="(v,k) in utilityData">
      <template v-if="nextIsCategory(v)">
        <!-- Title -->
        <component
          :is="`h${level}`"
          class="utility-class-title"
        >{{ k }}</component>
        <hr>
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
        >{{ k }}</component>
        <!-- Table -->
        <table class="utility-table cdr-mb-space-four-x">
          <tbody>
            <tr v-for="(data, name) in v">
              <td>
                <p><b>{{ name }}</b></p>
              </td>
              <td>
                <p>{{ data.description }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </template>
  </div>
</template>

<script>
// TODO: get this from @rei/cedar package when available -- hardcoded here for now
import cssData from './cssData.json';

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
  }
}
</script>

<style lang="scss">
.utility-class-wrapper {
  & + & {
    border-top: 32px solid red;
  }
}

.utility-class-title {
  text-transform: capitalize;
}

.utility-table {
  width: 100%;
  td + td {
    width: 60%;
  }
}
</style>