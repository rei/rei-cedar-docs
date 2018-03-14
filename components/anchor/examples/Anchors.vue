<template>
  <div>
    <h2>Anchors</h2>
    <default-anchor/>
    <contrast-anchor/>
    <standalone-anchor/>
    <button-anchor/>
  </div>
</template>

<script>
import defaultAnchor from './demo/Default.vue';
import contrastAnchor from './demo/Contrast.vue';
import standaloneAnchor from './demo/Standalone.vue';
import buttonAnchor from './demo/Button.vue';

export default {
  name: 'Anchors',
  components: {
    defaultAnchor,
    contrastAnchor,
    standaloneAnchor,
    buttonAnchor,
  },
};
</script>

<style>
  .anchor-example {
    padding: 20px;
  }

  .overlay-example {
    background-color: black;
  }
</style>

