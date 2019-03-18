---
{
  "title": "Tokens",
  "title_metadata": false,
  "layout": "LayoutComponent",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "Foundation/"
    }
  ],
}
---


<cdr-doc-tabs>
<template slot="Overview">
<cdr-doc-table-of-contents-shell>

## Overview

Our design tokens are special variables used to maintain a scalable visual system for UI development and brand consistent. Cedar design tokens store the visual design attributes that define the foundation of REI’s visual language, including color, typography and spacing.

Design tokens are key-value pairs. For example:

```bash
Key: value;
cdr-text-primary-lightmode: #292929;
```

  - The key name defines the usage or how to apply the value to a specific context such as using text on a light background color background darkmode
  - The key stores visual design attributes
  - The key replaces hard-coded values, such as hex values for color or pixel values for spacing
  - Contract of intent will not change when a variable value is updated over time


### Contract of Intent
  - Tokens are versioned and maintained by the design systems team 
  - Consumers will be responsible to keep up to no less than one major version back from the current release

### Benefits 

#### Improved UI Development
  - Promotes greater visual consistency and maintainability (when there are changes to brand elements)
  - Aligns with brand standards
  - Consumers can stay in sync with any changes to the visual language with minimal impact to the code

#### Ease of Maintainability
Tokens can streamline redesign processes by:
  - When the Cedar team updates an value (such as with a new typeface or color hex value), the tokens do not need to be changed in code by consumers
  - Teams can consume these changes from SEMVER releases to our supported packages

#### Brand Consistency on Any Platform
  - Extends the distribution of the REI visual language across platforms
  - Ensures brand consistency across all digital channels

#### Extensibility 
  - Designers and developers have access to these tokens when creating custom styling   components for their applications (within brand standards) 


### Use When  
There are a couple of primary use cases for using tokens in place of components:
- **Technical Limitations:** When teams: 
  - Are unable to consume components
  - Need to use their own markup structure for mobile apps or third party development
  - Have custom components that retain requirements for a consistent brand UI

- **Custom Experiences:** When a component does not (or will not) exist in the system:
  - Teams can use tokens to create custom components
  - Align new experiences with the current visual guidelines

- **Design System Internal:** Used by the Cedar design system:
  - To create components or compositions

#### Don’t Use When
- Don’t use tokens to recreate existing components that need slight modifications to the component’s API. **Instead:**
  - Submit change request to existing component
  - Submit PR to existing component
  
- Don’t use tokens that do not meet your specific semantic use case just to access a value. **Instead:**
  - Create a new token in the FED-COMPONENTS Token staging file (we need to create this)
  - Use a hardcoded value 

<hr/>


## Token Criteria
### Is **“cdr-color-text-primary-lightmode”** a token?
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

### Is **“cdr-color-background-button-secondary-disabled”** a token?
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
      <td>No </td>
    </tr>
  </tbody>
</table>

**Result:** The fourth criteria is false so **“cdr-color-background-button-secondary-disabled”** does not qualify as a token. Instead it is considered an UI Element variable that is specific to buttons.

<br>

### Is **“easily-excited”** a token?
<table>
  <tbody>
    <tr>
      <td>Is “easily-excited”” used in several components or layouts? </td>
      <td>Yes </td>
    </tr>
    <tr>
      <td>Is it clear where this is to be used based on its nam </td>
      <td>No </td>
    </tr>
    <tr>
      <td>If I apply this token in my component and use it to specify a color will it still be used for that color in a future design update? </td>
      <td>Yes </td>
    </tr>
    <tr>
      <td>Is this token used for multiple elements and NOT specific to one element? </td>
      <td>**Perhaps but it is not used consistently**</td>
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

### Examples 
The below table is intended to show the naming structure. Levels will be skipped when not used. 

|                        | **Category** | **Sub-Category**  | **Item**  | **Sub-Item**  | **Variant**  | **Size**  | **Theme**  | **Complete Token Name**           |
| :--------------------- | :----------- | :---------------- | :-------- | :------------ | :----------- | :-------- | :--------- | :-------------------------------- |
| Example 1 (color)      |  color-      | text-             |           |               |  primary-    |           | lightmode  | color-text-primary-lightmode      |
| Example 2 (color)      |  color-      | text-             | link-     | label-        |              |           | lightmode  | color-text-link-lightmode         |
| Example 3 (color)      |  color-      | text-             | form-     |               |              |           | lightmode  | color-text-form-label-darkmode    | 
| Example 4 (color)      |  color-      | background-       |           |               | light        |           |            | color-background-light            |
| Example 5 (color)      |  color-      | border-           |           |               | secondary-   |           | lightmode  | color-border-secondary-lightmode  |
| Example 6 (typography) |  text-       | editorial-        | body      |               |              |           |            | text-editorial-body               |
| Example 7 (typography) |  text-       | default-          | body-     |               |              | compact   |            | text-default-body-compact         |
| Example 8 (spacing)    |  space-      |                   |           |               |              | half-x    |            | space-half-x                      |


<hr/>


## How to Use Tokens

### For Designers
Information coming soon


### For Developers
A base requirement for using Cedar tokens is that you are able to consume and maintain packages through the following development processes:
- Web consumers:
  - Your project can compile css variables 
  - You can import NPM packages
- Native iOS consumers using CocoaPods
- Android consumers using Android package manager
This repository follows SEMVER practices and will notify users of changes and updates on the #cedar-user-support Slack channel.


<hr/>


## Adding Tokens to the Repository
The number of Tokens Cedar provides is kept small intentionally as it is critical for a token to meet all requirements based on the above criterium prior to being added to Cedar’s Token list.

If you have a request for a token that is missing, you can [submit a pull request to the cedar-token repo](https://www.npmjs.com/package/@rei/cdr-tokens#addingupdating-tokens) or ask in the #cedar-users-support Slack channel. Ensure that the token meets the following requirements:
- Token is used in several components or layouts
- Token is used for multiple elements and NOT specific to one element
- Token name will continue to have the same semantic meaning in future releases
- Token name follows platform requirements: 
  - For web, token name tells consumers where it will be used 
  - For iOS, TBD or link to outside source for naming conventions 
  - For Android, TBD or link to outside source for naming conventions 

<hr/>


</cdr-doc-table-of-contents-shell>
</template>
</cdr-doc-tabs>
