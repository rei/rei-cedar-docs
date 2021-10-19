<template>
  <div>
    <p v-if="slotsGettingStartedLink">Find more information about using Slots in the article <cdr-link :href="$withBase('/getting-started/as-a-developer/#add-content-using-slots')">Getting Started as a Developer.</cdr-link></p>

    <div class="api-slot" v-for="(apiSlot, index) in apiData" :key="apiSlot.text">
      <cdr-grid
        gutter="none"
        class="api-slot__grid"
      >
        <div
          v-if="apiSlot.alert"
        >
          <api-prop-alert :alert="apiSlot.alert" />
        </div>
        <div
          
        >
          <div>
            <p :aria-labelledby="'slotName' + index" class="slot-name">{{ apiSlot.name }}</p>
            <p :id="'slotName' + index" class="slot-label">name </p>
          </div>
        </div>
        <div
          
        >
          <p aria-label="slot description" class="slot-description">
            {{ apiSlot.description }}
          </p>
        </div>
      </cdr-grid>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ApiEvent',
    props: ["apiData", "slotsGettingStartedLink"],
  };
</script>

<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';

  .api-slot {
    background-color: $cdr-color-background-primary;
    border: 1px solid $cdr-color-border-primary;
    border-radius: 4px;
    padding: $cdr-space-half-x;

    &__grid {
      grid-template-columns: 1fr;
    }

    .slot-name {
      font-size: 14px;
      margin-bottom: 0px;
    }

    .slot-type {
      font-size: 14px;
      margin-bottom: 0px;
    }

    .slot-label {
      color: $cdr-color-text-secondary;
      font-size: 9px;
    }

    .slot-description {
      font-size: 14px;
    }

    & + & {
      margin-top: $cdr-space-one-x;
    }
  }
</style>
