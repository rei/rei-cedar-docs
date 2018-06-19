<template>
  <div class="cdr-doc-table-of-contents-shell">
    <div class="cdr-doc-table-of-contents-shell__content">
      <slot/>
    </div>
    <div class="cdr-doc-table-of-contents-shell__navigation">
      <cdr-doc-local-anchor-nav 
        parent-selectors=".cdr-doc-table-of-contents-shell__content h2" 
        child-selectors=".cdr-doc-table-of-contents-shell__content h3"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CdrDocTableOfContentsShell',
  props: {

  },
  computed: {

  }
}
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';
  
  .cdr-doc-table-of-contents-shell {
    display: flex;
  }

  .cdr-doc-table-of-contents-shell__navigation {
    width: 200px;
    flex-shrink: 0;
  }
</style>
