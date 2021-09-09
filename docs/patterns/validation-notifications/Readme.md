---
{
  "title": "Validation Notifications",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": "Form errors and warning responses based on user input",
  "sandboxData": {
    "components": "CdrBanner"
  },
  "breadcrumbs": [
    {
      "text": "Patterns/Forms, Patterns/Messaging"
    }
  ],
  "required": [
    {
      "type": "do",
      "image": "input/Input__Required_Dont__16-9.png",
      "ratio": "16-9",
      "alt": "Image showing asterisk to denote required label",
      "caption": "position the required label next to input field label."
    },
    {
      "type": "dont",
      "image": "input/Input__Required_Do__16-9.png",
      "ratio": "16-9",
      "alt": "Image showing 'Required' label next to field label",
      "caption": "use text such as 'Required' as this will cause assistive tech to read out 'required' multiple times"
    }
  ],
  "data": [
    {
      "type": "do",
      "image": "notifications/dataRetained.png",
      "ratio": "16-9",
      "alt": "an error on an input with the data retained",
      "caption": "preserve as much user-entered input as possible"
    },
    {
      "type": "dont",
      "image": "forms/auto-remove-data.png",
      "ratio": "16-9",
      "alt": "form validation for a formatted phone field",
      "caption": "removing incorrect user entered data"
    }
  ],
  "premature": [
    {
      "type": "do",
      "image": "forms/dont-validate-empty.png",
      "ratio": "16-9",
      "alt": "an error on an input with the data retained",
      "caption": "allow users to click into and out of an input without triggering validation"
    },
    {
      "type": "dont",
      "image": "forms/validate-without-input.png",
      "ratio": "16-9",
      "alt": "form validation for a formatted phone field",
      "caption": "provide validation messages for unfilled inputs until submit"
    }
  ],
  "premature2": [
    {
      "type": "do",
      "image": "notifications/dataRetained.png",
      "ratio": "4-3",
      "alt": "an error on an input with the data retained",
      "caption": "provide validation as soon as the user has left a form field"
    },
    {
      "type": "dont",
      "image": "notifications/didNotRetainData.png",
      "ratio": "4-3",
      "alt": "form validation for a formatted phone field",
      "caption": "use live validation to instantly provide feedback while a user is typing for non complicated form fields"
    }
  ],
  "live1": [
    {
      "type": "do",
      "image": "forms/liveValidation.png",
      "ratio": "4-3",
      "alt": "live password validation showing how strong the password is",
      "caption": "use live validation on form fields with the strictest input requirements"
    },
    {
      "type": "dont",
      "image": "notifications/didNotRetainData.png",
      "ratio": "4-3",
      "alt": "form validation for a formatted phone field",
      "caption": "use live validation to provide generic error instruction"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<br />

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
          <li>As instruction, once the form field has been filled out by the user</li>
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

See also 
- [alert](../alerts/)
- [persistent-status-notifications](../status-notifications/#persistent-status-notifications/)

Note: Form validation is a vast topic, this articles focus specifically on the UI presentation, its instructional notifications, and the resulting requirements.

## Overview

Validating a form ensures that the data a user enters matches the formatting requirements of our systems.
Depending on the need and technique used, validation feedback can be presented before, during, or after an interaction,
allowing us to cater the instruction to where and what the user is doing.
However, some techniques may cause more harm than good.
For example, a user with limited vision may become confused, frustrated, and abandon a form that returns errors out of their view.

Validation allows us the opportunity to have a conversation with our users but should be used only once non blocking techniques such as 
providing informative help text, accepting multiple formats for input data, and or using input masking have all failed.


### Basics
- Form elements must have a label and input
- Label must have a relationship to the input
- [groups of controls](#grouping-controls) should use the [cdr-form-group](../../components/form-group/) component or be within a `fieldset` and be provided a legend description
- Avoid using the `placeholder` attribute, instead, use the help `text` slots to provide formatting information
- Outside of page and site controls, form elements should be contained within a form
- Limit the amount or need of validation using other options first

## Best practices

- **Avoid it**
  - Clearly label required fields
  - Accept and filter multiple formats for data
  - Use helper text slots to state content requirements
  - Use helper text to clearly and concisely inform the user of formatting requirements
  - Only require form fields that are absolutely needed
  - Integrate input masking that can clearly visualize formatting expectations
  - Only use live validation on form fields with the strictest input requirements
  - Do not place formatting help or expectations in the placeholder of an input
- **Limit it**
  - Request less information in your form. Combine field such as first and last name where possible and solicit only the most relevant and important information from your users. 
  - Provide instruction or hints once a user has interacted and moved on from the form field
  - Do not Provide instruction to a form field which has not received user input, for example to one clicked into and out of
- **Make it easy**
  - Position the required label next to the input field label.
  - Provide instruction that changes progressively to guide the user through the error process 
  - Use clear and simple language
  - Ensure the instruction is visible to all users
    -  By not moving the form fields up or down when displaying validation
    -  By displaying instruction at the right place
      -  For a singular form element, directly below the field in error, replacing the bottom helper text if present
      -  For a group of elements such a form group of checkboxes, below the fieldset container
  - Use meaningful colors and iconography
  - Display it within the context of the action
  - Consider placing helpful formatting instruction above the input if that formatting instruction will remain helpful to your users during error resolution
  - Consider disabling the form submission to help direct the users attention to issues that exist
  - don't remove incorrect data entered by the user
  - don't provide validation messages for unfilled inputs until the users attempts to submit the form
- **Make it unassuming and friendly**
  - Don’t use technical language
  - Don't shame the user for the error
  - Don't joke with the user about the error
  - Don't use cute language
  - Use language that conveys REI's Brand
  - Avoid uppercase text as it gives the visual impact of shouting.

### Validation Requirements 

<cdr-img :src="$withBase('/notifications/validationAnatomy.png')" alt="Diagram showing the location of the following requirements" />
1. [Error prevention](#error-prevention)
2. [Error detection](#error-detection)
3. [Validation Notifications](#validation-notification)

### Error Prevention

The best interaction a user can have with a form is to easily enter their data and move on, never aware of blocking validation.
We can help our users avoid validation by clearly identifying required form fields, Using clear and informative text for labels, and providing persistent formatting instructions.
The following requirements will help reduce user exposure to form blocking validation.

When constructing form elements you
-  **Should**
  - Provide an explanation to the user when the submit button is not available
  - Clearly label required fields
  - Provide a clear informative form title
  - Create a clean and easy to understand layout by placing groups of form fields into fieldsets and providing adequate spacing
  - Accept and filter multiple formats for data
  - Use helper text to clearly and concisely inform the user of formatting requirements
  - Integrate input masking that can clearly visualize formatting expectations
- **Should Not**
  -  Alter the user provided input to make it validate
  -  Place formatting help or expectations in the placeholder of an input
  
#### markup properties
  - `required`
  - `aria-required`
  - `aria-describedby` id array for other static elements such as help text
#### Required Form Fields

- Only require fields that are absolutely needed
- Required fields use an asterisks to indicate that the field is required.
- Optional fields within a form where the bulk of elements are required should append the (Optional) text to their label
- Don't use color alone to convey required or non required fields
##### On Rest
- **Must**
  - Set `Required` and or `aria-required` to true for inputs that must be completed by the user
- **Should**
  - Require only fields that are absolutely needed
  - Ensure assistive technology is provided text conveying that the field is required
##### On validation
- **Must**
  - Identify each field in error
  - Preserve as much user-entered input as possible
  - set [aria-invalid](#aria-invalid) to `true`
  - map the associated id of the notification instruction to the [aria-errormessage](aria-errormessage) attribute for each field in error
- **May**
  - also use '[aria-describedby]()' in conjunction with [aria-errormessage](aria-errormessage)
##### Grouping Controls

Form groups are a collection of elements, they are defined by a shared label using the `legend` tag.

It is not recommended to require elements with a form group as logically there should be no incorrect answer for these elements.
They are either true or false. When designing a form where a user must make a selection consider a select box.
With that said it is common to see these groups have the following needs:
- Require the user to select one of the set of options
- Require that the user select at least one but only to 'x' amount of options

As of now there seems to be no way to link one message to a group of controls with a form group that will communicate clearly to all users. 
We need to do some extra work with these groups to make sure they work for all our users.
[Tennon.Io's article on this topic](https://blog.tenon.io/accessible-validation-of-checkbox-and-radiobutton-groups/) found that the best solution for support
on a broad range of assisted tech solutions was achieved by Dynamically injecting the error text into the legend. This forgoes the recommendation to add the `aria-describedby` attribute to the `fieldset` or `legend`.
Additionally the addition of `aria-invalid` to each control was not recommended as it may lead to user confusion.

- Should
  - dynamically inject the error instruction as a `span` into the form-group legend
- Should not
  - add `aria-describedby` to the `legend`, linking to a span out of the form-group. This produces mixed results across the assisted tech matrix
  - use `aria-describedby` to the `fieldset`, linking to a span out of the form-group. This produces mixed results across the assisted tech matrix
  - add the `aria-invalid` attribute to form-group controls as this may cause user confusion on if all or just one item are required.
  
#### Submitting Sensitive Data
If the form is submitting any of the following:

-  legal commitments
-  financial transactions
-  user-controllable data (e.g. user profile, social media posts)

we are required to implement at least one of the following error prevention techniques:

-  Reversible: Submissions are reversible.
-  Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
-  Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.

Find more information on this topic in the [Accessibility References](#accessibility-references)

### Error Detection
Once the user has created an error, we need to call out the form field/s in error and provide instruction on how to resolve them.
- **Must**
  - Identify each field in error
  - Provide suggestions (when known) to correct the errors
-  **Should**
  - Preserve as much user-entered input as possible
- **Should Not**
  - rely solely on visual cues to indicate an error
#### markup properties

The following properties are added to the form field element:

  - `aria-invalid`
  - `aria-errormessage`
  - `aria-describedby` append id for notification container display

Client side or "inline" validation notifications can interact with the user as they are working through the form process.
inline validation allows us to interact with a user prior to the data being submitted to a server. 
This validation does not replace server validation, rather it enhances it with the ability to present instruction prior to submitting or refreshing the page.
 
As this provides such an enhanced user experience, it is assumed that inline validation is used where possible.
#### aria-invalid
indicate that the value entered into an input field does not conform to the format expected by the application. 
This may include formats such as email addresses or telephone numbers. aria-invalid can also be used to 
indicate that a required field has not been filled in.
The attribute should be programmatically set as a result of a validation process.

-  When the user attempts to submit data involving a field for which aria-required is true, authors MAY use the aria-invalid attribute to signal there is an error. However, if the user has not attempted to submit the form, authors SHOULD NOT set the aria-invalid attribute on required widgets simply because the user has not yet entered data.
-  Add `aria-invalid="true"` to the input
-  Identify the input (referencing the label):
  - In a simple JavaScript alert
  - with information associated with the input via aria-describedby (widely supported) or aria-errormessage (not yet widely supported)
  - with error text added to the input's label (other techniques are more semantically correct, but this is a reliable method)
  - with text on the web page (it may be appropriate to move the keyboard focus to the error message)
  - with an aria-live or role="alert" announcement
  - with information about the error in the page `<title>` if the submission causes a page reload or a new page load.

Find more information on this topic in the [Accessibility References](#accessibility-references)
#### aria-errormessage
The `aria-errormessage` attribute takes an ID reference in the same manner as `aria-describedby`, and is only exposed when aria-invalid is set to ‘true’ on the same element. The use of a live region attribute such as aria-live=”polite” on the error message container element is optional.

Placed on input and mapped via id to error message.
used to:
  - Associate instructions with form fields
  - Provide information on the outcome of an action
  - To provide verbal information that may be conveyed via visual cues 
  - associate tooltips to form fields

- Error feedback SHOULD be programmatically-associated with the appropriate element.
- When `aria-errormessage` is pertinent, authors MUST ensure the content is not hidden
- Authors MUST either ensure the content is hidden or remove the aria-errormessage attribute or its value.
- User agents MUST NOT expose aria-errormessage for an object with an aria-invalid value of false.

Find more information on this topic in the [Accessibility References](#accessibility-references)

### Validation Notifications

Notifying the user of validation status's can take many forms, from adding iconography to signify success, altering the color of borders text or background, to providing detailed instruction.
Regardless of the means they all have to goal of communicating information back to the user. To ensure this happens effectively the following requirements and best practices should accounted for.

#### markup properties
-  Active: `<div id="ErrorMessageID" role="status" tabindex=0>`
-  Inactive: `<div id="formFieldInstruction" display="none">`

- **Must**
  - If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text WCAG 3.3.3
  - Provide suggestions (when known) to correct the errors
  - Ensure the message container can receive focus
  - Include the [`aria-live` or `role=”status”`](role-status-or-aria-live) markup to announce the notification without interrupting the page flow of the user
  - Be available as programmatically-discernible text
  - Be meaningful
  - Be visible
  - Use clear and simple language
  - Ensure the instruction is visible to all users
    -  By not moving the form fields up or down when displaying validation
    -  By displaying instruction at the right place
      -  For a singular form element, directly below the field in error, replacing the bottom helper text if present
      -  For a group of elements such a form group of checkboxes, below the fieldset container
   - Use meaningful colors and iconography
  
- **Must Not**
  - Rely solely on references to sensory characteristics (for example, "round button" or "button to the right")
- **Should**
  - Be visually and programmatically adjacent to the element.
  - Provide the state of the error, if using visual cues for error, warning, success, or info - that text should be provided via screen reader accessible text
  - Provide instruction that is as specific as possible
  - Clearly state errors
    –  What happened
    –  What’s the next step the user should take to succeed 
    -  avoid using technical jargon.
  - Confirm successful submission of data.
  - Display it within the context of the action
  - Consider placing helpful formatting instruction above the input if that formatting instruction will remain helpful to your users during error resolution
  - Consider disabling the form submission to help direct the users attention to issues that exist
  - Use language that conveys REI's Brand
  - Avoid uppercase text as it gives the visual impact of shouting.
- **Should Not**
  - Rely solely on visual cues to indicate an error
  - Alter the user provided input to make it validate without providing the user with a validation message conveying this change
  - Remove incorrect data entered by the user
  - Provide validation messages for unfilled inputs until the users attempts to submit the form
  - Use technical language
  - Shame the user for the error
  - Joke with the user about the error
  - Use cute language
- **May**
  - Be hidden until the user requests them if the notification instructions are not critical.
  - Provide instruction that changes progressively to guide the user through the error process

#### Role status / aria-live

-  **Should Not**
  - Be scripted to occur with every keystroke unless there is a delay built into the script to avoid announcements while the user is actively typing.
  - Be scripted to occur when a user leaves a field, because the `aria-live`
    announcement may conflict with the screen reader's attempt to read the next
    element which receives focus, causing some information to be interrupted
    or not announced at all.
- **May**
  - Be scripted to show on the screen for sighted users, but attempts to announce the real-time messages to screen reader users
    can be problematic. It is usually acceptable to wait to announce
    real-time errors until after form submission, assuming that no data has been saved yet.

Find more information on this topic in the [Accessibility References](#accessibility-references)

#### Inline Notification Location

A users ability to complete a form may be impacted if the validation notification is not displayed in a manner the user expects.

Displaying all validation in a validation summary at the top of a page or top/bottom of a form will produce worse outcomes that providing messaging inline as the user interacts with each form element.
When providing inline instruction it is important to be non disruptive, enabling users to think less allows them to complete a form more quickly.
We can help reduce a users cognitive lift by adding any additional information to locations within a users natural reading flow, either to the right of the form element or below it.

Cedar recommends placing validation information below the form field for a couple of reasons.

-  Constrained space will not alter the location of instruction
-  Below the form element is an expected pattern that is within a users reading flow

There are three unique opportunities which can be targeted to provide notification updates

-  [While user is typing](#while-user-is-typing-oninput): using the `OnInput` event
-  [Once the user moves focus](#once-the-user-moves-focus-onchange): using the `OnChange` event
-  [Once the user submits](#once-the-user-submits-onsubmit): using the `OnSubmit` event
#### Inline Notification timing
##### While user is typing (OnInput)

"On input" validation provides instant feedback as the user types making it highly visible.
However, it forces them out of a "completion" mindset and my cause frustration.

while useful for form fields with very strict input requirements, it has
[proven](https://www.researchgate.net/publication/221054469_Online_Form_Validation_Don't_Show_Errors_Right_Away) 
to [cause](https://www.researchgate.net/publication/220054837_Usable_error_message_presentation_in_the_World_Wide_Web_Do_not_show_errors_right_away) 
more user errors and take longer to successfully complete the form.

Instruction offered this way should focus on positive progressive cues and should not present error instruction.
It should not be used to immediately communicate that the user has caused an error.

- Use Instant validation 
  - for difficult to answer questions where a user may create several formatting errors
  - to indicate progress as a user types 

- Don't annoy the user 
  - By providing instant error instruction
  - By using on simple inputs

##### Once the user moves focus (OnChange)

"On Change" validation takes place after the user changes or removes focus from their current element. 
In most cases this is the best time to begin validating users data as the user will not need to locate or navigate back to the form field that contains the error.
This informs the user that there are additional expectations but does not block them from moving on and working through the remainder of the form. 

Providing validation instruction on change, and enhancing the validation on submit can ease the users through the form without blocking or frustrating them. 
We could for example, alter the the appearance of an element on change, which would warn or confirm the users input and if needed on submit reinforce this change with additional validation instruction

<cdr-img :src="$withBase('/input/progressiveexample.png')" alt="An example on REI.com of this notification" width="500px"/>

##### Once the user submits (OnSubmit)
A user submitting a form will be expecting to move on.
They may be on a location of the page where they are unable to see individual invalidated form fields.
It may benefit user of longer forms to be presented with a [validation summary](#validation-summaries) that can reiterate the errors and guide them to the locations needing work.

This is the last chance we have prior to submitting the users data to the server, while not as optimal a location as onChange, presenting instruction during this event does happen before page refresh.
May users in a completion mindset may knowingly move trough a form, even once aware of errors and wait to for submit prior to addressing additional form needs.


-  Don't removing incorrect user entered data
-  Consider providing a [validation summary](#validation-summaries)

## Validation summaries
Up to this point we have been going over best practices and requirements for individual form elements or form groups such as a singular text input or group of checkboxes.
This type of inline validation works well as the users are provided feedback immediately. 
However, for various reasons a user may loose sight of the problems needing remediation and become stuck on submit.

A validation summary outlines all errors that are active within a form, 
it lets users know that there are errors that need to be fixed on the page, 
whether those errors are in the viewport or below/above the fold. 

A validation summary can give the user a global understanding of all the errors in a form, 
Where possible Validation Summaries shouldn’t be used as the only form of error indication,
 as it forces the user to search for the field in error; moreover, the error message may no longer be present 
 in the viewport when the user reaches the error field, 
 thus forcing the user to memorize the error message while fixing the issue.


- Use
  -  To summarize and direct users back to existing errors 
  -  To increase visibility of existing errors
  -  When valid form options cause invalid product selections
  -  For server returned instruction
Don't Use
- As the Only Indication of an error/s

## Server-side Validation

when the user submits the form their information is sent to the server and validated.
When the response of the “validator” is sent back to the user’s computer

-  Return the form (with the user's data still in the fields)
-  Provide a text description at the top of the page that indicates 
  -  there was a validation problem
  -  describes the nature of the problem
  -  provides ways to locate the field(s) with a problem easily.

This experience, while less optimal than client validation, can be helped with the following considerations:

For a successful 
-  Confirmation text on the web page 
(it may be appropriate to move the keyboard focus to the error message)
-  **Aria-live announcement**

-  Confirmation message in the page `<title>` if the submission causes a page reload or a new page load.

**Unlike client validation server-side validation is returned as part of the page content, They do not alter the page and are not status notifications.**

- **May**
  - Change the title of the page
  - Give the error a heading level: Provide a header, preferably a H1, so that assistive technology users can jump directly to the error and correct it.
  - Visually style the error in such a way that it is distinguishable from other content
  - Provide a same-page link so that users can jump directly to the form field that has the error.

### Instruction Requirements

- Return the form with the user's data still in the fields
and provide a [validation summary](#validation-summaries) at the top of the page that indicates the fact that there was a validation problem, 
describes the nature of the problem, and provides ways to locate the field(s) with a problem easily. 
The "in text" portion of the Success Criterion underscores that it is not sufficient simply to indicate 
that a field has an error by putting an asterisk on its label or turning the label red. 
A text description of the problem should be provided.


## References
- Accessibility
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
- FED
  - [HTML5 Constraint validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
  - [Constraint validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation)
  - [Validity state API](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState)
  - [Validity API overview video](https://www.youtube.com/watch?v=D9JHizCAx8U)
  - [checkValidity()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity)
  - [setCustomValidity()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity)
  - [Vue validation cookbook](https://vuejs.org/v2/cookbook/form-validation.html)
  - [https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
  - [https://medium.com/front-end-weekly/html5-form-validation-in-react-65712f778196](https://medium.com/front-end-weekly/html5-form-validation-in-react-65712f778196)

</cdr-doc-table-of-contents-shell>
