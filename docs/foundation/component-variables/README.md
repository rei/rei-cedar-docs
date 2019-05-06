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

Component variables provide a versioned method for teams to import the exact CSS styles being used in the Cedar vue components and apply them to elements in their project. Component variables are only available for a core subset of Cedar components, and are distributed in SCSS and LESS format.

Component variables include variables for specific properties like `$cdr-button-base-border-radius` which is the border-radius value for all Cedar button components, as well as mixins like `@include cdr-button-base-mixin` which sets many properties on an element. Each component has a `base` mixin which sets properties that apply to all components of that type, as well as `modifier` mixins which only apply to a specific variant of that component.


For example, you can import the styling for a Cedar primary button component with a few lines of SCSS:

```scss
.your-button-component {
  @include cdr-button-base-mixin;
  @include cdr-button-primary-mixin;
}
```

Most developers will want to use the mixins as they will be easier to maintain in the long term. For example, if a future version of Cedar adds additional properties to an existing mixin, you will automatically inherit those changes when you update to that version of component-variables. However, if you instead assign each variable to it's property manually then you would also need to address updates manually.

Additional examples and a list of supported components can be found on the [cedar-component-variables doc site](
https://rei.github.io/rei-cedar-component-variables/#/). For more information on installing and using component variables in your project, see the [README.md](https://github.com/rei/rei-cedar-component-variables). We also maintain a [codesandbox](https://codesandbox.io/s/qkwn78nw99) where you can test things out.

### Contract of Intent
  - Component variables are a versioned export of the exact styles being used in Cedar vue components.
  - Each release of component variables will depend on a version of the Cedar design tokens, and will be an export of a particular version of the Cedar vue component package.
  - These variables and mixins are intended to be used to match the styling of the component/element that they correspond to. For example, `$cdr-button-base-border-radius` should only be used to style the border-radius of a "button-like" element. If you use that variable to set the border-radius on something that is not a button, then that element would be affected any time the Cedar button border radius is changed.

### Benefits

#### Brand Consistency on More Platforms
  - Component variables are an export of the exact CSS styles that are being used in the Cedar vue components, which helps ensure that our most atomic front-end components remain visually consistent across the co-op.
  - Third party teams can easily consume the component variables as a way to integrate the Cedar design system into their architecture.

#### Ease of Maintainability
  - In the past, projects that could not consume Cedar vue components had no way of using Cedar directly. This prevented the design systems team from pushing out updates across the co-op without having the consuming teams manually implement design updates.
  - By making component variables and mixins available, teams that are not using vue can stay in sync with the visual styling for the vue components in a versioned and maintainable way.

#### More Options for Consuming Teams   
  - Not all codebases at REI are up to date with our current vue based front-end architecture. Component variables provide a method to consume Cedar without needing to migrate to Vue.
  - Some teams may have strict requirements around performance and bundle size, in which case component variables provide the most lightweight and lowest impact method of consuming Cedar. However this does come at an additional maintenance and development cost.

#### Extensibility
  - While the Cedar vue components strive to provide an un-opinionated API for teams to build on, there may be some use cases that conflict with that API, or teams may require a lower level of control over their components. In those cases where extending the Cedar vue component is not an option, the component variables can be used to create a new component that implements the desired functionality.

<hr />

### Use When  
  - Your project does not use vue, but you want to use Cedar components.
  - Your project seeks the smallest possible bundle size, and is willing to take on additional maintenance overhead to achieve that.
  - Your project must strictly control the behavior of it's components, and it is not possible to do this through the public Cedar API.
  - You are building a component that must visually match an existing Cedar component, but not it's functionality. For example, a vue-router Link component that looks like a CdrLink.

### Don’t Use When
  - Only use component variables to style the specific element/property for which they are named.
  - Do not publish copies of Cedar components using the variables, as that creates duplication and confusion.
  - Do not use component variables to simply extend or add functionality to existing Cedar components. Instead, you should do that using the actual Cedar vue component if possible.

Questions about when to use component variables? Ask the Cedar team in [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4)

<hr/>


## Naming Structure

The naming structure for component variables and mixins is as follows:
  - **Namespace:** Top level namespace i.e, `cdr-`
  - **Component:** The name of the Cedar component that this variable is exported from
  - **Modifier:** The variant of this Cedar component that this variable applies to. The `base` modifier is used to indicate variables that apply to all instances of that Cedar component, and additional modifier variables can be stacked on top of that. For example, to make a primary large button you would use the variables that have `base`, `primary`, and `large` modifiers.
  - **Sub-Element:** Used to indicate styles that should be applied to a sub-element of a component. For example, `cdr-input-base-label-color` indicates the color of the label element used inside the input component.
  - **CSS Property:** Describes the CSS property that this variable should be applied to. Or, if the property is listed as `mixin` then this is a mixin that should be included in this component.
  - **State:** Describes the element state for which this variable should be applied. These generally correspond to CSS selectors like `:focus`, `:active`, `:hover`, `:disabled`, etc. These states are included in the mixins.

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

## How to Use Component Variables

### For Designers

TODO: note about supported components? 

<br>

### For Developers
A base requirement for using component variables is that you are able to consume packages through the following development processes:
- Your project can compile SCSS or LESS variables
- You can import NPM packages

This repository follows SEMVER practices and will notify users of changes and updates on the #cedar-user-support Slack channel. Each release of component variables will reflect a particular version of the Cedar vue components, and will depend on a version of the Cedar design tokens.


<hr/>


## Adding Component Variables to the Repository
Component variables should never be added to this repository directly. Instead, they should be created inside of the main Cedar repository either as part of styling for a component or as a global shared variable.
For a variety of reasons, not all Cedar vue components export their component variables. If there is a Cedar component that you would like to see supported here, [open an issue here](https://github.com/rei/rei-cedar-component-variables/issues) or reach out to us in #cedar-user-support.



<hr/>


</cdr-doc-table-of-contents-shell>
