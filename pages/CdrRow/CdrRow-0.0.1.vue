 <template>
        <div id="CdrRow" v-html="md"></div>
      </template>
      <script>
      import md from '~/components/row/archive/versions/cdrRow-0.0.1.md'
      
      export default {
        name: 'CdrRow-0.0.1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>