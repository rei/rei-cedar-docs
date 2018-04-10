<template>
  <div>
    <Versions comp-path="CdrCaption" />
    <nuxt-child />
    <no-ssr>
        <vuep :value="value" :scope="scope"></vuep>
    </no-ssr>
  </div>
</template>

<script>
import Versions from '~/components/Versions.vue'
import Compositions from '~/compositions/_index'

import '@rei/cdr-caption/dist/cdr-caption.css'

const CdrCaption = Compositions.CdrCaption

export default {
  name: 'Caption',
  components: {
    Versions
  },
  data() {
    return {
      scope: { CdrCaption },
      value: `
<template>
  <div>
    <h3>Default</h3>
    <cdr-caption
      summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores odio fuga reiciendis blanditiis magni?"
      credit="Lorem ipsum dolor sit"></cdr-caption>
    
    <h3>Summary only</h3>
    <cdr-caption
      summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores odio fuga reiciendis blanditiis magni?"
    ></cdr-caption>

    <h3>Caption only</h3>
    <cdr-caption
      credit="Lorem ipsum dolor sit"
    ></cdr-caption>
  </div>
</template>
<script>
  module.exports = {
    name: 'live-example',
    components: {
      CdrCaption
    }
  }
<\/script>`
    }
  }
}
</script>