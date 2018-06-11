<template>
  <cdr-select
    label="Version Select",
    prompt="Select the API version",
    :options="$page.frontmatter.versions.map(version => version['version'])"
  >
  </cdr-select>
</template>

<script>
import { CdrSelect } from '@rei/cdr-select';

export default {
  name: 'CdrDocVersion',
  components: {
    CdrSelect
  }
};
</script>
