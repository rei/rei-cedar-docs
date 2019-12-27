<template>
  <nav class="cdr-doc-local-anchor-nav" ref="localNav">
    <ul class="cdr-doc-local-anchor-nav__list">
      <li v-for="link in links" class="cdr-doc-local-anchor-nav__list-item" :class="{'cdr-doc-local-anchor-nav__list-item--parent': !link.isChild, 'cdr-doc-local-anchor-nav__list-item--child': link.isChild }">
        <cdr-link
            :class="[
              'cdr-doc-local-anchor-nav__link',
              {
                'cdr-doc-local-anchor-nav__link--parent': !link.isChild,
                'cdr-doc-local-anchor-nav__link--child': link.isChild,
              }
            ]"
            modifier="standalone"
            :href="link.href">
          {{ link.text }}
        </cdr-link>
      </li>
    </ul>
    <ul class="cdr-doc-local-anchor-nav__appended-items" v-if="pageData.see_also && pageData.see_also.length > 0">
      <li v-for="item in pageData.see_also">
        <cdr-link
          v-if="item.href"
          modifier="standalone"
          class="cdr-doc-local-anchor-nav__appended-item-link"
          :href="item.href"
        >{{ item.text }}</cdr-link>
        <span class="cdr-doc-local-anchor-nav__appended-item-header" v-if="!item.href">{{ item.text }}</span>
      </li>
    </ul>
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
      type: Array
    }
  },
  computed: {
    pageData () {
      return this.$page.frontmatter
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
  }

  .cdr-doc-local-anchor-nav__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .cdr-doc-local-anchor-nav__link {
    @include cdr-text-utility-200;
    display: block;
    position: relative;
    text-transform: capitalize;

    &:focus,
    &:active {
      outline: none;
    }
  }

  .cdr-doc-local-anchor-nav__link--child {
    padding-left: $cdr-space-two-x;

    &:before {
      content: '\2014'; // &mdash;
      position: absolute;
      left: 16px;
      top: 0;
      display: block;
    }
  }

  .cdr-doc-local-anchor-nav__list-item {
    margin-bottom: $cdr-space-quarter-x;
  }

  .cdr-doc-local-anchor-nav__list-item--parent {
    .cdr-doc-local-anchor-nav__list-item--child + & {
      margin-top: $cdr-space-half-x;
    }
  }

  .cdr-doc-local-anchor-nav__appended-items {
    list-style: none;
    padding: 0;
    margin-top: $cdr-space-two-x;
  }

  .cdr-doc-local-anchor-nav__appended-item-link {
    @include cdr-text-utility-200;
  }

  .cdr-doc-local-anchor-nav__appended-item-header {
    @include cdr-text-utility-300;
    color: $cdr-doc-text-color-primary;
  }
</style>
