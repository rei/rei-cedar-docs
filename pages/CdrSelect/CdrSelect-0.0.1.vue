 <template>
        <div id="CdrSelect" v-html="md"></div>
      </template>
      <script>
      import md from '~/components/select/archive/versions/cdrSelect-0.0.1.md'
      
      export default {
        name: 'CdrSelect-0.0.1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>