<template>
  <div class="cdr-doc-tabs">
    <div class="cdr-doc-tabs__labels">
      <ul class="cdr-doc-tabs-list">
        <li class="cdr-doc-tabs__list-item" v-for="tab in tabLabelData" :key="tab.slug">
          <a class="cdr-doc-tabs__link" :class="{ 'cdr-doc-tabs__link--active' : tab.active }" :href="tab.anchor" v-on:click="switchActiveTab(tab.label, $event)">
            {{ tab.label }}
          </a>
        </li>
      </ul>
    </div>
    <div class="cdr-doc-tabs__panels">
      <div class="cdr-doc-tabs__panels-inner">
        <div v-for="tab in tabLabelData" class="cdr-doc-tab-panel" :class="{'cdr-doc-tab-panel--active': tab.active }">
          <slot :name="tab.label"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slugify from '../../../utils/slugify.js';

export default {
  name: 'CdrDocTabs',
  data: function() {
    return {
      activeTab: this.initialActiveTab || 'Overview'
    }
  },
  props: {
    labels: {
      default: function() {
        return ['Overview', 'Design Guidelines', 'API', 'History']
      },
      type: Array
    },
    initialActiveTab: {
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
  },
  methods: {
    switchActiveTab: function(activeTabLabel, event) {
      if (event) event.preventDefault();
      this.activeTab = activeTabLabel;
    }
  }
}
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';

  .cdr-doc-tabs__labels {
    border-bottom: $cdr-doc-border-separator;
    padding: $inset-1-x;
    padding-bottom: 0;
    padding-top: 0;
  }

  .cdr-doc-tabs-list {
    align-items: center;
    display: flex;
    list-style: none;
    margin: 0 auto;
    max-width: $cdr-doc-content-max-width;
    padding: 0;
  }

  .cdr-doc-tabs__panels {
    padding: $inset-1-x;
    padding-bottom: 0;
    padding-top: 0;
  }

  .cdr-doc-tabs__panels-inner {
    margin: 0 auto;
    padding: $inset-1-x;
    padding-left: 0;
    max-width: $cdr-doc-content-max-width;
    padding-right: 0;
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

  .cdr-doc-tab-panel {
    display: none;
  }

  .cdr-doc-tab-panel--active {
    display: block;
  }
</style>
