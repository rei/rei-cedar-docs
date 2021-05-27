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

### Brand Color Updates

We have updated the color values of some Cedar tokens to make use of the REI brand color palette. Those tokens are also being used to style the `default` and `sale` version of the CdrButton

We have created a new `cdr-color-background-brand-spruce` color token (TODO: info on usage???)

## Deprecations

TODO: vue 3 related deprecations? scopedSlots -> slots? pagination/breadcrumb/vue-router overrides?

## Breaking Changes

### CdrTokens Background Scoping

In order to distinguish generic background colors like primary and secondary from more specific background colors we have re-named several of our background color tokens. This is necessary because the Cedar team exhaustively tests the accessibility of our components against our primary and secondary background colors, but we are unable to guarantee that every state of every Cedar component will be accessible against certain rarer or more specific background types. This scoping also helps clarify that these background color tokens are intended to be used for simple messaging and should not be applied as general background colors.

| Old token name | New token name |
| cdr-color-background-success | cdr-color-background-message-success |
| cdr-color-background-warning | cdr-color-background-message-warning |
| cdr-color-background-error | cdr-color-background-message-error |
| cdr-color-background-info | cdr-color-background-message-info |
| cdr-color-background-sale | cdr-color-background-message-sale |

### CdrModal Aria Describedby

The `aria-describedby` property on CdrModal has been updated to use the correct casing in order to match the default HTML aria attribute

### CdrInput Default Attributes

CdrInput has been updated to set some default attributes that make form inputs behave more consistently across browsers. These attributes can be overridden by passing the same attribute name onto the CdrInput element.

```
autocorrect="off"
spellcheck="false"
autocapitalize="off"
```

### Removals

In accordance with our deprecation policy, features that were deprecated in the [Fall 2020 release](../fall-2020/#deprecations) have been removed from Cedar.

#### Cedar Utility Classes And CdrText Modifier Have Been Removed

The Cedar CSS utility classes and CdrText modifier property were intended to allow developers to quickly apply common styling attributes to their applications, as well as to provide parity with some features that were available in Cedar 1. However there are a number of issues with using global CSS utility classes in a micro-site based architecture such as we have at REI:

- In order to use a single utility class, every class in that file must be loaded, which can be quite costly for larger files such as the text or space utilities. This cost comes both in the form of the large CSS asset that must be downloaded, as well as the time it takes the user's browser to parse and render the CSS file.
- Because each micro-site manages it's own assets independently it is difficult for those larger utility files to be cached and shared across micro-sites without simply loading those utilities on every page. This was not a problem for Cedar 1 as it was loaded on every page already and used primarily in the monolith.
- Global CSS classes may end up being used in markup that is unrelated to the package that loads it, which can cause unexpected issues when that package is changed. For example, if a shared FEDCOMP component loads the Cedar space utility classes, a micro-site that consumes that component could also end up using those space utilities without loading the utility class file itself. If that shared component is removed or changed, it may break code in the micro-site that depended on that space utility file being loaded. This is an ongoing issue in the removal of Cedar 1 from the monolith and global page template, as often times projects will end up using Cedar 1 classes without realizing where they are being loaded from.
- Global CSS classes are impossible to version, which makes it very difficult to roll out changes without potentially breaking existing code. A micro-site that imports a specific verison of Cedar can be tested before it is deployed and rolled out independently, but if a global CSS file is altered it will immediately impact every piece of markup that references it.

We have been warning that these files will be deprecated for our past several releases, yet we continue to see new instances of them appear in REI codebases, so we have made the decision to delete them entirely in order to mitigate these ongoing issues with performance and code maintainability.

For teams that need to update to the latest version of Cedar but which use the utility classes or CdrText modifier property too extensively to migrate all at once, we have created a copy of these utility classes in FEDPACK to allow you to incrementally migrate towards @rei/cdr-tokens.

TODO: link to cdr-legacy-utilities fed package, show how to convert to tokens

</cdr-doc-table-of-contents-shell>
