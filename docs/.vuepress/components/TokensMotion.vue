<template>
  <div>
    <div
      v-if="comparisonView"
    >
      <button @click="animate = true"><icon-play-fill /> Play All</button>
      <button @click="animate = false"><icon-pause-fill /> Pause All</button>

      <table>
        <tr v-for="token in motionTokensByType[motionType]">
          <td>
            <token-motion-example
              :prop="token" 
              :use-group-animate="true" 
              :group-animate="animate" 
            />
          </td>
          <td>
            {{ token.name }}
          </td>
        </tr>
      </table>
    </div>
    
    <div
      v-else
      v-for="token in motionTokensByType[motionType]"
    >
      <token-motion-example :prop="token" />
    </div>
  </div>
</template>

<script>
import tokenData from '@rei/cdr-tokens/dist/json/web.json';
import groupBy from 'lodash/groupBy';

export default {
  name: "TokensMotion",
  data() {
    return {
      animate: false
    };
  },
  props: {
    comparisonView: {
      type: Boolean,
      default: false,
    },
    motionType: {
      type: String,
      default: ''
    }
  },
  computed: {
    motionTokensByType() {
      const { motion } = tokenData;
      return _.groupBy(motion, 'docs.type');
    },
  }
}
</script>