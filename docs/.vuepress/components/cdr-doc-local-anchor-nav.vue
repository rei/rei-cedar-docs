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
                'cdr-doc-local-anchor-nav__link--active': link.href === activeLinkHref
              }
            ]"
            modifier="standalone"
            :href="link.href"
            @click.native="handleAnchorLinkClick(link.href, $event)">
          {{ link.text }}
        </cdr-link>
      </li>
    </ul>
    <ul class="cdr-doc-local-anchor-nav__appended-items" v-if="appendedItems.length > 0">
      <li v-for="item in appendedItems">
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
    appendedItems: {
      type: Array,
      default: function() {
        return [];
      }
    },
    tabName: {
      type: [String, Boolean],
      default: false
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
      ],
      activeLinkHref: null,
      scrollMonitoringEnabled: false,
      elementWatchers: [],
      activeTabName: this.tabName
    }
  },
  mounted() {
    import('smoothscroll-polyfill').then(smoothscroll => {
      smoothscroll.polyfill();
    });

    this.createAnchorsFromContent();

    import('stickyfilljs').then(s => {
      this.setStickyPositioning(s);
    });

    if (!this.activeTabName) {
      this.initialize();
    } else {
      this.initializeForActiveTabOnly();
    }

    this.$root.$on('cdrDocTabsActiveTabSwitched', (activeTab) => {
      this.activeTabName = activeTab;
      this.initializeForActiveTabOnly()
    });
  },
  methods: {
    unitialize() {
      this.elementWatchers.forEach((watcher) => {
        watcher.destroy();
      });
    },
    initialize() {
      const activeLinkParam = this.$route.query['active-link'];
      if (activeLinkParam) {
        this.setActiveLinkFromUrl(activeLinkParam);
      } else {
        setTimeout(() => {
          this.monitorAnchoredSectionsForActiveLinkHighlighting();
          this.scrollMonitoringEnabled = true;
        }, 100); // Brittle, but gives everything on the page time to load
      }
    },
    initializeForActiveTabOnly(activeTab) {
      const activeTabQueryParam = this.$route.query['active-tab'];
      if (this.activeTabName && slugify(this.activeTabName) === activeTabQueryParam) {
        this.initialize();
      } else if (this.activeTabName && slugify(this.activeTabName) !== activeTabQueryParam) {
        this.unitialize();
      }
    },
    monitorAnchoredSectionsForActiveLinkHighlighting(debug=false) {
      const anchoredSections = document.querySelectorAll(`${this.parentSelectors}, ${this.childSelectors}`);
      import('scrollmonitor').then(scrollMonitor => {
        for (let i=0; i < anchoredSections.length; i++) {
          const anchoredSection = anchoredSections[i];
          const anchoredSectionId = anchoredSection.getAttribute('id');
          const linkHref = `#${anchoredSectionId}`;
          const link = document.querySelector(`a[href="${linkHref}"]`);
          const nextSection = anchoredSections[i + 1] ? anchoredSections[i + 1] : false;
          const sectionTop = anchoredSection.offsetTop;
          const sectionBottom = nextSection ? nextSection.offsetTop - 1 : sectionTop + document.body.offsetHeight;
          // const elementWatcher = this.getScrollMonitor().create({top: sectionTop, bottom: sectionBottom});
          const elementWatcher = scrollMonitor.create({top: sectionTop, bottom: sectionBottom});
          this.elementWatchers.push(elementWatcher);

          if (debug) {
            // Adds horizontal lines to the top and bottom of each section for debugging
            this.generatePageSectionMarkers(sectionTop, sectionBottom);
          }

          // When a section spans the entire viewport
          elementWatcher.stateChange(() => {
            if (this.scrollMonitoringEnabled && 
                elementWatcher.isAboveViewport && 
                elementWatcher.isBelowViewport) {
                  this.activeLinkHref = linkHref;
            }
          });

          // Scroll Down Behavior
          elementWatcher.partiallyExitViewport(() => {
            if (this.scrollMonitoringEnabled &&
                nextSection &&
                elementWatcher.isAboveViewport) {
                  // When one section exits the viewport at the top, set the next section's link to be active
              this.activeLinkHref = linkHref;
            }
          });

          // Scroll Up Behavior
          elementWatcher.enterViewport(() => {
            if (this.scrollMonitoringEnabled &&
                !elementWatcher.isBelowViewport) {
                  this.activeLinkHref = linkHref;
            }
          });

          // Highlight the last item in the nav when the last section is fully scrolled into view
          if (!nextSection) {
            elementWatcher.fullyEnterViewport(() => {
              if (this.scrollMonitoringEnabled) {
                this.activeLinkHref = linkHref;
              }
            });
          }
        }
      });
    },
    generatePageSectionMarkers(topPosition, bottomPosition) {
        let topMarker = document.createElement('div'),
            bottomMarker = document.createElement('div');

        topMarker.style.width = "100%";
        topMarker.style.height = "1px";
        topMarker.style.backgroundColor = "red";
        topMarker.style.position = "absolute";
        topMarker.style.left = 0;
        topMarker.style.top = `${topPosition}px`;

        bottomMarker.style.width = "100%";
        bottomMarker.style.height = "1px";
        bottomMarker.style.backgroundColor = "blue";
        bottomMarker.style.position = "absolute";
        bottomMarker.style.left = 0;
        bottomMarker.style.top = `${bottomPosition}px`;


        document.body.appendChild(topMarker);
        document.body.appendChild(bottomMarker);
    },
    setActiveLinkFromUrl(activeLinkParam) {
      this.activeLinkHref = `#${activeLinkParam}`;
      this.softScrollToAnchoredSection(this.activeLinkHref);
    },
    setStickyPositioning(Stickyfill) {
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
    handleAnchorLinkClick(id, event) {
      event.preventDefault(); // Intercept click event
      this.activeLinkHref = id;
      this.softScrollToAnchoredSection(id);
    },
    softScrollToAnchoredSection(id) {
      this.scrollMonitoringEnabled = false; // disable scrollMonitoring while soft scrolling to a specific section
      this.$router.replace(
        { query: Object.assign({}, this.$route.query, { 'active-link': id.replace('#', '') }) },
        () => {
          const anchoredSection = document.querySelector(id);
          const scrollPosition = anchoredSection.offsetTop;
    
          window.scroll({
            top: scrollPosition,
            left: 0,
            behavior: 'smooth'
          });
    
    
          setTimeout(() => {
            this.scrollMonitoringEnabled = true;
          }, 1500); // window.scroll smooth offers no callback, so re-enable scrollmonitoring hopefully after the soft scroll has occurred
        }
      );
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
    display: block;
    position: relative;

    &:focus,
    &:active {
      outline: none;
    }
  }

  .cdr-doc-local-anchor-nav__link--active {
    text-decoration: underline;
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

  .cdr-doc-local-anchor-nav__appended-items {
    list-style: none;
    padding: 0;
    margin-top: $space-2-x;
  }

  .cdr-doc-local-anchor-nav__appended-item-link {
    @include redwood-display-20;
  }

  .cdr-doc-local-anchor-nav__appended-item-header {
    @include redwood-display-30;
    color: $cdr-doc-text-color-primary;
  }
</style>
