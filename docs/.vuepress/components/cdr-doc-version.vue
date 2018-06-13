<template>
  <div>
    <cdr-select
      v-model="selected"
      label="Version Select"
      prompt="Select the API version"
      :options="$page.frontmatter.versions.map(version => version['version'])"
      @input="versionChanged"
    />
  </div>
</template>

<script>
import { CdrSelect } from '@rei/cdr-select';

export default {
  name: 'CdrDocVersion',
  components: {
    CdrSelect
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
  }
};
</script>
