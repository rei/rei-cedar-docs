# <span class="display-name">CdrInput</span>

**NOTE:** `v-model` is required.

### <button class='title'>PROPS, METHODS, EVENTS, SLOTS</button>

Prop Name | Type | Default | Require | Description
--- | --- | --- | --- | ---
id | string | n/a | false | `id` for the input that is mapped to the label `for` attribute. If one is not provided, it will be auto generated.
label | string | n/a | true | Label text. This is required for a11y even if hiding the label with `hideLabel`.
hideLabel | boolean | n/a | false | Removes the label element but sets the input `aria-label` to `label` text for a11y.
multiLine | boolean | n/a | false | Changes the input to a textarea.
pattern | string | n/a | false | Regex validation pattern. Useful for simple validation.
patternError | string | n/a | false | Error message to be displayed when `pattern` validation fails.
feedback | boolean | n/a | false | Enables icon feedback as part of validation for valid, warn, and error states.
type | string | "text" | false | Input type. NOTE: This component is meant for text style inputs. Other input types (checkbox, radio) have their own components.
rules | array | function() { return []; } | false | Array of functions. Provide your own validation function(s). Takes the input string and outputs an object with a state and message. State is a String with value `valid`, `warning`, or `error`. Message is any String.
debounce | boolean,number | false | false | Boolean or Number. `true` has a default of 500ms. Providing a number will set debounce to that (in ms). `false` is no debounce.

Event Name | Type | Description
--- | --- | ---
paste | event | Fires when text is pasted into input.
focus | event | Fires when input gains focus.
blur | event | Fires when input loses focus.
input | string | Current input value. Fires while typing.
change | string | New input value (if changed). Fires on blur.

Slot | Description
--- | ---
preicon | Icon to be put in front of input
### Examples

#### Single line with feedback icons, error messages, and a debounced validation rule

```
// Stuff for demo
var debounce = '';
function validateFn(inputText) {
  var obj = {};
  if (inputText === 'hi') {
    obj.state = 'valid';
  } else if (inputText === '') {
    obj.state = 'warn';
    obj.message = 'Warning Empty';
  } else if (!isNaN(inputText) && inputText !== '') {
    obj.state = 'error';
    obj.message = 'Error: needs to be letters';
  } else {
    obj.state = 'error';
    obj.message = 'Error Message';
  }
  return obj;
}

//Component usages
<cdr-input v-model="debounce"
  label="Enter hi"
  id="testing"
  placeholder="Enter hi"
  feedback
  :rules="[validateFn]"
  debounce
  data-backstop="text-input"
  ></cdr-input>
```

#### Normal multiline input

```
var multi = '';

<cdr-input v-model="multi"
      label="Multiline"
      multi-line
      ></cdr-input>
```
