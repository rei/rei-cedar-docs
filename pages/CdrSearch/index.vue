 <template>
          <div id="CdrSearch" v-html="md"></div>
        </template>
        <script>
        import md from '~/compositions/search/archive/cdrSearch.md'
        
        export default {
          name: 'CdrSearch-current',
          computed: {
            md() {
              return md
            }
          }
        }
        </script>