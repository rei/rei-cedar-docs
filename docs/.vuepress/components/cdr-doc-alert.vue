<template>
  <div :class="['rei-doc-alert', colorClass]">
    <cdr-icon 
      class="rei-doc-alert__icon"
      use="#information-stroke" 
      alt="Information icon" 
      v-if="icon === 'info'"
    />
    <cdr-icon 
      class="rei-doc-alert__icon"
      use="#warning-tri" 
      alt="Warning icon" 
      v-if="icon === 'warning'"
    />
    <div>
      <slot>Last updated on September 23, 2019. Consistent with `@rei/cedar-icons` 1.0.0.</slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CdrDocAlert',
  props: {
    icon: {
      type: String,
      default: 'info',
      validator: value => (['info', 'warning'].indexOf(value) >= 0) || false,
    }
  },
  computed: {
    colorClass() {
      return this.icon === 'info' ? 'alert-color-info' : 'alert-color-warning';
    }
  }
}
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';
  $text-color-primary: $coal-train;
  $border-color: $partly-cloudy;
  $icon-color: $holy-smoke;

  .rei-doc-alert {
    @include redwood-display-10;
    font-size: 14px;
    line-height: 18px;
    align-items: center;
    border: solid 1px $border-color;
    border-radius: $cdr-radius-soft;
    box-sizing: border-box;
    color: #2a2a2a;
    display: flex;
    margin-bottom: $cdr-space-one-x;
    padding: $cdr-space-half-x $cdr-space-inset-three-quarter-x;
    fill: $holy-smoke;

    &.alert-color-warning {
      fill: #c77523;
      border-left: 8px solid #c77523;
      border-color: #c77523;
    }

    &.alert-color-info {
      fill: #3278ae;
      border-left: 8px solid #3278ae;
      border-color: #3278ae;
    }

    strong {
      display: block;
      margin-bottom: $cdr-space-half-x;
    }
  }

  .rei-doc-alert .rei-doc-alert__icon {
    fill: inherit;
    // height: $icon-size-sm;
    margin-right: $cdr-space-three-quarter-x;
    align-self: flex-start;
    // width: $icon-size-sm;
  }
</style>
