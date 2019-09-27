<template>
  <cdr-list modifier="unordered"">
    <li v-for="item in items" :key="item.id">
      <slot v-bind:item="item">
        {{ item }}
      </slot>
    </li>
  </cdr-list> 
</template>

<script>
export default {
  name: "List",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>

</style>
