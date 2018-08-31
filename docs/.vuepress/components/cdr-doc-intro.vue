<template>
  <div class="cdr-doc-intro" :class="[size ? `cdr-doc-intro--${size}` : '']">
    <div class="cdr-doc-intro__inner">
        <ul class="cdr-doc-intro__breadcrumbs" v-if="breadcrumbs">
          <li v-for="breadcrumb in breadcrumbs" :key="breadcrumb.text">
            <a :href="breadcrumb.href" class="cdr-doc-intro__breadcrumb-link">{{ breadcrumb.text }}</a>
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
  
  $background-color-intro: #46522C; // Copied from InVision comp
  $text-color-intro: $clean-slate;

  .cdr-doc-intro {
    background: $background-color-intro;
    color: $text-color-intro;
    padding: $space-4-x $space-1-x;
  }

  .cdr-doc-intro--small {
    padding: $space-2-x $space-1-x;
  }

  .cdr-doc-intro__inner {
    margin: 0 auto;
    max-width: $cdr-doc-content-max-width;
  }

  .cdr-doc-intro__title {
    @include spruce-display-80;
    margin: 0;
    // padding-bottom: $space-1-x;
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
    margin: 0;
    margin-bottom: $space-half-x;

    .cdr-doc-intro__title + & {
      border-top: solid 1px $grey-matter;
      margin-top: $space-1-x;
      padding-top: $space-1-x;
    }
  }

  .cdr-doc-intro__summary {
    @include redwood-display-60;
    margin: 0;
    
    .cdr-doc-intro__title + & {
      border-top: solid 1px $grey-matter;
      margin-top: $space-1-x;
      padding-top: $space-1-x;
    }
  }
</style>
