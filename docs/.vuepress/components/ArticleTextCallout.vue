<template>
  <div class="article-text-callout">
    <p class="article-text-callout__body">
      <slot/>
    </p>
  </div>
</template>
<script>
export default {
  name: 'ArticleTextCallout',
}
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';

  .article-text-callout {
    margin-left: $cdr-space-two-x;
    border-left: 0.4rem solid $cdr-color-border-primary;
    &__body {
      color: $cdr-color-text-primary;
      font-family: Graphik, "Helvetica Neue", sans-serif;
      font-size: 2.6rem;
      line-height: 3.9rem;
      padding: 0 $cdr-space-two-x;
    }
  }
</style>