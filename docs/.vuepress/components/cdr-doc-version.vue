<template>
  <div>
    <cdr-select
      v-model="selected"
      label="Version Select"
      prompt="Select the API version"
      :options="versOpts.map(version => version['version'])"
      @change="versionChanged"
    />
  </div>
</template>

<script>
import { CdrSelect } from '@rei/cdr-select';

export default {
  name: 'CdrDocVersion',
  props: {
    versOpts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    versionChanged() {
      this.$emit('versionChanged', this.selected);
    }
  },
  components: {
    CdrSelect
  }
};
</script>
