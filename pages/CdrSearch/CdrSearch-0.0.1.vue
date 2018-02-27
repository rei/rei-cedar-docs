 <template>
        <div id="CdrSearch" v-html="md"></div>
      </template>
      <script>
      import md from '~/compositions/search/archive/versions/cdrSearch-0.0.1.md'
      
      export default {
        name: 'CdrSearch-0.0.1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>