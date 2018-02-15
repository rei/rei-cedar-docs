<template>
  <div>
    <Anchor/>
    <Button/>
    <Card/>
  </div>
</template>

<script>
import '@rei/cdr-assets/dist/cdr-core.css'

import Anchor from '~/components/anchor/Anchor.vue'
import Button from '~/components/button/Button.vue'
import Card from '~/components/card/Card.vue'

export default {
  components: {
    Anchor,
    Button,
    Card
  }
}
</script>

<style>

</style>
