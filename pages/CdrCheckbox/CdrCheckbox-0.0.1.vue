 <template>
        <div>
          <h3>Version 0.0.1</h3>
          <div id="CdrCheckbox" v-html="md"></div>
        </div>
      </template>
      <script>
      import md from '~/components/checkbox/archive/versions/cdrCheckbox-0.0.1.md'
      
      export default {
        name: 'CdrCheckbox-0-0-1',
        computed: {
          md() {
            return md
          }
        }
      }
      </script>