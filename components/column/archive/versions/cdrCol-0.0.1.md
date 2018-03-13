# CdrCol


src/components/column/cdrCol.vue


Cedar 2 component for column



**Note**: immediate children of `cdr-col` are treated as flex items

(due to a flex height bug in Safari). As a result, if you want to

have more than one child element they should be wrapped in a single `div` element.



**NOTE**: anytime a `cdr-col` is nested within another `cdr-col`

the parent needs `is-row` to function correctly



See cdr-row for complex example.

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
