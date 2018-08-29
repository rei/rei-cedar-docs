<template>
  <cdr-row
      cols="3 6@md 10@lg"
      class="cdr-stack--lg"
    >
      <cdr-col
        v-for="(val, key) in Icons"
        :key="key"
        v-if="key !== 'CdrIcon' && key !== 'CdrIconSprite'"
      >
        <div class="cdr-text-center">
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
</style>
