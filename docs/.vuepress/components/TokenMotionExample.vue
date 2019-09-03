<template>
  <div class="token-motion-example">
    <div class="animation-controls" v-if="!useGroupAnimate">
      <cdr-button
        @click="animate = true" 
        :icon-only="true"
        v-show="animationPlayState === 'paused'"
      >
        <icon-play-fill />
      </cdr-button>
      <cdr-button 
        @click="animate = false" 
        :icon-only="true"
        v-show="animationPlayState === 'running'"
      >
        <icon-pause-fill />
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
  // height: 70px;
  height: 61px;
  width: 180px;
  background-color: lightgray;
  border-radius: 4px;
  border: 1px solid #ccc;
  // height: 40px;
  // width: 160px;
  // background-color: #f7f7f7; // cdr-color-background-light
  // border-color: #b8b8b8; // cdr-color-border-secondary-lightmode
  // border-radius: 0.4rem; // cdr-radius-softer
}


.motion-example {
  // width: 33%;
  // padding-bottom: 33%;
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