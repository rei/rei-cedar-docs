---
{
  "title": "Tokens",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
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

Design tokens are special variables used to maintain a scalable visual system for UI development and brand consistency. Cedar design tokens store the visual design attributes that define the foundation of REI’s visual language, including color, typography and spacing.

Design tokens are key-value pairs. For example:

```bash
Key: value;
cdr-text-primary-lightmode: #292929;
```

  - The key name defines the usage or how to apply the value to a specific context, such as using text on a light background
  - The key stores visual design attributes
  - The key replaces hard-coded values, such as hex values for color or pixel values for spacing
  - Contract of intent will not change when a variable value is updated over time


### Contract of Intent
  - Tokens are versioned and maintained by the design systems team
  - Consumers are required to stay within one major version of the current release

### Benefits

#### Improved UI Development
  - Promotes greater visual consistency and maintainability (when there are changes to brand elements)
  - Aligns with brand standards
  - Consumers can stay in sync with any changes to the visual language with minimal impact to the code

#### Ease of Maintainability
Tokens can streamline redesign processes when:
  - The Cedar team updates a **value** (such as with a new typeface or color hex value), the **tokens** do not need to be changed in code by consumers
  - Teams can consume these changes from SEMVER releases to our supported packages

#### Brand Consistency on Any Platform
  - Extends the distribution of the REI visual language across platforms
  - Ensures brand consistency across all digital channels

#### Extensibility
  - Designers and developers have access to tokens when creating custom components for their applications (within brand standards)


### Use When
Tokens can be used by teams:
- To supplement components when designing page layouts
- To create custom components that are visually aligned to the REI brand styles
- To create new components that can be contributed back to the system
- When there are technical limitations to consuming components


#### Don’t Use When
- Don’t use tokens to make modifications to an existing component. **Instead,** submit a request using the [Feature Request Form](https://airtable.com/shrcbq9CHthuMO7AC) for an existing component
- Don’t use tokens to only access a value or values. **Instead,** create a new token in the [shared-tokens repo](https://git.rei.com/projects/FEDPACK/repos/shared-tokens/browse) that meets your specific semantic use case


Questions about when to use tokens? Ask the Cedar team in [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4)

<hr/>


## Token Criteria
#### Is **“cdr-color-text-primary-lightmode”** a token?
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
      <td>If I apply this token in my component and use it to specify the color for primary text will it still be used for the primary text color in a future design update? </td>
      <td>Yes </td>
    </tr>
    <tr>
      <td>Is this token used for multiple elements and NOT specific to one element? </td>
      <td>Yes </td>
    </tr>
  </tbody>
</table>

**Result:** All of the criteria are met and so **“cdr-color-text-primary-lightmode”** qualifies as a token.

<br>

#### Is **“cdr-color-background-button-secondary-disabled”** a token?
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
      <td>If I apply this token in my component and use it to specify the background color for a secondary button when disabled will it still be used for the secondary button in a future design update? </td>
      <td>Yes </td>
    </tr>
    <tr>
       <td>Is this token used for multiple elements and NOT specific to one element? </td>
      <td><b>No</b></td>
    </tr>
  </tbody>
</table>

**Result:** The fourth criteria is false so **“cdr-color-background-button-secondary-disabled”** does not qualify as a token. Instead it is considered an UI Element variable that is specific to buttons.

<br>

#### Is **“easily-excited”** a token?
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
      <td>If I apply this token in my component and use it to specify a color will it still be used for that color in a future design update? </td>
      <td>Yes </td>
    </tr>
    <tr>
      <td>Is this token used for multiple elements and NOT specific to one element? </td>
      <td><b>Perhaps but it is not used consistently</b></td>
    </tr>
  </tbody>
</table>

**Result:** Only two criteria are met and so **“easily-excited”** does not qualify as a token.

<br>

<hr/>


## Naming Structure for Tokens

The naming structure for tokens follows:
- **Category:** Top level that contains foundational elements such as text, color, spacing
- **Sub-Category:** Describes and narrows category for token.  For instance, "color-text' will define a color for text and can be used for icons
- **Item:** Continues to narrows usage for token. For example, if text is a property, the item could be "-form-" to indicate text used in a form control
- **Sub-Item:** Describes and narrows category for token. For instance, “form” could be modified by “input”
- **Variant:** Describes prominence or state for a token
- **Size:** Describes size for a token, if applicable
- **Mode:** Defines tokens based on themes, such as a dark or light background


The below tables for the naming structure show that levels will be skipped when not used.

#### cdr-color-text-form-label-lightmode
<table>
  <tbody>
    <tr>
      <td>Category </td>
      <td width=240>color- </td>
    </tr>
    <tr>
      <td>Sub-Category </td>
      <td width=240>text- </td>
    </tr>
    <tr>
      <td>Item </td>
      <td width=240>form- </td>
    </tr>
    <tr>
      <td>Sub-Item </td>
      <td width=240>label- </td>
    </tr>
    <tr>
      <td>Variant </td>
      <td width=240>  </td>
    </tr>
    <tr>
      <td>Size </td>
      <td width=240>  </td>
    </tr>
    <tr>
      <td>Mode </td>
      <td width=240>lightmode </td>
    </tr>
  </tbody>
</table>

<br>

#### cdr-color-background-light
<table>
  <tbody>
    <tr>
      <td>Category </td>
      <td width=240>color- </td>
    </tr>
    <tr>
      <td>Sub-Category </td>
      <td width=240>background- </td>
    </tr>
    <tr>
      <td>Item </td>
      <td width=240>  </td>
    </tr>
    <tr>
      <td>Sub-Item </td>
      <td width=240>  </td>
    </tr>
    <tr>
      <td>Variant </td>
      <td width=240>light  </td>
    </tr>
    <tr>
      <td>Size </td>
      <td width=240>  </td>
    </tr>
    <tr>
      <td>Mode </td>
      <td width=240>  </td>
    </tr>
  </tbody>
</table>

<br>

#### cdr-text-editorial-body-compact
<table>
  <tbody>
    <tr>
      <td>Category </td>
      <td width=240>text- </td>
    </tr>
    <tr>
      <td>Sub-Category </td>
      <td width=360>editorial- </td>
    </tr>
    <tr>
      <td>Item </td>
      <td width=240>body-  </td>
    </tr>
    <tr>
      <td>Sub-Item </td>
      <td width=240>  </td>
    </tr>
    <tr>
      <td>Variant </td>
      <td width=240> </td>
    </tr>
    <tr>
      <td>Size </td>
      <td width=240>compact   </td>
    </tr>
    <tr>
      <td>Mode </td>
      <td width=240>  </td>
    </tr>
  </tbody>
</table>

<br>
<hr/>

## How to Use Tokens

### For Designers
- A base requirement for accessing Cedar tokens and using them in designs and wireframes is that you are able to use Sketch version 53.2
- Toolkits are platform specific. If designing for the web, use the UI Web Toolkit
- Tokens are available in Cedar’s UI Toolkit and found on the Tokens page
- When using tokens, it’s your responsibility to pass the entire token name to the developer during the design hand-off process—this can be through automated or manual methods

<br>

### For Developers
A base requirement for using Cedar tokens is that you are able to consume and maintain packages through the following development processes:
- Web consumers:
  - Your project can compile CSS variables
  - You can import NPM packages
- Native iOS consumers using CocoaPods
- Android consumers using Android package manager

#### Install

To install the CdrToken package:

`npm install --save-dev @rei/cdr-tokens@DESIRED_VERSION`

Your project must be able to compile SCSS or LESS in order to make use of the SCSS and LESS modules.

The CdrToken package contains `/dist/less` and `/dist/scss` folders, each of which contains `cdr-tokens.{less|scss}` files with all the tokens in the corresponding format.

Alternatively you could use `/dist/js` and/or `/dist/json` if your project cannot build SCSS and LESS.

#### Usage

SCSS example:
```
@import '@rei/cdr-tokens/dist/scss/cdr-tokens.scss'; /* import the tokens file */

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
```
@import '@rei/cdr-tokens/dist/less/cdr-tokens.less'; /* import the tokens file */

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
```
import { CdrBreakpointLg } from '@rei/cdr-tokens/dist/js/cdr-tokens.esm.js'; /* import the tokens file */

let screenWidth = window.outerWidth || 0;

/* Detect Large Breakpoint
if(screenWidth >= CdrBreakpointLg) {
  // Do Something
}
```

This repository follows SEMVER practices and will notify users of changes and updates on the #cedar-user-support Slack channel.


<hr/>


## Adding Tokens to the Repository
The number of tokens Cedar provides is kept small intentionally as it is critical for a token to meet all requirements based on the above criterium prior to being added to Cedar’s Token list.

If you have a request for a token that is missing, you can submit a request using the [Feature Request Form](https://airtable.com/shrcbq9CHthuMO7AC) or create a token in the [shared-tokens repo](https://git.rei.com/projects/FEDPACK/repos/shared-tokens/browse) for future integration in Cedar.


Ensure that the token meets the following requirements:
- Token is used in several components or layouts
- Token is used for multiple elements and NOT specific to one element
- Token name will continue to have the same semantic meaning in future releases
- Token name follows platform requirements:
  - **Web:** Uses Kebab case. For example, cdr-color-background-dark
  - **iOS:** Uses Pascal case. For example, CdrColorBackgroundColor
  - **Android:** Uses Snake case. For example, cdr_color_background_dark

<hr/>


</cdr-doc-table-of-contents-shell>

