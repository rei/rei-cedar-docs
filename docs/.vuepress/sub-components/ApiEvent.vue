<template>
  <div class="api-event">
    <cdr-row
      gutter="none"
    >
      <cdr-col
        span="6"
      >
        <div>
          <p class="event-name">input</p>
          <p class="event-label">name</p>
        </div>
      </cdr-col>
      <cdr-col
        span="6"
      >
        <div>
          <p class="event-type">String</p>
          <p class="event-label">value</p>
        </div>
      </cdr-col>
      <cdr-col
        span="12"
      >
        <p class="event-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia quibusdam obcaecati quos, corporis porro ipsa et hic
        </p>
      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
  import { CdrCol } from '@rei/cdr-col'
  import { CdrRow } from '@rei/cdr-row'
  
  export default {
    name: 'ApiEvent',
    components: {
      CdrCol,
      CdrRow
    }
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
  }
</style>