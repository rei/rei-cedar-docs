 <template>
        <div>
          <h3>Version 0.0.1</h3>
          <div id="CdrSelect" v-html="md"></div>
        </div>
      </template>
      <script>
      import md from '~/components/select/archive/versions/cdrSelect-0.0.1.md'
      
      export default {
        name: 'CdrSelect-0-0-1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>