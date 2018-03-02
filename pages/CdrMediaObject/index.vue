 <template>
          <div id="CdrMediaObject" v-html="md"></div>
        </template>
        <script>
        import md from '~/components/mediaObject/archive/cdrMediaObject.md'
        
        export default {
          name: 'CdrMediaObject-current',
          computed: {
            md() {
              return md
            }
          }
        }
        </script>