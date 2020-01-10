<template>
  <nav class="cdr-doc-local-anchor-nav" ref="localNav">
    <cdr-list v-for="groupedLinks in linksGroupedByHeading" modifier="inline unordered compact" class="cdr-doc-local-anchor-nav__list">
      <li v-for="(link, i) in groupedLinks" class="cdr-doc-local-anchor-nav__list-item">
        <span class="cdr-doc-local-anchor-nav__header" v-if="!link.href">
          {{ link.text }}{{ groupedLinks.length > 1 ? ':' : '' }}
        </span>
        <cdr-link
          v-else
          :class="{
              'cdr-doc-local-anchor-nav__link--parent': !link.isChild,
              'cdr-doc-local-anchor-nav__link--child': link.isChild,
          }"
          modifier="standalone"
          :href="link.href">
            {{ link.text }}
            {{ !link.isChild && groupedLinks.length > 1 ? ':' : '' }}
        </cdr-link>
      </li>
    </cdr-list>
  </nav>
</template>

<script>
import slugify from '../../../utils/slugify.js';

export default {
  name: 'CdrDocLocalAnchorNav',
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
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  computed: {
    pageData () {
      return this.$page.frontmatter
    },
    seeAlsoLinks() {
      // convert "see_also" content to match link API
      return (this.pageData.see_also || []).map(item => {
        item.isChild = !!item.href;
        return item;
      });
    },
    linksGroupedByHeading() {
      // combine all the links, grouped by header
      // [[overview links], [guideline links], [api links], [see also links]]
      return this.links.concat(this.seeAlsoLinks).reduce(function (arr, link) {
        // link is a header, create a new bucket.
        if (!link.isChild) {
          arr.push([]);
        }
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
    padding: $cdr-space-one-x;
    background-color: $cdr-color-background-lightest;
    box-shadow: $cdr-prominence-raised;
  }
  .cdr-doc-local-anchor-nav__list {
    line-height: 0;

    &+& {
      margin-top: $cdr-space-half-x;
    }
  }
  .cdr-doc-local-anchor-nav__list-item {
    line-height: 0;

    &:nth-of-type(n+2)::before {
      color: $cdr-color-text-secondary-darkmode;
      content: '|' !important;
    }

    &:nth-of-type(2) {
      padding-left: $cdr-space-quarter-x !important;
      &::before {
        display: none !important;
      }
    }
  }
  .cdr-doc-local-anchor-nav__link--parent {
    @include cdr-text-utility-strong-200;
  }

  .cdr-doc-local-anchor-nav__link--child {
    @include cdr-text-utility-200;
  }

  .cdr-doc-local-anchor-nav__header {
    @include cdr-text-utility-strong-200;
    vertical-align: top;
    color: $cdr-doc-text-color-primary;
  }
</style>
