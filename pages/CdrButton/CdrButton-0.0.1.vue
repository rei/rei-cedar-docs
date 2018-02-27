 <template>
        <div id="CdrButton" v-html="md"></div>
      </template>
      <script>
      import md from '~/components/button/archive/versions/cdrButton-0.0.1.md'
      
      export default {
        name: 'CdrButton-0.0.1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>