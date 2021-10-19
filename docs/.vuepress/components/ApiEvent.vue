<template>
  <div>
    <div class="api-event" v-for="(apiEvent, index) in apiData" :key="apiEvent.text">
      <cdr-grid
        gutter="none"
        class="api-event__grid">
        <div class="api-event__grid--item">
          <div v-if="apiEvent.name">
            <p :aria-labelledby="'eventName' + index" class="event-name">{{ apiEvent.name }}</p>
            <p :id="'eventName' + index" class="event-label">name</p>
          </div>
        </div>
        <div class="api-event__grid--item">
          <div v-if="apiEvent.arguments">
            <p :aria-labelledby="'eventType' + index" class="event-type">{{ apiEvent.arguments }}</p>
            <p :id="'eventType' + index" class="event-label">arguments</p>
          </div>
        </div>
        <div class="api-event__grid--full">
          <p aria-lable="event description" class="event-description">
            {{ apiEvent.description }}
          </p>
        </div>
      </cdr-grid>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ApiEvent',
    props: ['apiData'],
  };
</script>

<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';

  .api-event {
    background-color: $cdr-color-background-primary;
    border: 1px solid $cdr-color-border-primary;
    border-radius: 4px;
    padding: $cdr-space-half-x;

    &__grid {
      grid-template-columns: 1fr 1fr;
      &--item {
        @include cdr-xs-mq-only {
          grid-column: 1 / span 2;
        }
      }
      &--full {
        grid-column: 1 / span 2;
      }
    }

    .event-name {
      font-size: 14px;
      margin-bottom: 0px;
    }

    .event-type {
      font-size: 14px;
      margin-bottom: 0px;
    }

    .event-label {
      color: $cdr-color-text-secondary;
      font-size: 9px;
    }

    .event-description {
      font-size: 14px;
    }

    & + & {
      margin-top: $cdr-space-one-x;
    }
  }
</style>
