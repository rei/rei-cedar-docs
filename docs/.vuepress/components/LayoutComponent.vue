<template>
  <div class="page cdr-doc-component-layout">
    <cdr-doc-intro :title="data.title" :metadata="data.title_metadata" :breadcrumbs="data.breadcrumbs">
      {{ data.summary }}
    </cdr-doc-intro>
    <div class="cdr-doc-component-layout__tabs">
      <div class="cdr-doc-component-layout__tabs-inner">
        <cdr-doc-tabs :labels="tabLabels"/>
      </div>
    </div>
    <div class="cdr-doc-component-layout__body">
      <div class="cdr-doc-component-layout__body-inner">
        <Content :custom="false"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$page.frontmatter
    },
    tabLabels () {
      const labels = this.data.tabLabels || ['Overview', 'Design Guidelines', 'API', 'History'];
      return labels;
    }
  }
}
</script>

<style lang="scss">
  @import '../theme/styles/cdr-tokens';
  @import '../theme/styles/cdr-doc-tokens';

  .cdr-doc-component-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .cdr-doc-component-layout__body {
    flex: 1 0 100%;
    padding: $inset-1-x;
    padding-bottom: 0;
    padding-top: 0;
  }

  .cdr-doc-component-layout__tabs {
    border-bottom: $cdr-doc-border-separator;
  }

  .cdr-doc-component-layout__tabs-inner {
    margin: 0 auto;
    width: $cdr-doc-content-max-width;
  }

  .cdr-doc-component-layout__body-inner {
    margin: 0 auto;
    padding: $inset-1-x;
    padding-left: 0;
    padding-right: 0;
    width: $cdr-doc-content-max-width;
  }
</style>
