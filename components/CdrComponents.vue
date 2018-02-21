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
    <Images/>
    <Input/>
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
import Images from '~/components/image/CdrImage.vue'
import Input from '~/components/input/CdrInput.vue'

export default {
  name: 'CdrComponents',
  components: {
    Anchor,
    Button,
    Card,
    Checkbox,
    Heading,
    Icon,
    Images,
    Input
  }
}
</script>

<style>

</style>
