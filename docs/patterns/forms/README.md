---
{
  "title": "Forms",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "sandboxData": {
    "components": "CdrInput"
  },
  "breadcrumbs": [
    {
      "text": "Patterns/"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

Forms are great


## Cool Forms

### Subheading!


<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" :model="{defaultModel: '', modelError: false}" :methods="{validateInput() {this.modelError = this.defaultModel.length > 4 && 'Error: please enter 4 or less characters'}}">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
  :error="modelError"
  @blur="validateInput"
>
  <template slot="helper-text">
    Must be 4 or less characters
  </template>
</cdr-input>
```

</cdr-doc-example-code-pair>


</cdr-doc-table-of-contents-shell>
