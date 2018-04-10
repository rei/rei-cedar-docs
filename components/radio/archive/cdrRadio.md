# <span class="display-name">CdrRadio</span>

**NOTE:** `v-model` is required.

### <button class='title'>PROPS, METHODS, EVENTS, SLOTS</button>

Prop Name | Type | Default | Require | Description
--- | --- | --- | --- | ---
name | string | n/a | true | Sets the name of the radio. Required.
value | string,number,boolean,object,array,symbol,func | n/a | true | Sets the value of the radio. Required.

Event Name | Type | Description
--- | --- | ---
change | boolean|array | Selected radio value. Fires on section.

Slot | Description
--- | ---
default | innerHTML inside of the radio component
### Examples

#### Standard checkbox

`v-model` can be anything and is shared to all of the radios in the group.

```
var model = '';

<div>
  <cdr-radio name="example" value="a1" v-model="model">A1</cdr-radio>
  <cdr-radio name="example" value="a2" v-model="model">A2</cdr-radio>
  <cdr-radio name="example" :value="{val:'a3'}" v-model="model">A3</cdr-radio>
  <p>Group A Picked: {{model}}</p>
</div>
```

#### Preselected

`v-model` is preset to one of the values in the group.

```
var model2 = 'a2';

<div>
  <cdr-radio name="example2" value="a1" v-model="model2">A1</cdr-radio>
  <cdr-radio name="example2" value="a2" v-model="model2">A2</cdr-radio>
  <cdr-radio name="example2" :value="{val:'a3'}" v-model="model2">A3</cdr-radio>
  <p>Group A Picked: {{model2}}</p>
</div>
```

#### Event

Open the console to see output.

```
var model3 = '';

function eventExample(val) {
  console.log(val + ' was selected');
}

<div>
  <cdr-radio @change="eventExample" name="example3" value="a1" v-model="model3">A1</cdr-radio>
  <cdr-radio @change="eventExample" name="example3" value="a2" v-model="model3">A2</cdr-radio>
  <cdr-radio @change="eventExample" name="example3" :value="{val:'a3'}" v-model="model3">A3</cdr-radio>
  <p>Group A Picked: {{model3}}</p>
</div>
```
