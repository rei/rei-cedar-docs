<template>
  <div>
    <Versions comp-path="CdrQuote" />
    <nuxt-child />
    <no-ssr>
      <vuep :value="value" :scope="scope"></vuep>
    </no-ssr>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Components from '~/components/_index'

import '@rei/cdr-quote/dist/cdr-quote.css'

const CdrQuote = Components.CdrQuote

export default {
  name: 'Quote',
  components: {
    Versions
  },
  data() {
    return {
      scope: { CdrQuote },
      value:`
<template>
  <div>
    <cdr-quote
      tag="blockquote"
      modifier="pull"
      cite="http://github.com/rei/rei-cedar"
      summary="Blockquote Summary:
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus
      asperiores odio fuga reiciendis blanditiis magni?"
      citation="Blockquote Citation: Lorem ipsum dolor sit"
    />
  </div>
</template>

<script>
  module.exports = {
    name: 'live-example',
    components: {
      CdrQuote
    }
  }
<\/script>`
    }
  }
}
</script>