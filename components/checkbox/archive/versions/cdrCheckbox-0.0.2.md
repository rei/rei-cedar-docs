# <span class="display-name">CdrCol</span>

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
### Examples

#### Standard checkbox

`v-model` is a boolean. Checkbox value is either true or false.

```
var model = false;

<cdr-checkbox v-model="model">Checkbox: {{model}}</cdr-checkbox>
```

#### Standard checkbox with custom true/false values

Set `true-value` and/or `false-value` to desired checked and unchecked values.

```
var model = '';

<cdr-checkbox v-model="model" true-value="checked" false-value="unchecked">Checkbox: {{model}}</cdr-checkbox>
```

#### Group of checkboxes

`v-model` is an Array. Set checkbox value with `custom-value`.

```
var model = [];
var valE = {val: 'X', otherVal: 'Y', more: [8,9]};

<div>
  <cdr-checkbox custom-value="A" v-model="model">A</cdr-checkbox>
  <cdr-checkbox custom-value="B" v-model="model">B</cdr-checkbox>
  <cdr-checkbox :custom-value="{value: 'C'}" v-model="model">C</cdr-checkbox>
  <cdr-checkbox :custom-value="[1,2,3]" v-model="model">D</cdr-checkbox>
  <cdr-checkbox :custom-value="valE" v-model="model">E</cdr-checkbox>
  <p>Value: {{model}}</p>
</div>
```

#### Preselected

Standard: set `v-model` value to true.

```
var model = true;

<cdr-checkbox v-model="model">Checkbox: {{model}}</cdr-checkbox>
```

Multiple: add value to the `v-model` array.

```
var model = ["A", {value: 'C'}, [1,2,3]];
var valE = {val: 'X', otherVal: 'Y', more: [8,9]};

<div>
  <cdr-checkbox custom-value="A" v-model="model">A</cdr-checkbox>
  <cdr-checkbox custom-value="B" v-model="model">B</cdr-checkbox>
  <cdr-checkbox :custom-value="{value: 'C'}" v-model="model">C</cdr-checkbox>
  <cdr-checkbox :custom-value="[1,2,3]" v-model="model">D</cdr-checkbox>
  <cdr-checkbox :custom-value="valE" v-model="model">E</cdr-checkbox>
  <p>Value: {{model}}</p>
</div>
```

#### Event

Open console to see output

```
var model = false;

function eventExample(val) {
  console.log(val + ' was selected');
}

<cdr-checkbox @change="eventExample" v-model="model">Checkbox: {{model}}</cdr-checkbox>
```
