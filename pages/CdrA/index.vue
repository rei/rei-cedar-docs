 <template>
          <div id="CdrA" v-html="md"></div>
        </template>
        <script>
        import md from '~/components/anchor/archive/cdrA.md'
        
        export default {
          name: 'CdrA-current',
          computed: {
            md() {
              return md
            }
          }
        }
        </script>