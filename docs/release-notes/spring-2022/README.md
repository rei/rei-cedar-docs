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
<cdr-banner type="info" aria-live="polite"><template #icon-left><icon-information-fill inherit-color /></template><span style="font-weight:500">This is our final major release prior to Cedar's migration to Vue 3</span><template #message-body>Cedar's next release will migrate our component library to Vue 3. As a result, this will be the only Vue 2 release we will support post-migration.</template></cdr-banner>

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

- CdrPopover has been updated to address an issue where the component would emit its `open` event twice in certain circumstances.
## Deprecations

### Vue 2

In preparation of our Vue 3 migration we are deprecating the Vue 2 based component library. We will support this final release of the Vue 2 library with basic maintainence and bug fixes for an additional 12 months. Once we release our Vue 3 library, we will re-publish our Vue 2 libray as `@rei/cedar-vue-2`.

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

</cdr-doc-table-of-contents-shell>
