---
{
  "title": "Component Variables",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
}
---


<cdr-doc-table-of-contents-shell parentSelector="h2" childSelector="h3">


## Overview

Component variables provide a versioned method for teams to:
- Import the exact CSS styles used in the Cedar Vue component
- Apply these exact CSS styles to elements in their project

Component variables are only available for a core subset of Cedar components, and are distributed in SCSS and LESS format.

Component variables include:
- Variables for specific properties such as `$cdr-button-base-border-radius`. This is the border-radius value for all Cedar button components
- Mixins such as `@include cdr-button-base-mixin` which sets many properties on an element. Each component has a `base` mixin which sets properties that apply to all components of that type, as well as `modifier` mixins which only apply to a specific variant of that component

For example, you can import the styling for a Cedar primary button component using a mixin:

```scss
.your-button-component {
  @include cdr-button-base-mixin;
  @include cdr-button-primary-mixin;
}
```

If you only need to apply some styles and not others, you can use individual variables:

```scss
.your-custom-button-component {
  border-radius: $cdr-button-base-border-radius;
  background-color: $cdr-button-primary-background-color;
}
```

Teams that are replicating specific Cedar components will want to use the mixins because they are easier to maintain. For example, if a future version of Cedar adds additional properties to an existing mixin, your application will inherit those changes when you update to that version of component variables.

There are some cases where using individual component variables is preferable to using the mixins. For example, if you are using a third party library or component and need to override some values but not others.


### Contract of Intent

Versioning
  - Component variables are a versioned export of the exact CSS styles being used in the Cedar Vue components
  - Whenever a major version of Cedar is released, a corresponding major version of component variables will also be published
  - For minor or patch versions of Cedar, component variables will only be published if there were changes made to the distributed files
  - Outside of the Cedar release schedule, patch versions of component variables will only be issued if a bug is found in the distribution

Semantic naming
  - Component variables and mixins are semantically named based on the component being styled, how the style is intended to be used, and the CSS property being targeted
  - Teams must only use component variables and mixins when semantically appropriate

<hr />

### Use When  
  - Your project does not use Vue.js, but you want to use Cedar
  - Your component must visually match an existing Cedar component, but not it's functionality. For example, a `vue-router` link component that looks like a `CdrLink` component
  - Your project requires the smallest possible bundle size, and your team is willing to take on the additional maintenance cost of using component variables instead of the Vue.js Cedar components

### Don't Use When
  - Do not use the component variables in a non-semantic way. For example, `cdr-button-base-border-radius` should only ever be used to style the border radius of a button element
  - Do not use component variables to publish clones or forks of existing Cedar components. Instead, work with the Cedar team to find a long term solution to support your use case

<hr/>

## Naming Structure

The naming structure for component variables and mixins is as follows:
  - **Namespace:** Top level namespace `cdr`
  - **Component:** Name of the Cedar component for the exported variable
  - **Modifier:** Variant of Cedar component for the exported variable
    - Base modifier (`base-`) indicates variables that apply to all instances of that Cedar component
    - Additional modifiers can be stacked on top of that
    - For example, to make a primary large button you would use the variables that have `base`, `primary`, and `large` modifiers
  - **Sub-Element:** Indicates a sub-element of a component. For example, `cdr-input-base-label-color` indicates the color of the label element used inside the input component
  - **CSS Property:** Describes the CSS property that this variable is applied to. If the property is listed as `mixin`, then  that mixin should be included in this component
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

## Resources

For more information on installing and using component variables in your project, view the [README.md on GitHub](https://github.com/rei/rei-cedar-component-variables). Additional examples and a list of supported components are located on the [cedar-component-variables doc site](
https://rei.github.io/rei-cedar-component-variables/#/).  There is also a [CodeSandbox](https://codesandbox.io/s/qkwn78nw99) set up for testing out the component variables.

Questions about when to use component variables? Ask the Cedar team in [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4)

</cdr-doc-table-of-contents-shell>
