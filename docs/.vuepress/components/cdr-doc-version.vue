<template>
  <div>
    <cdr-select
      v-model="selected"
      label="Version Select"
      prompt="Select the API version"
      :options="$page.frontmatter.versions.map(version => version['version'])"
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
  }
};
</script>
