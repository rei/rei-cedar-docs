<template>
  <cdr-row cols="1" cols-sm="2">
    <cdr-col
      v-for="(example, idx) in examples"
      :key="`${example.type}${idx}`"
      :span="example.fullWidth? '12' : '12 6@sm'"
    >
      <figure class="do-dont">
        <cdr-img
          class="do-dont__image"
          :src="$withBase(`/${example.image}`)"
          :ratio="getRatio(example.ratio) || '16-9'"
          :alt="altText(example)" />
        <figcaption :class="['do-dont__caption', typeClass(example.type)]">
          <span v-if="example.type==='do'" class="do-dont__type">Do </span>
          <span v-if="example.type==='dont'" class="do-dont__type">Don't </span>
          <component :is="`comp-${example.type}${idx}`" />
          <!-- <component :is="compiled(`${example.type}${idx}`, example.caption)" /> -->
          <slot/>
        </figcaption>
      </figure>
    </cdr-col>
  </cdr-row>
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
  beforeMount() {
    this.examples.forEach((example, idx) => {
      this.$options.components[`comp-${example.type}${idx}`] = { ...Vue.compile(`<span>${example.caption}</span>`) };
    })
  },
  methods: {
    altText(ex) {
      if (ex.alt) return ex.alt;
      else if (!ex.alt && ex.type === 'do') return 'Do example image';
      else return `Don't example image`;
    },
    typeClass(type) {
      return {
        'do-dont__caption--do': type === 'do',
        'do-dont__caption--dont': type === 'dont',
      }
    },
    compiled(id, template) {
      this.$options.components[`comp-${id}`] = { ...Vue.compile(`<span>${template}</span>`) };

      return `comp-${id}`;
    },
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

$do-color: $instant-winner;
$dont-color: $quick-fixe;

.do-dont {

  &__image {
    border: 1px solid $partly-cloudy;
    border-radius: $radius-softer;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: none;
    background-color: #fff;
  }

  &__caption {
    @include maple-utility-20();

    &::before {
      content: '';
      display: block;
      height: 8px;
      width: 100%;
      border: none;
      border-bottom-style: solid;
      border-bottom-width: 8px;
      border-bottom-left-radius: $radius-softer;
      border-bottom-right-radius: $radius-softer;
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
  }

  &__type {
    font-weight: bold;
  }
}
</style>
