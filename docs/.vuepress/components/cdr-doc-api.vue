<script>
import ApiEvent from './ApiEvent.vue';
import ApiProp from './ApiProp.vue';
import ApiSlot from './ApiSlot.vue';
import semver from 'semver';

export default {
  name: 'CdrDocApi',
  functional: true,
  props: {
    type: {
      type: String,
      required: true,
      validator: value => {
        return ['prop', 'slot', 'event', 'installation'].indexOf(value) > -1;
      }
    },
    semver: {
      type: String,
      required: true,
      validator: value => {
        return semver.valid(value);
      }
    },
    apiVersions: {
      type: Array,
      required: true
    }
  },
  render(h, ctx) {
    function apiComponent () {
      let apiComp;

      switch (ctx.props.type) {
        case 'prop':
          apiComp = ApiProp;
          break;
        case 'slot':
          apiComp = ApiSlot;
          break;
        case 'event':
          apiComp = ApiEvent;
          break;
      }
      return apiComp;
    }

return h(apiComponent(), 
    {...ctx})
  }
}
</script>