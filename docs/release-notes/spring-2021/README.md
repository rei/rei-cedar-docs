---
{
  "title": "Spring 2021 Release",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "9.x.x Release Notes"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Update Steps

- Update to the latest version of the Cedar packages:

| package name | version |
|--------------|---------|
| `@rei/cedar` | ^9.x.x |
| `@rei/cdr-tokens` | ^9.x.x |
| `@rei/cdr-component-variables` | ^x.x.x |
| `@rei/cedar-icons` | ^x.x.x |

- If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your micro-site.

## New Features

### Numeric CdrInput Default Attributes

CdrInput now accepts a new boolean property called `numeric` which sets some default attributes for inputs that are composed of numerical characters but are not strictly "number" values themselves. The `type="number"` attribute for input elements is designed to be used with actual numbers such as quantities, and does not behave properly with values such as credit cards, security codes, postal codes, or month/year combos.

If a CdrInput receives either `type="number"` or `:numeric="true"`, it will set default values for the `inputmode` and `pattern` attributes which will force mobile devices to launch a numeric only keyboard. Note that solely using `:numeric="true"` will not restrict input to only numeric characters, see the [CdrInput page](../../components/input#numeric-input)

### Form Element Error Role Property

CdrFormGroup, CdrInput, and CdrSelect now accept an `error-role` property that allows for overriding the accessible `role` attribute on their embedded error state notification.

TODO: add examples to those docs pages witch guidance on when to override that?

### CdrModal Role Property

CdrModal now accepts a `role` property that allows for overriding the accessible `role` property on the modal content element

TODO: add example to modal page with guidance?

## Deprecations

TODO: vue 3 related deprecations?

## Breaking Changes

### CdrTokens Background Scoping

TODO: -message-
distingush that these background colors are not tested against for a11y vs. every component

### CdrModal Aria Describedby

- TODO: fixed typo/casing

### CdrInput Default Attributes

- TODO: Updated to default autocorrect/autocapitalize/spellcheck off, can be overridden, etc.

### Removals

In accordance with our deprecation policy, features that were deprecated in the [Fall 2020 release](../fall-2020/#deprecations) have been removed from Cedar.

- TODO: Utility wipeout - CdrText modifier and Cedar utilities have been removed. Moved to fedpack. Migrate incrementally to tokens. Perf benefits, code quality, etc..

TODO: link to cdr-legacy-utilities fed package, show how to convert cdrtext modifier to utility class

</cdr-doc-table-of-contents-shell>
