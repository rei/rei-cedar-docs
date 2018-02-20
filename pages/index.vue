<template>
  <div>
    <Intro/>
    <Documentation/>
    <Anchor/>
    <Button/>
    <!-- <Card/>
    <Checkbox/>
    <Grid/> -->
  </div>
</template>

<script>
import Intro from '~/components/Introduction.vue'
import Documentation from '~/components/Documentation.vue'
import Anchor from '~/components/anchor/CdrA.vue'
import Button from '~/components/button/CdrButton.vue'
import Card from '~/components/card/CdrCard.vue'
import Checkbox from '~/components/checkbox/CdrCheckbox.vue'
import Grid from '~/components/grid/Grid.vue'

import '@rei/cdr-assets/dist/cdr-core.css'

export default {
  components: {
    Intro,
    Documentation,
    Anchor,
    Button,
    Card,
    Checkbox,
    Grid
  }
}
</script>

<style>

</style>
