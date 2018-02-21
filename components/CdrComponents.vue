<template>
  <div>
    <h1 id="components">Components</h1>
    <Anchor/>
    <Button/>
    <Card/>
    <Checkbox/>
      <!-- <Grid/> -->
    <Heading/>
    <Icon/>
  </div>
</template>

<script>
import Anchor from '~/components/anchor/CdrA.vue'
import Button from '~/components/button/CdrButton.vue'
import Card from '~/components/card/CdrCard.vue'
import Checkbox from '~/components/checkbox/CdrCheckbox.vue'
// import Grid from '~/components/grid/Grid.vue'
import Heading from '~/components/heading/CdrHeading.vue'
import Icon from '~/components/icon/CdrIcon.vue'

export default {
  name: 'CdrComponents',
  components: {
    Anchor,
    Button,
    Card,
    Checkbox,
    Heading,
    Icon,
  }
}
</script>

<style>

</style>
