<template>
  <cdr-accordion
    :id="generatedId"
    level="3"
    :opened="opened"
    @accordion-toggle="opened = !opened"
  >
    <template #label>
      {{ title }}
    </template>
    <slot/>
  </cdr-accordion>
</template>

<script>
export default {
  name: 'FaqEntry',
  props: {
    title: { type: String, default: undefined },
  },
  data() {
    return {
      opened: false,
    }
  },
  computed: {
    // Generate a unique (and predictable) ID as required by the component. 
    generatedId() {
      return this.title.replace(/\s+/g, '-').toLowerCase();
    }
  }
}
</script>
  