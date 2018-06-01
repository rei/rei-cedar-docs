<script>
import ApiEvent from '../sub-components/ApiEvent.vue';
import ApiProp from '../sub-components/ApiProp.vue';
import ApiSlot from '../sub-components/ApiSlot.vue';

export default {
  name: 'CdrDocApi',
  functional: true,
  props: {
    apiType: {
      type: String,
      required: true,
      validator: value => {
        return ['prop', 'slot', 'event'].indexOf(value) > -1;
      },
      dataObj: {
        type: Object,
        required: true
      }
    }
  },
  render: function(createElement, context) {

    function apiComponent () {
      let apiComp;

      switch (context.apiType) {
        case 'prop':
          apiComp = ApiProp;
        case 'slot':
          apiComp = ApiSlot;
        case 'event':
          apiComp = ApiEvent;
      }
      return apiComp;
    }

    return createElement()
  }
}
</script>