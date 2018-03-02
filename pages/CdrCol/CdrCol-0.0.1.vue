 <template>
        <div>
          <h3>Version 0.0.1</h3>
          <div id="CdrCol" v-html="md"></div>
        </div>
      </template>
      <script>
      import md from '~/components/column/archive/versions/cdrCol-0.0.1.md'
      
      export default {
        name: 'CdrCol-0-0-1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>