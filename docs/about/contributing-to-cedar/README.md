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

<cdr-doc-table-of-contents-shell>

One of the best ways to influence the visual language of the Co-op’s digital products is by contributing to the design system. We welcome feedback, designs, code, and ideas from the REI digital community, in order to produce the best possible experience for our customers. 

There are many ways to contribute to Cedar—new components, enhancements, and bug fixes will all be accepted for consideration. Cedar welcomes contributions to the system that meet brand and quality standards, and can be reused by two or more teams. 

See the guidelines mentioned below on this page for more information about contributions, and reach out using the #cedar-user-support Slack channel or talk to your manager if you have any questions.  

## Component Contributions
When creating a new component, first reach out to the Cedar team to see if the component is already under development or exists in a shared repo. If not, the Cedar team can help advise on how to build the component using REI design foundations and system assets, so that it can be pulled into the system in the future.

If you have a request for the Cedar team, submit a [Feature Request Form](https://airtable.com/shrcbq9CHthuMO7AC) with all relevant information. 

### Code
Contribution candidates should be built using Cedar 
[Design Tokens](https://rei.github.io/rei-cedar-docs/components/design-tokens) and 
[Utilities](https://rei.github.io/rei-cedar-docs/components/utilities), so that it can easily be pulled into the system. 
Include relevant information in the readme file, which will be used for future documentation. Once added to Cedar, 
the design system team will take over all future maintenance and updates.

If you are working on a component or feature that can be shared with other projects, utilize design tokens to build it and add it to the [fed-components repository](https://git.rei.com/projects/FEDCOMP). The design system team will be looking at the fed-components repository for candidates to add to the system. 

Reference the diagram below to determine how to build a component and where to build it:

<cdr-img :src="$withBase('/about/Component-development-contributions.png')" alt="a reference tree for when to use cedar" />

### Design
For components added to the fed-components repository, designers should also include the design in Abstract within the CDS Web Sandbox. 
This provides other designers insight into what is available in fed-components, and allows them to re-use the component in their work. Provide relevant design guidelines, usage examples, and do's/don'ts for using the component. 
To get set up in Abstract, or to learn more about adding to the CDS Web Sandbox, visit the [Getting Started for Designers](https://rei.github.io/rei-cedar-docs/getting-started/as-a-designer/) article. 
 
### Bug Fixes
The Cedar team is committed to maintaining consistent, quality components. If you encounter an issue, please submit it using the [Bug Report Form](https://airtable.com/shr3wSPCYQbycVx7i) or directly in [rei/cedar](https://github.com/rei/rei-cedar/issues) to add it to the Cedar backlog.

The team will address the bug as soon as possible, depending on the severity of the issue and sprint capacity. Please include as much relevant information as possible when submitting a bug report, including steps to reproduce, urgency, and impact to help us prioritize.

If you have a fix for a bug and would like to submit a pull request for it, create a new PR in [rei/cedar](https://github.com/rei/rei-cedar/issues), or reach out in the #cedar-user-support Slack channel with any questions. 


## Token Contributions
If you have a request for a new token, you can submit it using the [Feature Request Form](https://airtable.com/shrcbq9CHthuMO7AC).

You can also create a new token in the [shared-tokens repository](https://git.rei.com/projects/FEDPACK/repos/shared-tokens/browse) for future integration in Cedar. 

Ensure that the token meets the following requirements:
- Token is used in several components or layouts
- Token is used for multiple elements and NOT specific to one element
- Token name will continue to have the same semantic meaning in future releases
- Token name uses the following platform requirements:
  - Web: Uses Kebab case. For example, cdr-color-background-dark
  - iOS: Uses Pascal case. For example, CdrColorBackgroundColor
  - Android: Uses Snake case. For example, cdr_color_background_dark
Learn more in the [Design Tokens](https://rei.github.io/rei-cedar-docs/components/design-tokens) article.

## Icon Contributions
Cedar welcomes and encourages contributions to the icon library that are consistent with the REI style.

Learn more about contributing icons in the [Icon Resources](https://rei.github.io/rei-cedar-docs/icons/resources) article.

</cdr-doc-table-of-contents-shell>

