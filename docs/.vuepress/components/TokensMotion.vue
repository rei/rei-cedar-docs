<template>
  <div>
    <div
      v-if="comparisonView"
    >
      <cdr-button
        :icon-only="true"
        @click="animate = true"
        v-show="!animate"
      >
        <cdr-icon
          use="#play-fill"
          alt="Play animation"
        />
      </cdr-button>
      <cdr-button
        :icon-only="true"
        @click="animate = false"
        v-show="animate"
      >
        <cdr-icon
          use="#pause-fill"
          alt="Pause animation"
        />
      </cdr-button>
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
      <table class="motion-token-definition">
        <tr><td><strong>{{ token.name }}</strong></td></tr>
        <tr><td><token-motion-example :prop="token" /></td></tr>
        <tr>
          <td>
            Value: {{ token.value }}<br />
            {{ description(token.name) }}
          </td>
        </tr>
      </table>
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
    },
    descriptions: {
      type: Object,
    },
  },
  computed: {
    motionTokensByType() {
      const { motion } = tokenData;
      return _.groupBy(motion, 'docs.type');
    },
  },
  methods: {
    description(name) {
      if (!this.descriptions) return false;
      return this.descriptions[name];
    }
  }
}
</script>

<style>
  .motion-token-definition {
    margin-bottom: 40px;
  }
</style>