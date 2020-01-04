<template>
  <nav class="cdr-doc-local-anchor-nav" ref="localNav">
    <cdr-list modifier="inline" v-for="groupedLinks in linksGroupedByHeading">
      <li v-for="link in groupedLinks" class="cdr-doc-local-anchor-nav__list">
        <cdr-link
            :class="{
                'cdr-doc-local-anchor-nav__link--parent': !link.isChild,
                'cdr-doc-local-anchor-nav__link--child': link.isChild,
            }"
            modifier="standalone"
            :href="link.href">
          {{ link.text }}
        </cdr-link>
      </li>
    </cdr-list>
    <cdr-list v-if="pageData.see_also && pageData.see_also.length > 0" modifier="inline">
      <li v-for="item in pageData.see_also" class="cdr-doc-local-anchor-nav__list">
        <cdr-link
          v-if="item.href"
          modifier="standalone"
          class="cdr-doc-local-anchor-nav__appended-item-link"
          :href="item.href"
        >{{ item.text }}</cdr-link>
        <span class="cdr-doc-local-anchor-nav__appended-item-header" v-if="!item.href">{{ item.text }}</span>
      </li>
    </cdr-list>
  </nav>
</template>

<script>

import { CdrList } from '@rei/cedar';
import slugify from '../../../utils/slugify.js';

export default {
  name: 'CdrDocLocalAnchorNav',
  components: {
    CdrList,
  },
  props: {
    parentSelectors: {
      type: String,
      default: 'h2'
    },
    childSelectors: {
      type: [String, Boolean],
      default: 'h3'
    },
    stickyTopOffset: {
      type: String,
      default: '48'
    },
    tabPanelOffset: {
      type: String,
      default: '12'
    },
    appendedItems: {
      type: Array,
      default: function() {
        return [];
      }
    },
    links: {
      type: Array
    }
  },
  computed: {
    pageData () {
      return this.$page.frontmatter
    },
    linksGroupedByHeading() {
      return this.links.reduce(function (arr, link) {
        if (!link.isChild) arr.push([]);
        arr[arr.length - 1].push(link);
        return arr;
      }, []);
    }
  },
}
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';

  .cdr-doc-local-anchor-nav {
    overflow-y: auto;
    padding-top: $cdr-space-half-x;
    // margin: $cdr-space-two-x;
  }
  .cdr-doc-local-anchor-nav__list {
      margin-bottom: $cdr-space-one-x;
  }
  .cdr-doc-local-anchor-nav__link--parent {
    @include cdr-text-utility-strong-300;
  }

  .cdr-doc-local-anchor-nav__link--child {
    @include cdr-text-utility-300;
  }

  .cdr-doc-local-anchor-nav__appended-item-link {
    @include cdr-text-utility-300;
  }

  .cdr-doc-local-anchor-nav__appended-item-header {
    @include cdr-text-utility-strong-300;
    vertical-align: top;
    color: $cdr-doc-text-color-primary;
  }
</style>
