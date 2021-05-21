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

Component variables include mixins such as `@include cdr-button-base-mixin` which sets many properties on an element. Each component has a `base` mixin which sets properties that apply to all components of that type, as well as `modifier` mixins which only apply to a specific variant of that component

For example, you can import the styling for a Cedar primary button component using a mixin:

```scss
.your-button-component {
  @include cdr-button-base-mixin;
  @include cdr-button-primary-mixin;
}
```

Test out what you can do with the component variables in this [CodeSandbox](https://codesandbox.io/s/qkwn78nw99).

### Contract of Intent

Versioning
  - Component variables are a versioned export of the exact CSS styles being used in the Cedar Vue components
  - Whenever a major version of Cedar is released, a corresponding major version of component variables will also be published
  - For minor or patch versions of Cedar, component variables will only be published if there were changes made to the distributed files
  - Outside of the Cedar release schedule, patch versions of component variables will only be issued if a bug is found in the distribution

Semantic naming
  - Component variable mixins are semantically named based on the component being styled, how the style is intended to be used, and the CSS property being targeted
  - Teams must only use component variables when semantically appropriate

<hr />

### Use When  
  - Your project does not use Vue.js, but you want to use Cedar
  - Your component must visually match an existing Cedar component, but not it's functionality. For example, a `vue-router` link component that looks like a `CdrLink` component
  - Your project requires the smallest possible bundle size, and your team is willing to take on the additional maintenance cost of using component variables instead of the Vue.js Cedar components

### Don't Use When
  - Do not use the component variables in a non-semantic way. For example, `cdr-button-base-mixin` should only ever be used to style a button element
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
  - **State:** Describes the interactive state that this variable is applied to. These correspond to CSS selectors such as `:focus`, `:active`, `:hover`, `:disabled`, etc.

### Examples
<cdr-table>
  <thead>
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
        State
      </th>
      <th width=240>
        Mixin
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>cdr-</td>
      <td>input-</td>
      <td>base-</td>
      <td></td>
      <td></td>
      <td>mixin</td>
    </tr>
    <tr>
      <td>cdr-</td>
      <td>button-</td>
      <td>secondary-</td>
      <td></td>
      <td></td>
      <td>mixin</td>
    </tr>
    <tr>
      <td>cdr-</td>
      <td>breadcrumb-</td>
      <td></td>
      <td>item-</td>
      <td>linked-</td>
      <td>mixin</td>
    </tr>
    <tr>
      <td>cdr-</td>
      <td>select-</td>
      <td>base-</td>
      <td>label-</td>
      <td>disabled-</td>
      <td>mixin</td>
    </tr>
  </tbody>
</cdr-table>

<br>

## Usage

### Install

The component variables inherit values from the Cedar design tokens, so you will need to install both packages and keep them in sync when updating:

`npm install --save-dev @rei/cdr-tokens @rei/cdr-component-variables`

SCSS example:
```
@import '@rei/cdr-tokens/dist/scss/cdr-tokens.scss'; /* import the tokens file */
@import '@rei/cdr-component-variables/dist/scss/index.scss'; /* import the component variables */

.your-button-class {
  /* use mixins to apply many properties at once */
  @include cdr-button-base-mixin;
  @include cdr-button-primary-mixin;
}
```

LESS example:
```
@import '@rei/cdr-tokens/dist/less/cdr-tokens.less'; /* import the tokens file */
@import '@rei/cdr-component-variables/dist/less/index.less'; /* import the component variables */

.your-button-class {
  /* use mixins to apply many properties at once */
  .cdr-button-base-mixin();
  .cdr-button-primary-mixin();
}
```

## Examples

<!-- TODO: re-enable after comp vars beta is created -->
<!-- <component-variables-page /> -->

Questions about when to use component variables? Ask the Cedar team in [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4)

</cdr-doc-table-of-contents-shell>
