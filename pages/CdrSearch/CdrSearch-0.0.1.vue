 <template>
        <div>
          <div id="cedar-comp" v-html="md"></div>
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