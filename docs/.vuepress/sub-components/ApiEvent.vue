<template>
  <div>
    <div class="api-event" v-for="apiEvent in $page.frontmatter.versions[0].api.events" :key="apiEvent.text">
      <cdr-row
        gutter="none"
      >
        <cdr-col
          span="6"
        >
          <div>
            <p class="event-name">{{ apiEvent.name }}</p>
            <p class="event-label">name</p>
          </div>
        </cdr-col>
        <cdr-col
          span="6"
        >
          <div>
            <p class="event-type">{{ apiEvent.type }}</p>
            <p class="event-label">value</p>
          </div>
        </cdr-col>
        <cdr-col
          span="12"
        >
          <p class="event-description">
            {{ apiEvent.description }}
          </p>
        </cdr-col>
      </cdr-row>
    </div>
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

    & + & {
      margin-top: $space-1-x;
    }
  }
</style>