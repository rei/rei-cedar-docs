---
{
  "title": "Validation",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": "Form errors, warnings, success or status responses based on user input",
  "sandboxData": {
    "components": "CdrAlert"
  },
  "breadcrumbs": [
    {
      "text": "Patterns/Forms, Patterns/Messaging"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Validation Notifications


Form validation responses provide unexpected instruction on blocking problems that must be fixed before moving on. 
Additionally, these messages may respond to input informing the user of further updates needed and or to inform the user that an error has been resolved.
It is critical that these notifications accurately inform and help to clarify the issues being presented to users.

### At A Glance
<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td>High</td>
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
        <ul>
          <li>As a form validation message</li>
          <li>As confirmation that an error was resolved successfully</li>
          <li>Notifying users of a potential problem that may require their attention</li>
        </ul>
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
</cdr-table>

### Use When
- The notification is directly associated with a form or element within the form
- Use when you need to provide a user the status of an action they’re trying to complete
- As a validation message that notifies someone that they just did something that needs to be corrected (See Error and Warning Types)
- Resolving the instruction within the notification is required
- The notification content provides instructions to resolve an error, warning, or confirms success of a resolved error
### Don't Use When
- The error or warning is time sensitive, instead replace `role="status"` with `role="alert` as outlined in [alert](../alerts)

### Anatomy of a Validation Notification
These notifications are associated with special "required" 
elements on the page and where possible should be added to the DOM under the element that needs the users attention

<cdr-img :src="$withBase('/notifications/validationAnatomy.png')" alt="Diagram showing the required layout of the elements listed below" />

1. **[Validating a required form field](#validating-a-required-form-field)**
2. **[Display](#required-form-fields-display)**
3. **[Static properties](#required-form-fields-static-properties)**
4. **[Error Detection](#required-form-fieldson-validation)**
5. **[Notification Instruction container](#notification-instruction)**
6. **[visual aid and Assistive technology text](#visual-aid-and-assistive-technology-text)**
7. **[Instruction](#instruction)**
### Validating a required form field

Validation Notifications used to present instructions on user errors have specific accessibility requirements. These include:

- **Must**
  - Identify each field in error
  - Providing suggestions (when known) to correct the errors
  - Preserve as much user-entered input as possible

-  **Should**
  - Correctly filled out user provided data in a form that contains errors **SHOULD** remain populated post-submit.
  - Confirm successful submission of data.
  - Provide an explanation to the when user when the submit button is not available
- **Should Not**
  - rely solely on visual cues to indicate an error
  - alter the user provided input to make it validate without providing the user with a validation message conveying this change

  #### Client-side Validation
Client-side validation results in a better user experience and makes resolving validation errors more understandable.
By using script languages user’s input can be validated as they type. This means a more responsive, visually rich validation.
With client-side validation, form never gets submitted if validation fails. 

#### Server-side Validation
**Server-side Validation responses occur as part of a page refresh, the are available as part of a pages content and are not notifications.**
With these responses information is being sent to the server and validated using server-side languages. 
If the validation fails, the response is then sent back, the page is refreshed and the new data is presented to the users.

This experience is while less optimal than client validation can be helped with the following considerations:

- **May**
  - Change the title of the page
  - Give the error a heading level: Provide a header, preferably a H1, so that assistive technology users can jump directly to the error and correct it.
  - Visually style the error in such a way that it is distinguishable from other content
  - Provide a same-page link so that users can jump directly to the form field that has the error.

### Required Form Fields Display
The Asterisks may not be read by all screen readers (in all reading modes) and may be difficult for users with low vision because they are rendered in a smaller size than default text.
It is important for authors to include the text indicating that asterisk is used and to consider increasing the size of the asterisk that is presented.

- **Should**
  - Require only fields that are absolutely needed
  - Required fields **SHOULD** have a visual indicator that the field is required.
  - Ensure that information conveyed by color differences is also available in text.

### Required Form Fields Static properties

- **Must**
  - Set `Required` or `aria-required` to true for inputs that must be completed by the user
- **Should**
  - Require only fields that are absolutely needed
  - Required fields **SHOULD** be programmatically designated as such. Note: At a minimum, WCAG requires an informative error message about the field after the user submits the form.
  - Ensure assistive technology is provided text conveying that the field is required

#### aria-required or required 

#### Required Form Fields On validation
- **Must**
  - Identify each field in error
  - Preserve as much user-entered input as possible
  - set [aria-invalid](#aria-invalid) to `true`
  - map the associated id of the notification instruction to the [aria-errormessage](aria-errormessage) attribute for each field in error
- **May**
  - also use '[aria-describedby]()' in conjunction with [aria-errormessage](aria-errormessage)

### Notification Instruction
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
- **Should**
  - be visually and programmatically adjacent to the element.
- **Should Not**
  - rely solely on visual cues to indicate an error
- **May**
  - Be hidden until the user requests them if the notification instructions are not critical.

### visual aid and Assistive technology text

-**Should**
-  if the text does not specifically call out the state of the message, error, warning, success, or info - that text should be provided via screen reader accessible text

### Instruction
- **Must**
  - Be available as programmatically-discernible text
  - Be meaningful
  - Be visible
  - Clearly and accurately describe the error and/or how to fix the error.
  - Succinctly describe how a user can resolve the problem.
  - Help users understand how to fix problems
  - provide instruction that is as specific as possible
- **Must Not**
  - Rely solely on references to sensory characteristics (for example, "round button" or "button to the right")
-  **Should**
  - Provide an explanation when the submit button is not available
### Role status / aria-live

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


### Error Suggestion
- **Must**
  - If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text WCAG 3.3.3

Find more information on this topic in the [Accessibility References](#accessibility-references)

https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html
### Error Prevention
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

-  Add aria-invalid="true" to the input
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
### Success Detection
Use at least one of the following techniques:

-  Confirmation text on the web page 
(it may be appropriate to move the keyboard focus to the error message)
-  **Aria-live announcement**

-  Confirmation message in the page `<title>` if the submission causes a page reload or a new page load.
### Using Available Cedar Components
by default, cedar form elements error message pattern  default to adding `role="status`, automatically setting your validation to a notification
the following Cedar components provide generic validation styling
- cdr-input
- cdr-form-group
- cdr-select

As a notification is generally what you will use for error validation, the cedar form components error message container role defaults to `role="status"`. All you have to do is provide the messaging.

TODO- something about how we only provide the UI/container but not validation logic



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
