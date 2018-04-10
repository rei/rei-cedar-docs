# <span class="display-name">CdrRow</span>

Cedar 2 component for row
### <button class='title'>PROPS, METHODS, EVENTS, SLOTS</button>

Prop Name | Type | Default | Require | Description
--- | --- | --- | --- | ---
cols | string,number | n/a | false | Number of columns in the row (1-12, auto).
colsSm | string,number | n/a | false | Sm breakpoint and above
colsMd | string,number | n/a | false | Md breakpoint and above
colsLg | string,number | n/a | false | Lg breakpoint and above
justify | string | n/a | false | How columns should be justified within empty space of the row. Possible values: {left, center, right, around, between}. See CSS flexbox justify-content.
justifySm | string | n/a | false | Sm breakpoint and above
justifyMd | string | n/a | false | Md breakpoint and above
justifyLg | string | n/a | false | Lg breakpoint and above
align | string | n/a | false | How columns of different heights should align. {top, middle, bottom, stretch}. See CSS flexbox align-items.
alignSm | string | n/a | false | Sm breakpoint and above
alignMd | string | n/a | false | Md breakpoint and above
alignLg | string | n/a | false | Lg breakpoint and above
gutter | string | n/a | false | Overrides default gutter spacing. {none}.
gutterSm | string | n/a | false | Sm breakpoint and above
gutterMd | string | n/a | false | Md breakpoint and above
gutterLg | string | n/a | false | Lg breakpoint and above
vertical | boolean | false | false | Changes row to a column layout. See CSS flexbox flex-direction.
verticalSm | boolean | false | false | Sm breakpoint and above
verticalMd | boolean | false | false | Md breakpoint and above
verticalLg | boolean | false | false | Lg breakpoint and above
wrap | boolean | false | false | Enables row wrapping. Only needs to be changed if overriding `nowrap`. See CSS flexbox flex-wrap.
wrapSm | boolean | false | false | Sm breakpoint and above
wrapMd | boolean | false | false | Md breakpoint and above
wrapLg | boolean | false | false | Lg breakpoint and above
nowrap | boolean | false | false | Disables row wrapping and enables overflow scrolling. See CSS flexbox flex-wrap.
nowrapSm | boolean | false | false | Sm breakpoint and above
nowrapMd | boolean | false | false | Md breakpoint and above
nowrapLg | boolean | false | false | Lg breakpoint and above
type | string | "normal" | false | Changes grid to built with ul>li rather than divs. {normal, list}

Slot | Description
--- | ---
default | innerHTML inside the row component
