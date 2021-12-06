<template>
  <div class="two-column__wrap">
    <cdr-grid class="two-column__grid">
      <div
        v-for="(example, idx) in examples"
        :key="`${example.type}${idx}`"
      >
        <figure class="two-column">
          <cdr-img
            class="two-column__image"
            :src="$withBase(`/${example.image}`)"
            :ratio="getRatio(example.ratio) || '16-9'"
            :alt="example.alt || ''" />
          <figcaption class="two-column__caption">
            <span>{{ example.caption }}</span>
            <slot/>
          </figcaption>
        </figure>
      </div>
    </cdr-grid>
  </div>
</template>

<script>
export default {
  name: "TwoColumnCaptionedImages",
  props: {
    examples: {
      type: Array,
    }
  },
  methods: {
    getRatio(ratio) {
      if (ratio) {
        return ratio.replace(':', '-');
      }
      return false;
    }
  }
}
</script>

<style lang="scss">
@import '../theme/styles/cdr-tokens.scss';

.two-column {
  &__grid {
    grid-template-columns: 1fr 1fr;
    @include cdr-xs-mq-only {
        grid-column: 1 / span 2;
    }
  }
  &__image {
    border: 1px solid $cdr-color-border-primary;
    border-radius: $cdr-radius-softer;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background-color: #fff;
  }

  &__caption {
    @include cdr-text-utility-sans-200;

    &::before {
      content: '';
      display: block;
      width: 100%;
      border: none;
      border-bottom-left-radius: $cdr-radius-softer;
      border-bottom-right-radius: $cdr-radius-softer;
      margin-bottom: 8px;
    }
  }

  &__type {
    font-weight: bold;
  }

  &__wrap {
    & + & {
      margin-top: 16px;
    }
  }
}
</style>
