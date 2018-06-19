<template>
<div class="do-dont">
  <figure class="do-dont__figure do-dont__figure--do">
    <img
      class="do-dont__image"
      :src="$withBase(`/${doExample.image}`)"
      :alt="doAlt">
    <figcaption class="do-dont__caption">
      <span class="do-dont__type">Do </span>
      <span v-html="doExample.caption"/>
    </figcaption>
  </figure>
  <figure class="do-dont__figure do-dont__figure--dont">
    <img
      class="do-dont__image"
      :src="$withBase(`/${dontExample.image}`)"
      :alt="dontAlt">
    <figcaption class="do-dont__caption">
      <span class="do-dont__type">Don't </span>
      <span v-html="dontExample.caption"/>
    </figcaption>
  </figure>
</div>
</template>

<script>
export default {
  name: "DoDont",
  props: {
    doExample: {
      type: Object,
    },
    dontExample: {
      type: Object
    }
  },
  computed: {
    doAlt() {
      return this.doExample.alt || 'Do example image';
    },
    dontAlt() {
      return this.dontExample.alt || `Don't example image`;
    }
  }
}
</script>

<style lang="scss">
@import '../theme/styles/cdr-tokens.scss';

$do-color: $crimp-son-and-clover;
$dont-color: $high-stakes;

.do-dont {
  display: flex;
  justify-content: space-between;
  align-content: stretch;
  margin-bottom: 8px;

  &__image {
    border: 1px solid $partly-cloudy;
    border-bottom-width: 8px;
    border-radius: $radius-softer;
    width: 100%;
    display: block;
    margin-bottom: 8px;
  }

  &__caption {
    @include maple-utility-30();
  }

  &__type {
    font-weight: bold;
  }

  &__figure {
    flex: 0 1 calc(50% - 16px);

    &--do {
      & > .do-dont__image {
        border-bottom-color: $do-color;
      }

      & .do-dont__type {
        color: $do-color;
      }
    }

    &--dont {
      & > .do-dont__image {
        border-bottom-color: $dont-color;
      }

      & .do-dont__type {
        color: $dont-color;
      }
    }
  }
}
</style>
