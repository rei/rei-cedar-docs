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

## Building Re-Usable Components With Cedar

Cedar provides core atomic components (button, link, input)
Tokens/variables for customizing
Patterns for a11y, consistency, etc.

Cedar avoids business logic, domain specific styling, etc.
Landing changes in cedar is hard, requires extensive testing/research.
Because cedar is so widely used, iterative approach to updates, strict deprecation policy, migration path required.

Larger compositions of components up to individual teams to implement.
I.e, login widget composed of a button, link, and inputs
Things that involve business logic, specific to a domain/property.
Things that will be updated often, which teams might want to customize.

We rely on consuming teams to do this compositional work. Over time, some or part of these compositions might land in cedar (for example, might add a feature to input to make login widget simpler)

### Why It Matters

The primary benefits of a design system include code reusability, consistency and increased design and development efficiency. By creating new components and compositions following shared standards, we can help extend the Cedar library as well as ensuring high-quality customer experiences.

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
Requirements for building reusable components

### Requirements for Reusable Components


Build with reusability in mind:
Add to Figma sandbox
process TBD
Add to FED Component repo
see: npm packages at REI
Include usage guidelines
process TBD - in Readme file / future goal to automate docs
Technical requirements:
Leverage existing Cedar components, tokens, and variables
Request new tokens if needed to support tests / work with Cedar to create
Adhere to Cedar usability and accessibility standards
Compliant with REI brand expression (delivered via Cedar foundational tokens)
Compliant with Cedar deprecation policy - utilize the current version
Majority of page/app should still be using Cedar (75%?) (how can we measure this?)
Process:
Include Cedar team as a stakeholder at kick-off
Checkpoint for design review and Cedar approval
Checkpoint for code review and Cedar approval (definition of done)
Have a plan to manage tech/design debt - lifecycle maintenance plan to update dependencies every 3-6 months to new Cedar releases
Overriding Cedar / building one-offs
If you decide to override Cedar or build a one-off experience, the same requirements apply, in addition to the following considerations and risks:


### Overrides/One-Offs

your team will need to handle a11y implementation/testing (and why background colors are very problematic here)
manually update as design system evolves vs. just pulling in new versions
cedar may break your code with any release (even a patch fix)
other teams may copy your pattern thinking it's fine / fragmentation of design language and customer experience


</cdr-doc-table-of-contents-shell>
