<template>
  <div class="cdr-container-fluid">
    <h3>Basic Column</h3>
    <cdr-row>
      <cdr-col span="3">
        <div class="row-demo"/>
      </cdr-col>
      <cdr-col span="3">
        <div class="row-demo"/>
      </cdr-col>
      <cdr-col span="3">
        <div class="row-demo"/>
      </cdr-col>
      <cdr-col span="3">
        <div class="row-demo"/>
      </cdr-col>
      <cdr-col span="3">
        <div class="row-demo"/>
      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
import Components from '~/components/_index'

export default {
  name: 'BasicColExample',
  components: Components,
};
</script>
