---
{
  "title": "Fall 2021 Release",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "11.x.x Release Notes"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Update Steps

<cdr-banner type="warning" aria-live="polite"><template #icon-left><icon-warning-fill inherit-color /></template><span style="font-weight:500">We recommend updating older versions to Cedar 10.x.x before proceeding</span><template #message-body>We have concurrently released an update to Cedar's babel config to align with FEBS and reduce bundle sizes. This update has been released as standalone major version, please see the <cdr-link href="../summer-2021/">release notes</cdr-link> for upgrade instructions.</template></cdr-banner>

- Update to the latest version of the Cedar packages:

| package name | version |
|--------------|---------|
| `@rei/cedar` | ^11.x.x |
| `@rei/cdr-tokens` | ^10.x.x |
| `@rei/cdr-component-variables` | ^7.x.x |
| `@rei/cedar-icons` | ^2.2.x |

- If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your micro-site.

<br>

## New Features

### CdrBanner Redesign

CdrBanner has been redesigned to support additional configurations and utilize the new messaging color tokens.

See the [CdrBanner docs page](../../components/banner) for more information.

### CdrToast

We have created a new CdrToast component that can be used for transient status notifications.

See the [CdrToast docs page](../../components/toast) for more information.

### Heading Display

We have introduced a new suite of display heading styles for certain campaign applications. These larger and lighter styles can be consumed via [token mixins](../../tokens/all-tokens/#text).

### Messaging color update

New messaging [color tokens](../../tokens/all-tokens/#colors) have been added to CdrTokens to support our updates to messaging patterns.

### New Error Icons

We have introduced new error icons to our [icon library](../..//icons/library/) to create more clear delineation between warning and error icons.

<icon-error-stroke/> <icon-error-fill/>

### CdrButton Type Size

We have aligned the type size of CdrButton to be same at the medium (default) and large [button sizes](../..//components/buttons/#sizing).

<br>

## Patterns
Patterns are intended serve as guidance for teams solving similar problems over and over, and to document best practices for interaction design patterns to guide users through common tasks.
 
The first batch of Cedar Patterns focuses on the themes of Forms and Messaging, bringing forward the research and reasoning behind many new components delivered in the past year, and helping teams determine what available components are appropriate for each experience.

 
### Alerts

Alerts inform users that something important has happened on the page.

See the [Alerts docs page](../../patterns/alerts) for more information.

### Form Inputs

Use form input patterns to capture user data in a consistent, optimized manner.

See the [Form Input Types docs page](../../patterns/forms-input-types) for more information.

### Form Validation

Form validation ensures the data a user has entered into a form matches the requirements of our systems.

See the [Form validation docs page](../../patterns/form-validation) for more information.
### Validation Notifications

Validation notifications provide important feedback to users during and after form submission.

See the [Validation notifications docs page](../../patterns/validation-notifications) for more information.

### Update and Loading Notifications

Update and loading notifications inform users of the current working state of their request and help reduce uncertainty.

See the [Update and loading notifications docs page](../../patterns/update-and-loading-notifications) for more information.

### Status Notifications

Status Notifications inform users that something on the page has changed.

See the [Status notifications docs page](../../patterns/status-notifications) for more information.

<br>

## Bug Fixes

### CdrModal
CdrModal has been updated to address an issue when using the `modal` slot that would result in errors being thrown when opened.

<br>

## Deprecations

### CdrBanner Component Variable

With the redesign of CdrBanner, the component variable has been deprecated and will be removed in a future release. Teams who are unable to utilize the Vue component should plan to make use of the [messaging tokens](http://localhost:8080/tokens/all-tokens/#colors) to create their banners. 

### Preparing for Vue 3

*The following have been carried over from the [Spring 2021 release](../spring-2021/#deprecations). We will continue to note Vue 3 related deprecations so teams can adequately prepare for the upcoming migration.*
#### CdrBreadcrumb and CdrPagination Scoped Slots

CdrBreadcrumb and CdrPagination both allow for passing in a scoped slot for rendering their link elements which was intended to support things like vue-router which must override the default link navigation behavior. This feature increased the complexity of both components, making it difficult to maintain and improve the components over time. It requires that consumers bind multiple attributes to the slot element to ensure a consistent UI. Most importantly, this functionality is better served through an event handler which would allow the Cedar components to remain simple and consistent but give consumers the flexibility to customize their behavior.

 We are planning to remove support for scoped slots in both components as part of our future Vue 3 updates. See the [CdrBreadcrumb](../../components/breadcrumb/#custom-navigation) or [CdrPagination](../../components/pagination/#overriding-default-navigation) pages for examples of how to override their default navigation behavior. Please reach out to the Cedar team if you have any questions or concerns about this change.

#### Vue 3: Update Slot Syntax

Vue 2.6 introduced a new `v-slot` syntax for passing slot content into components. A pound sign `#` can be used as a shorthand for `v-slot:`, much like a colon `:` can be used as a shorthand for `v-bind`. The old syntax is removed from Vue 3 and we recommend updating your codebase to make use of the new slot syntax to simplify the upgrade process in the future. Note that the new `v-slot` or `#` syntax can only be used on a `template` tag, however those additional `template` tags will not be included in the rendered HTML.

```
<!-- Named slots -->
<span slot="slotname">old named slot syntax</span>
<template #slotname>
  <span>new named slot syntax<span>
</template>

<!-- Scoped slots -->
<template slot="slotname" slot-scope="scopeObject">old scoped slot syntax {{ scopeObject.name }}</template>
<template #slotname="scopeObject">new scoped slot syntax {{ scopeObject.name }}</template>
```

The examples on this doc site have been updated to make use of the new syntax, see the [Vue documentation](https://vuejs.org/v2/guide/components-slots.html#Named-Slots) for more information.

<br>

## Breaking Changes

### Removals

In accordance with our deprecation policy, features that were deprecated in the [Winter 2021 release](../winter-2021/#deprecations) and [Spring 2021 release](../spring-2021/#deprecations) have been removed from Cedar.

#### CdrRow and CdrCol

CdrRow and CdrCol have been removed from Cedar in favor of the more performant [CdrGrid](../../components/grid). If teams are still needing to incrementally migrate their usage, CdrRow and CdrCol can be consumed from [@rei/flex-grid](https://git.rei.com/projects/FEDCOMP/repos/flex-grid/browse).

</cdr-doc-table-of-contents-shell>
