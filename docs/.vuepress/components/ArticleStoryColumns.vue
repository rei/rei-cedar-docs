<template>
  <cdr-grid 
    class="article-story-columns"
    :class="[hasThreeSlots
      ? 'article-story-columns--3-slots'
      : 'article-story-columns--2-slots']"
  >
    <div class="article-story-columns__col">
      <a :href="link1">
        <div class="article-story-columns__image">
          <slot name="col-1-img"/>
        </div>
        <div class="article-story-columns__title">
          <slot name="col-1-title"/>
        </div>
        <div class="article-story-columns__text">
          <slot name="col-1-text"/>
        </div>
        </a>
    </div>
    <div class="article-story-columns__col">
      <a :href="link2">
        <div class="article-story-columns__image">
          <slot name="col-2-img"/>
        </div>
        <div class="article-story-columns__title">
          <slot name="col-2-title"/>
        </div>
        <div class="article-story-columns__text">
          <slot name="col-2-text"/>
        </div>
        </a>
    </div>
    <div
      v-if="hasThreeSlots"
      class="article-story-columns__col"
    >
      <a :href="link3">
        <div class="article-story-columns__image">
          <slot name="col-3-img"/>
        </div>
        <div class="article-story-columns__title">
          <slot name="col-3-title"/>
        </div>
        <div class="article-story-columns__text">
          <slot name="col-3-text"/>
        </div>
      </a>
    </div>
  </cdr-grid>
</template>
<script>
export default {
  name: 'ArticleStoryColumns',
  props: {
    link1: {type: String, default: undefined},
    link2: {type: String, default: undefined},
    link3: {type: String, default: undefined},
  },
  computed: {
    hasThreeSlots() {
      return this.$slots['col-3-img'] && this.$slots['col-3-title'];
    }
  }
}
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  .article-story-columns {
    &--2-slots {
      grid-template-columns: 1fr 1fr;
      @include cdr-xs-mq-only {
        grid-template-columns: 1fr;
      }
    }
    &--3-slots {
      grid-template-columns: 1fr 1fr 1fr;
      @include cdr-xs-mq-only {
        grid-template-columns: 1fr;
      }
    }
    &__col {
      display: inherit;
      grid-auto-flow: row;
      & a {
        display: inherit!important;
        color: $cdr-color-text-primary!important;
        text-decoration: none!important;
      }
      & a:hover {
        & .article-story-columns__title {
          text-decoration: underline!important;
        }
      }
    }
    &__title {
      margin-top: $cdr-space-half-x;
      margin-bottom: $cdr-space-half-x;
      @include cdr-text-utility-sans-strong-300
    }
  }
</style>