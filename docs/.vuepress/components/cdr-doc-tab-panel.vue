<template>
  <div class="cdr-doc-tab-panel" :id="panelSlug">
    <slot/>
  </div>
</template>

<script>
import slugify from '../../../utils/slugify.js';

export default {
  name: 'CdrDocTabPanel',
  props: {
    panelId: {
      default: 'One',
      type: String
    }
  },
  computed: {
    panelSlug: function() {
      return slugify(this.panelId);
    }
  }
}
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';
</style>
