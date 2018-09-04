<template>
  <cdr-row
      cols="3 6@md 10@lg"
      class="cdr-stack--lg icon-demo-grid"
      gutter="xxs"
    >
      <cdr-col
        v-for="(val, key) in Icons"
        :key="key"
        v-if="key !== 'CdrIcon' && key !== 'CdrIconSprite'"
      >
        <div class="icon-demo">
          <svg
            :is="key"
          />
        </div>
      </cdr-col>
    </cdr-row>
</template>

<script>
import * as Icons from '@rei/cdr-icon';

export default {
  name: "IconTable",
  components: {
    ...Icons,
  },
  data() {
    return {
      Icons,
    };
  },
}
</script>

<style lang="scss">
.icon-demo {
  background-color: white;
  border: 1px solid black;
  text-align: center;
  padding: 10px;
}
</style>
