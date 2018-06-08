<template>
  <div class="cdr-doc-html-example-list" v-on:click="codeToConsole">
    <div class="cdr-doc-html-example-list-slot-wrap" ref="code">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CdrDocHtmlExampleList',
  props: {

  },
  data: function() {
    return {

    }
  },
  beforeCreate: function () {
    console.log(this.$slots.default);
  },
  methods: {
    codeToConsole () {
      console.log(this.$refs.code.querySelector('pre').textContent);
    }
  }
}
</script>
<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  @import '../theme/styles/cdr-doc-tokens.scss';
  $cdr-doc-code-snippet-actions-background-color: $ice-age;

</style>
