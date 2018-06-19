<template>
  <nav class="cdr-doc-local-anchor-nav" ref="localNav">
    <ul class="cdr-doc-local-anchor-nav__list">
      <li v-for="link in links" class="cdr-doc-local-anchor-nav__list-item" :class="{'cdr-doc-local-anchor-nav__list-item--parent': !link.isChild, 'cdr-doc-local-anchor-nav__list-item--child': link.isChild }">
        <a class="cdr-doc-local-anchor-nav__link" 
            :class="{'cdr-doc-local-anchor-nav__link--parent': !link.isChild, 'cdr-doc-local-anchor-nav__link--child': link.isChild }" 
            :href="link.href"
            v-on:click="softScrollToAnchoredSection($event, link.href)">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>

import slugify from '../../../utils/slugify.js';
import Stickyfill from 'stickyfilljs';
import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

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
      default: '0'
    }
  },
  components: {
  },
  data: function() {
    return {
      links: [
        {
          href: '#',
          text: 'Click Me'
        }
      ]
    }
  },
  mounted: function() {
    this.createAnchorsFromContent();
    this.setStickyPositioning();
  },
  methods: {
    setStickyPositioning() {
      const localNav = this.$refs['localNav'];
      localNav.style.cssText = `top: ${this.stickyTopOffset}px; max-height: calc(100vh - ${this.stickyTopOffset}px);`;
      Stickyfill.add(localNav); // Polyfill for browsers without native position: sticky; support 
    },
    createAnchorsFromContent () {
      // Polyfill matches() for IE11
      if (!Element.prototype.matches) {
          Element.prototype.matches = Element.prototype.msMatchesSelector;
      }

      const selectors = `${this.parentSelectors}, ${this.childSelectors}`;
      const anchorElements = document.querySelectorAll(selectors);
      const links = [];
      const anchorIds = [];

      for (let i=0; i < anchorElements.length; i++) { // Traditional for loop to support IE 11
        const anchorElement = anchorElements[i];
        let anchorId = anchorElement.getAttribute('id');
        const text = anchorElement.textContent.replace(/^# /, '');
        // Markdown in VuePress automatically creates anchor links within headings with a '#' symbol as the text, strip this out of the textContent
        // Vuepress header markup: <h1 id="automatically-created-by-vuepress"><a href="#automatically-created-by-vuepress">#</a>Automatically Created By Vuepress</h1>
        if (anchorId === null) {
          // If the Dom element doesn't already have an id, create one from its textContent and set it
          anchorId = slugify(text);
        }

        // If an anchor starts with a number, prefix it with an underscore (_) to make it more compatible with CSS
        if (anchorId.match(/^[0-9]+/)) {
          anchorId = `_${anchorId}`;
        }

        // If an ID is repeated on the page, append a numeric index to it, so two anchor elements of "Guidelines" will result in #guidelines, and #guidelines-2 ids/anchors being created
        if (anchorIds.indexOf(anchorId) !== -1) {
          const existingIdCount = anchorIds.filter(idString => idString.replace(/-[0-9]*$/, '') === anchorId).length;
          anchorId = `${anchorId}-${(existingIdCount + 1)}`;
        }


        anchorElement.setAttribute('id', anchorId);
        const linkData = {
          href: `#${anchorId}`,
          text: text
        };

        if (anchorElement.matches(this.childSelectors)) {
          linkData.isChild = true;
        }

        anchorIds.push(anchorId);
        links.push(linkData)
      }

      this.links = links;
    },
    softScrollToAnchoredSection(event, id) {
      event.preventDefault(); // Intercept click event
      history.pushState(null, null, id); // make sure URL still gets updated with hash
      const anchoredSection = document.querySelector(id);
      console.log(anchoredSection)
      const scrollPosition = anchoredSection.offsetTop;

      window.scroll({
          top: scrollPosition,
          left: 0,
          behavior: 'smooth'
      });
    }
  }
}
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';

  .cdr-doc-local-anchor-nav {
    overflow-y: auto;
    position: sticky;
  }

  .cdr-doc-local-anchor-nav__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .cdr-doc-local-anchor-nav__link {
    @include redwood-display-20;
    color: $cdr-doc-link-color-primary;
    display: block;
    position: relative;
  }

  .cdr-doc-local-anchor-nav__link--child {
    padding-left: $space-2-x;

    &:before {
      content: '\2014'; // &mdash;
      position: absolute;
      left: 16px;
      top: 0;
      display: block;
    }
  }

  .cdr-doc-local-anchor-nav__list-item {
    margin-bottom: $space-quarter-x;
  }

  .cdr-doc-local-anchor-nav__list-item--parent {
    .cdr-doc-local-anchor-nav__list-item--child + & {
      margin-top: $space-half-x;
    }
  }
</style>
