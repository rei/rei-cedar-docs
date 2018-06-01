<script>
import apiEvent from './api-event.vue';
import apiProp from './api-prop.vue';
import apiSlot from './api-slot.vue';

export default {
  name: 'CdrDocApi',
  functional: true,
  props: {
    apiType: {
      type: String,
      required: true,
      validator: value => {
        return ['prop', 'slot', 'event'].indexOf(value) > -1;
      }
    }
  },
  render: function(createElement, context) {

    return createElement()
  }
}
</script>