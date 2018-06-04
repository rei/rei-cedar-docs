<script>
import ApiEvent from '../sub-components/ApiEvent.vue';
import ApiProp from '../sub-components/ApiProp.vue';
import ApiSlot from '../sub-components/ApiSlot.vue';

export default {
  name: 'CdrDocApi',
  functional: true,
  props: {
    type: {
      type: String,
      required: true,
      validator: value => {
        return ['prop', 'slot', 'event'].indexOf(value) > -1;
      }
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

    return h(apiComponent())
  }
}
</script>