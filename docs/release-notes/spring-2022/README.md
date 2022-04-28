---
{
  "title": "Spring 2022 Release",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "12.x.x Release Notes"
    }
  ],
}
---
<cdr-banner type="info" aria-live="polite"><template #icon-left><icon-information-fill inherit-color /></template><span style="font-weight:500">This is the final major release for Vue 2 before Cedar's migration to Vue 3</span><template #message-body>In our next release, we will complete the transition by migrating our component library to Vue 3. <span style="font-weight:600">Please note:</span> This will be the only Vue 2 release we are supporting post-migration.</template></cdr-banner>

<br>

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Update Steps

| package name | version |
|--------------|---------|
| `@rei/cedar` | ^12.x.x |
| `@rei/cdr-tokens` | ^10.x.x |
| `@rei/cdr-component-variables` | ^8.x.x |

- If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your micro-site.

## Bug Fixes

### CdrPopover
- Addressed an issue where the component would emit its `open` event twice in certain circumstances.
- Addressed an accessibility issue where focus wasn’t being correctly assigned when multiple popovers were in use.

## Deprecations

### Vue 2

To prepare for our Vue 3 migration, we're deprecating the Vue 2 component library. We'll provide basic maintenance and bug fixes to support this final Vue 2 release for an additional 12 months. Once our Vue 3 library is released, we'll republish our Vue 2 library as `@rei/cedar-vue-2`.

## Breaking Changes
### Removals

#### Scoped Slots

Scoped slots have been removed from CdrBreadcrumb and CdrPagination. See the [CdrBreadcrumb](../../components/breadcrumb/#custom-navigation) or [CdrPagination](../../components/pagination/#overriding-default-navigation) pages for examples of how to override their default navigation behavior.

#### CdrBanner Component Variable

The CdrBanner component variable has been removed. Teams who are unable to utilize the Vue component should plan to make use of the [messaging tokens](../../tokens/all-tokens/#colors) to create their banners.  

### Preparing for Vue 3

*The following have been carried over from the [Spring 2021 release](../spring-2021/#deprecations). We will continue to note Vue 3 related deprecations so teams can adequately prepare for the upcoming migration.*
#### Vue 3: Update Slot Syntax

Vue 2.6 introduced a new `v-slot` syntax for passing slot content into components. A pound sign `#` can be used as a shorthand for `v-slot:`, much like a colon `:` can be used as a shorthand for `v-bind`. The old syntax is removed from Vue 3 and we recommend updating your codebase to make use of the new slot syntax to simplify the upgrade process in the future. Note that the new `v-slot` or `#` syntax can only be used on a `template` tag, however those additional `template` tags will not be included in the rendered HTML.


## Documentation Refresh

- We've revised our "Getting Started" and "About" sections to provide better overall support.
### "Getting Started" is now "Resources"

- The new name better reflects the content's purpose, which is to provide ongoing support as well as system onboarding.

### "As a Designer" is now "For Designers"

- Our new resource page for designers includes a Figma installation guide, tutorials, and extra resources. 
### "As a Developer" is now "For Developers"

- Our new resource page for developers includes Vue guides, troubleshooting tips, and definitions of Cedar's parts.

### New "Frequently Asked Questions" Page

- if you have a question about Cedar, this is a handy place to look for answers 
### New contact page, “Get in Touch”

- To better help people find ways to contact us, we created a new “Get in Touch” page
- Content includes info on the best channels to reach the Cedar team, and how to use them

### Updated “Cedar Design System” page

- This page is in the "About" section is now called "Cedar's Purpose & Parts"
- We've streamlined the content to focus on what Cedar is and what it's for
- Content includes an intro to our purpose and philosophy, an overview of Cedar's parts, and ways to further explore Cedar

</cdr-doc-table-of-contents-shell>
