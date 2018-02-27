 <template>
        <div id="CdrCheckbox" v-html="md"></div>
      </template>
      <script>
      import md from '~/components/checkbox/archive/versions/cdrCheckbox-0.0.1.md'
      
      export default {
        name: 'CdrCheckbox-0.0.1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>