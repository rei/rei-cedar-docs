<template>
  <nav class="rei-doc-local-anchor-nav">
    <ul>
      <li v-for="link in links">
        <a :href="link.href">{{ link.text }}</a>
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
      anchorElements.forEach(anchorElement => {
        let anchorId = anchorElement.getAttribute('id');
        const text = anchorElement.textContent;
        if (anchorId === null) {
          // If the Dom element doesn't already have an id, create one from its textContent and set it
          anchorId = slugify(text);
          anchorElement.setAttribute('id', anchorId);
        }

        links.push({
          href: `#${anchorId}`,
          text: text
        })
      });

      this.links = links;
    }
  }
}
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';

</style>
