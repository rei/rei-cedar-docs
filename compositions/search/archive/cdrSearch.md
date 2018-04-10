# <span class="display-name">CdrSearch</span>

A composition of `cdr-input` and `cdr-button`that gives you a simple search box. Passes all other attributes and events to `cdr-input`.
### <button class='title'>PROPS, METHODS, EVENTS, SLOTS</button>

Prop Name | Type | Default | Require | Description
--- | --- | --- | --- | ---
click | func | n/a | false | The function to run when search button is clicked
bare | boolean | false | false | Bare display variant (removes button).
large | boolean | false | false | Large display variant.

Event Name | Type | Description
--- | --- | ---
input | string | Current input value. Fires while typing.
### Examples

#### Standard

```
var searchTerm = '';
function runSearch() {
  console.log('Searching');
}

<form>
  <cdr-search v-model="searchTerm" :click="runSearch"></cdr-search>
  <p>Entered: {{searchTerm}}</p>
</form>
```

#### Bare

```
var searchTerm = '';
function runSearch() {
  console.log('Searching');
}

<form>
  <cdr-search v-model="searchTerm" :click="runSearch" bare></cdr-search>
  <p>Entered: {{searchTerm}}</p>
</form>
```