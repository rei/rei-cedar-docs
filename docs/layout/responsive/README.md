---
{
  "title": "Responsive Layout",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "Layout/"
    }
  ],
  "sandboxData": {
  },
}
---

<cdr-doc-table-of-contents-shell>
Cedar Design System’s layout tools are built with responsively-aware breakpoints. Cedar components
and utility classes makes sure that your content remains consistent to the REI Digital brand expectations
within each of our supported breakpoints.

Containers, rows, and columns work to achieve the same goal to provide you a consistent way to
visually separate the unique content structures within your page. Note that these utilities
represent a visual structure rather than a content structure.

## The Cedar Container
The Cedar container `cdr-container` is the foundational layout mechanism on your page. It centers your content and provides the page with a left and right gutter helping you to separate your content and the edge of the browser window. The container should be added to the root wrapping element of your template.

Unlike other deliverables from Cedar, our container breaks in its display settings for each of the breakpoints into one class. This allows all pages to begin from the same layout context as each other. The container has two variants: standard container and fluid container.

<cdr-img :src="$withBase('/layout/Spec_Grids_Breakpoints_16-9.png')" alt="Breakpoints for REI’s responsive layout" />

### Standard vs. Fluid Container

The Cedar container allows flexible content width, up to a max width of 1232px. The fluid variant of the container does not have a max width. As shown below, pages can contain both fluid and standard containers.

<cdr-img :src="$withBase('/layout/StandardvFluid.gif')" alt="Standard vs. Fluid container " />

To explore how the containers work, check out this co sandbox:

<cdr-doc-example-code-pair :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {styleTag: 'body { background-color: rgba(130, 234, 255, 0.35);} .content {background-color: #fff;} .cdr-container, .cdr-container-fluid { background-color: lightcoral; color: purple;}'})" >

```vue
  <div>
    <div class="cdr-container">
      <div class="content">A cdr-container class</div>

    </div>
    <div class="cdr-container-fluid">
      <div class="content">A cdr-container-fluid class</div>
    </div>
  </div>

```
</cdr-doc-example-code-pair>

## Display Breakpoints
Cedar provides support for four layout screen widths: extra small, small, medium, and large.

These breakpoints set boundaries to be used by the media queries, providing ranges needed to ensure that your UI communicates what is most important to your customers for any screen size.

The responsive breakpoints do not provide any support for device detection, nor do they change the inherent functionality of elements at breakpoints.

### Design Tokens

The following design tokens are provided using the `@rei/cdr-tokens` package for breakpoint detection.

| Display size | Design Token        | Value  |
|--------------|---------------------|--------|
| Extra small  | `cdr-breakpoint-xs` | 0px    |
| Small        | `cdr-breakpoint-sm` | 768px  |
| Medium       | `cdr-breakpoint-md` | 992px  |
| Large        | `cdr-breakpoint-lg` | 1232px |

For more information about design tokens and how to use them, visit the [Design Tokens](../../components/design-tokens/) article.

### CSS Utilities

`cedar.css` provides the following responsive breakpoint media queries for our patterns, components, and layouts. These provide size ranges intended to help facilitate the changing of layout at various screen widths or orientations.

| Display size | Utility mixin            | Range        |
|--------------|--------------------------|--------------|
| Extra small  | `@include xs-mq {}`      | >= 0         |
| Extra small  | `@include xs-mq-only {}` | 0-767px      |
| Small        | `@include sm-mq {}`      | >= 768px     |
| Small        | `@include sm-mq-only {}` | 768px-991px  |
| Medium       | `@include md-mq {}`      | >= 992px     |
| Medium       | `@include md-mq-only {}` | 992px-1199px |
| Large        | `@include lg-mq {}`      | >= 1200px    |
| Large        | `@include lg-mq-only {}` | >= 1232px    |


### Targeting the Utility Media Query with Class Names

To avoid confusion between an element’s size variant and its breakpoint name, Cedar has the following naming conventions:

-  Element sizes are treated as **modifiers** and follow the BEM naming convention of `block__element--modifier`
-  Breakpoints are denoted with the @(xs, sm, md, lg) and are appended to a class name. This convention is outside of the BEM naming convention

For example, `cdr-button size="small@lg"`  will only apply the small button variant at the large breakpoint.

### Greater Than vs. Range Values
The `cdr-media queries` provide both “greater than” values and “ranges” for each breakpoint.

For example, a selector may target a small variant within the small breakpoint range like this:

```
.cdr-example {
  @include sm-mq-only {
    &--small\@sm {
      key: value;
    }
  }
}
```
* Exploding the name `--sm-mq-only` would read “small-media-query-only

Using the range ensures that the specified key:value pairs only applies to the `.cdr-example--small@sm` class name when it is displayed within the range of 768px-991px.

However, if you want to apply a value to the example that only needed to know when it was greater than the small breakpoint, you must use the root value query. This example allows you to update the display of the button when the display is at least  768px wide.

```
.cdr-example {
  @include sm-mq {
    &--small\@sm {
      key: value;
    }

  }
}
```

## Components

Components allow breakpoints to be passed as unique property variants.
When accepted, a breakpoint variant property will append the `@(xs, sm, md, lg)` to its name.

For example, to display the `cdr-button-small` variant at the small breakpoint:

Note that the Cedar components will always use the range breakpoints. If you intend a component to continue to use the breakpoint variant within a different breakpoint range, you will also need to account for it within the same property definition.
```
<cdr-button
  size="small@xs small@sm small@md"
>
  A primary button
</cdr-button>
```
</cdr-doc-table-of-contents-shell>
