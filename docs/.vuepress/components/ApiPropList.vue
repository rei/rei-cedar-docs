<template>
  <cdr-list modifier="modifier="unordered"">
    <li v-for="item in items" :key="item.id">
    <!-- We have a slot for each item, passing it the -->
    <!-- `item` object as a slot prop.                 -->
      <slot v-bind:item="item">
        <!-- Fallback content -->
        {{ item }}
      </slot>
    </li>
  </cdr-list> 
</template>

<script>
export default {
  name: "List",
  props: {
    tag: {
      type: String,
      default: "ul",
      validator: value => ["ul", "ol"].indexOf(value) >= 0 || false
    },
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list--unstyled {
  list-style: none;
}
</style>
