<template>
  <ul class="cdr-doc-tabs">
    <li class="cdr-doc-tabs__list-item" v-for="tab in tabLabelData" :key="tab.slug">
      <a class="cdr-doc-tabs__link" :class="{ 'cdr-doc-tabs__link--active' : tab.active }" :href="tab.anchor">
        {{ tab.label }}
      </a>
    </li>
  </ul>
</template>

<script>
import slugify from '../../../utils/slugify.js';

export default {
  name: 'CdrDocTabs',
  props: {
    labels: {
      default: ['Overview', 'Design Guidelines', 'API', 'History'],
      type: Array
    },
    activeTab: {
      default: 'Overview',
      type: String
    }
  },
  computed: {
    tabLabelData: function() {
      const tabLabelData = this.labels.map(label => {
        const slug = slugify(label);
        const tabData = {label: label, slug: slug, anchor: `#${slug}`};
        if (this.activeTab === label) {
          tabData.active = true;
        }
        return tabData;
      });
      return tabLabelData;
    }
  }
}
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';
  
  .cdr-doc-tabs {
    align-items: center;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .cdr-doc-tabs__list-item {
    margin-right: $space-2-x;
  }

  .cdr-doc-tabs__link {
    color: $cdr-doc-text-color-primary;
    display: block;
    padding: $inset-1-x;
    padding-left: 0;
    padding-right: 0;
    position: relative;

    &,
    &:hover {
      text-decoration: none;
    }
  }

  .cdr-doc-tabs__link--active {
    &:after {
      background: $cdr-doc-link-color-primary; 
      bottom: 0;
      content: '';
      left: 0;
      position: absolute;
      height: 4px;
      width: 100%;
    }
  }
</style>
