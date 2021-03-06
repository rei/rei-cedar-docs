<template>
  <div class="cdr-doc-intro" :class="[size ? `cdr-doc-intro--${size}` : '']">
    <div class="cdr-doc-intro__inner">
        <ul class="cdr-doc-intro__breadcrumbs" v-if="breadcrumbs">
          <li v-for="breadcrumb in breadcrumbs" :key="breadcrumb.text">
            <p class="cdr-doc-intro__breadcrumb-link">{{ breadcrumb.text }}</p>
          </li>
        </ul>
        <h1 class="cdr-doc-intro__title">{{ title }}</h1>
        <h2 class="cdr-doc-intro__title-metadata" v-if="metadata">{{ metadata }}</h2>
        <p class="cdr-doc-intro__summary" v-if="summary">{{ summary }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CdrDocIntro',
  props: {
    breadcrumbs: {
      type: [Array, Boolean],
      default: function () {
        return [
          {
            text: 'Components/',
            href: '#'
          }
        ];
      }
    },
    title: {
      type: String,
      default: 'I need a title'
    },
    metadata: {
      type: [String, Boolean],
      default: false
    },
    summary: {
      type: [String, Boolean],
      default: false
    },
    size: {
      type: String
    }
  }
}
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';

  .cdr-doc-intro {
    background: $cdr-color-background-secondary;
    color: $cdr-color-text-primary;
    padding: $cdr-space-four-x $cdr-space-one-x;
  }

  .cdr-doc-intro--small {
    padding: $cdr-space-two-x $cdr-space-one-x;
  }

  .cdr-doc-intro__inner {
    margin: 0 auto;
    max-width: $cdr-doc-content-max-width;
  }

  .cdr-doc-intro__title {
    @include cdr-text-heading-serif-strong-1200; // Headline but larger
    margin: 0;
    padding-bottom: $cdr-space-one-x;
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
    @include cdr-text-utility-sans-300;
    color: $cdr-color-text-primary;
    margin-right: $cdr-space-half-x;
    margin-bottom: 0;

    &:hover {
      color: $cdr-color-text-primary;
    }
  }

  .cdr-doc-intro__title-metadata {
    // @include cdr-text-default-compact;
    @include cdr-text-utility-sans-200;
    margin: 0;
    margin-bottom: $cdr-space-half-x;

    .cdr-doc-intro__title + & {
      border-top: solid 1px $cdr-color-border-primary;
      margin-top: $cdr-space-one-x;
      padding-top: $cdr-space-one-x;
    }
  }

  .cdr-doc-intro__summary {
    @include cdr-text-subheading-sans-500; // Subheadline
    margin: 0;

    .cdr-doc-intro__title + & {
      border-top: solid 1px $cdr-color-border-primary;
      margin-top: $cdr-space-one-x;
      padding-top: $cdr-space-one-x;
    }
  }
</style>
