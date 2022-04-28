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
    generatedId() {
      return this.title.replace(/\s+/g, '-').toLowerCase();
    }
  }
}
</script>
  