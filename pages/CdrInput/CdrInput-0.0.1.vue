 <template>
        <div>
          <div id="cedar-comp" v-html="md"></div>
        </div>
      </template>
      <script>
      import md from '~/components/input/archive/versions/cdrInput-0.0.1.md'
      
      export default {
        name: 'CdrInput-0-0-1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>