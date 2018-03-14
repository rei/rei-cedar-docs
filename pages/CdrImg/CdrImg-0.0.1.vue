 <template>
        <div>
          <div id="cedar-comp" v-html="md"></div>
        </div>
      </template>
      <script>
      import md from '~/components/image/archive/versions/cdrImg-0.0.1.md'
      
      export default {
        name: 'CdrImg-0-0-1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>