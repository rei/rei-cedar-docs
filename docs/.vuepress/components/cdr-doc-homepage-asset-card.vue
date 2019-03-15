<template>
  <div class="cdr-doc-homepage-asset-card">
    <img class="cdr-doc-homepage-asset-card__image" :src="$withBase(imgSrc)" alt="">
    <h3 class="cdr-doc-homepage-asset-card__title">
      {{ title }}
    </h3>
    <p class="cdr-doc-homepage-asset-card__description">
      {{ description }}
    </p>
  </div>
</template>

<script>

export default {
  name: 'CdrDocHomepageAssetCard',
  props: {
    imgSrc: {
      type: String,
      default: '/cedar-for-sketch.png'
    },
    href: {
      type: String,
      default: '#'
    },
    title: {
      type: String,
      default: 'Cedar for Sketch'
    },
    description: {
      type: String,
      default: 'A UI toolkit for designers'
    }
  },
  components: {
  }
}
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';

  .cdr-doc-homepage-asset-card {
    display: block;
    margin-right: $cdr-space-four-x;
    text-align: center;

    &,
    &:hover {
      text-decoration: none;
    }

    &:last-child {
      margin: 0;
    }
  }

  .cdr-doc-homepage-asset-card__image {
    display: block;
    margin: 0 auto;
    height: 170px;
    width: 170px;
  }

  .cdr-doc-homepage-asset-card__title {
    @include redwood-display-40;
    color: $cdr-doc-text-color-primary;
    font-weight: bold;
    margin-bottom: $cdr-space-half-x;
  }

  .cdr-doc-homepage-asset-card__description {
    @include redwood-display-10;
    color: $cdr-doc-text-color-secondary;
  }

</style>
