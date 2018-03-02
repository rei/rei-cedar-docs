 <template>
        <div>
          <h3>Version 0.0.1</h3>
          <div id="CdrMediaObject" v-html="md"></div>
        </div>
      </template>
      <script>
      import md from '~/components/mediaObject/archive/versions/cdrMediaObject-0.0.1.md'
      
      export default {
        name: 'CdrMediaObject-0-0-1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>