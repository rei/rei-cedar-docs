---
{
  "title": "Contributing to Cedar",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "About/"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

One of the best ways to influence the visual language of the Co-op’s digital products is by contributing to the design system. We welcome feedback, designs, code, and ideas from the REI digital community, in order to produce the best possible experience for our customers.

There are many ways to contribute to Cedar—new components, enhancements, and bug fixes will all be accepted for consideration. Cedar welcomes contributions to the system that meet brand and quality standards, and can be reused by two or more teams.

See the guidelines mentioned below on this page for more information about contributions, and reach out using [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4) if you have any questions.  

## Component Contributions
When creating a new component, first reach out to the Cedar team to see if the component is already under development in the [Cedar backlog](https://issues.rei.com/secure/RapidBoard.jspa?rapidView=1996) or if exists in a shared repo. If not, the Cedar team can help advise on how to [build resuable components](../../getting-started/building-components-with-cedar/) using REI design foundations and system assets, so that it can be pulled into the system in the future.

If you have a request for the Cedar team, please submit it on [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4) or come and talk to us during our weekly office hours.

### Design
New component designs can be added to the [Greenhouse library in Figma](https://www.figma.com/file/5R0ElfCIEJbRJx2tKzlA7s/Greenhouse?node-id=1673%3A4). Greenhouse is an internal library where designers can add new components, variants, and patterns to share with the community. The Cedar team will help facilitate additions to Greenhouse, and monitor the library for potential contributions to the design system.
 
  
### Code
Contribution candidates should be built using Cedar [Design Tokens](../../tokens/overview/) and Components, so that it can easily be pulled into the system.
Include relevant information in the readme file, which will be used for future documentation. Once added to Cedar, the design system team will take over all future maintenance and updates.

If you are working on a component or feature that can be shared with other projects, utilize design tokens to build it and add it to the [fed-components repository](https://git.rei.com/projects/FEDCOMP). The design system team will be looking at the fed-components repository for candidates to add to the system.

Reference the diagram below to determine how and where to build a new component:

<cdr-img :src="$withBase('/about/Component-Development-Contributions.png')" alt="a reference tree for when to use Cedar" />


### Bug Fixes
The Cedar team is committed to maintaining consistent, quality components. If you encounter an issue, please submit it on [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4) or come and talk to us during our weekly office hours.

The team will address the bug as soon as possible, depending on the severity of the issue and sprint capacity. Please include as much relevant information as possible when submitting a bug report, including steps to reproduce, urgency, and impact to help us prioritize. If the bug is present on a try server or branch it is especially helpful to include links to those so we can quickly assess the issue.

If you have a fix for a bug and would like to submit a pull request for it, reach out in the [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4) Slack channel so we can work with you on submitting a PR.


## Token Contributions
If you have a request for a new token, let us know on [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4) or come and talk to us during our weekly office hours.

You can also create a new token in the [shared-tokens repository](https://git.rei.com/projects/FEDPACK/repos/shared-tokens/browse) for future integration in Cedar.

Ensure that the token meets the following requirements:
- Token is used in several components or layouts
- Token is used for multiple elements and NOT specific to one element
- Token name will continue to have the same semantic meaning in future releases
- Token name uses the following platform requirements:
  - Web: Uses Kebab case. For example, cdr-color-background-primary
  - iOS: Uses Pascal case. For example, CdrColorBackgroundPrimary
  - Android: Uses Snake case. For example, cdr_color_background_primary

Learn more in the [Design Tokens](../../tokens/overview/) overview.

## Icon Contributions
Cedar welcomes and encourages contributions to the icon library that are consistent with the REI style.

Learn more about designing and contributing icons in the [Icon Resources](../../icons/resources) article.

</cdr-doc-table-of-contents-shell>
