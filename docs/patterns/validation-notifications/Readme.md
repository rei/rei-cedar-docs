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

<br />

<cdr-banner type="info">
<icon-information-fill /> Form validation is a vast topic, this articles focus specifically on the UI presentation, its instructional notifications, and the resulting requirements.</p>
  <p>See Also:</p>
  <cdr-list>
    <li>
      <cdr-link href="../alerts/">alert</cdr-link> 
    </li>
    <li>
      <cdr-link href="../status-notifications/#persistent-status-notifications/">persistent-status-notifications</cdr-link>
    </li>
  </cdr-list>
</cdr-banner>

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

## Overview

Validating a form ensures that the data a user enters matches the formatting requirements of our systems.
Validation feedback allows us to cater instructions to where and what the user is doing. 
This feedback can be presented before, during or after an interaction, depending on the need and technique used. 
Validation should only be used once non-blocking techniques such as providing help text, 
accepting multiple formats for input data and using input masking have all failed.

It is important to keep all users in mind when designing form validations. For example, 
form validation should not be entirely dependent on a user’s sight so that non-sighted 
can understand form validation errors![image](https://user-images.githubusercontent.com/23645132/134953002-05e2b9f1-b496-4443-bb8f-5f7e92eff058.png)

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

### Basics
- Ensure Forms are Logical and Easy to Use
- Ensure Forms are Keyboard Accessible
- Associate Form Labels with Controls
- Label must have a relationship to the input
- [groups of controls](#grouping-controls) should use the [cdr-form-group](../../components/form-group/) component or be within a `fieldset` and be provided a legend description
- Avoid using the `placeholder` attribute, instead, use the help `text` slots to provide formatting information
- Outside of page and site controls, form elements should be contained within a form
- Limit the amount or need of validation using other options first

## Best practices

- **Avoid it**
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
  - Request less information in your form. Combine field such as first and last name where possible and solicit only the most relevant and important information from your users. 
  - Provide instruction or hints once a user has interacted and moved on from the form field
  - Do not Provide instruction to a form field which has not received user input, for example to one clicked into and out of
- **Make it easy**
  - Position the required label next to the input field label.
  - Provide instruction that changes progressively to guide the user through the error process 
  - Use clear and simple language
  - Ensure the instruction is visible to all users
    -  By not moving the form fields up or down when displaying validation
    -  By placing helpful formatting instruction above the input if that formatting instruction will remain helpful to your users during error resolution
    -  By displaying notifications directly below the field in error (note that this will overlay the bottom help text slot on cdr-inputs)
    -  For a group of elements such a form group of checkboxes, below the fieldset container
  - Use meaningful colors and iconography
  - Display it within the context of the action
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

The best interaction a user can have with a form is to easily enter their data and to move on, never interacting with the provided validation.
We can help our users avoid blocking validation by clearly identifying required form fields, Using clear and informative text for labels, and providing persistent formatting instructions.
The following requirements will help reduce user exposure to form blocking validation.

<cdr-img :src="$withBase('/forms/ErrorPrevention.png')" alt="Diagram showing the location of the following requirements" />

When constructing form elements you:
- **Must**
  -  Clearly label required form fields
  -  Apply the `Required` and/or `aria-required` attributes to "required" form fields
  -  Ensure assistive technology is provided text conveying that the field is required
- **Must Not**
  -  Use color alone to convey required or non required fields
- **Should**
  -  Provide an explanation to the user when the "submit" button is not available
  -  Provide a clear informative form title
  -  Create a clean and easy to understand layout by placing groups of form fields into fieldsets and providing adequate spacing between all elements
  -  Accept and filter multiple formats for form field data
  -  Use helper text to clearly and concisely inform the user of any formatting requirements
  -  Integrate input masking that can clearly visualize formatting expectations
  -  Only require fields that are absolutely needed
  -  Use an asterisks to indicate that the field is required.
  -  Append "(Optional)" text to non-required fields within a form where the bulk of elements are required
- **Should Not**
  -  Alter the user provided input to make it validate
  -  Place formatting help or expectations in the placeholder of an input

### Error Detection

Once the user has created an error and validation has been triggered, we need to call out the form field/s in error and provide instruction on how to resolve them.

<cdr-img :src="$withBase('/forms/ErrorDetection.png')" alt="Diagram showing the location of the following requirements" />


- **Must**
  - Identify each field in error
  - Provide suggestions to correct the errors
  - Append `aria-invalid="true"` to the input
  - map the associated id of the notification instruction to the input via `aria-describedby` (widely supported) or [aria-errormessage](https://a11ysupport.io/tech/aria/aria-errormessage_attribute) (not yet widely supported)
  - append `aria-live` `role="status"`, or `role="alert"` to the notification container
  - Not hide the content of error messages when `aria-errormessage` is pertinent
  - Ensure the notification content is hidden or remove the aria-errormessage attribute or its value.
-  **Must Not**
  - Use color alone to convey a field in error
  - Expose aria-errormessage for an object with an aria-invalid value of false.
-  **Should**
  - Preserve as much user-entered input as possible
  - add information about the error in the page `<title>` if the submission causes a page reload or a new page load.
- **Should Not**
  - Rely solely on visual cues to indicate an error
  - Set the `aria-invalid` attribute on required field prior to incorrect user data or attempted submission.
  - Be scripted to occur with every keystroke/OnInput unless there is a delay built into the script to avoid `role` or `aria-live` announcements while the user is actively typing.
  - Be scripted to occur when a user leaves a field, because the `aria-live`
    announcement may conflict with the screen reader's attempt to read the next
    element which receives focus, causing some information to be interrupted
    or not announced at all.
- **May**
  - also use `aria-describedby` in conjunction with `aria-errormessage`
  - Be scripted to show on the screen for sighted users, but attempts to announce the real-time messages to screen reader users
    can be problematic. It is usually acceptable to wait to announce
    real-time errors until after form submission, assuming that no data has been saved yet.
### Validation Notifications

Notifying the user of validation status's can take many forms, from adding iconography to signify success, altering the color of borders text or background, to providing detailed instruction.
Regardless of the means they all have to goal of communicating information back to the user. To ensure this happens effectively the following requirements and best practices should accounted for.

<cdr-img :src="$withBase('/forms/ValidationNotification.png')" alt="Diagram showing the location of the following requirements" />

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

#### Grouping Controls

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

- **Should**
  - dynamically inject the error instruction as a `span` into the form-group legend
- **Should Not**
  - add `aria-describedby` to the `legend`, linking to a span out of the form-group. This produces mixed results across the assisted tech matrix
  - use `aria-describedby` to the `fieldset`, linking to a span out of the form-group. This produces mixed results across the assisted tech matrix
  - add the `aria-invalid` attribute to form-group controls as this may cause user confusion on if all or just one item are required.

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
A user submitting a form will be expecting to move on or to be reminded of existing errors.
They may be on a location of the page where they are unable to see individual invalidated form fields.
It may benefit user of longer forms to be presented with a [validation summary](#validation-summaries) that can reiterate the errors and guide them to the locations needing work.

OnSubmit is an user expected location to offer validation.
While less optimal than onChange, this event is preferable to OnInput. Users in a completion mindset may knowingly move thru a form, 
even once aware of errors and wait to submit prior to addressing additional form needs. Consider pairing OnChange progressively with onSubmit validation.
A users that receives errors on durning event may not visually see the fields in error, in this case they may find a validation summary useful or needed.

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

- **Use**
  -  To summarize and direct users back to existing errors 
  -  To increase visibility of existing errors
  -  When valid form options cause invalid product selections
  -  For server returned instruction
- **Don't Use**
- As the Only Indication of an error/s

## Server-side Validation
Client side or "inline" validation notifications can interact with the user as they are working through the form process.
inline validation allows us to interact with a user prior to the data being submitted to a server. 

As this provides such an enhanced user experience, it is assumed that inline validation is used where possible.

This validation does not replace server validation, rather it enhances it with the ability to present instruction prior to submitting or refreshing the page.

when the user submits the form their information is sent to the server and validated.
If validation did not take place prior to server validation or if there are additional errors the response of the “validator” is sent back to the user’s computer

**Must**
-  Return the form (with the user's data still in the fields)
-  Provide a text description at the top of the page that indicates 
  -  There was a validation problem
  -  Describes the nature of the problem
  -  Provides ways to locate the field(s) with a problem easily.
  -  Visually style the error in such a way that it is distinguishable from other content
**Should**
-  Return the form with the user's data still in the fields
**May**
-  Change the title of the page
-  Give the error a heading level: Provide a header, preferably a H1, so that assistive technology users can jump directly to the error and correct it.
-  Provide a same-page link so that users can jump directly to the form field that has the error.


Provide a [validation summary](#validation-summaries) at the top of the page.
This summary should indicate the fact that there was a validation problem, 
describes the nature of the problem, and provides ways to locate the field(s) with a problem easily.
The "in text" portion of the Success Criterion underscores that it is not sufficient simply to indicate
that a field has an error by putting an asterisk on its label or turning the label red. 
A text description of the problem should be provided.


## References
### aria-invalid
This true or false form field property indicates that the value entered into an input field does not conform to the format expected by the application. 
This may include formats such as email addresses or telephone numbers. aria-invalid can also be used to 
indicate that a required field has not been filled in.
The attribute should be programmatically set as a result of a validation process.
### aria-errormessage
The `aria-errormessage` attribute takes an `ID` reference in the same manner as `aria-describedby`, and is only exposed when `aria-invalid` is set to ‘true’ on the same element. 
The use of a live region attribute such as aria-live=”polite” or `role="status" on the notification container element is optional.

Placed on input and mapped via id to error message.
used to:
  - Associate instructions with form fields
  - Provide information on the outcome of an action
  - To provide verbal information that may be conveyed via visual cues 
  - associate tooltips to form fields
### More reading and sources
- Accessibility
  - Find more information on this topic in the [Accessibility References](#accessibility-references)
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
