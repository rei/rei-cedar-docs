---
{
  "title": "Form Validation",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": "Form errors and warning responses based on user input",
  "sandboxData": {
    "components": "CdrAlert"
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
## Overview

Validation messages are provided to help ensure that user data is formatted in a way that we expect.

However, some methods may cause more harm than good. For instance returning a group of unassociated errors at the top of a form to a low vision user.
This may cause confusion, frustration, and, end in abandonment.

Inline client side validation allows us to display a message within or below identified inputs prior to submitting or refreshing the page.
It can allow us to confirm the data has successfully met the form field requirements or 
present the user with further instruction.

Validation messaging is able to provide feedback before, during, or after a user interaction on a specific element or the entirety of the form.
What we do to a form field and the messaging we provide can be catered to where and what the user is doing. 
Be sensitive that presenting blocking error instruction stops the user from doing what they want and may cause form abandonment, 
consider if validation is essential or if additional formatting can take place on our side.

### Basics
Before diving into requirements and best practices for validation it makes sense to take a second and reiterate that to validate a form element 
the element must be well formed. 
- Form elements must have a label and input
- Label must have a relationship to the input
- [groups of controls](#grouping-controls) should use the form-group component or be within a `fieldset` and be provided a legend description
- Use the help `text` slots to provide formatting information
- Do not use the `placeholder` attribute
- Outside of page and site controls, form elements should be contained within a form
- Use `aria-required` rather than `required` to avoid HTML5 native validation


### HTML5 Native Constraint Validation

HTML5 Native Constraint Validation provides form elements, such as `<input>`, `<select>` and `<checkbox>`, to restrict the format of allowable values, using attributes like `required` and `pattern` to set basic constraints.
We use the basic and intrinsic constraints on almost all of our forms. For example, setting the input type to `email` automatically creates a constraint that will check a entered value for email format conformance.
additionally we use many of the provided validation attributes such as `required` or `maxlength` 

However there are more tools at our disposal. best of all they come for free from the browser, including the constraint validation API.
this API provides access to a couple of useful methods that do the bulk of validation without the need to have javascript enabled.
This means that client validation can happen even if javascript is disabled.
Additionally, these methods also interact with multiple css pseudo selectors such as [:invalid](https://css-tricks.com/almanac/selectors/i/invalid/)
using these can open the door to creating progressive validation on input, change, and submit events.

for example:
We may use the `change` event listener and target the css `:out-of-range` pseudo selector, altering the border color of the input field once the provided value exceeded the allowed range limits specified by the min and max validation attributes.
the color of our border would change once the user had moved focus to the next element.
additionally, we could then use the 'input' event to reset the updated color or warning back to default while the user was typing.
And if the user did not address the "warning color" we could then use the submit to append and actual status notification message, providing further instruction on how to proceed. 

<cdr-img :src="$withBase('/input/progressiveexample.png')" alt="An example on REI.com of this notification" width="500px"/>




and a validation API there is a lot to 
be gained by using this native approach. It also has the benefit of not requiring much JavaScript. 
This means that built-in form validation has better performance than JavaScript based validation. 
And that native HTML validation will work with javascript disabled.


It may be tempting to disable native validation with the `novalidate` attribute, and in some instances
that may be appropriate, specifically when needing to provided a more nuanced array of messages for a 
specific input.
Note that setting the `novalidate` attribute to a form or form element will override both the 
`checkValidity` and `reportValidity` methods from the validity API

-  [Constraint validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation)
-  [Validity state API](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState)
-  [Validity API overview video](https://www.youtube.com/watch?v=D9JHizCAx8U)

A better more consistent and accessible outcome may be achieved simply by using the validation API methods

-  [checkValidity()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity)
  - checkValidity() method checks whether the element has any constraints and whether it satisfies them. If the element fails its constraints, the browser fires a cancelable invalid event at the element, and then returns false .
-  [setCustomValidity()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity)
  - The setCustomValidity() method of the HTMLObjectElement interface sets a custom validity message for the element.

and omitting the
-  `reportValidity()` method - which is what is used to display the captured errors

so essentially use the built in html validation API, 
which enables us to not need to recreate much of the logic of testing things like valid email while disabling the popover return of validation errors
#### More reading
- [https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

- [https://medium.com/front-end-weekly/html5-form-validation-in-react-65712f778196](https://medium.com/front-end-weekly/html5-form-validation-in-react-65712f778196)

### Instant feedback
Note: `input` event listener from the contraint validation API

This validation displays as the user is typing, 
rather than once they exit from the form field.
While extremely useful as a guide for form fields with the strictest input requirements, in general, it has
[proven](https://www.researchgate.net/publication/221054469_Online_Form_Validation_Don't_Show_Errors_Right_Away) 
to [cause](https://www.researchgate.net/publication/220054837_Usable_error_message_presentation_in_the_World_Wide_Web_Do_not_show_errors_right_away) 
more user errors and take longer to successfully complete the form.

This method is less likely to be missed by users but also forces them out of their initial completion mindset and my cause frustration.

Instruction offered this way should focus on positive progressive cues and should not present error instruction.
It should not be used to immediately communicate that the user has caused an error.

Example:
utilizing the `input` event listener to target the css `out-of-range` pseudo selector, altering the border color of an input field prior to providing 
an actual validation notification via the `change` event listener.

- Use Instant validation 
  - for difficult to answer questions where a user may create several formatting errors
  - to indicate progress as a user types 

- Don't annoy the user 
  - By providing instant error instruction
  - By using on simple inputs

## Best practices

- Avoid it
  - By clearly labeling required fields
  - By accepting multiple formats for data such as phone number and credit cards
  - By using helper text slots to state content requirements
  - By using helper text to clearly and concisely inform the user of formatting requirements
  - Only requiring form field that are absolutely needed
  - Only require specific formatting where absolutely needed
- Limit it
  - Request less information in your form. Combine field such as first and last name where possible and solicit only the most relevant and important info about the users. 
  - By only providing error instruction after a user has interacted with it and moved on
  - By not providing error instruction after a user clicks into and out of a form field without engaging with it
- Make it easy
  - Provide progressive instruction that caters to the unique state of an error
  - Craft the validation experience to the unique needs of the data being requested
  - Use clear and simple language, Have a conversation with the user
  - Ensure the instruction is visible to all users
    -  By not moving the form fields up or down when displaying validation
    -  Display instruction at the right place
      -  For a singular form element, directly below the field in error, replacing the bottom helper text if present
      -  For a group of elements such a form group of checkboxes, below the fieldset container
  - Display it using meaningful colors and iconography
  - Display the validation within the context of the action
  - Consider placing helpful formatting instruction above the input if that formatting instruction will remain helpful to your users during error resolution
  - Consider disabling the form submission to help direct the users attention to issues that exist
- Make it unassuming and friendly
  - Don’t use technical language
  - Don't shame the user for the error
  - Don't joke with the user about the error
  - Don't use cute language
  - Use language that conveys REI's Brand
  - Avoid uppercase text as it gives the visual impact of shouting.

### Do / Don't

<do-dont :examples="$page.frontmatter.required" />
<br />
<do-dont :examples="$page.frontmatter.premature" />
<br />
<do-dont :examples="$page.frontmatter.data" />
<br />
<do-dont :examples="$page.frontmatter.premature2" />
<br />
<do-dont :examples="$page.frontmatter.live1" />

## Inline Validation

### Cedar examples
- [Cedar radio group](../../components/radio/#validation)

<cdr-img :src="$withBase('/forms/formFieldAnatomy.png')" alt="Diagram showing the required layout of the elements listed below" />
1. [Label with required or optional indicator](#error-prevention)
2. [Help text to provide formatting help](#error-prevention)
3. [form element Static properties](#error-prevention)
  - `aria-required`
  - `aria-describedby` id array for other static  elements such as help text
4. [properties added during validation](#error-detection)
  - `aria-invalid`
  - `aria-errormessage`
  - `aria-describedby` append id for notification container display
5. [Notification container properties](#validation-notification)
  - `Id`
  - `Role=”status”`
  - `tabindex=”0”`
  - `Display=none` when not active
6. Notification Instruction

### Validation Notifications

Validation Notifications used to present instructions on user errors have specific accessibility requirements. These include:

- **Must**
  - Identify each field in error
  - Provide suggestions (when known) to correct the errors
  - Preserve as much user-entered input as possible
  - If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text WCAG 3.3.3
-  **Should**
  - Correctly filled out user provided data in a form that contains errors **SHOULD** remain populated post-submit.
  - Confirm successful submission of data.
  - Provide an explanation to the when user when the submit button is not available
- **Should Not**
  - rely solely on visual cues to indicate an error
  - alter the user provided input to make it validate without providing the user with a validation message conveying this change

Find more information on this topic in the [Accessibility References](#accessibility-references)

#### Repeated Errors

Using analytics to track where the same error occurs repeatedly 
can help 
uncover error instructions which are not clear, simple, or helpful. 
layouts that cause users to much cognitive shifting
but there could also be another mismatch between the design and users’ needs. 
TODO -

#### Validation States
##### Error state
TODO guidelines for 

-  error on exit of input
-  error on submit of form
-  error while user is active in form field

##### Warning state
TODO guidelines
Live validation may present opportunities where it will make sense to offer the user a warning rather than an actual error, Design guidelines

##### Success State
TODO guidelines

#### Instruction

Validation instruction should clearly state:
- errors
  –  What happened
  –  What’s the next step the user should take to succeed 
  -  avoid using technical jargon.
Make it 
Using generic messaging can add to user confusion, for example providing "the email is invalid" messaging does not inform the user in what is invalid about it nor how to resolve the error.
- success
  - indication affordance 

##### Instruction Requirements
WCAG 1.3.3, WCAG 3.3.2 provide the following guidelines for validation instructions.
When users enter input that is validated, and errors are detected, the nature of the error needs 
to be described to the user in manner they can access. One approach is to present an alert dialog 
that describes fields with errors when the user attempts to submit the form. Another approach, 
if validation is done by the server, is to return the form (with the user's data still in the fields) 
and a text description at the top of the page that indicates the fact that there was a validation problem, 
describes the nature of the problem, and provides ways to locate the field(s) with a problem easily. 
The "in text" portion of the Success Criterion underscores that it is not sufficient simply to indicate 
that a field has an error by putting an asterisk on its label or turning the label red. 
A text description of the problem should be provided.

- **Must**
  - Providing suggestions (when known) to correct the errors
  - Ensure the message container can receive focus
  - Include the [`aria-live` or `role=”status”`](role-status-or-aria-live) markup to announce the notification without interrupting the page flow of the user
  - Be available as programmatically-discernible text
  - Be meaningful
  - Be visible
  - Clearly and accurately describe the error and/or how to fix the error.
  - Succinctly describe how a user can resolve the problem.
  - Help users understand how to fix problems
  - provide instruction that is as specific as possible
- **Must Not**
  - Rely solely on references to sensory characteristics (for example, "round button" or "button to the right")
- **Should**
  - be visually and programmatically adjacent to the element.
  - Provide an explanation when the submit button is not available
- **Should Not**
  - rely solely on visual cues to indicate an error
- **May**
  - Be hidden until the user requests them if the notification instructions are not critical.

#### visual aid and Assistive technology text

-**Should**
-  if the text does not specifically call out the state of the message, error, warning, success, or info - that text should be provided via screen reader accessible text

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

### Error Prevention

#### Required Form Fields

- Only require fields that are absolutely needed
- Required fields use an asterisks to indicate that the field is required.
- Optional fields within a form where the bulk of elements are required should append the (Optional) text to their label
- Don't use color alone to convey required or non required fields


Using an asterisks, to the right of the input labels is a widely-adopted method notifying users that a form control is required. 
Additionally, when a majority of the inputs in a form are required mark the optional fields as "(optional)"

##### On Rest
- **Must**
  - Set `Required` or `aria-required` to true for inputs that must be completed by the user
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

#### aria-invalid
indicate that the value entered into an input field does not conform to the format expected by the application. This may include formats such as email addresses or telephone numbers. aria-invalid can also be used to 
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
  -  When validation is not possible prior to submit
Don't Use
- As the Only Indication of an error/s
### Server-side Validation
when the user provides all the data and submits the form, 
usually by hitting the button, the information is sent to the server and validated. 
The response of the “validator” is sent back to the user’s computer and it’s visualized as either a confirmation message (“everything went fine!”) 
or a set of error messages.

-  Confirmation text on the web page 
(it may be appropriate to move the keyboard focus to the error message)
-  **Aria-live announcement**

-  Confirmation message in the page `<title>` if the submission causes a page reload or a new page load.

**Unlike client validation server-side validation is returned as part of the page content, They do not alter the page and are not status notifications.**


This experience is while less optimal than client validation can be helped with the following considerations:

After submit validation – 
when the user provides all the data and submits the form, 
usually by hitting the button, the information is sent to the server and validated. 
The response of the “validator” is sent back to the user’s computer and it’s visualized as either a confirmation message (“everything went fine!”) or a set of error messages.

- **May**
  - Change the title of the page
  - Give the error a heading level: Provide a header, preferably a H1, so that assistive technology users can jump directly to the error and correct it.
  - Visually style the error in such a way that it is distinguishable from other content
  - Provide a same-page link so that users can jump directly to the form field that has the error.

##### Instruction Requirements

- Return the form with the user's data still in the fields
and provide a text description at the top of the page that indicates the fact that there was a validation problem, 
describes the nature of the problem, and provides ways to locate the field(s) with a problem easily. 
The "in text" portion of the Success Criterion underscores that it is not sufficient simply to indicate 
that a field has an error by putting an asterisk on its label or turning the label red. 
A text description of the problem should be provided.

## Using Available Cedar Components
by default, cedar form elements error message pattern default to adding `role="status`, automatically setting our generic validation as a notification
the following Cedar components provide generic validation styling
- cdr-input
- cdr-form-group
- cdr-select

As a notification is generally what you will use for error validation, the cedar form components error message container role defaults to `role="status"`. All you have to do is provide the messaging.

TODO- something about how we only provide the UI/container but not validation logic
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
- [Reporting errors](https://www.nngroup.com/articles/errors-forms-design-guidelines/)
- [Constraint validation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation)
## Move to Form doc as these are not specific to the notification validation topic but to the broader Form validation


### Disabled elements

-  Some dynamic forms will make the submit button unavailable until the form is completed correctly. 
This can be very confusing to users if insufficient error identification is provided

</cdr-doc-table-of-contents-shell>
