<template>
  <div>
    <div class="api-prop" v-for="(apiProp, index) in this.$slots.default" :key="apiProp.text">
      <cdr-row
        gutter="none"
      >
        <cdr-col
          span="12 4@sm"
        >
          <div class="prop-wrap">
            <p :aria-labelledby="'propName' + index" class="prop-name">{{ apiProp.name }}</p>
            <p :id="'propName' + index" class="prop-label">name</p>
          </div>
        </cdr-col>
        <cdr-col
          span="12 4@sm"
        >
          <div class="prop-wrap">
            <p :aria-labelledby="'propType' + index" class="prop-type">{{ apiProp.type }}</p>
            <p :id="'propType' + 1" class="prop-label">type</p>
          </div>
        </cdr-col>
        <cdr-col
          span="12 4@sm"
        >
          <div class="prop-wrap">
            <p :aria-labelledby="'propDefault' + index" class="prop-default">{{ apiProp.default }}</p>
            <p :id="'propDefault' + index" class="prop-label">default</p>
          </div>
        </cdr-col>
        <cdr-col
          span="12"
        >
          <p aria-lable="prop description" class="prop-description">
            {{ apiProp.description }}
          </p>
        </cdr-col>
      </cdr-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ApiProp'
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

    .prop-wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

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

    & + & {
      margin-top: $space-1-x;
    }
  }
</style>