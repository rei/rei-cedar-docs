# <span class="display-name">CdrSelect</span>

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
### Examples

#### Standard

```
var selected = '';

<div>
  <cdr-select label="Normal" v-model="selected">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </cdr-select>
  <p>Selected: {{selected}}</p>
</div>
```

#### With prompt

```
var selected = '';

<div>
  <cdr-select label="Normal with prompt" v-model="selected" prompt="Choose one">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </cdr-select>
  <p>Selected: {{selected}}</p>
</div>
```

#### Data driven options

```
var selected = '';
var data = ['a', 'b', 'c', 'd'];

<div>
  <cdr-select label="Built with data" v-model="selected" :options="data"></cdr-select>
  <p>Selected: {{selected}}</p>
</div>

```
