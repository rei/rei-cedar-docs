 <template>
        <div>
          <h3>Version 0.0.1</h3>
          <div id="CdrRadio" v-html="md"></div>
        </div>
      </template>
      <script>
      import md from '~/components/radio/archive/versions/cdrRadio-0.0.1.md'
      
      export default {
        name: 'CdrRadio-0-0-1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>