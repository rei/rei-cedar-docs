<template>
  <div class="api-prop">
    <cdr-row
      gutter="none"
    >
      <cdr-col
        span="6"
        spanSm="3"
      >
        <div>
          <p class="prop-name">cycle</p>
          <p class="prop-label">name</p>
        </div>
      </cdr-col>
      <cdr-col
        span="6"
        spanSm="3"
      >
        <div>
          <p class="prop-type">Boolean</p>
          <p class="prop-label">type</p>
        </div>
      </cdr-col>
      <cdr-col
        span="6"
        spanSm="6"
      >
        <div>
          <p class="prop-default">false</p>
          <p class="prop-label">Default</p>
        </div>
      </cdr-col>
      <cdr-col
        span="12"
      >
        <p class="prop-description">
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
    name: 'ApiProp',
    components: {
      CdrCol,
      CdrRow
    }
  };
</script>

<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';

  .api-prop {
    background-color: $clean-slate;
    border: 1px solid $partly-cloudy;
    border-radius: 4px;
    padding: $space-half-x;

    .prop-name {
      color: $quick-fixe;
      font-size: 14px;
      margin-bottom: 0px;
    }
    
    .prop-type {
      color: $dehydrated-lemon;
      font-size: 14px;
      margin-bottom: 0px;
    }

    .prop-default {
      color: $cdr-doc-text-color-primary;
      font-size: 12px;
      margin-bottom: 0px;
    }

    .prop-label {
      color: $coal-train;
      font-size: 9px;
    }

    .prop-description {
      font-size: 14px;
    }
  }
</style>