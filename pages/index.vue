<template>
  <div>
    <Anchor/>
    <Button/>
    <Card/>
    <Checkbox/>
    <Grid/>
  </div>
</template>

<script>
import Anchor from '~/components/anchor/Anchor.vue'
import Button from '~/components/button/Button.vue'
import Card from '~/components/card/Card.vue'
import Checkbox from '~/components/checkbox/Checkbox.vue'
import Grid from '~/components/grid/Grid.vue'

import '@rei/cdr-assets/dist/cdr-core.css'

export default {
  components: {
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
