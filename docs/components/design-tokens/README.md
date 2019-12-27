---
{
  "title": "Design Tokens",
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

Design tokens are special variables used to maintain a scalable visual system for UI development and brand consistency. Cedar design tokens store the visual design attributes that define the foundation of REI’s visual language, including color, typography, and spacing.

For a complete list of Cedar design tokens, visit the [Cedar Tokens](https://rei.github.io/rei-cedar-tokens) page.

Design tokens are key-value pairs. For example:

```
Key: value;
cdr-text-primary-lightmode: #292929;
```

  - The key name defines the usage or how to apply the value to a specific context, such as using text on a light background
  - The key stores visual design attributes
  - The key replaces hard-coded values, such as hex values for color or pixel values for spacing


### Contract of Intent
  - Tokens are versioned and maintained by the design systems team
  - Consumers are required to stay within one major version of the current release
  - Contract of intent will not change when a variable value is updated over time

### Benefits

#### Improved UI Development
  - Promotes greater visual consistency and maintainability (when there are changes to brand elements)
  - Aligns with brand standards
  - Consumers can stay in sync with any changes to the visual language with minimal impact to the code

#### Ease of Maintainability
Design Tokens can streamline redesign processes when:
  - The Cedar team updates a **value** (such as with a new typeface or color hex value), the **tokens** do not need to be changed in code by consumers
  - Teams can consume these changes from SEMVER releases to our supported packages

#### Brand Consistency on Any Platform
  - Extends the distribution of the REI visual language across platforms
  - Ensures brand consistency across all digital channels

#### Extensibility
  - Designers and developers have access to design tokens when creating custom components for their applications (within brand standards)


### Use When
Design Tokens can be used by teams:
- To supplement components when designing page layouts
- To create custom components that are visually aligned to the REI brand styles
- To create new components that can be contributed back to the system
- When there are technical limitations to consuming components


### Don't Use When
- Don’t use design tokens to make modifications to an existing component. **Instead,** submit a request using the [Feature Request Form](https://airtable.com/shrcbq9CHthuMO7AC) for an existing component
- Don’t use design tokens to only access a value or values. **Instead,** create a new token in the [shared-tokens repo](https://git.rei.com/projects/FEDPACK/repos/shared-tokens/browse) that meets your specific semantic use case


Questions about when to use design tokens? Ask the Cedar team in [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4)

<hr/>


## Token Criteria
#### Is **“cdr-color-text-primary-lightmode”** a design token?
<table>
  <tbody>
    <tr>
      <td>Is “cdr-color-text-primary-lightmode” used in several components or layouts?</td>
      <td>Yes </td>
    </tr>
    <tr>
      <td>Is it clear where this is to be used based on its name? </td>
      <td>Yes </td>
    <tr>
      <td>If I apply this design token in my component and use it to specify the color for primary text will it still be used for the primary text color in a future design update? </td>
      <td>Yes </td>
    </tr>
    <tr>
      <td>Is this design token used for multiple elements and NOT specific to one element? </td>
      <td>Yes </td>
    </tr>
  </tbody>
</table>

**Result:** All of the criteria are met and so **“cdr-color-text-primary-lightmode”** qualifies as a design token.

<br>

#### Is **“cdr-color-background-button-secondary-disabled”** a design token?
<table>
  <tbody>
    <tr>
      <td>Is “cdr-color-background-button-secondary-disabled” used in several components or layouts? </td>
      <td>Yes </td>
    </tr>
    <tr>
      <td>Is it clear where this is to be used based on its name?</td>
      <td>Yes </td>
    </tr>
    <tr>
      <td>If I apply this design token in my component and use it to specify the background color for a secondary button when disabled, will it still be used for the secondary button in a future design update? </td>
      <td>Yes </td>
    </tr>
    <tr>
       <td>Is this design token used for multiple elements and NOT specific to one element? </td>
      <td><b>No</b></td>
    </tr>
  </tbody>
</table>

**Result:** The fourth criteria is false, so **“cdr-color-background-button-secondary-disabled”** does not qualify as a design token. Instead, it is considered an UI element variable that is specific to buttons.

<br>

#### Is **“easily-excited”** a design token?
<table>
  <tbody>
    <tr>
      <td>Is “easily-excited” used in several components or layouts? </td>
      <td>Yes </td>
    </tr>
    <tr>
      <td>Is it clear where this is to be used based on its name? </td>
      <td><b>No</b></td>
    </tr>
    <tr>
      <td>If I apply this design token in my component and use it to specify a color will it still be used for that color in a future design update? </td>
      <td>Yes </td>
    </tr>
    <tr>
      <td>Is this design token used for multiple elements and NOT specific to one element? </td>
      <td><b>Perhaps but it is not used consistently</b></td>
    </tr>
  </tbody>
</table>

**Result:** Only two criteria are met and so **“easily-excited”** does not qualify as a design token.

<br>

<hr/>


## Naming Structure for Design Tokens

The naming structure for design tokens follows:
- **Category:** Top level that contains foundational elements such as `text`, `color`, `spacing`
- **Sub-Category:** Describes and narrows category for token. For instance, `color-text` will define a color for text and can be used for icons
- **Item:** Continues to narrows usage for token. For example, if text is a property, the item could be `form` to indicate text used in a form control
- **Sub-Item:** Describes and narrows category for token. For instance, `form` could be modified by `input`
- **Variant:** Describes prominence or state for a token
- **Size:** Describes size for a token, if applicable
- **Mode:** Defines tokens based on themes, such as a dark or light background


The below tables for the naming structure show that levels will be skipped when not used.

<!--
#### TODO:
Would be nice to use table markdown but alternating row styling is inverted. Heading and first row are the same color. WRONG!

| Category | Sub-Category | Item | Sub-Item | Variant | Size | Mode |
| -- | -- | -- | -- | -- | -- | -- |
| `color` | `text-` | `form-` | `label-` | | | `lightmode-` |
 -->

#### cdr-color-text-form-label-lightmode
<table>
  <tbody>
    <tr>
      <th>Category</th>
      <th>Sub-Category</th>
      <th>Item</th>
      <th>Sub-Item</th>
      <th>Variant</th>
      <th>Size</th>
      <th>Mode</th>
    </tr>
    <tr>
      <td>color-</td>
      <td>text-</td>
      <td>form-</td>
      <td>label-</td>
      <td></td>
      <td></td>
      <td>lightmode</td>
    </tr>
  </tbody>
</table>

#### cdr-color-background-light
<table>
  <tbody>
    <tr>
      <th>Category</th>
      <th>Sub-Category</th>
      <th>Item</th>
      <th>Sub-Item</th>
      <th>Variant</th>
      <th>Size</th>
      <th>Mode</th>
    </tr>
    <tr>
      <td>color-</td>
      <td>background-</td>
      <td></td>
      <td></td>
      <td>light</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

#### cdr-text-heading-800
<table>
  <tbody>
    <tr>
      <th>Category</th>
      <th>Sub-Category</th>
      <th>Item</th>
      <th>Sub-Item</th>
      <th>Variant</th>
      <th>Size</th>
      <th>Mode</th>
    </tr>
    <tr>
      <td>text-</td>
      <td></td>
      <td>heading-</td>
      <td></td>
      <td></td>
      <td>800</td>
      <td></td>
    </tr>
  </tbody>
</table>

<br>
<hr/>

## How to Use Tokens

### For Designers
Design tokens are available in Sketch using Abstract by linking the [CDR Tokens Library](../../getting-started/as-a-designer/#using-the-toolkit) into your project.
This library contains Symbols, Text Styles, and Layer Styles that correspond to Cedar tokens.
Place the _Stickersheet_ Symbol in your project for a visual overview.

When using design tokens, it’s your responsibility to pass the entire design token name to the developer during the design hand-off process—this can be through automated or manual methods.

For more information, see [Getting Started As A Designer](../../getting-started/as-a-designer/).


### For Developers
A base requirement for using Cedar design tokens is that you are able to consume and maintain packages through the following development processes:
- Web consumers:
  - Your project can compile CSS variables
  - You can import NPM packages
- Native iOS:
  - You can import CocoaPods

#### Install

To install the [CdrToken package](https://www.npmjs.com/package/@rei/cdr-tokens) from npm:

`npm install --save-dev @rei/cdr-tokens`

Your project must be able to compile SCSS or LESS in order to make use of the SCSS and LESS modules.

The CdrToken package contains `/dist/less` and `/dist/scss` folders, each of which contains `cdr-tokens.{less|scss}` files with all the design tokens in the corresponding format.

Alternatively you could use `/dist/js` and/or `/dist/json` if your project cannot build SCSS and LESS.

#### Usage

SCSS example:
```scss
@import '@rei/cdr-tokens/dist/scss/cdr-tokens.scss'; /* import the design tokens file */

.your-default-text-class {
  /* use mixins to apply many properties at once */
  @include cdr-text-default;
}

.your-other-text-class {
  /* use scss variables if you need to apply specific properties */
  color: $cdr-color-text-error-lightmode;
}
```

LESS example:
```less
@import '@rei/cdr-tokens/dist/less/cdr-tokens.less'; /* import the desogn tokens file */

.your-default-text-class {
  /* use mixins to apply many properties at once */
  .cdr-text-default();
}

.your-other-text-class {
  /* use variables if you need to apply specific properties */
  color: @cdr-color-text-error-lightmode;
}
```

JavaScript example:
```js
import { CdrBreakpointLg } from '@rei/cdr-tokens/dist/js/cdr-tokens.esm.js'; /* import the design tokens file */

let screenWidth = window.outerWidth || 0;

// Detect Large Breakpoint
if (screenWidth >= CdrBreakpointLg) {
  // Do Something
}
```

This repository follows SEMVER practices and will notify users of changes and updates on the #cedar-user-support Slack channel.

<hr/>


## Adding Design Tokens to the Repository

If you have a request for a design token that is missing from the [Cedar Tokens](https://rei.github.io/rei-cedar-tokens) list, you can submit a request using the [Feature Request Form](https://airtable.com/shrcbq9CHthuMO7AC) or create a design token in the [shared-tokens repo](https://git.rei.com/projects/FEDPACK/repos/shared-tokens/browse) for future integration in Cedar.


Ensure that the design token meets the following requirements:
- Design token is used in several components or layouts
- Design token is used for multiple elements and NOT specific to one element
- Design token name will continue to have the same semantic meaning in future releases
- Design token name follows platform requirements:
  - **Web:** Uses Kebab case. For example, cdr-color-background-dark
  - **iOS:** Uses Pascal case. For example, CdrColorBackgroundColor
  - **Android:** Uses Snake case. For example, cdr_color_background_dark


<hr/>


</cdr-doc-table-of-contents-shell>
