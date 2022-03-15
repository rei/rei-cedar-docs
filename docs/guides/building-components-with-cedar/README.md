---
{
  "title": "Building Reusable Components With Cedar",
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

Cedar’s main benefits as a design system are in the reusability of its code, which increases our overall consistency and design and development efficiency. By distributing flexible atomic design system elements (Vue components, design tokens, CSS styles) we provide teams with all the tools necessary to create performant branded reusable components.
  
## Understanding Cedar's Limits
At times, you may have a specific use case where you feel Cedar is not providing the customization or support needed. This is normal, as a design system is not intended to distribute business logic, domain-specific styling, or other more complex UI elements. So what to do?
  
1. **Reach out to the Cedar team on Slack:** Contact us at #cedar-user-support or join our office hours to get 1:1 support. We’ll evaluate the issue and can help make changes in our system to better support you. This is the first and best option.
  
2. **Build a reusable component:** After talking with us, we may find the Cedar design system elements don’t satisfy the requirements for your application. At this point you may need to override Cedar directly or replace those elements with entirely new ones. Read on for further guidance on our shared standards for building reusable components. 

## Principles
When building a new component, we encourage you to keep these core principals in mind to create durable solutions that can easily be shared and maintained:

**Unified**

Consistent styles and interactions across channels builds trust with customers and improves overall usability. Designing with unity and consistency in mind enables our visual language to scale across an omnichannel experience.

**Intentional**

Quality over quantity. Be deliberate about how you approach creating, building, documenting and maintaining components. 

**Flexible** 

Provide options for a component to work under a range of circumstances. The design should be flexible enough to support different scenarios, while still specific enough to be useful.

**Extensible** 

Design to allow the addition of new capabilities or functionality. Create forward-compatible solutions that can be reused and extended in the future to make maintenance easier and help support speed to market. 

**Accessible**

Accessibility is at the core of how we design usable experiences for all. Every design, asset, and piece of code should meet or exceed WCAG 2.1 AA accessibility standards, and should include guidance for any necessary implementation details. 


## Requirements for Reusable Components

Build with reusability in mind:
- Designers: add to the [Greenhouse Figma libary](https://www.figma.com/file/5R0ElfCIEJbRJx2tKzlA7s/Greenhouse?node-id=1673%3A4)
- Developers: add to FED Component repo. See: [npm packages at REI](https://confluence.rei.com/display/FED/npm+packages+at+REI)
- Include usage guidelines alongside the design in the Figma library, and in the readme file

Technical requirements:
- Leverage existing Cedar components, tokens, and variables wherever possible
- Work with the Cedar team to extend or modify Cedar elements that do not satisfy your requirements
- Adhere to Cedar usability and accessibility standards
- Compliant with [Cedar's deprecation policy](https://confluence.rei.com/display/TP/Cedar+Deprecation+Policy) - utilizing the current version 
- Component API must adhere to [semantic versioning](https://confluence.rei.com/display/FED/semver%2C+npm+versioning%2C+and+git+tags) when updated 

Process:
- Include Cedar team as a stakeholder at kick-off
- Checkpoint for design review and Cedar approval
- Checkpoint for code review and Cedar approval (definition of done)
- Have a plan to manage tech/design debt - lifecycle maintenance plan to update dependencies every 3-6 months to new Cedar releases

Note that not every front-end element should be built as a reusable component. There is a maintenance cost associated with reusable components as they must be updated and released independently of your micro-site. If a component is infrequently used or is not sufficiently complex it may take more time to distribute and maintain it than it would to simply duplicate. Moreover, once a component is distributed and used by multiple teams it may become difficult to modify that component without impacting those other consumers.

## Overriding Cedar

There may be cases where the Cedar design system elements do not satisfy the requirements for your application, at which point you may need to override Cedar directly or replace those elements with entirely new ones. In such cases, all of the above requirements for reusable components still apply, in addition to the following considerations and risks:

- You will need to manually update your component as the design system evolves, as you will no longer be able to simply update your Cedar version to pull in updates.
- Your team will need to handle accessibility implementation and testing for your component. For some elements, especially background colors, this may have a high cost. For example, every Cedar element is guaranteed to have accessible contrast levels when rendered on our primary and secondary background colors, but we cannot make that same guarantee for arbitrary background colors.
- If you override internal Cedar logic like markup or CSS classes your code may break even with a patch release of Cedar as we can only semantically version the public API of the elements we distribute.
- Other teams may copy what you are doing without knowing that they are diverging from the design system, please ensure that any overrides are well documented.

</cdr-doc-table-of-contents-shell>
