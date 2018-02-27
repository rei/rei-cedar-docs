 <template>
        <div id="CdrHeading" v-html="md"></div>
      </template>
      <script>
      import md from '~/components/heading/archive/versions/cdrHeading-0.0.1.md'
      
      export default {
        name: 'CdrHeading-0.0.1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>