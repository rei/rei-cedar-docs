---
{
  "title": "Using Cedar",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "breadcrumbs": [
    {
      "text": "Getting Started/"
    }
  ]
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

Cedar supports multiple tools and consumption methods. Reference the information below for an overview of the system parts and determine how to use Cedar in your project.

## Cedar Tools and Resources

### UI Toolkit
The Sketch UI Toolkit maintained by Cedar includes all published components and foundational styles.

For more information about using the UI Toolkit, visit the [Getting Started for Designers](../as-a-designer/) article.

### Design Tokens
Design tokens are special variables used to maintain a scalable visual system for UI development and brand consistency. Cedar design tokens store the visual design attributes that define the foundation of REI’s visual language, including color, typography, and spacing.

For example:
`cdr-color-text-primary-lightmode` would be used to set the primary text color on a light background.

For more information about design tokens, read the [Design Tokens](../../components/design-tokens/) article.

### Components
Components use Cedar’s tokens and design foundations to distribute code templates that extend basic HTML elements and encapsulate reusable code.
These custom markup elements represent specific portions of the user interface. When used in your application, they will help ensure the UI remains consistent with REI’s digital display standards.

For example:
`<cdr-link href=”rei.com”>CdrLink Component</cdr-link>`

### Component Variables
Component variables are available for a subset of Cedar components. These SCSS or LESS mixins extend design tokens and define additional specific variables that are used to display Cedar components.  

For example:
`cdr-link-base-mixin` would be used to style an element like a CdrLink component.

For more information on  Component variables, visit the [Component Variables](../../components/component-variables/) article.

### Utilities
Utility CSS classes allow users to extend Cedar components by providing options for layout, such as spacing, text alignment, or element display.

For example:
`cdr-align-text-center` would be used to align text to the center.

Find the list of Utility classes in the [Utilities](../../components/utilities/) article.


### Documentation Site
The documentation for each component and foundational style includes design guidelines, do’s and don’ts, considerations for accessibility, and API instructions for developers.

## Dev Tools Comparison Chart

<table class="table-vertical-align">
  <thead>
    <tr>
      <td></td>
      <td><b>Features</b></td>
      <td><b>Requirements of usage</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Design Tokens</b></td>
      <td>
        <ul>
          <li>Versioned and maintained by the design systems team</li>
          <li>Semantic relationship to your content rather than to design</li>
          <li>Represented in the UI Toolkit</li>
          <li>Consistent release schedule</li>
          <li>Up-to-date with digital brand standards</li>
          <li>Distributed as SCSS, LESS, JSON, commonJS, or es6 module exports</li>
          <li>Documented
            <ul>
              <li>Usage</li>
              <li>Design</li>
              <li>API</li>
            </ul>
          </li>
          <li>Quick to implement</li>
          <li>Compatible and can be combined with all other Cedar-distributed display assets</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Usage requires a SCSS or LESS preprocessor for styles</li>
          <li>Distributed as a pull model which your team integrates and maintains within your project</li>
          <li>Users are required to stay within one major version of the current release</li>
          <li>Support provided only for the current REI.com-supported browser matrix </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><b>Vue components (recommended)</b></td>
      <td>
        <ul>
          <li>Versioned and maintained by the design systems team</li>
          <li>Represented in the UI Toolkit as a named symbol</li>
          <li>Consistent release schedule</li>
          <li>Self-contained and encapsulated markup, behavior, and styles</li>
          <li>Up-to-date with digital brand standards</li>
          <li>Documented
            <ul>
              <li>Usage</li>
              <li>Design</li>
              <li>API</li>
            </ul>
          </li>
          <li>Meets WCAG AA standards for display and markup pertaining to the component without context to the page</li>
          <li>Support for server and client rendering</li>
          <li>Distributed as commonJS or es module exports</li>
          <li>Precompiled assets do not require a CSS preprocessor</li>
          <li>Tree-shakeable assets</li>
          <li>Quick to implement</li>
          <li>Compatible and can be combined with all other Cedar-distributed display assets</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Requires Vue.js</li>
          <li>Distributed as a pull model which your team integrates and maintains within your project</li>
          <li>Support provided only for:
            <ul>
              <li>Current and previous major versions</li>
              <li>Standard micro site architecture framework, expectations, and standards</li>
              <li>Current REI.com supported browser matrix</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><b>Component variables</b></td>
      <td>
        <ul>
          <li>Versioned and maintained by the design systems team</li>
          <li>Represented in the UI Toolkit as a named symbol</li>
          <li>Consistent release schedule</li>
          <li>Up-to-date with digital brand standards</li>
          <li>Documented markup contract</li>
          <li>Meets WCAG AA standards for specific proprietary display only</li>
          <li>Distributed as SCSS or LESS mixins</li>
          <li>Compatible and can be combined with all other Cedar-distributed display assets</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Requires SCSS or LESS preprocessor</li>
          <li>Distributed as a pull model which your team integrates and maintains within your project</li>
          <li>Support provided only for:
            <ul>
              <li>Current and previous major versions</li>
              <li>Current REI.com supported browser matrix</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><b>Utility Classes</b></td>
      <td>
        <ul>
          <li>Non-modularized CSS classes allow you to apply these styles where needed</li>
          <li>Consistent release schedule</li>
          <li>Up-to-date with digital brand standards</li>
          <li>Documented markup contract</li>
          <li>Meets WCAG AA standards for specific proprietary display only</li>
          <li>Distributed as CSS</li>
          <li>Compatible and can be combined with all other Cedar-distributed display assets</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Ability to extend or define the application markup</li>
          <li>Distributed as a pull model which your team integrates and maintains within your project</li>
          <li>Support provided only for:
            <ul>
              <li>Current and previous major versions</li>
              <li>Current REI.com supported browser matrix</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

</cdr-doc-table-of-contents-shell>
