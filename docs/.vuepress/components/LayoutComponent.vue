<template>
  <div class="page cdr-doc-component-layout" :class="activeTabClass">
    <cdr-doc-intro :title="pageData.title" :metadata="pageData.title_metadata" :breadcrumbs="pageData.breadcrumbs">
      {{ pageData.summary }}
    </cdr-doc-intro>
    <Content :custom="false"/>
  </div>
</template>

<script>
import slugify from '../../../utils/slugify.js';

export default {
  data: function() {
    return {
      activeTab: 'Overview'
    }
  },
  computed: {
    pageData () {
      return this.$page.frontmatter
    },
    tabLabels () {
      const labels = this.pageData.tabLabels || ['Overview', 'Design Guidelines', 'API', 'History'];
      return labels;
    },
    tabId () {
      const id = this.pageData.tabId || 'global-component-doc-tabs';
      return id;
    },
    activeTabClass () {
      return `cdr-doc-component-layout--${slugify(this.activeTab)}-active`;
    }
  },
  methods: {
    activeTabSwitched(newActiveTab) {
      this.activeTab = newActiveTab;
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
</style>
