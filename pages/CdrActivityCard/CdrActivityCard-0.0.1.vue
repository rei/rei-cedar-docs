 <template>
        <div id="CdrActivityCard" v-html="md"></div>
      </template>
      <script>
      import md from '~/compositions/activityCard/archive/versions/cdrActivityCard-0.0.1.md'
      
      export default {
        name: 'CdrActivityCard-0.0.1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>