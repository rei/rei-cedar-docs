<template>
  <div class="cdr-stack--lg">
    <span :class="[token ? `cdr-doc--${token}` : '']"> {{ token }}
    </span>

    <cdr-row justify="between">
      <cdr-col span="3">
      <div> <b> font-weight: </b> {{ weight }}</div>
      </cdr-col>
      <cdr-col span="3">
        <div> <b>font-size: </b> {{ size }}</div>
      </cdr-col>
      <cdr-col span="3">
        <div> <b>line-height: </b> {{ height }}</div>
      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>

export default {
  name: 'cdrDocTypographySample',
  props: {
    token: {
      type: String
    },
    weight: {
      type: String
    },
    size: {
      type: String
    },
    height: {
      type: String
    }
  }
};
</script>

<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';

.cdr-doc--spruce-display-100 {
  @include spruce-display-100;
}
.cdr-doc--spruce-display-90 {
  @include spruce-display-90;
}
.cdr-doc--spruce-display-80 {
  @include spruce-display-80;
}
.cdr-doc--spruce-display-70 {
  @include spruce-display-70;
}
.cdr-doc--spruce-display-60 {
  @include spruce-display-60;
}
.cdr-doc--spruce-display-50 {
  @include spruce-display-50;
}
.cdr-doc--spruce-display-40 {
  @include spruce-display-40;
}
.cdr-doc--spruce-display-30 {
  @include spruce-display-30;
}
.cdr-doc--spruce-display-20 {
  @include spruce-display-20;
}
.cdr-doc--spruce-display-10 {
  @include spruce-display-10;
}
.cdr-doc--spruce-display-00 {
  @include spruce-display-00;
}
.cdr-doc--redwood-display-70 {
  @include redwood-display-70;
}
.cdr-doc--redwood-display-60 {
  @include redwood-display-60;
}
.cdr-doc--redwood-display-50 {
  @include redwood-display-50;
}
.cdr-doc--redwood-display-40 {
  @include redwood-display-40;
}
.cdr-doc--redwood-display-30 {
  @include redwood-display-30;
}
.cdr-doc--redwood-display-20 {
  @include redwood-display-20;
}
.cdr-doc--redwood-display-10 {
  @include redwood-display-10;
}
.cdr-doc--spruce-body-30 {
  @include spruce-body-30;
}
.cdr-doc--spruce-body-20 {
  @include spruce-body-20;
}
.cdr-doc--redwood-body-40 {
  @include redwood-body-40;
}
.cdr-doc--redwood-body-30 {
  @include redwood-body-30;
}
.cdr-doc--redwood-body-20 {
  @include redwood-body-20;
}
.cdr-doc--redwood-body-10 {
  @include redwood-body-10;
}
.cdr-doc--maple-utility-70 {
  @include maple-utility-70;
}
.cdr-doc--maple-utility-60 {
  @include maple-utility-60;
}
.cdr-doc--maple-utility-50 {
  @include maple-utility-50;
}
.cdr-doc--maple-utility-40 {
  @include maple-utility-40;
}
.cdr-doc--maple-utility-30 {
  @include maple-utility-30;
}
.cdr-doc--maple-utility-20 {
  @include maple-utility-20;
}
.cdr-doc--maple-utility-10 {
  @include maple-utility-10;
}
</style>
