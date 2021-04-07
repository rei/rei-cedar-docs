---
{
  "title": "Building Re-Usable Components With Cedar",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "breadcrumbs": [
    {
      "text": "Getting Started/"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

The primary benefits of a design system include code reusability, consistency and increased design and development efficiency. However a design system is not intended to distribute business logic, domain-specific styling, or other more complex UI elements.

For example, Cedar provides all of the elements necessary to build a login form component, but the business logic behind that form should be determined by the backend requirements of the authentication system it logs into. Furthermore, the UI/UX may need to be customized for the context in which it is rendered, and it would be impractical for Cedar to build in support for every possible use case of a login form.

By distributing flexible atomic design system elements (Vue components, design tokens, CSS styles) we provide teams with all the tools necessary to create performant branded reusable components. By creating new components following shared standards, we can help extend the Cedar library as well as ensure high-quality customer experiences.

## Why It Matters

Consistency — A consistent experience across products & devices
Business outcome: Reduce support requests

Efficiency — Efficient workflow & communication across teams
Business outcome: Faster to market

Maintainability — Easier to test and maintain code
Business outcome: Less maintenance cost

Accessibility — Baked in accessibility, to create more inclusive products
Business outcome: Potential user base increase

Scalability — Less of a headache to build upon through the future
Business outcome: A stable foundation that will support the next 5 years of feature growth

Insecurity - Help designers know what others have done before and what already exists in the ecosystem
Business outcome: Less time churning on discovery / avoid rebuilding the wheel

## Requirements for Reusable Components

Build with reusability in mind:
- Add to Figma sandbox. process TBD
- Add to FED Component repo. see: npm packages at REI https://confluence.rei.com/display/FED/npm+packages+at+REI
- Include usage guidelines. process TBD - in Readme file / future goal to automate docs

Technical requirements:
- Leverage existing Cedar components, tokens, and variables wherever possible
- Work with the Cedar team to extend or modify Cedar elements that do not satisfy your requirements
- Adhere to Cedar usability and accessibility standards
- Compliant with Cedar deprecation policy - utilize the current version https://confluence.rei.com/display/TP/Cedar+Deprecation+Policy
- Component API must adhere to semantic versioning when updated  https://confluence.rei.com/display/FED/semver%2C+npm+versioning%2C+and+git+tags

Process:
- Include Cedar team as a stakeholder at kick-off
- Checkpoint for design review and Cedar approval
- Checkpoint for code review and Cedar approval (definition of done)
- Have a plan to manage tech/design debt - lifecycle maintenance plan to update dependencies every 3-6 months to new Cedar releases

Note that not every front-end element should be built as a reusable component. There is a maintenance cost associated with reusable components as they must be updated and released independently of your micro-site. If a component is infrequently used or is not sufficiently complex it may take more time to distribute and maintain it than it would to simply duplicate. Moreover, once a component is distributed and used by multiple teams it may become difficult to modify that component without impacting those other consumers.

## Overriding Cedar

There may be cases where the Cedar design system elements do not satisfy the requirements for your application, at which point you may need to override Cedar directly or replace those elements with entirely new ones. In such cases, all of the above requirements for reusable components still apply, in addition to the following considerations and risks:

- You will need to manually update your component as the design system evolves, as you will no longer be able to simply update your Cedar version to pull in updates
- Your team will need to handle accessibility implementation and testing for your component. For some elements, especially background colors, this may have a high cost. For example, every Cedar element is guaranteed to have accessible contrast levels when rendered on our primary and secondary background colors, but we cannot make that same guarantee for arbitrary background colors
- If you override internal Cedar logic like markup or CSS classes your code may break even with a patch release of Cedar as we can only semantically version the public API of the elements we distribute
- Other teams may copy what you are doing without knowing that they are diverging from the design system, please ensure that any overrides are well documented

</cdr-doc-table-of-contents-shell>
