<template>
  <div class="theme-container"
    :class="pageClasses">
    <div v-html="iconSprite" style="display: none"/>
    <div class="cdr-doc-page-shell">
      <cdr-button
        :icon-only="true"
        :with-background="true"
        size="large"
        class="cdr-doc-intro__hamburger"
        @click="toggleSideNav">
        <cdr-icon use="#navigation-menu"/>
      </cdr-button>
      <div :class="menuClass">
        <div class="cdr-doc-side-navigation">
          <Navbar/>
        </div>
      </div>
      <div class="cdr-doc-page-shell__body">
        <div class="custom-layout" v-if="$page.frontmatter.layout_type">
          <component :is="$page.frontmatter.layout_type"/>
        </div>
        <Home v-else-if="$page.frontmatter.home"/>
      </div>
    </div>
    <back-to-top-btn @click="scrollToTop" />
  </div>
</template>

<script>
import Vue from 'vue'
import iconSprite from '@rei/cedar-icons/dist/all-icons.svg';
import BackToTopBtn from './BackToTop.js';
import Home from './Home.vue'
import Navbar from './Navbar.vue'
import { pathToComponentName } from '@app/util';
import '../cedar.js';
export default {
  components: { Home, Navbar, BackToTopBtn },
  data () {
    return {
      iconSprite,
      sideNavOpen: false,
    }
  },

  computed: {
    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        userPageClass
      ]
    },
    menuClass() {
      return `cdr-doc-page-shell__side-navigation ${this.sideNavOpen ? 'cdr-doc-page-shell__side-navigation--open' : ''}`
    }
  },

  created () {
    if (this.$ssrContext) {
      this.$ssrContext.title = this.$title
      this.$ssrContext.lang = this.$lang
      this.$ssrContext.description = this.$page.description || this.$description
    }

  },

  mounted () {
    // update title / meta tags
    this.currentMetaTags = []
    this.updateMeta()

  },

  beforeDestroy () {
    this.updateMetaTags(null, this.currentMetaTags)
  },

  methods: {
    toggleSideNav() {
      this.sideNavOpen = !this.sideNavOpen;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    updateMeta() {
      document.title = this.$title
      document.documentElement.lang = this.$lang
      const meta = [
        {
          name: 'description',
          content: this.$description
        },
        ...(this.$page.frontmatter.meta || [])
      ]
      this.currentMetaTags = this.updateMetaTags(meta, this.currentMetaTags)
    },
    updateMetaTags (meta, current) {
      if (current) {
        current.forEach(c => {
          document.head.removeChild(c)
        })
      }
      if (meta) {
        return meta.map(m => {
          const tag = document.createElement('meta')
          Object.keys(m).forEach(key => {
            tag.setAttribute(key, m[key])
          })
          document.head.appendChild(tag)
          return tag
        })
      }
    },
  }
}

</script>

<!-- <style src="prismjs/themes/prism-coy.css"></style> -->
<style src="./styles/theme.scss" lang="scss"></style>
