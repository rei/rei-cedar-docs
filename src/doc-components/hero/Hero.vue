<template>
  <div class="cdr-doc-hero">
    <div class="cdr-doc-hero__inner">
        <ul class="cdr-doc-hero__breadcrumbs" v-if="breadcrumbs">
          <li v-for="breadcrumb in breadcrumbs">
            <a :href="breadcrumb.href" class="cdr-doc-hero__breadcrumb-link">{{ breadcrumb.text }}</a>
          </li>
        </ul>
        <h1 class="cdr-doc-hero__title">{{ title }}</h1>
        <h2 class="cdr-doc-hero__title-metadata" v-if="metadata">{{ metadata }}</h2>
        <p class="cdr-doc-hero__summary">
          <slot>
            Buttons are used to invoke an event and communicate the action that will occur.
          </slot>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CdrDocHero',
  props: {
    breadcrumbs: {
      type: Array,
      default: [
        {
          text: 'Components/',
          href: '#'
        }
      ]
    },
    title: {
      type: String,
      default: 'Button'
    },
    metadata: {
      type: String,
      default: 'Also known as a Call-to-Action (CTA)'
    }
  }
}
</script>
<style lang="scss">
  @import '../../../assets/css/cedar-tokens.scss';
  $background-color-hero: $crimp-son-and-clover;
  $text-color-hero: $clean-slate;
  $content-max-width: 900px;

  .cdr-doc-hero {
    background: $background-color-hero;
    color: $text-color-hero;
    padding: $space-4-x $space-1-x;
  }

  .cdr-doc-hero__inner {
    margin: 0 auto;
    max-width: $content-max-width;
  }

  .cdr-doc-hero__title {
    @include spruce-display-80;
    border-bottom: solid 1px $text-color-hero;
    margin-bottom: $space-1-x;
    padding-bottom: $space-1-x;
  }

  .cdr-doc-hero__breadcrumbs {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .cdr-doc-hero__breadcrumb-link {
    @include spruce-display-00;
    color: $text-color-hero;
    margin-right: $space-half-x;

    &:hover {
      color: $text-color-hero;
    }
  }

  .cdr-doc-hero__title-metadata {
    @include redwood-display-20;
    margin-bottom: $space-half-x;
  }

  .cdr-doc-hero__summary {
    @include redwood-display-60;
  }
</style>
