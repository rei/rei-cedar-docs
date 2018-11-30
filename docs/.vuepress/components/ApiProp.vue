<template>
  <div>
    <div class="api-prop" v-for="(apiProp, index) in apiData" :key="apiProp.text">
      <cdr-row
        gutter="none"
      >
        <cdr-col
          span="12"
        >
          <div class="api-prop-alert">
            <div class="api-prop-alert__message prop-description">
              Deprecated in v2.0.0
            </div>
          </div>
        </cdr-col>
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
          <div class="prop-description-container">
            <!-- <p v-if="apiProp.context" class="prop-description">
              <span class="prop-context-badge">{{ apiProp.context.label }}</span> {{ apiProp.context.description }}
            </p> -->
            <p aria-lable="prop description" class="prop-description">
              {{ apiProp.description }}
            </p>
          </div>
        </cdr-col>
      </cdr-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ApiProp',
    props: ['apiData'],
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
      font-size: 14px;
      margin-bottom: 0px;
    }

    .prop-label {
      color: $coal-train;
      font-size: 9px;
    }

    .prop-description {
      font-size: 14px;
    }

    .api-prop-alert {
      background-color: #3278ae;
      border: 1px solid #3278ae;
      margin-bottom: 10px;
      padding-left: 5px;

      .api-prop-alert__message {
        background-color: #fff;
        padding: 5px 0 5px 5px;
      }
    }

    & + & {
      margin-top: $space-1-x;
    }
  }
</style>