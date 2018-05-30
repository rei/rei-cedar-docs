<template>
  <div class=".cdr-doc-api">
  </div>
</template>

<script>
  import { CdrCol } from '@rei/cdr-col'
  import { CdrRow } from '@rei/cdr-row'
  
  export default {
    name: 'CdrDocApi',
    components: {
      CdrCol,
      CdrRow
    }
  };
</script>

<style lang="scss">
  @import '../theme/styles/cdr-tokens.scss';
  
  .cdr-doc-api {
    box-sizing: border-box;
    height: 84px;
    width: 689px;
    border: 1px solid $partly-cloudy;
    border-radius: 4px;
    background-color: $clean-slate
  }
</style>