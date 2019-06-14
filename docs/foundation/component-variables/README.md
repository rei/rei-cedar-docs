---
{
  "title": "Component Variables",
  "title_metadata": false,
  "layout": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "Foundation/"
    }
  ],
}
---


<cdr-doc-table-of-contents-shell>


## Overview

Component variables provide a versioned method for teams to:
- Import the exact CSS styles used in the Cedar Vue component
- Apply these exact CSS styles to elements in their project

Component variables are only available for a core subset of Cedar components, and are distributed in SCSS and LESS format.

## Examples

Component variables include: 
- Variables for specific properties such as `$cdr-button-base-border-radius`. This is the border-radius value for all Cedar button components
- Mixins such as `@include cdr-button-base-mixin` which sets many properties on an element. Each component has a `base` mixin which sets properties that apply to all components of that type, as well as `modifier` mixins which only apply to a specific variant of that component

For example, you can import the styling for a Cedar primary button component with a few lines of SCSS:

```scss
.your-button-component {
  @include cdr-button-base-mixin;
  @include cdr-button-primary-mixin;
}
```

Teams that are replicating specific Cedar components will want to use the mixins because they are easier to maintain. For example, if a future version of Cedar adds additional properties to an existing mixin, your application will inherit those changes when you update to that version of component-variables. 

TODO: example of why you would use individual variables 


### Contract of Intent

TODO: 
Versioning
  - A versioned export of the exact styles being used in Cedar vue components
  - Depends on a specific version of the Cedar design tokens
  
Semantic naming
  
  - Semantically named intended to be used to match the styling of the component/element that they correspond to
  
  For example, `$cdr-button-base-border-radius` should only be used to style the border-radius of a "button-like" element. If you use that variable to set the border-radius on something that is not a button, then that element would be affected any time the Cedar button border radius is changed.

### Benefits

#### Brand Consistency on More Platforms
  - Component variables are an export of the exact CSS styles used in the Cedar Vue components
  - Ensures that core front-end components remain visually consistent across the co-op
  - Third party teams can easily consume the component variables to integrate the Cedar design system into their architecture

#### Ease of Maintainability
  - In the past, projects that could not consume Vue components had no way of using Cedar directly
  - Updates to the design system could not be pushed out to those projects unless they were implemented manually
  - With component variables and mixins, teams that are not using Vue can still stay in sync with the design system

#### Flexibility

TODO: 
  
  In those cases where extending the Cedar vue component is not an option, the component variables can be used to create a new component that implements the desired functionality.
  
    - Some teams may have strict requirements around performance and bundle size, in which case component variables provide the most lightweight and lowest impact method of consuming Cedar. However this does come at an additional maintenance and development cost.

<hr />

### Use When  
  - Your project does not use Vue, but you want to use Cedar components
  - Your project requires a small bundle size, and is willing to take on additional maintenance overhead
  - Your project must strictly control the behavior of it's components in a way that is not possible through the public Cedar API
  - Your component must visually match an existing Cedar component, but not it's functionality. For example, a `vue-router` link component that looks like a CdrLink component

### Don’t Use When
  - Do not use the component variables in a non-semantic way. For example, `cdr-button-base-border-radius` should only ever be used to style the border radius of a button element.
  - Do not publish copies of Cedar components using the variables, as that creates duplication and confusion.
  - TODO: do not use variables to simply extend components, DIY or ask us before. 

Questions about when to use component variables? Ask the Cedar team in [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4)

<hr/>


## Naming Structure

The naming structure for component variables and mixins is as follows:
  - **Namespace:** Top level namespace `cdr`
  - **Component:** Name of the Cedar component for the exported variable
  - **Modifier:** Variant of Cedar component for the exported variable
    - Base modifier (`base-`) indicates variables that apply to all instances of that Cedar component
    - Additional modifiers can be stacked on top of that
    - For example, to make a primary large button you would use the variables that have `base`, `primary`, and `large` modifiers
  - **Sub-Element:** Indicates a sub-element of a component. For example, `cdr-input-base-label-color` indicates the color of the label element used inside the input component.
  - **CSS Property:** Describes the CSS property that this variable is applied to. If the property is listed as `mixin` then this is a mixin that should be included in this component.
  - **State:** Describes the interactive state that this variable is applied to. These correspond to CSS selectors such as `:focus`, `:active`, `:hover`, `:disabled`, etc.

### Examples
<table>
  <tbody>
    <tr>
      <th width=240>
        Namespace
      </th>
      <th width=240>
        Component
      </th>
      <th width=240>
        Modifier
      </th>
      <th width=240>
        Sub-Element
      </th>
      <th width=240>
        CSS Property
      </th>
      <th width=240>
        State
      </th>
    </tr>
    <tr>
      <td>cdr-</td>
      <td>button-</td>
      <td>base-</td>
      <td></td>
      <td>border-radius</td>
      <td></td>
    </tr>
    <tr>
      <td>cdr-</td>
      <td>button-</td>
      <td>primary-</td>
      <td></td>
      <td>background-color-</td>
      <td>hover</td>
    </tr>
    <tr>
      <td>cdr-</td>
      <td>input-</td>
      <td>base-</td>
      <td>label-</td>
      <td>color-</td>
      <td>disabled</td>
    </tr>
    <tr>
      <td>cdr-</td>
      <td>input-</td>
      <td>base-</td>
      <td></td>
      <td>mixin</td>
      <td></td>
    </tr>
    <tr>
      <td>cdr-</td>
      <td>button-</td>
      <td>secondary-</td>
      <td></td>
      <td>mixin</td>
      <td></td>
    </tr>
  </tbody>
</table>

<br>

## Getting Started

For more information on installing and using component variables in your project, view the [README.md on GitHub](https://github.com/rei/rei-cedar-component-variables). Additional examples and a list of supported components are located on the [cedar-component-variables doc site](
https://rei.github.io/rei-cedar-component-variables/#/).  There is also a [CodeSandbox](https://codesandbox.io/s/qkwn78nw99) set up for testing out the component variables.


</cdr-doc-table-of-contents-shell>
