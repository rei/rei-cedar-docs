# <span class="display-name">CdrSelect</span>


<span class="file">src/components/select/cdrSelect.vue<span>


Cedar 2 component for select

**NOTE:** `v-model` is required.

### <button class='title'>PROPS, METHODS, EVENTS, SLOTS</button>

Prop Name | Type | Default | Require | Description
--- | --- | --- | --- | ---
label | string | n/a | true | Label text.
id | string | n/a | false | `id` for the select that is mapped to the label `for` attribute. If one is not provided, it will be generated.
hideLabel | boolean | n/a | false | Removes the label element but sets the select `aria-label` to `label` text for a11y.
prompt | string | n/a | false | Adds an option that is disabled and selected by default to serve as a `placeholder` for the select.
options | array | n/a | false | Build options programatically with data. Array of objects [{ text: String, value: String}] to give greater control. Array of strings ['String'] for simpler setup (value and text will be the same).

Event Name | Type | Description
--- | --- | ---
input | string|array | Current input value. Fires when

Slot | Description
--- | ---
default | 
