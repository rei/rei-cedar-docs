<template>
  <router-link
    class="nav-link cdr-doc-side-navigation__link"
    :to="link"
    v-if="!isExternal(link)"
    :exact="link === '/'"
  >{{ item.text }}</router-link>
  <a
    v-else
    :href="link"
    class="nav-link cdr-doc-side-navigation__link"
    :target="isMailto(link) ? null : '_blank'"
    :rel="isMailto(link) ? null : 'noopener noreferrer'"
  >{{ item.text }}</a>
</template>

<script>
import { isExternal, isMailto, ensureExt } from './util'

export default {
  props: {
    item: {
      required: true
    }
  },
  computed: {
    link() {
      return ensureExt(this.item.link)
    }
  },
  methods: {
    isExternal,
    isMailto
  }
}
</script>

<style lang="scss">
  @import './styles/cdr-tokens';
  @import './styles/cdr-doc-tokens';

  .cdr-doc-side-navigation__link {
    border-top: $cdr-doc-border-separator;
    color: $cdr-doc-text-color-primary;
    display: block;
    padding: $cdr-space-inset-one-x;
    text-decoration: none;

    &:hover {
      color: $cdr-color-text-link-lightmode;
    }

    .cdr-doc-side-navigation__child-links & {
      border-top: 0;
      padding: $cdr-space-inset-two-x-squish;
    }
  
    &.router-link-active {
      color: $cdr-color-text-link-lightmode;
      position: relative;

      &:before {
        content: '';
        background: $cdr-color-text-link-lightmode;
        bottom: 0;
        left: 0;
        position: absolute;
        top: 0;
        width: 4px;
      }
    }
  }

  .cdr-doc-side-navigation__child-link {
    @include redwood-body-10;
    color: $cdr-doc-text-color-secondary;
  }
</style>
