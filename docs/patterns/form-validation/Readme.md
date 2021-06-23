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
      "caption": "provide validation as soon as the user has finished filling in a field"
    },
    {
      "type": "dont",
      "image": "notifications/didNotRetainData.png",
      "ratio": "4-3",
      "alt": "form validation for a formatted phone field",
      "caption": "use live validation to instantly provide feedback while a user is typing for non complicated form fields"
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


Validating forms ensures that the users and our expectations align. 
but returning a bunch of unassociated errors  at the top of a form may cause confusion, frustration, and, end in abandonment.

Inline client side validation allows us to display a message within or below identified inputs prior to submitting or refreshing the page.
this allows us to confirm the data has successfully met the form field requirements or 
present the user with further instruction.
Validation initiates a conversation with our users where we can provide unique feedback before, during, or after a user interaction.
We can also wait to provide feedback until after the user tries to submit the form.
What we do to a form field and the messaging we provide can be catered to where and what the user is doing. 

However, the trick with a form is to get users to submit it 
always keep in mind that presenting blocking error instruction stops the user from doing what they want and may cause form abandonment.

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
    -  Display instruction at the right place, directly below the field in error, replacing the bottom helper text if present
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


## Javascript Validation
HTML5 natively supports some form validation which has the benefit of not requiring much JavaScript. This means that built-in form validation has better performance than JavaScript based validation.
Unfortunately it is not fully customizable and does not support several best practices that are important to providing the best experience to our users.

## Instant feedback
Use Instant validation only for difficult to answer (and finite) questions

### Do / Don't

<do-dont :examples="$page.frontmatter.required" />
<br />
<do-dont :examples="$page.frontmatter.premature" />
<br />
<do-dont :examples="$page.frontmatter.data" />
<br />
<do-dont :examples="$page.frontmatter.premature2" />

### Use When
- The notification is directly associated to an element within the form that has an error
- The notification successfully conforms to input formatting requirements
- The formatting requirements of a form item have not been met
- The user is attempting to submit a form without providing required data
### Don't Use When
- The error or warning is time sensitive, instead replace `role="status"` with `role="alert` as outlined in [alert](../alerts)
- The form returns server provided validation instruction
- An error or warning is unassociated with a form input


## Anatomy of form field Validation
These notifications are associated with special
elements on the page, either required fields or fields with unique formatting expectations. Whi

<cdr-img :src="$withBase('/notifications/validationAnatomy.png')" alt="Diagram showing the required layout of the elements listed below" />

1. **[Validating a required form field](#validating-a-required-form-field)**
2. **[Display](#required-form-fields-display)**
3. **[Static properties](#required-form-fields-static-properties)**
4. **[Error Detection](#required-form-fieldson-validation)**
5. **[Notification Instruction container](#notification-instruction)**
6. **[visual aid and Assistive technology text](#visual-aid-and-assistive-technology-text)**
7. **[Instruction](#instruction)**

## Validating a form field



Validation Notifications used to present instructions on user errors have specific accessibility requirements. These include:


- **Must**
  - Identify each field in error
  - Provide suggestions (when known) to correct the errors
  - Preserve as much user-entered input as possible

-  **Should**
  - Correctly filled out user provided data in a form that contains errors **SHOULD** remain populated post-submit.
  - Confirm successful submission of data.
  - Provide an explanation to the when user when the submit button is not available
- **Should Not**
  - rely solely on visual cues to indicate an error
  - alter the user provided input to make it validate without providing the user with a validation message conveying this change


## Instruction
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

### visual aid and Assistive technology text

-**Should**
-  if the text does not specifically call out the state of the message, error, warning, success, or info - that text should be provided via screen reader accessible text


### Error Notifications 

Role status / aria-live
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

## Error Prevention

### Required Form Fields

- Only require fields that are absolutely needed
- Required fields use an asterisks to indicate that the field is required.
- Don't use color alone to convey required fields


Using an asterisks, to the right of the input labels is a widely-adopted method notifying users that a form control is required. 
Additionally, when a majority of the inputs in a form are required mark the optional fields as "(optional)"

#### Making your own

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

### Submitting Sensitive Data
If the form is submitting any of the following:

-  legal commitments
-  financial transactions
-  user-controllable data (e.g. user profile, social media posts)

we are required to implement at least one of the following error prevention techniques:

-  Reversible: Submissions are reversible.
-  Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
-  Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.

Find more information on this topic in the [Accessibility References](#accessibility-references)

## Error Detection

### aria-invalid
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

### aria-errormessage
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

## Error Suggestion
- **Must**
  - If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text WCAG 3.3.3

Find more information on this topic in the [Accessibility References](#accessibility-references)

### Success Detection
Use at least one of the following techniques:

-  Confirmation text on the web page 
(it may be appropriate to move the keyboard focus to the error message)
-  **Aria-live announcement**

-  Confirmation message in the page `<title>` if the submission causes a page reload or a new page load.



## Using Available Cedar Components
by default, cedar form elements error message pattern  default to adding `role="status`, automatically setting your validation to a notification
the following Cedar components provide generic validation styling
- cdr-input
- cdr-form-group
- cdr-select

As a notification is generally what you will use for error validation, the cedar form components error message container role defaults to `role="status"`. All you have to do is provide the messaging.

TODO- something about how we only provide the UI/container but not validation logic

## Server-side Validation
when the user provides all the data and submits the form, 
usually by hitting the button, the information is sent to the server and validated. 
The response of the “validator” is sent back to the user’s computer and it’s visualized as either a confirmation message (“everything went fine!”) 
or a set of error messages.


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

### Accessibility References
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
describes semantically meaningful changes as opposed to merely presentational ones


## Move to Form doc as these are not specific to the notification validation topic but to the broader Form validation


### Disabled elements

-  Some dynamic forms will make the submit button unavailable until the form is completed correctly. 
This can be very confusing to users if insufficient error identification is provided

</cdr-doc-table-of-contents-shell>
