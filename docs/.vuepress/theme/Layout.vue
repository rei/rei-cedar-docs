<template>
  <div class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd">
    <div v-html="iconSprite" style="display: none"/>
    <div class="cdr-doc-page-shell">
      <div class="cdr-doc-page-shell__side-navigation">
        <div class="cdr-doc-side-navigation">
          <Navbar v-if="shouldShowNavbar" />
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
import nprogress from 'nprogress'
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
      isSidebarOpen: false,
      iconSprite
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (frontmatter.navbar === false) return false
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      )
    },
    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
        },
        userPageClass
      ]
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

    // configure progress bar
    nprogress.configure({ showSpinner: false })

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start()
      }
      next()
    })

    this.$router.afterEach(() => {
      nprogress.done()
      this.isSidebarOpen = false
    })
  },

  beforeDestroy () {
    this.updateMetaTags(null, this.currentMetaTags)
  },

  methods: {
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
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },
    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },
    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}

</script>

<!-- <style src="prismjs/themes/prism-coy.css"></style> -->
<style src="./styles/theme.scss" lang="scss"></style>
