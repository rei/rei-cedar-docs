<template>
  <div class="dropdown-wrapper" :class="{ open }">
    <a class="dropdown-title cdr-doc-side-navigation__parent-link" @click="toggle">
      <span class="title">{{ item.text }}</span>
      <icon-caret-up v-if="open" class="cdr-doc-side-navigation__parent-link-icon"/>
      <icon-caret-down v-else class="cdr-doc-side-navigation__parent-link-icon"/>
    </a>
    <DropdownTransition>
      <ul class="nav-dropdown cdr-doc-side-navigation__child-links" v-show="open">
        <li
        class="dropdown-item"
        v-for="subItem in item.items"
        :key="subItem.link">
          <h4 v-if="subItem.type === 'links'">{{ subItem.text }}</h4>
          <ul class="dropdown-subitem-wrapper" v-if="subItem.type === 'links'">
            <li
            class="dropdown-subitem"
            v-for="childSubItem in subItem.items"
            :key="childSubItem.link">
              <NavLink :item="childSubItem" class="cdr-doc-side-navigation__child-link"/>
            </li>
          </ul>
          <NavLink v-else :item="subItem" class="cdr-doc-side-navigation__child-link"/>
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import { isExternal, ensureExt } from './util'
import NavLink from './NavLink.vue'
import DropdownTransition from './DropdownTransition.vue'
import { IconCaretUp, IconCaretDown } from '@rei/cedar';

export default {
  components: { NavLink, DropdownTransition, IconCaretDown, IconCaretUp },
  data() {
    return {
      open: false
    }
  },
  props: {
    item: {
      required: true
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>

<style lang="scss">
  @import './styles/cdr-tokens';
  @import './styles/cdr-doc-tokens';

  .cdr-doc-side-navigation__parent-link {
    align-items: center;
    border-top: $cdr-doc-border-separator;
    color: $cdr-doc-text-color-primary;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: $cdr-space-inset-one-x;
    text-decoration: none;
  }

  .cdr-doc-side-navigation__child-links {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  // .cdr-doc-side-navigation__parent-link-icon {
  //   height: $icon-size;
  //   width: $icon-size;
  // }
</style>
