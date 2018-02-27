 <template>
        <div id="CdrImg" v-html="md"></div>
      </template>
      <script>
      import md from '~/components/image/archive/versions/cdrImg-0.0.1.md'
      
      export default {
        name: 'CdrImg-0.0.1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>