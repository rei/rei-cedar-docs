 <template>
        <div>
          <h3>Version 0.0.1</h3>
          <div id="cedar-comp" v-html="md"></div>
        </div>
      </template>
      <script>
      import md from '~/components/heading/archive/versions/cdrHeading-0.0.1.md'
      
      export default {
        name: 'CdrHeading-0-0-1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>