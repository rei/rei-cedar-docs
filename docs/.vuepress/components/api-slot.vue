<template>
  <div class="api-slot">
    <cdr-row
      gutter="none"
    >
      <cdr-col
        span="12"
      >
        <div>
          <p class="slot-name">default</p>
          <p class="slot-label">name</p>
        </div>
      </cdr-col>
      <cdr-col
        span="12"
      >
        <p class="slot-description">
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

  .api-slot {
    background-color: $clean-slate;
    border: 1px solid $partly-cloudy;
    border-radius: 4px;
    padding: $space-half-x;

    .slot-name {
      color: $quick-fixe;
      font-size: 14px;
      margin-bottom: 0px;
    }
    
    .slot-type {
      color: $dehydrated-lemon;
      font-size: 14px;
      margin-bottom: 0px;
    }

    .slot-label {
      color: $coal-train;
      font-size: 9px;
    }

    .prop-description {
      font-size: 14px;
    }
  }
</style>