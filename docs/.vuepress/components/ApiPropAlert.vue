<template>
  <div class="api-prop-alert" :class="'alert-' + alert.type">
    <div class="api-prop-alert__message prop-description">
      <icon-information-fill 
        class="api-prop-alert-icon"
        v-if="alert.type === 'updated'" />
      <icon-warning-tri
        class="api-prop-alert-icon"
        v-if="alert.type === 'deprecated'" />
      {{ alert.description }}
    </div>
  </div>
</template>

<script>
  import { IconInformationFill, IconWarningTri } from "@rei/cdr-icon";

  export default {
    name: 'ApiPropAlert',
    components: {
      IconInformationFill,
      IconWarningTri
    },
    props: {
      alert: {
        type: Object
      }
    }
  };
</script>

<style lang="scss">
  .api-prop-alert {
    margin-bottom: 10px;
    padding-left: 8px;

    .api-prop-alert__message {
      background-color: #fff;
      padding: 8px 0 8px 8px;
    }
  }

  .api-prop-alert.alert-updated {
    background-color: #3278ae;
    border: 1px solid #3278ae;

    .api-prop-alert-icon {
      fill: #3278ae;
    }
  }

  .api-prop-alert.alert-deprecated {
    background-color: #c77523;
    border: 1px solid #c77523;

    .api-prop-alert-icon {
      fill: #c77523;
    }
  }

</style>