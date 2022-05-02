---
{
  "title": "Cedar's Purpose & Parts",
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

A design system is a collection of reusable UI components and guidance to help digital teams make design and development decisions. 
 
## Meet Cedar
  
Cedar is REI’s open-source design system for digital products and experiences, based on REI’s visual language. Its purpose is simple: to help people create consistent, unified user interfaces. We do this by simplifying common design decisions, freeing folks to focus on groundbreaking work. 
  
Cedar contains the reusable resources for creating consistent user interfaces informed by REI's [experience principles](../../foundation/experience-principles/), brand styles, and best practices.

Cedar is a living system, meant to grow and evolve to meet the needs of the REI digital community.

### Open source
 
Cedar is aligned with our values as a co-op built on community. While Cedar is primarily focused on serving teams building experiences for REI, the system is also available as an open-source project in GitHub and NPM.

Sometimes there are exceptions to our open-source rule. For example, fonts used in Cedar are licensed and proprietary to REI, and are not for common use unless approved.

We encourage you to explore Cedar! For more information or questions regarding Cedar’s support for external consumers using the open-source project, please reach out to [cedar@rei.com](mailto:cedar@rei.com).  

## Cedar's parts
 
Cedar provides a set of reusable components, style variables, design assets, and guidance for teams to efficiently build high-quality and accessible user interfaces.

### Designer toolkit
  
The Cedar UI toolkit is distributed through shared libraries in Figma, and includes all published components and foundational styles.

Learn more about the [UI Toolkit in our article for designers](../../resources/for-designers/).
  
### Documentation site
  
Documentation for each component and foundational style includes design guidelines, do’s and don’ts, considerations for accessibility, and API instructions for developers. This is the site you’re on right now—bookmark it for easy reference while working.

### Design tokens
  
Design tokens are special variables used to maintain a scalable visual system for UI development and brand consistency. Cedar design tokens store the visual design attributes that define the foundation of REI’s visual language, including color, typography, and spacing.

Learn more about design tokens in our [design tokens overview](../../tokens/overview/).

### Components
  
Components use Cedar’s tokens and design foundations to distribute code templates that extend basic HTML elements and encapsulate reusable code. These custom markup elements represent specific portions of the user interface. When used in your application, they will help ensure the UI remains consistent with REI’s digital display standards.
  
For example:
`<cdr-link href=”rei.com”>CdrLink Component</cdr-link>`

### Component variables
  
Component variables are available for a subset of Cedar components. These SCSS or LESS mixins extend design tokens and define additional specific variables that are used to display Cedar components.
  
For example:
`cdr-link-base-mixin` would be used to style an element like a CdrLink component.

Learn more in our article on [component variables](../../components/component-variables/).
  
### Patterns
  
Patterns are reusable frameworks providing guidance to common design problems at REI. Patterns may be UI or a variety of other things, like a behavior, flow, or an application motif. For example, the alert pattern gives design and development guidance for various alert scenarios, while the form input types pattern offers common form types like street address.
  
## Discover more
  
### [Resources for developers](../../resources/for-developers/)
  
Onboarding, Vue tutorials, and more.
  
### [Resources for designers](../../resources/for-designers/)
  
Figma tutorials, style guides, and more.
  
### [Release notes](../../release-notes/archive/)
  
What’s new in Cedar, past release notes, and deprecated features.

</cdr-doc-table-of-contents-shell>
