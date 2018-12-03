<template>
  <div class="api-prop-alert">
    <div class="api-prop-alert__message prop-description">
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

</style>