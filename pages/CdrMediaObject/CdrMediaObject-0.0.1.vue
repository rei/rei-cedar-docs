 <template>
        <div id="CdrMediaObject" v-html="md"></div>
      </template>
      <script>
      import md from '~/components/mediaObject/archive/versions/cdrMediaObject-0.0.1.md'
      
      export default {
        name: 'CdrMediaObject-0.0.1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>