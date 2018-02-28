 <template>
          <div id="CdrInput" v-html="md"></div>
        </template>
        <script>
        import md from '~/components/input/archive/cdrInput.md'
        
        export default {
          name: 'CdrInput-current',
          computed: {
            md() {
              return md
            }
          }
        }
        </script>