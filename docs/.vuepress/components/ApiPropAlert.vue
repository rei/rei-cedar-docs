<template>
  <div class="api-prop-alert" :class="'alert-' + alert.type">
    <div class="api-prop-alert__message prop-description">
      <cdr-icon
        class="api-prop-alert-icon"
        use="#information-fill"
        alt="Prop updated information icon"
        v-if="alert.type === 'updated'"
      />
      <cdr-icon
        class="api-prop-alert-icon"
        use="#warning-fill"
        alt="Prop deprecated warning icon"
        v-if="alert.type === 'deprecated'"
      />
      {{ alert.description }}
    </div>
  </div>
</template>

<script>

  export default {
    name: 'ApiPropAlert',
    props: {
      alert: {
        type: Object
      }
    }
  };
</script>

<style lang="scss">

  @import '../theme/styles/cdr-tokens.scss';
  .api-prop-alert {
    margin-bottom: 10px;
    padding-left: 8px;

    .api-prop-alert__message {
      background-color: #fff;
      padding: 8px 0 8px 8px;
    }
  }

  .api-prop-alert.alert-updated {
    // TODO:
    background-color: #3278ae;
    border: 1px solid #3278ae;

    .api-prop-alert-icon {
      fill: #3278ae;
    }
  }

  .api-prop-alert.alert-deprecated {
    background-color: $cdr-color-background-warning;
    border: 1px solid $cdr-color-border-warning;

    .api-prop-alert-icon {
      fill: $cdr-color-text-warning;
    }
  }

</style>
