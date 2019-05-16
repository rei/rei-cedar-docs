<template>
  <table id="icon-table" class="icon-table">
    <tr
      v-for="(val, key) in Icons"
      :key="key"
      v-if="key !== 'CdrIcon' && key !== 'CdrIconSprite'"
    >
      <td>
        <svg :is="key" />
      </td>
      <td>{{getIcon(key)}}</td>
      <td>{{iconData[getIcon(key)]}}</td>
    </tr>
  </table>
</template>

<script>
// TODO: not sure how to do this with single package.
import * as Icons from '@rei/cdr-icon';
import iconData from '../public/icon/iconData.json';

export default {
  name: "IconTable",
  components: {
    ...Icons,
  },
  data() {
    return {
      Icons,
      iconData,
    };
  },
  methods: {
    getIcon(name) {
      return name.replace('Icon', '').replace(/([a-zA-Z])([A-Z0-9])/g, '$1-$2').toLowerCase();
    },
  },
}
</script>

<style lang="scss">
.icon-table {
  td,th {
    background-color: white;
  }
}
</style>
