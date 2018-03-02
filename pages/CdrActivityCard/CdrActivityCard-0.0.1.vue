 <template>
        <div>
          <h3>Version 0.0.1</h3>
          <div id="CdrActivityCard" v-html="md"></div>
        </div>
      </template>
      <script>
      import md from '~/compositions/activityCard/archive/versions/cdrActivityCard-0.0.1.md'
      
      export default {
        name: 'CdrActivityCard-0-0-1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>