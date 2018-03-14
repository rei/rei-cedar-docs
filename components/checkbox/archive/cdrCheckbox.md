# <span class="display-name">CdrCheckbox</span>


<span class="file">src/components/checkbox/cdrCheckbox.vue<span>


Cedar 2 component for checkbox

**NOTE:** `v-model` is required.

### <button class='title'>PROPS, METHODS, EVENTS, SLOTS</button>

Prop Name | Type | Default | Require | Description
--- | --- | --- | --- | ---
trueValue | string,number,boolean,object,array,symbol,func | true | false | The value when checked.
falseValue | string,number,boolean,object,array,symbol,func | false | false | The value when unchecked.
customValue | string,number,boolean,object,array,symbol,func | n/a | false | The value when used in a checkbox group. Replaces `trueValue` and `falseValue`.
labelClass | string | n/a | false | Class that is added to the label for custom styles

Event Name | Type | Description
--- | --- | ---
input | value|event | `v-model` value. Fires on check/uncheck.

Slot | Description
--- | ---
default | innerHTML inside of checkbox component
