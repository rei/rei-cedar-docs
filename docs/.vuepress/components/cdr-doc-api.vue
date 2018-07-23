<script>
import ApiEvent from './ApiEvent.vue';
import ApiProp from './ApiProp.vue';
import ApiSlot from './ApiSlot.vue';

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
    apiData: {
      type: Array,
      required: false
    }
  },
  render: function(h, ctx) {
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

    return h(apiComponent(), ctx.props.apiData)
  }
}
</script>