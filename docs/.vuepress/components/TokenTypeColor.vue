<template>
  <tr>
    <td width="64"> <div class="color-example" :style="{backgroundColor: prop.value}"/> </td>
    <td>
      <cdr-text><b>{{ prop.name }}</b></cdr-text>
      <cdr-text v-if="prop.docs.description && description">{{ prop.docs.description }}</cdr-text>
    </td>
    <td width="160">{{ prop.value }}</td>
  </tr>
</template>

<script>
export default {
  name: 'TypeColor',
  props: {
    prop: Object,
    description: Boolean,
  },
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
</style>