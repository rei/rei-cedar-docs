 <template>
          <div id="CdrRow" v-html="md"></div>
        </template>
        <script>
        import md from '~/components/row/archive/cdrRow.md'
        
        export default {
          name: 'CdrRow-current',
          computed: {
            md() {
              return md
            }
          }
        }
        </script>