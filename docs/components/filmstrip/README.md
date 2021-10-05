---
{
  "title": "Filmstrip",
  "layout_type": "LayoutComponent",
  "summary": "",
  "title_metadata": "",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrBanner, CdrTooltip, CdrButton, IconInformationStroke, IconInformationFill, IconCheckFill, IconWarningFill, IconXFill, IconQuestionFill, IconErrorFill, IconXLg"
  },
}
---

<cdr-doc-table-of-contents-shell >

# Overview

A banner is used to communicate a general status event or to promote a feature.
  
CdrBanner is a simple wrapper component that allows for composing various banner layouts. There are five different options for styling the banner, based on the [banner type](#guidelines).

## Default variant

description

example
<cdr-doc-example-code-pair repository-href="/src/components/banner"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<cdr-banner>
  <template #icon-left>
    <icon-question-fill />
  </template>
  Default
</cdr-banner>
<br>
<cdr-banner type="info">
  <template #icon-left>
    <icon-information-fill />
  </template>
  Informational
</cdr-banner>
<br>
<cdr-banner type="success">
  <template #icon-left>
    <icon-check-fill />
  </template>
  Success
</cdr-banner>
<br>
<cdr-banner type="warning">
  <template #icon-left>
    <icon-warning-fill />
  </template>
  Warning
</cdr-banner>
<br>
<cdr-banner type="error">
  <template #icon-left>
    <icon-error-fill />
  </template>
  Error
</cdr-banner>
```
</cdr-doc-example-code-pair>

## Variant 2

description

example
<cdr-doc-example-code-pair repository-href="/src/components/banner"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<cdr-banner type="warning">
  <template #icon-left>
    <icon-warning-fill />
  </template>
  Ortlieb Top Tube Pack is partially out of stock.
  <template #message-body>
    While you requested 4 of these items, only 3 are currently available in inventory. We’ll automatically remove unavailable items during checkout.
  </template>
</cdr-banner>
```
</cdr-doc-example-code-pair>

## Icon Right

CdrBanner provides an optional `icon-right` slot that can be used to provide an action related to the Banner such as a close button. The actionable element should have an aria-label that explains it's relationship to the banner and what happens when you click on it.

<cdr-doc-example-code-pair repository-href="/src/components/banner"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<cdr-banner type="error" role="alert">
  <template #icon-left>
    <icon-error-fill />
  </template>
  Ortlieb Top Tube Pack is out of stock.
  <template #icon-right>
    <cdr-button
      :icon-only="true"
      aria-label="Close"
    >
      <template #icon>
        <icon-x-lg inherit-color />
      </template>
    </cdr-button>
  </template>
</cdr-banner>
```
</cdr-doc-example-code-pair>


## Accessibility

description

example
<cdr-doc-example-code-pair repository-href="/src/components/banner"
:sandbox-data="$page.frontmatter.sandboxData" >

```html

<cdr-banner type="info">
  <template #icon-left>
    <icon-information-fill />
  </template>
  Static Informational Messaging With No Accessibility Markup Needed
</cdr-banner>

<br>

<cdr-banner type="error" role="alert">
  <template #icon-left>
    <icon-error-fill />
  </template>
  Urgent Error Message With `role="alert"`
</cdr-banner>

<br>

<cdr-banner type="success" aria-live="polite">
  <template #icon-left>
    <icon-check-fill />
  </template>
  Non-Urgent Success Message With `aria-live="polite"`
</cdr-banner>

<br>

<cdr-banner aria-label="Additional information about what kind of message is being displayed">
    <template #icon-left>
      <icon-question-fill />
    </template>
    Generic banner
</cdr-banner>

```
</cdr-doc-example-code-pair>

# Guidelines


## Use when


## Don't use when


## Content
  


## Structure
  

  
## Behavior 



## Placement 


</cdr-doc-table-of-contents-shell>
