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
  <!-- - Consumers are required to stay within one major version of the current Cedar release. -->
  <!-- - TODO: note about versioning wrt to cedar/tokens? -->
  - These variables and mixins are intended to be used to match the styling of the component/element that they correspond to. For example, `$cdr-button-base-border-radius` should only be used to style the border-radius of a "button-like" element. If you use that variable to set the border-radius on something that is not a button, then that element would be affected any time the Cedar button border radius is changed.

### Benefits

#### Ease of Maintainability
  - In the past, projects that could not consume Cedar vue components would need to copy and paste styling out of Cedar and into their own project. This prevents the design systems team from pushing out updates without having the consuming team manually update their styling.
  - By making component variables and mixins available, teams that are not using vue can still stay in sync with the visual styling for the vue components without needing to duplicate code from Cedar or perform tedious manually updates.

#### More Options for Consuming Teams   
  - Not all teams are on the current architecture.  TODO
  - Some teams are way ahead of that architecture, or require a highly optimized and minified bundle. TODO

#### Brand Consistency on More Platforms
  - Component variables are the exact same CSS styles that are being used in the Cedar vue components, so we can be sure that the visual styling of our most atomic components are consistent across REI.
  - TODO

#### Extensibility
  -

### Use When  
- one TODO
- two
- three


### Don’t Use When
- one TODO
- two
- three

Questions about when to use tokens? Ask the Cedar team in [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4)

<hr/>


## Naming Structure for Component Variables and Mixins

The naming structure for tokens follows:
- **Namespace:** Top level namespace i.e, `cdr-`
- **Component:** The name of the Cedar component that this variable is exported from
- **Modifier:** The variant of this Cedar component that this variable applies to. The `base` modifier is used to indicate variables that apply to all instances of that Cedar component, and additional modifier variables can be stacked on top of that. For example, to make a primary large button you would use the variables that have `base`, `primary`, and `large` modifiers.
- **Sub-Element:** Used to indicate styles that should be applied to a sub-element of a component. For example, `cdr-input-base-label-color` indicates the color of the label element used inside the input component.
- **CSS Property:** Describes the CSS property that this variable should be applied to
- **State:** Describes the element state for which this variable should be applied. These generally correspond to CSS selectors like `:focus`, `:active`, `:hover`, `:disabled`, etc.

### examples
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
  </tbody>
</table>

<br>

## How to Use Component Variables

### For Designers
- You can continue using Cedar components as you normally would, and your developers will determine whether to use the vue components or the component variables.
- Note about which components are supported?

<br>

### For Developers
A base requirement for using component variables is that you are able to consume packages through the following development processes:
- Your project can compile SCSS or LESS variables
- You can import NPM packages

This repository follows SEMVER practices and will notify users of changes and updates on the #cedar-user-support Slack channel. Each release of component variables will reflect a particular version of the Cedar vue components, and will depend on a version of the Cedar design tokens.


<hr/>


## Adding Component Variables to the Repository
Component variables should never be added to this repository directly. Instead, they should be created inside of the main Cedar repository either as part of styling for a component or as a global shared variable.
For a variety of reasons, not all Cedar vue components export their component variables. If there is a Cedar component that you would like to see supported here, [open an issue](https://github.com/rei/rei-cedar-component-variables/issues) or reach out to us in #cedar-user-support.



<hr/>


</cdr-doc-table-of-contents-shell>
