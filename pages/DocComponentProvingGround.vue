<template>
  <div>
    <cdr-doc-alert/>
    <cdr-doc-alert>Some custom alert message here</cdr-doc-alert>
  </div>
</template>

<script>
import CdrDocAlert from '~/src/doc-components/alert/Alert'

export default {
  layout: 'proving-ground',
  components: {
    CdrDocAlert
  }
}
</script>
