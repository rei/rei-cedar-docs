<template>
  <div class="do-dont__wrap">
    <cdr-grid class="do-dont__grid">
      <div
        v-for="(example, idx) in examples"
        :key="`${example.type}${idx}`"
        :class="example.fullWidth? 'do-dont__grid--full' : 'do-dont__grid--half'"
      >
        <figure class="do-dont">
          <cdr-img
            class="do-dont__image"
            :src="$withBase(`/${example.image}`)"
            :ratio="getRatio(example.ratio) || '16-9'"
            :alt="example.alt || ''" />
          <figcaption :class="['do-dont__caption', `do-dont__caption--${example.type}`]">
            <span v-if="example.type==='do'" class="do-dont__type">Do </span>
            <span v-if="example.type==='dont'" class="do-dont__type">Don't </span>
            <span v-if="example.type==='caution'" class="do-dont__type">Take Caution </span>
            <span>{{ example.caption }}</span>
            <slot/>
          </figcaption>
        </figure>
      </div>
    </cdr-grid>
  </div>
</template>

<script>
import Vue from '$vue';

export default {
  name: "DoDont",
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

$do-color: $cdr-color-text-success;
$dont-color: $cdr-color-text-error;
$caution-color: $cdr-color-text-warning;

.do-dont {
  &__grid {
    grid-template-columns: 1fr 1fr;
    &--full {
      grid-column: 1 / span 2;
    }
    &--half {
      @include cdr-xs-mq-only {
        grid-column: 1 / span 2;
      }
    }
  }
  &__image {
    border: 1px solid $cdr-color-border-primary;
    border-radius: $cdr-radius-softer;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: none;
    background-color: #fff;
  }

  &__caption {
    @include cdr-text-utility-sans-200;

    &::before {
      content: '';
      display: block;
      height: 8px;
      width: 100%;
      border: none;
      border-bottom-style: solid;
      border-bottom-width: 8px;
      border-bottom-left-radius: $cdr-radius-softer;
      border-bottom-right-radius: $cdr-radius-softer;
      margin-bottom: 8px;
    }

    &--do {
      &::before {
        border-color: $do-color;
      }

      & > .do-dont__type {
        color: $do-color;
      }
    }

    &--dont {
      &::before {
        border-color: $dont-color;
      }

      & > .do-dont__type {
        color: $dont-color;
      }
    }

    &--caution {
      &::before {
        border-color: $caution-color;
      }

      & > .do-dont__type {
        color: $caution-color;
      }
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
