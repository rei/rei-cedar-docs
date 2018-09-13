<template>
  <div>
    <div class="api-event" v-for="(apiEvent, index) in apiData" :key="apiEvent.text">
      <cdr-row
        gutter="none"
      >
        <cdr-col
          span="12 6@sm"
        >
          <div>
            <p :aria-labelledby="'eventName' + index" class="event-name">{{ apiEvent.name }}</p>
            <p :id="'eventName' + index" class="event-label">name</p>
          </div>
        </cdr-col>
        <cdr-col
          span="12 6@sm"
        >
          <div>
            <p :aria-labelledby="'eventType' + index" class="event-type">{{ apiEvent.arguments }}</p>
            <p :id="'eventType' + index" class="event-label">arguments</p>
          </div>
        </cdr-col>
        <cdr-col
          span="12"
        >
          <p aria-lable="event description" class="event-description">
            {{ apiEvent.description }}
          </p>
        </cdr-col>
      </cdr-row>
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
    background-color: $clean-slate;
    border: 1px solid $partly-cloudy;
    border-radius: 4px;
    padding: $space-half-x;

    .event-name {
      color: $quick-fixe;
      font-size: 14px;
      margin-bottom: 0px;
    }
    
    .event-type {
      color: $dehydrated-lemon;
      font-size: 14px;
      margin-bottom: 0px;
    }

    .event-label {
      color: $coal-train;
      font-size: 9px;
    }

    .prop-description {
      font-size: 14px;
    }

    & + & {
      margin-top: $space-1-x;
    }
  }
</style>