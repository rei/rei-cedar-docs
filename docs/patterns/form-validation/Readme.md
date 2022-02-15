---
{
  "title": "Form Validation",
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

Form validation ensures the data a user has entered into a form matches the requirements of our systems. Validation allows us to cater contextual feedback and instructions to what the user is doing. 
Validation feedback can be presented before, during or after an interaction, depending on the need and technique used. 
Validation should only be used once non-blocking techniques such as providing help text, accepting multiple formats for input data and using input masking have all failed.

### Basics
- Ensure forms are logical and easy to use
- Ensure forms are keyboard accessible
- Associate form labels with controls
- Label must have a relationship to the input
- [Groups of controls](../validation-notifications/#grouping-controls) should use the [cdr-form-group](../../components/form-group/) component or be within a `fieldset`, and be provided a legend description
- Avoid using the `placeholder` attribute, instead, use the help `text` slots to provide formatting information
- Outside of page and site controls, form elements should be contained within a form
- Limit the amount or need of validation using other options first

## Best Practices for Form Validation

- **Avoid it - design to prevent errors**
  - Clearly label required fields
  - Label text must adequately inform the user of input type expectations
  - Accept and filter multiple formats for data
  - Use helper text slots to state content requirements
  - Use helper text to clearly and concisely inform the user of formatting requirements
  - Only require form fields that are absolutely needed
  - Integrate input masking that can clearly visualize formatting expectations
  - Only use live validation on form fields with the strictest input requirements
  - Do not place formatting help or expectations in the placeholder of an input
- **Limit it**
  - Request less information in your form. Combine fields such as first and last name where possible and solicit only the most relevant and important information from your users. 
  - Provide instruction or hints once a user has interacted and moved on from the form field
  - Do not provide instruction to a form field which has not received user input, for example to one clicked into and out of
- **Make it easy**
  - Position the required label next to the input field label
  - Provide instruction that changes progressively to guide the user through the error process 
  - Use clear and simple language
  - Ensure the instruction is visible to all users:
    -  Avoid moving the form fields up or down when displaying validation
    -  Place helpful formatting instruction above the input if that formatting instruction will remain helpful to your users during error resolution
    -  Display notifications directly below the field in error (note that this will overlay the bottom help text slot on cdr-inputs)
    -  For a group of elements such a form group of checkboxes, display notifications below the fieldset container
  - Use meaningful colors and iconography
  - Display messages within the context of the action
  - Direct the user’s attention to issues in the form after using the submit button (forms will not submit to the server until issues are resolved)
  - Don't remove incorrect data entered by the user
  - Don't provide validation messages for unfilled inputs until the user attempts to submit the form
- **Make it unassuming and friendly**
  - Don’t use technical language
  - Don't shame the user for the error
  - Don't joke with the user about the error
  - Don't use cute language
  - Use language that conveys REI's Brand
  - Avoid uppercase text as it gives the visual impact of shouting

### Validation Requirements 

<cdr-img :src="$withBase('/notifications/validationAnatomy.png')" alt="Diagram showing the location of the following requirements" />
1. [Error prevention](#error-prevention)
2. [Error detection](#error-detection)
3. [Validation Notifications](#validation-notifications)

### Error Prevention

The best interaction a user can have with a form is to easily enter their data and to move on, never interacting with the provided validation.
We can help our users avoid blocking validation by clearly identifying required form fields, using clear and informative text for labels, and providing persistent formatting instructions.
The following requirements will help reduce user exposure to form blocking validation.

#### Anatomy of Form Validation Error Prevention

<cdr-img :src="$withBase('/forms/ErrorPrevention.png')" alt="Diagram showing the location of the following requirements" />

- **Must**
  -  Clearly label required form fields
  -  Apply the `Required` and/or `aria-required` attributes to "required" form fields
  -  Ensure assistive technology is provided text conveying that the field is required
- **Must Not**
  -  Use color alone to convey required or non-required fields
- **Should**
  -  Provide an explanation to the user when the "submit" button is not available
  -  Provide a clear and informative form title
  -  Create a clean and easy to understand layout by placing groups of form fields into fieldsets and providing adequate spacing between all elements
  -  Accept and filter multiple formats for form field data
  -  Use helper text to clearly and concisely inform the user of any formatting requirements
  -  Integrate [input masking](../../components/input/#input-masking) that can clearly visualize formatting expectations
  -  Only require fields that are absolutely needed
  -  Use an asterisk to indicate that the field is required
  -  Append "(Optional)" text to non-required fields within a form where the bulk of elements are required
  - Consider placing formatting instruction above the input if that formatting instruction will remain helpful to your users during error resolution

- **Should Not**
  -  Alter the user provided input to make it validate
  -  Place formatting help or expectations in the placeholder of an input

### Error Detection

Once the user has created an error and validation has been triggered, it's necessary to call out the form field(s) in error and provide instruction on how to resolve them.

#### Anatomy of Form Validation Error Detection

<cdr-img :src="$withBase('/forms/ErrorDetection.png')" alt="Diagram showing the location of the following requirements" />


- **Must**
  - Identify each field in error
  - Provide suggestions to correct the errors
  - Append `aria-invalid="true"` to the input
  - Map the associated id of the notification instruction to the input via `aria-describedby` (widely supported) or [aria-errormessage](https://a11ysupport.io/tech/aria/aria-errormessage_attribute) (not yet widely supported)
  - Append `aria-live` `role="status"`, or `role="alert"` to the notification container
  - Not hide the content of error messages when `aria-errormessage` is pertinent
  - Ensure the notification content is hidden or remove the aria-errormessage attribute or its value
- **Must Not**
  - Use color alone to convey a field in error
  - Expose aria-errormessage for an object with an aria-invalid value of false
- **Should**
  - Preserve as much user-entered input as possible
  - Add information about the error in the page `<title>` if the submission causes a page reload or a new page load
  - Consider disabling the form submission to help direct the user's attention to issues that exist

- **Should Not**
  - Rely solely on visual cues to indicate an error
  - Set the `aria-invalid` attribute on required field prior to incorrect user data or attempted submission
  - Be scripted to occur with every keystroke/OnInput unless there is a delay built into the script to avoid `role` or `aria-live` announcements while the user is actively typing
  - Be scripted to occur when a user leaves a field, because the `aria-live`
    announcement may conflict with the screen reader's attempt to read the next
    element which receives focus, causing some information to be interrupted
    or not announced at all
  - Alter the user-provided input to make it validate without providing the user with a validation message conveying this change
  - Remove incorrect data entered by the user
- **May**
  - Also use `aria-describedby` in conjunction with `aria-errormessage`
  - Be scripted to show on the screen for sighted users, but attempts to announce the real-time messages to screen reader users
    can be problematic. It is usually acceptable to wait to announce
    real-time errors until after form submission, assuming that no data has been saved yet.

#### Error Detection Location

A user's ability to complete a form may be impacted if the [validation notification](../validation-notifications/#form-control-validation-notification) is not displayed in a manner the user expects.

When providing inline instruction it is important to be non-disruptive, as enabling users to think less allows them to complete a form more quickly.
We can help reduce a user's cognitive lift by adding any additional information to locations within their natural reading flow, either to the right of the form element or below it. Displaying all validation in a [validation summary](../validation-notifications/#validation-summary) at the top of a page or top/bottom of a form will produce a poorer user experience than providing messaging inline as the user interacts with each form element.

Cedar recommends placing validation information below the form field for a couple of reasons:

-  Constrained space will not alter the location of instruction
-  Below the form element is an expected pattern that is within a user's reading flow

There are three unique opportunities which can be targeted to provide notification updates:

-  [While user is typing](#while-user-is-typing-oninput): using the `OnInput` event
-  [Once the user moves focus](#once-the-user-moves-focus-onchange): using the `OnChange` event
-  [Once the user submits](#once-the-user-submits-onsubmit): using the `OnSubmit` event

##### While user is typing (OnInput)

"On input" validation provides instant feedback as the user types making it highly visible.
However, it forces them out of a "completion" mindset and may cause frustration.

While useful for form fields with very strict input requirements, research has
[proven](https://www.researchgate.net/publication/221054469_Online_Form_Validation_Don't_Show_Errors_Right_Away) 
it to [cause](https://www.researchgate.net/publication/220054837_Usable_error_message_presentation_in_the_World_Wide_Web_Do_not_show_errors_right_away) 
more user errors and take longer to successfully complete the form.

Instruction offered this way should focus on positive progressive cues and should not present error instruction.
It should not be used to immediately communicate that the user has caused an error.

- Use instant validation: 
  - For difficult-to-answer questions where a user may create several formatting errors
  - To indicate progress as a user types 

- Don't annoy the user 
  - By providing instant error instruction
  - By using on simple inputs

##### Once the user moves focus (OnChange)

"On Change" validation takes place after the user changes or removes focus from their current element. 
In most cases this is the best time to begin validating user data as the user will not need to locate or navigate back to the form field that contains the error.
This informs the user that there are additional expectations but does not block them from moving on and working through the remainder of the form. 

Providing validation instruction on change, and enhancing the validation on submit can ease the users through the form without blocking or frustrating them. 
We could for example, alter the the appearance of an element on change, which would warn or confirm the user's input and if needed on submit reinforce this change with additional validation instruction.

<cdr-img :src="$withBase('/input/progressiveexample.png')" alt="An example on REI.com of this notification" width="500px"/>

##### Once the user submits (OnSubmit)
A user submitting a form will be expecting to move on or to be reminded of existing errors.
They may be on a location of the page where they are unable to see individual invalidated form fields.
It may benefit user of longer forms to be presented with a [validation summary](../validation-notifications/#validation-summary) that can reiterate the errors and guide them to the locations needing work.

OnSubmit is a user-expected location to offer validation.
While less optimal than onChange, this event is preferable to OnInput. Users in a completion mindset may knowingly move through a form, 
even once aware of errors, and wait to submit prior to addressing additional form needs. Consider pairing OnChange progressively with onSubmit validation.
A user who receives errors after submitting the form may no longer be able to see the input errors due to page scroll or some other limiting factor, in this case they may find a validation summary useful or needed.

##### As a return from the server (server-side validation)
Client side or "inline" validation notifications can interact with the user as they are working through the form process.
Inline validation allows us to interact with a user prior to the data being submitted to a server. 

As this provides an enhanced user experience, inline validation should be used where possible.

This validation does not replace server validation, rather it enhances it with the ability to present instruction prior to submitting or refreshing the page.

When the user submits the form their information is sent to the server and validated. If validation did not take place prior to server validation or if there are additional errors, the response of the “validator” is sent back to the user’s computer.

Server-side validation notifications:

- **Must**
  - Return the form (with the user's data still in the fields)
  - Provide a validation summary at the top of the page
- **May**
  - Change the title of the page
  - Give the error a heading level: provide a header, preferably a H1, so that assistive technology users can jump directly to the error and correct it.
  - Provide a same-page link so that users can jump directly to the form field that has the error.
### Validation Notifications

[Validation Notifications](../validation-notifications/) provide the instruction on how to resolve the detected errors or confirm task completion. 
There are multiple types of validation notification which are applicable based on the validation technique being used, such as inline feedback and validation summaries. Detailed information about the types and requirements can be found on the [Validation Notifications](../validation-notifications/) page.


## More Reading and Resources
- Accessibility:
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
