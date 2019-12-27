<template>
  <div class="cdr-doc-table-of-contents-shell">
    <cdr-doc-local-anchor-nav
      :tab-name="tabName"
      :parent-selectors="parentSelectors"
      :child-selectors="childSelectors"
      :links="links"
      :appended-items="appendedNavItems"/>

    <slot/>
  </div>
</template>

<script>
import slugify from '../../../utils/slugify.js';

export default {
  name: 'CdrDocTableOfContentsShell',
  props: {
    appendedNavItems: {
      type: Array,
      default: function() {
        return [];
      }
    },
    tabName: {
      type: [String, Boolean],
      default: false
    },
    parentSelector: {
      type: String,
      default: 'h1'
    },
    childSelector: {
      type: String,
      default: 'h2'
    },
  },
  data() {
    return {
      links: [
        {
          href: '#',
          text: 'Click Me'
        }
      ],
    }
  },
  computed: {
    parentSelectors() {
      return `.cdr-doc-table-of-contents-shell ${this.parentSelector}`
    },
    childSelectors() {
      return `.cdr-doc-table-of-contents-shell ${this.childSelector}`
    },
  },
  mounted() {
    this.createAnchorsFromContent();

    // So child elements can tell it to update toc
    // Fixes issue with rendering children that have h2/h3 not in markdown
    // Use this.$parent.$emit('update-toc');
    // See CssUtilities.vue for example (in mounted())
    this.$on('update-toc', () => {
      this.createAnchorsFromContent()
    });
  },
  methods: {
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
  }
}
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';
  @import '../theme/styles/cdr-doc-mixins.scss';

  .cdr-doc-table-of-contents-shell {
    @include cdr-doc-long-form-text;
    margin: 0 auto;
    max-width: $cdr-doc-content-max-width;
    padding-top: $cdr-space-two-x;
    padding-bottom: $cdr-doc-long-form-text-top-and-bottom-inset-space;
  }

</style>
