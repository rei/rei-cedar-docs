<template>
  <div class="rei-doc-alert">
    <icon-information-stroke class="rei-doc-alert__icon"/>
    <slot>Last updated on July 2, 2018. Consistent with v 2.0.1</slot>
  </div>
</template>

<script>
import { IconInformationStroke } from '@rei/cdr-icon';

export default {
  name: 'CdrDocAlert',
  components: {
    IconInformationStroke
  }
}
</script>
<style lang="scss">
  @import '../../../assets/css/cedar-tokens.scss';
  $text-color-primary: $coal-train;
  $border-color: $partly-cloudy;
  $icon-color: $holy-smoke;

  .rei-doc-alert {
    @include redwood-display-10;
    align-items: center;
    border: solid 1px $border-color;
    border-radius: $radius-soft;
    box-sizing: border-box;
    color: $text-color-primary;
    display: flex;
    padding: $inset-quarter-x;
  }

  .rei-doc-alert .rei-doc-alert__icon {
    fill: $icon-color;
    height: $icon-size-sm;
    margin-right: $space-quarter-x;
    width: $icon-size-sm;
  }
</style>
