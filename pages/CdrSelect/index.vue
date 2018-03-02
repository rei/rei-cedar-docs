 <template>
          <div id="CdrSelect" v-html="md"></div>
        </template>
        <script>
        import md from '~/components/select/archive/cdrSelect.md'
        
        export default {
          name: 'CdrSelect-current',
          computed: {
            md() {
              return md
            }
          }
        }
        </script>