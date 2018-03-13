# CdrRadio


src/components/radio/cdrRadio.vue


Cedar 2 component for radio

**NOTE:** `v-model` is required.

### <button class='title'>PROPS, METHODS, EVENTS, SLOTS</button>

Prop Name | Type | Default | Require | Description
--- | --- | --- | --- | ---
name | string | n/a | true | Sets the name of the radio. Required.
value | string,number,boolean,object,array,symbol,func | n/a | true | Sets the value of the radio. Required.

Event Name | Type | Description
--- | --- | ---
boolean|array | change | Selected radio value. Fires on selection.
change | boolean|array | Selected radio value. Fires on section.

Slot | Description
--- | ---
default | innerHTML inside of the radio component
