<template>
  <nav class="cdr-doc-local-anchor-nav">
    <ul class="cdr-doc-local-anchor-nav__list">
      <li v-for="link in links" class="cdr-doc-local-anchor-nav__list-item" :class="{'cdr-doc-local-anchor-nav__list-item--parent': !link.isChild, 'cdr-doc-local-anchor-nav__list-item--child': link.isChild }">
        <a class="cdr-doc-local-anchor-nav__link" :class="{'cdr-doc-local-anchor-nav__link--parent': !link.isChild, 'cdr-doc-local-anchor-nav__link--child': link.isChild }" :href="link.href">{{ link.text }}</a>
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
      type: String,
      default: 'h3'
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
  },
  methods: {
    createAnchorsFromContent () {
      const selectors = `${this.parentSelectors}, ${this.childSelectors}`;
      const anchorElements = document.querySelectorAll(selectors);
      const links = [];
      const anchorIds = [];

      anchorElements.forEach(anchorElement => {
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
      });

      this.links = links;
    }
  }
}
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';

  .cdr-doc-local-anchor-nav__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .cdr-doc-local-anchor-nav__link {
    @include redwood-display-20;
    display: block;
  }

  .cdr-doc-local-anchor-nav__link--child {
    padding-left: 10px;

    &:before {
      content: ' - ';
    }
  }

  .cdr-doc-local-anchor-nav__list-item--parent {
    .cdr-doc-local-anchor-nav__list-item--child + & {
      margin-top: 8px;
    }
  }
</style>
