---
{
  "title": "Fall 2019 Release",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "3.x.x Release Notes"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell>

## Update Steps 

### For a Micro-Site

### For a Component Package

## Breaking Changes

### Stateless Accordion

CdrAccordion has been refactored to remove internal state tracking for toggling open and closed. For simplicity, the CdrAccordionItem component has been removed and its functionality merged with CdrAccordion. The `show` prop has been renamed to `opened` for clarity. Please review the [updated API and usage examples](https://rei.github.io/rei-cedar-docs/components/accordion/) for more information.

```vue
<cdr-accordion>
  <cdr-accordion-item
    id="accordion-1"
    label="How do I find my member number?">
    <cdr-text tag="p">
        Find your member number online. You can also call 
        Customer Support at 1-800-426-4840 (U.S. and Canada)
        or 1-253-891-2500 (International).
    </cdr-text>
  </cdr-accordion-item>
</cdr-accordion>
```

```vue
<cdr-accordion
  id="accordion-1"
  :opened="opened"
  @accordion-toggle="opened = !opened"
>
  <template slot="label">
    How do I find my member number?
  </template>
  <cdr-text tag="p">
    Find your member number online. You can also call 
    Customer Support at 1-800-426-4840 (U.S. and Canada)
    or 1-253-891-2500 (International).
  </cdr-text>
</cdr-accordion>

<script>
export default {
  ...
  data() {
    return {
      opened: false
    }
  }
}
</script>
```

### Breadcrumb Truncation/SSR 

In order to fix an issue with server-side rendering, as well as to simplify the API of [CdrBreadcrumb](https://rei.github.io/rei-cedar-docs/components/breadcrumb/), we have removed the `truncationThreshold` and `truncationXSThreshold` attributes. Instead, the `truncationEnabled` attr can be used to control whether or not the breadcrumb should be truncated. This change will not break any existing consumers of breadcrumb even if they are using those attributes.

### Large Breakpoint Value Corrected 

The token value for the large breakpoint was updated to the correct value of `1232px` (it had previously been incorrectly set to `1200px`). If you are hard-coding any breakpoint values in your project you will need to update those to use the breakpoint values from cdr-tokens instead. If you have been using the breakpoint tokens then you just need to update your version of cedar and cdr-tokens. 

### Letter Spacing Values Corrected 

The letter spacing values for our text tokens have been corrected to add the `px` suffix.

</cdr-doc-table-of-contents-shell>
