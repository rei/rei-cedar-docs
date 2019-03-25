<template>
  <div class="rei-doc-alert">
    <icon-information-stroke modifier="sm" class="rei-doc-alert__icon"/>
    <slot>Last updated on July 2, 2018. Consistent with v 1.0.0</slot>
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
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';
  $text-color-primary: $coal-train;
  $border-color: $partly-cloudy;
  $icon-color: $holy-smoke;

  .rei-doc-alert {
    @include redwood-display-10;
    align-items: center;
    border: solid 1px $border-color;
    border-radius: $cdr-radius-soft;
    box-sizing: border-box;
    color: $text-color-primary;
    display: flex;
    margin-bottom: $cdr-space-one-x;
    padding: $cdr-space-inset-quarter-x;
    fill: $holy-smoke;
  }

  .rei-doc-alert .rei-doc-alert__icon {
    fill: inherit;
    // height: $icon-size-sm;
    margin-right: $cdr-space-quarter-x;
    // width: $icon-size-sm;
  }
</style>
