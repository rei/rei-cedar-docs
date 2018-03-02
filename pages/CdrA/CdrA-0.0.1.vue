 <template>
        <div>
          <h3>Version 0.0.1</h3>
          <div id="CdrA" v-html="md"></div>
        </div>
      </template>
      <script>
      import md from '~/components/anchor/archive/versions/cdrA-0.0.1.md'
      
      export default {
        name: 'CdrA-0-0-1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>