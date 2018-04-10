Note: immediate children of `cdr-col` are treated as flex items (due to a flex height bug in Safari). As a result, if you want to have more than one child element they should be wrapped in a single `div` element.

Bad:
```html
...
<cdr-col>
  <div/>
  <div/>
  <div/>
</cdr-col>
...
```
Good:
```html
...
<cdr-col>
  <div>
    <div/>
    <div/>
    <div/>
  </div>
</cdr-col>
...
```


NOTE: anytime a `cdr-col` is nested within another `cdr-col` the parent needs `is-row` to function correctly

```html
...
<cdr-col is-row>
  <cdr-col>
    <div/>
  </cdr-col>
  <cdr-col>
    <div/>
  </cdr-col>
  <cdr-col is-row cols="3">
    <cdr-col>
      <div/>
    </cdr-col>
  </cdr-col>
</cdr-col>
...
```

See cdr-row for complex example.

### Examples

#### Span

```html
<div class="cdr-container-fluid">
  <h4>Basic</h4>
  <cdr-row>
    <cdr-col span="3">
      <div class="row-demo">A</div>
    </cdr-col>
    <cdr-col span="3">
      <div class="row-demo">B</div>
    </cdr-col>
    <cdr-col span="3">
      <div class="row-demo">C</div>
    </cdr-col>
    <cdr-col span="3">
      <div class="row-demo">D</div>
    </cdr-col>
    <cdr-col span="3">
      <div class="row-demo">E</div>
    </cdr-col>
  </cdr-row>
</div>
```
### <button class='title'>PROPS, METHODS, EVENTS, SLOTS</button>

Prop Name | Type | Default | Require | Description
--- | --- | --- | --- | ---
span | string,number | n/a | false | Number of columns (1-12) the column should span.
spanSm | string,number | n/a | false | Sm breakpoint and above
spanMd | string,number | n/a | false | Md breakpoint and above
spanLg | string,number | n/a | false | Lg breakpoint and above
offsetLeft | string,number | n/a | false | Number of columns (1-12) of empty space to add left of this column.
offsetLeftSm | string,number | n/a | false | Sm breakpoint and above
offsetLeftMd | string,number | n/a | false | Md breakpoint and above
offsetLeftLg | string,number | n/a | false | Lg breakpoint and above
offsetRight | string,number | n/a | false | Number of columns (1-12) of empty space to add right of this column.
offsetRightSm | string,number | n/a | false | Sm breakpoint and above
offsetRightMd | string,number | n/a | false | Md breakpoint and above
offsetRightLg | string,number | n/a | false | Lg breakpoint and above
alignSelf | string | n/a | false | How the column should align (overrides cdr-row alignment). Possible values: {top, middle, bottom, stretch}. See CSS flexbox align-self.
alignSelfSm | string | n/a | false | Sm breakpoint and above
alignSelfMd | string | n/a | false | Md breakpoint and above
alignSelfLg | string | n/a | false | Lg breakpoint and above
isRow | boolean | false | false | Makes the column act as a new cdr-row. Setting this to true exposes the same props as cdr-row.

Slot | Description
--- | ---
default | innerHTML inside of the column component
