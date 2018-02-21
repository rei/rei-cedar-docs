<template>
  <div>
    <h1 id="components">Components</h1>
    <Anchor/>
    <Button/>
    <Card/>
    <Checkbox/>
    <!-- <Column/> -->
    <Heading/>
    <Icon/>
    <!-- <CImage/> -->
    <Input/>
    <List/>
    <MediaObject/>
    <Radio/>
    <!-- <CRating/> -->
    <!-- <Row/> -->
    <CSelect/>
  </div>
</template>

<script>
import Anchor from '~/components/anchor/CdrA.vue'
import Button from '~/components/button/CdrButton.vue'
import Card from '~/components/card/CdrCard.vue'
import Checkbox from '~/components/checkbox/CdrCheckbox.vue'
import Column from '~/components/column/CdrColumn.vue'
// import Grid from '~/components/grid/Grid.vue'
import Heading from '~/components/heading/CdrHeading.vue'
import Icon from '~/components/icon/CdrIcon.vue'
import CImage from '~/components/image/CdrImage.vue'
import Input from '~/components/input/CdrInput.vue'
import List from '~/components/list/CdrList.vue'
import MediaObject from '~/components/mediaObject/CdrMediaObject.vue'
import Radio from '~/components/radio/CdrRadio.vue'
import CRating from '~/components/rating/CdrRating.vue'
import Row from '~/components/row/CdrRow.vue'
import CSelect from '~/components/select/CdrSelect.vue'

export default {
  name: 'CdrComponents',
  components: {
    Anchor,
    Button,
    Card,
    Checkbox,
    Column,
    Heading,
    Icon,
    CImage,
    Input,
    List,
    MediaObject,
    Radio,
    CRating,
    Row,
    CSelect
  }
}
</script>

<style>

</style>
