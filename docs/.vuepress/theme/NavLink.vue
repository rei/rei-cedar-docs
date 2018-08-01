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
    padding: $inset-1-x;
    text-decoration: none;

    &:hover {
      color: $easily-excited;
    }

    .cdr-doc-side-navigation__child-links & {
      border-top: 0;
      padding: $inset-2-x-squish;
    }
  
    &.router-link-active {
      color: $easily-excited;
      position: relative;

      &:before {
        content: '';
        background: $easily-excited;
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
