---
{
  "title": "Validation Notifications",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": "Form errors and warning responses based on user input",
  "sandboxData": {
    "components": "CdrInput, CdrLink, CdrSelect, CdrBanner",
    "styleTag": ".form-space {margin-top: $cdr-space-two-x;}"
  },
  "breadcrumbs": [
    {
      "text": "Patterns/Forms, Patterns/Messaging"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Overview

Form validation ensures the data a user has entered into a form matches the requirements of our systems. Validation allows us to cater contextual feedback and instructions to what the user is doing. This feedback can be presented before, during or after an interaction, depending on the need and technique used. Validation should only be used once non-blocking techniques such as providing help text, accepting multiple formats for input data and using input masking have all failed.

It is important to keep all users in mind when designing form validations. For example, form validation should not be entirely dependent on a user’s sight (visual design) so that non-sighted can also understand form validation errors.


## form Control Validation Notification

This notification is an [error detection](../form-validation/#error-detection) responses to incorrect or incomplete data entered into a forms control, such as an input, checkbox, radio, or select. 

Notifying the user of a form control validation status's can take many forms, from adding iconography to signify success, altering the color of border text or background, and/or providing detailed instruction.
Regardless of the means they all have the goal of communicating information back to the user. To ensure this happens effectively the following requirements and best practices should be accounted for.


<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td><icon-x-fill/> High</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      Expectancy
    </th>
    <td>Unexpected</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      Purpose
    </th>
    <td>
        <cdr-list>
          <li>As instruction, once the form field or form group has been filled out by the user</li>
          <li>As confirmation that a field requiring specific formatting is valid</li>
          <li>In order to notify users of a potential problem that may require their attention</li>
        </cdr-list>
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Interaction</th>
    <td>Non-blocking, Required</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Information</th>
    <td>Meaningful instruction</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Location</th>
    <td>In an associated section of the effected required form field</td>
  </tr>
</cdr-table>


### Anatomy of an Validation Notification

<cdr-img :src="$withBase('/forms/ValidationNotification.png')" alt="Diagram showing the location of the following requirements" />

### Validation Notification Container

- **Must**
  - Ensure the message container can receive focus
  - Include the [`aria-live` or `role=”status”`](role-status-or-aria-live) markup to announce the notification without interrupting the page flow of the user
  - Be visible
  - Ensure the instruction is visible to all users
    -  Avoid moving the form fields up or down when displaying validation
    -  Display instruction at the right place:
      -  For a singular form element, directly below the field in error, replacing the bottom helper text if present
      -  For a group of elements such a form group of checkboxes, below the fieldset container
   - Use meaningful colors and iconography
- **Should**
  - Be visually and programmatically adjacent to the element.
  - Display within the context of the action
- **May**
  - Be hidden until the user requests them if the notification instructions are not critical.
### Validation Notification Instruction
- **Must**
  - Provide suggestions (when known) to correct the errors
  - Be available as programmatically-discernible text
  - Be meaningful
  - Use clear and simple language
   - Use meaningful colors and iconography
- **Must Not**
  - Rely solely on references to sensory characteristics (for example, "round button" or "button to the right")
- **Should**
  - Provide the state of the error, if using visual cues for error, warning, success, or info - that text should be provided via screen reader accessible text
  - Provide instruction that is as specific as possible
  - Clearly state errors:
    – What happened
    – What’s the next step the user should take to succeed 
    - Avoid using technical jargon
  - Confirm successful submission of data
  - Use language that conveys REI's Brand
  - Avoid uppercase text as it gives the visual impact of shouting.
- **Should Not**
  - Rely solely on visual cues to indicate an error
  - Remove incorrect data entered by the user
  - Provide validation messages for unfilled inputs until the users attempts to submit the form
  - Use technical language
  - Shame the user for the error
  - Joke with the user about the error
  - Use cute language
- **May**
  - Provide instruction that changes progressively to guide the user through the error process


#### Implementation

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: '', modelError: false}" :methods="{validateInput() {this.modelError = this.defaultModel.length > 4 && 'Error: please enter 4 or less characters'}}">

```html
<cdr-input
  v-model="defaultModel"
  :background="backgroundColor"
  label="Input label"
  :error="modelError"
  @blur="validateInput"
>
  <template #helper-text-bottom>
    Must be 4 or less characters
  </template>
</cdr-input>
```

</cdr-doc-example-code-pair>


#### Grouping Controls

Form groups are a collection of elements, defined by a shared label using the `legend` tag.

It is not recommended to require elements with a form group as logically there should be no incorrect answer for these elements.
They are either true or false. When designing a form where a user must make a selection consider a [select](../../components/selects/) control.
However, it is common to see these groups have the following needs:
- Require the user to select one of the set of options
- Require that the user select at least one but only to 'x' amount of options

As of now there seems to be no way to link one message to a group of controls with a form group that will communicate clearly to all users. 
We need to do some extra work with these groups to make sure they work for all our users.
[Tennon.Io's article on this topic](https://blog.tenon.io/accessible-validation-of-checkbox-and-radiobutton-groups/) found that the best solution for support
on a broad range of assisted tech solutions was achieved by dynamically injecting the error text into the legend. This forgoes the recommendation to add the `aria-describedby` attribute to the `fieldset` or `legend`.
Additionally the addition of `aria-invalid` to each control was not recommended as it may lead to user confusion.

- **Should**
  - Dynamically inject the error instruction as a `span` into the form-group legend
- **Should Not**
  - Add `aria-describedby` to the `legend`, linking to a span out of the form-group. This produces mixed results across the assisted tech matrix.
  - Use `aria-describedby` to the `fieldset`, linking to a span out of the form-group. This produces mixed results across the assisted tech matrix.
  - Add the `aria-invalid` attribute to form-group controls as this may cause user confusion on if all or just one item are required


## Validation Summary 


<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td><icon-x-fill/> High</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      Expectancy
    </th>
    <td>Unexpected</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      Purpose
    </th>
    <td>
        <cdr-list>
          <li>To provide additional visibility to validation notifications</li>
          <li>As a summary for multiple validation problems</li>
          <li>For validation instruction returned by the server</li>
        </cdr-list>
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Interaction</th>
    <td>Non-blocking, Required</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Information</th>
    <td>guided summary, reiterating validation notifications</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Location</th>
    <td>Client validation: below the form</td>
    <td>Server validation: at the top of the page</td>
  </tr>
</cdr-table>

Up to this point we have been going over best practices and requirements for individual form elements or form groups such as a singular text input or group of checkboxes.
This type of inline validation works well as the users are provided feedback immediately. 
However, for various reasons a user may lose sight of the problems needing remediation and become stuck on submit.

A validation summary outlines all errors that are active within a form and lets users know that there are errors that need to be fixed on the page, whether those errors are in the viewport or below/above the fold. 

A validation summary can give the user a global understanding of all the errors in a form, 
Where possible validation summaries should not be used as the only form of error indication,
 as it forces the user to search for the field in error; additionally, the error message may no longer be present 
 in the viewport when the user reaches the error field, forcing the user to memorize the error message while fixing the issue.

- **Use**
  - To indicate there were validation problems
  - To increase visibility of existing errors
  - For server-returned instruction
- **Don't Use**
  - As the only indication of an error/s

- **Must**
  - Summarize and direct users back to existing errors 
- **Should**
  - Indicate the fact that there was a validation problem
  - Describe the nature of the problem
  - Provide ways to locate the field(s) with a problem easily

### Validation Summary  Container
- **May**
  - use role="alert" to assertively reiterate existing page errors

## Server-side Validation
Client side or "inline" validation notifications can interact with the user as they are working through the form process.
Inline validation allows us to interact with a user prior to the data being submitted to a server. 

As this provides such an enhanced user experience, inline validation should be used where possible.

This validation does not replace server validation, rather it enhances it with the ability to present instruction prior to submitting or refreshing the page.

When the user submits the form their information is sent to the server and validated. If validation did not take place prior to server validation or if there are additional errors, the response of the “validator” is sent back to the user’s computer

Server-side validation notifications:

- **Must**
  - Return the form (with the user's data still in the fields)
  - Provide a validation summary at the top of the page
- **Should**
  - Return the form with the user's data still in the fields
- **May**
  - Change the title of the page
  - Give the error a heading level: provide a header, preferably a H1, so that assistive technology users can jump directly to the error and correct it.
  - Provide a same-page link so that users can jump directly to the form field that has the error.

## References
### More reading and sources
- Accessibility - find more information on this topic in the following resource:
  - [Deque Checklist](https://dequeuniversity.com/checklists/web/form-validation-feedback)
  - [Notifications and feedback](https://www.w3.org/WAI/perspective-videos/notifications/)
  - [Accessible Notifications](https://www.w3.org/WAI/RD/wiki/Accessible_Notifications)
  - [WCAG status messages 4.1.3](https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html)
  - [WCAG Error Identification 3.3.1 (lvl A)](https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html)
  - [WCAG Labels or Instructions 3.3.2 (lvl A)](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions)
  - [WCAG Error Suggestion 3.3.3 (lvl AA)](https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion)
  - [WCAG Error Prevention 3.3.4 (lvl AA) ](https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data)
  - [Form Notifications](https://www.w3.org/WAI/tutorials/forms/notifications/)
  - [Using Aria-Invalid to Indicate An Error Field](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21.html)
  - [Using the aria-describedby property to provide a descriptive label for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA1.html)
  - Use [aria-live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) to indicate that an element will be updated. It describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
  - Use [aria-atomic](https://www.digitala11y.com/aria-atomic-properties/) to indicate whether assistive technologies will present all, or only parts of the changed region based on the change notifications defined by the aria-relevant attribute.
  - [aria-relevant](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-relevant_attribute)
  - [Grouping Controls](https://www.w3.org/WAI/tutorials/forms/grouping/)
  - [Checkbox and radiobutton groups](https://blog.tenon.io/accessible-validation-of-checkbox-and-radiobutton-groups/)
- UX/UI
  - [Instant Validation](https://uxmovement.com/forms/why-users-make-more-errors-with-instant-inline-validation/)
  - [UI Guidelines](https://www.nngroup.com/articles/errors-forms-design-guidelines/)
  - [Error message placement](https://uxmovement.com/forms/the-best-place-for-error-messages-on-forms/)
  - [Form Validation Best Practices](https://medium.com/@andrew.burton/form-validation-best-practices-8e3bec7d0549)
  - [Constraint validation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation)
- Front-end
  - [HTML5 Constraint validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
  - [Constraint validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation)
  - [Validity state API](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState)
  - [Validity API overview video](https://www.youtube.com/watch?v=D9JHizCAx8U)
  - [checkValidity()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity)
  - [setCustomValidity()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity)
  - [Vue validation cookbook](https://vuejs.org/v2/cookbook/form-validation.html)
  - [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
  - [HTML5 form validation](https://medium.com/front-end-weekly/html5-form-validation-in-react-65712f778196)

</cdr-doc-table-of-contents-shell>
