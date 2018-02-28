 <template>
        <div>
          <h3>Version 0.0.1</h3>
          <div id="CdrSearch" v-html="md"></div>
        </div>
      </template>
      <script>
      import md from '~/compositions/search/archive/versions/cdrSearch-0.0.1.md'
      
      export default {
        name: 'CdrSearch-0-0-1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>