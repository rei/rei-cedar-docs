 <template>
        <div>
          <div id="cedar-comp" v-html="md"></div>
        </div>
      </template>
      <script>
      import md from '~/components/rating/archive/versions/cdrRating-0.0.1.md'
      
      export default {
        name: 'CdrRating-0-0-1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>