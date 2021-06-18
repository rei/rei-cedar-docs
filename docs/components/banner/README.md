---
{
  "title": "Banner",
  "layout_type": "LayoutComponent",
  "summary": "Provide contextual feedback messages for typical user actions",
  "title_metadata": "CdrBanner",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrBanner, IconInformationFill, IconCheckFill, IconWarningFill, IconXFill"
  },

  "versions": [
    {
      "components": [
        {
          "name": "CdrBanner",
          "api": {
            "props": [
              {
                "name": "type",
                "type": "string",
                "default": "'info'",
                "description": "Sets the banner style. Possible values: { 'info' | 'success' | 'warning' | 'error'}"
              },
            ],
            "slots": [
              {
                "name": "default",
                "description": "Slot for CdrBanner content."
              }
            ]
          }
        }
      ]
    }
  ]
}
---

<cdr-doc-table-of-contents-shell >

# Overview

CdrBanner is a simple wrapper component that allows for composing various banner layouts.

There are four different options for styling the banner, based on the [banner type](../banner/#guidelines).

Banners should be passed an appropriate icon and text for the banner message type.

<cdr-doc-example-code-pair repository-href="/src/components/banner"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<cdr-banner type="info">
  <icon-information-fill /> Informational
</cdr-banner>
<br>
<cdr-banner type="success">
  <icon-check-fill/> Success
</cdr-banner>
<br>
<cdr-banner type="warning">
  <icon-warning-fill/> Warning
</cdr-banner>
<br>
<cdr-banner type="error">
  <icon-x-fill/> Error
</cdr-banner>
```
</cdr-doc-example-code-pair>


## Accessibility

Many WCAG requirements are contextual to their implementation. To ensure that usage of this component complies with accessibility guidelines you are responsible for the following:
- Add `role="alert"` for messages that are important or time sensitive to ensure that the messaging is immediately announced to screen readers. For other content, add `aria-live="polite"`.
- For static messaging that calls out the type of banner in the text and that is loaded with the page there is no need to do anything specific
- For messages that do not include text to identify what type of banner is being displayed users should add screen reader only text that adds this information to the start of their message
- Don't rely on color alone to convey your message. Provide an additional indicator to color, like an icon: [WCAG 1.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)
- Error Identification techniques and criteria: [WCAG 3.3.1](https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html)

<cdr-doc-example-code-pair repository-href="/src/components/banner"
:sandbox-data="$page.frontmatter.sandboxData" >

```html

<cdr-banner type="info">
  <icon-information-fill /> Static Informational Messaging With No Accessibility Markup Needed
</cdr-banner>

<br>

<cdr-banner type="error" role="alert">
  <icon-x-fill/> Urgent Error Message With `role="alert"`
</cdr-banner>

<br>

<cdr-banner type="success" aria-live="polite">
  <icon-check-fill/> Non-Urgent Success Message With `aria-live="polite"`
</cdr-banner>

<br>

<cdr-banner type="warning" aria-label="Banner with no text and aria-label applied" style="width: min-content">
  <icon-warning-fill/>
</cdr-banner>

```
</cdr-doc-example-code-pair>

# Guidelines

Banner messaging keeps users informed of important and sometimes time-sensitive changes contextual to inline elements on the page. These messages help to clarify an issue and/or notify users of a potential problem that may require their attention.

There are four types of banners: **error, warning, success, and informational**. Each type corresponds with a color and icon to provide a consistent, universal experience for users.

### **Error**
Use to inform that something went wrong. They affect or block the user's experience and must be resolved before moving forward.

### **Warning**
Use for a message requiring attention but not resolution in order to continue. Warning banners might tell a user what could happen if they don’t address what they’re being warned about.

### **Success**
Use to communicate that an action has been successfully completed. Provides a positive response to user actions. No action is required.

### **Informational**
Use to provide context around a situation. No action is required.


## Use when

- To provide a user the status of an action they’re trying to complete
- As a validation message that banners someone that they just did something that needs to be corrected (see [Error](../banner/#error) and [Warning](../banner/#warning) types)
- As confirmation that a task was completed successfully (see [Success](../banner/#success) type)
- As contextual information that might need their attention (see [Informational](../banner/#informational) type)

## Don't use when

- To provide inline error messaging for form input validation. Instead use the built in validation and error features of the Cedar form components.

# API

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Component Variables

<cdr-doc-comp-vars name="CdrBanner"/>

</cdr-doc-table-of-contents-shell>
