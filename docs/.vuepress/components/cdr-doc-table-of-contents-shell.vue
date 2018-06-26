<template>
  <div class="cdr-doc-table-of-contents-shell" :class="'cdr-doc-table-of-contents-shell--' + instanceId">
    <div class="cdr-doc-table-of-contents-shell__content">
      <slot/>
    </div>
    <div class="cdr-doc-table-of-contents-shell__navigation">
      <cdr-doc-local-anchor-nav 
        :parent-selectors="'.cdr-doc-table-of-contents-shell--' + instanceId + ' .cdr-doc-table-of-contents-shell__content h2'" 
        :child-selectors="'.cdr-doc-table-of-contents-shell--' + instanceId + ' .cdr-doc-table-of-contents-shell__content h3'"
        :appended-items="appendedNavItems"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CdrDocTableOfContentsShell',
  props: {
    appendedNavItems: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data: function() {
    return {
      instanceId: null
    }
  },
  mounted: function() {
    this.instanceId = this._uid;
  }
}
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';
  @import '../theme/styles/cdr-doc-mixins.scss';
  
  .cdr-doc-table-of-contents-shell {
    display: flex;
  }

  .cdr-doc-table-of-contents-shell__content {
    @include cdr-doc-long-form-text;
    border-right: $cdr-doc-border-separator;
    padding-right: 24px; // Not a token?
    margin-right: 24px; // Not a token?
    width: 100%;
  }

  .cdr-doc-table-of-contents-shell__navigation {
    flex-shrink: 0;
    width: 200px;
  }
</style>
