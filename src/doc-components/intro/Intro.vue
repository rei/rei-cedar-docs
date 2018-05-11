<template>
  <div class="cdr-doc-intro">
    <div class="cdr-doc-intro__inner">
        <ul class="cdr-doc-intro__breadcrumbs" v-if="breadcrumbs">
          <li v-for="breadcrumb in breadcrumbs">
            <a :href="breadcrumb.href" class="cdr-doc-intro__breadcrumb-link">{{ breadcrumb.text }}</a>
          </li>
        </ul>
        <h1 class="cdr-doc-intro__title">{{ title }}</h1>
        <h2 class="cdr-doc-intro__title-metadata" v-if="metadata">{{ metadata }}</h2>
        <p class="cdr-doc-intro__summary">
          <slot>
            Buttons are used to invoke an event and communicate the action that will occur.
          </slot>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CdrDocIntro',
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
  $background-color-intro: $crimp-son-and-clover;
  $text-color-intro: $clean-slate;
  $content-max-width: 900px;

  .cdr-doc-intro {
    background: $background-color-intro;
    color: $text-color-intro;
    padding: $space-4-x $space-1-x;
  }

  .cdr-doc-intro__inner {
    margin: 0 auto;
    max-width: $content-max-width;
  }

  .cdr-doc-intro__title {
    @include spruce-display-80;
    border-bottom: solid 1px $text-color-intro;
    margin-bottom: $space-1-x;
    padding-bottom: $space-1-x;
  }

  .cdr-doc-intro__breadcrumbs {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .cdr-doc-intro__breadcrumb-link {
    @include spruce-display-00;
    color: $text-color-intro;
    margin-right: $space-half-x;

    &:hover {
      color: $text-color-intro;
    }
  }

  .cdr-doc-intro__title-metadata {
    @include redwood-display-20;
    margin-bottom: $space-half-x;
  }

  .cdr-doc-intro__summary {
    @include redwood-display-60;
  }
</style>
