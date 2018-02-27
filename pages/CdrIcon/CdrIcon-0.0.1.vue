 <template>
        <div id="CdrIcon" v-html="md"></div>
      </template>
      <script>
      import md from '~/components/icon/archive/versions/cdrIcon-0.0.1.md'
      
      export default {
        name: 'CdrIcon-0.0.1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>