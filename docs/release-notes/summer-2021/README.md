---
{
  "title": "Summer 2021 Release",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "10.0.0 Release Notes"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Update Steps

- Update to the latest version of the Cedar packages:

| package name | version |
|--------------|---------|
| `@rei/cedar` | ^10.x.x |
| `@rei/febs` | ^8.3.x |

- Remove `@babel/preset-env` and `@babel/register` if they are included in your project, the functionality provided by these modules is now included in the latest version of FEBS.
- Depending on the age of your microsite, you may wish to ensure your other dependencies are also up to date. As always, [Climbers Site](https://git.rei.com/projects/CLIMB/repos/climbers-site/browse) is a good reference point.
- If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your microsite.
- Please reach out in Slack at [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4) or [#frontier-users](https://rei.slack.com/archives/CLWJC9FFW) if you have any questions.

## 10.0.1

### Bug Fixes

- CdrModal has been updated to address an issue when using the modal slot that would result in errors being thrown when opened
## New Features
### Polyfill Removals

Polyfills for older, unsupported browsers have been removed. This should reduce the bundle sizes and result in better performance.

## Breaking Changes

The removal of polyfills involves some risk of breaking changes. If for some reason you need to support older browsers, you should ensure this update does not break critical functionality prior to incorporating.



</cdr-doc-table-of-contents-shell>
