---
{
  "title": "Alert",
  "layout_type": "LayoutComponent",
  "summary": "Provide contextual feedback messages for typical user actions",
  "title_metadata": "CdrAlert",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrAlert, IconInformationFill, IconCheckFill, IconWarningFill, IconXFill"
  },

  "TODO-DO/DONT": [
    {
      "type": "do",
      "image": "",
      "ratio": "4-3",
      "alt": "Image showing proper alert usage",
      "caption": "TODO"
    },
    {
      "type": "dont",
      "image": "",
      "ratio": "4-3",
      "alt": "Image showing improper alert usage",
      "caption": "TODO"
    }
  ],

  "versions": [
    {
      "components": [
        {
          "name": "CdrAlert",
          "api": {
            "props": [
              {
                "name": "type",
                "type": "string",
                "default": "'info'",
                "description": "Sets the alert style. Possible values: { 'info' | 'success' | 'warning' | 'error'}"
              },
            ],
            "slots": [
              {
                "name": "default",
                "description": "Slot for CdrAlert content."
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

CdrAlert is a simple wrapper component that allows for composing various alert layouts.

There are four different options for styling the alert, based on the [alert type](../alert/#guidelines). 

Alerts should be passed the icon component with the appopriate icon and text for the alert message. 

<cdr-doc-example-code-pair repository-href="/src/components/alert"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<cdr-alert type="info">
  <icon-information-fill /> Info alert
</cdr-alert>
<br>
<cdr-alert type="success">
  <icon-check-fill/> Success alert
</cdr-alert>
<br>
<cdr-alert type="warning">
  <icon-warning-fill/> Warning alert
</cdr-alert>
<br>
<cdr-alert type="error">
  <icon-x-fill/> Error alert
</cdr-alert>
```
</cdr-doc-example-code-pair>


## Accessibility

Many WCAG requirements are contextual to their implementation. To ensure that usage of this component complies with accessibility guidelines you are responsible for the following:
- For static messaging that calls out the type of alert in the text and that is loaded with the page there is no need to do anything specific
- For messages that do not include text to identify what type of alert is being displayed users should add screen reader only text that adds this information to the start of their message
- Provide a text description when user input falls outside the required format or values: [W3C Techniques for WCAG 2.1](https://www.w3.org/WAI/WCAG21/Techniques/general/G83)
- Don't rely on color alone to convey your message. Provide an additional indicator to color, like an icon: [WCAG 1.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)
- Error Identification techniques and criteria: [WCAG 3.3.1](https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html)

This component has compliance with following WebAIM’s accessibility guidelines:
- Component sets `role="alert"` on the container to signal to assistive technology that they require the user’s immediate attention 


# Guidelines

Alert messaging keeps users informed of important and sometimes time-sensitive changes contextual to inline elements on the page. These messages help to clarify an issue and/or notify users of a potential problem that may require their attention. 

There are four types of alerts: **error, warning, success, and informational**. Each type corresponds with a color and icon to provide a consistent, universal experience for users.

### **Error**
Use to inform that something went wrong. They affect or block the user's experience and must be resolved before moving forward.

### **Warning**
Use for a message requiring attention but not resolution in order to continue. Warning alerts might tell a user what could happen if they don’t address what they’re being warned about.

### **Success**
Use to communicate that an action has been successfully completed. Provides a positive response to user actions. No action is required. 

### **Informational**
Use to provide context around a situation. No action is required.


## Use when

- To provide a user the status of an action they’re trying to complete 
- As a validation message that alerts someone that they just did something that needs to be corrected (see [Error](../alert/#error) and [Warning](../alert/#warning) types)
- As confirmation that a task was completed successfully (see [Success](../alert/#success) type)
- As contextual information that might need their attention (see [Informational](../alert/#informational) type)


# API

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />


</cdr-doc-table-of-contents-shell>
