<template>
  <div class="token-motion-example">
    <div class="animation-controls" v-if="!useGroupAnimate">
      <cdr-button
        @click="animate = true"
        :icon-only="true"
        v-show="animationPlayState === 'paused'"
      >
        <cdr-icon
          use="#play-fill"
          alt="Play animation"
        />
      </cdr-button>
      <cdr-button 
        @click="animate = false"
        :icon-only="true"
        v-show="animationPlayState === 'running'"
      >
        <cdr-icon
          use="#pause-fill"
          alt="Pause animation"
        />
      </cdr-button>
    </div>
    <div class="motion-background">
      <div
        v-if="prop.docs.example === 'duration'"
        class="motion-example duration"
        :style="{
          'animation-play-state': animationPlayState,
          'animation-duration': prop.value,
        }"
      />
      <div
        v-if="prop.docs.example === 'timing'"
        class="motion-example"
        :style="{
          'animation-play-state': animationPlayState,
          'animation-timing-function': prop.value,
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TokenMotionExample',
  props: {
    prop: Object,
    useGroupAnimate: {
      type: Boolean,
      default: false
    },
    groupAnimate: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    animationPlayState() {
      if (this.useGroupAnimate) {
        return this.groupAnimate ? 'running' : 'paused';
      }

      return this.animate ? 'running' : 'paused';
    }
  },
  data() {
    return {
      animate: false
    }
  },
};
</script>

<style lang="scss">
@keyframes demo {
  90%, 100% {
    opacity: 0.5;
    transform: translate(300%, 0);
  }
  0% {
    opacity: 1;
  }
}

.token-motion-example {
  display: flex;
  align-items: center;
}

.animation-controls {
  margin-right: 15px;
}

.motion-background {
  position: relative;
  padding: 10px;
  height: 61px;
  width: 180px;
  background-color: lightgray;
  border-radius: 4px;
  border: 1px solid #ccc;
}


.motion-example {
  width: 25%;
  padding-bottom: 25%;
  border-radius: 50%;
  background-color: #434343;
  animation-name: demo;
  animation-iteration-count: infinite;
  animation-duration: 1500ms;
}
.motion-example.duration {
  background-color: #3278ae;
}
</style>