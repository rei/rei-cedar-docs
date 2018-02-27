 <template>
        <div id="CdrCard" v-html="md"></div>
      </template>
      <script>
      import md from '~/components/card/archive/versions/cdrCard-0.0.1.md'
      
      export default {
        name: 'CdrCard-0.0.1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>