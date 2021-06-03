---
{
  "title": "Update and Loading Notifications",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": "Loading and inline page content updates",
  "sandboxData": {
    "components": "CdrBanner"
  },
  "breadcrumbs": [
    {
      "text": "Patterns/Messaging"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Overview

Update and Loading Notifications update existing inline page content.
They inform users of advisory information that enhances the site experience such as quantity updates or busy states.
Additionally, These notifications often only update a specific part of an inline content section.

It is important to grasp that many visual transitions are actually update notifications and should provide contextual information to our users. 
This can be added in the form of screen reader only text, though consider if the action without context will create any cognitive dissonance for our visual users.
Remember to create sufficient Visual feedback as many update notifications are unassociated triggering action.

### At A Glance
<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td>low</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      Expectancy
    </th>
    <td>Expected / Assumed</td>
  </tr>
  <tr>
  <tr>
    <th class="advanced-table__header">
      Purpose
    </th>
    <td>
      <ul>
        <li>reporting page processes</li>
        <li>Responses to user initiated actions</li>
      </ul>
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Interaction</th>
    <td>Non-blocking, not required</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Information</th>
    <td>Passive state changes </td>
  </tr>
</cdr-table>

### Use When

- Providing loading icons or states
- Informing users that the application is busy
- Incrementing results or items
- Changing inline content based on user selection
- Confirming an action has taken place

### Don't Use When
- The User makes a selection that does not change or add content to the page
- The notification does not relate to an actionable element in a busy state
- The content added to the page is important or needs attention
- For delivery of messaging
- During the appearance / disappearance of content following a user interaction which is also announced to assistive technology such as the following:
  - tab
  - accordion
  - dialog
  - popover
  - tooltip

### Anatomy of a Update Notification

<cdr-img :src="$withBase('/notifications/updateNotification.png')" alt="Diagram for conditional notifications as an overlay, annotating the required layout of the elements listed below" />

- 1 [Content Container](#content-container)
- 2 [Content Control](#content-control)
#### Content Container

The Update Notification Content Container wraps both the element being updated and any assistive technology helpers such as screen reader text. It may be a pre-existing section of a page or dynamically added upon user action.

##### Design Considerations

- Should
  - Ensure the Update notification does not receive focus as a result of a change in status.
  - Ensure sufficient Visual feedback is provided to inform users that an update that may not be associated with the element they have interacted with has been updated
- Should not
  - Move Focus automatically to the notification
  - Overuse Update notifications. They may interrupt your users experience
- May
  - appear as a timed display.
##### Development Considerations

- Must
  - Define pre-existing page sections where content may be updated as a WAI-ARIA live region. Use the aria-live attribute on the container of the content that may be updated or, in special cases, use one of the WAI-ARIA special live region roles.
  - Ensure the container generating the update is able to receive focus
  - Update a live region of the page
    ```html
    <!-- EXAMPLE: while stable -->
    <div aria-live="polite" role="region" aria-labelledby="shopping-cart">
      4
      <span class="cdr-display-sr-only">items in your cart</span>
    </div>
    ```
    ```html
    <!-- EXAMPLE: when updated -->
    <div role="status" aria-live="polite" role="region" aria-labelledby="shopping-cart">

      <span class="cdr-display-sr-only">there are now</span>
      5 
      <span class="cdr-display-sr-only">items in your cart</span>
    </div>
    ```

- May
  - on activation, add `role=”status”` to the markup announcing the notification without interrupting the page flow of the user
    ```html
    <!-- EXAMPLE: while stable -->

    ```
    ```html
    <!-- EXAMPLE: while active -->
    <div role="status">
    Determining your location...
    </div>
    ```
  - Include [aria-atomic](https://www.digitala11y.com/aria-atomic-properties/) markup attribute to define what content will be presented to assistive technologies
  - Include `aria-relevant` to define what type of changes are being announced to assistive technologies
#### loading status
<cdr-img :src="$withBase('/notifications/loadingNotification.png')" alt="Diagram of loading animation annotating the list below" width="600px"/>

Update Notifications will often be used to represent loading icons or submitting buttons. These types of Update notifications 
- **Should**
  - Define pre-existing page sections where content may be updated as a WAI-ARIA live region.
  - Use the `aria-busy` attribute to indicate an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.

   <cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" :model="{isLoading: false}">

    ```html
    <cdr-button :disabled="isLoading"  @click="isLoading = true" aria-controls="updateContainer">
      {{isLoading ? 'Loading...' : 'Add to cart'}}
    </cdr-button>

    <section role="region" aria-live="polite" :aria-busy="isLoading" id="updateContainer">{{isLoading ? 'this content is being updated...' : 'live content section'}}</section>
    ```

    </cdr-doc-example-code-pair>

#### Content Control
 The Update Notification Content Control may be any actionable element, such as a link or button.
##### Design Considerations

- **Should not**
  - Move Focus automatically to the notification
- **May**
  - Open or update content in locations unrelated to the action which caused the notification to appear

##### Development Considerations

- **Should**
  - Use the aria-controls attribute if another part of the page controls what appears in the notification
    ```html
    <button aria-controls="updateContainer-id" >Add to cart</button>
    ```
date content in locations unrelated to the action which caused the notification to appear

### Examples that should be Update Notifications
<cdr-list modifier="unordered">
  <li>
    <figure>
      <cdr-img :src="$withBase('/notifications/updateExamples.png')" alt="An example on REI.com of this update notification" width="250px"/>
      <figcaption>
        <cdr-caption
        summary=" As the 'Find a store near you' modal is loading results it displays a loading icon, additionally, assistive technology should inform non-vision users of the busy state. For more information review the loading notification section above"/>
      </figcaption>
    </figure>
  </li>
  <li>
   <figure>
      <cdr-img :src="$withBase('/notifications/updateExampleAddToCartButton.png')" alt="An example on REI.com of this update notification" width="250px"/>
      <figcaption>
        <cdr-caption
        summary="After a user presses the Add to Cart button, the button grays out or changes to a loading icon, additionally, assistive technology should inform users of the busy state. For more information review the loading notification section above"/>
      </figcaption>
    </figure> 
  
  </li>
  <li>
    <figure>
      <cdr-img :src="$withBase('/notifications/cartUpdateExample.png')" alt="An example on REI.com of this notifications" width="80px"/>
      <figcaption>
        <cdr-caption
        summary="After a user adds an item to their cart a section of content near the Shopping Cart icon increments the number. additionally, assistive technology should announce 'x items in your cart'"/>
      </figcaption>
    </figure>
  </li>
  <li>
    <figure>
      <cdr-img :src="$withBase('/notifications/updateExample.png')" alt="An example on REI.com of this notifications" width="350px"/>
      <figcaption>
        <cdr-caption
        summary=" After a user selects the 'Bontrager' filter on the Mountain Bike Helmets search results page the 'Mountain Bike Helmets
    (number of results)' updates to 'Bontrager Mountain Bike Helmets (5 results)', ensuring this is marked up as a notification enable users of assistive technology stay informed of this update."/>
      </figcaption>
    </figure>
  </li>
  <li>
    <figure>
      <cdr-img :src="$withBase('/notifications/quantityUpdate.png')" alt="An example on REI.com of this notifications" width="500px"/>
      <figcaption>
        <cdr-caption
        summary=" A user updates the quantity of an item in the shopping cart, multiple items are updated to reflect this change including the item price, the order summary subtotal, order total, and total and savings of the shopping cart"/>
      </figcaption>
    </figure>
  </li>
</cdr-list>

### Available Cedar Components

Content control:
- [cdr-button](../../components/buttons/)
- [cdr-link](../../components/links/)
- [cdr-chip](../../components/links/)
- [cdr-checkbox](../../components/links/)
- [cdr-radio](../../components/links/)

Content container:
- *Cdr-loading - potential component*


### Validation

- **Form errors, warnings, success or status responses based on user input**

Form validation responses provide unexpected instruction on blocking problems that must be fixed before moving on. 
Additionally, these messages may respond to input informing the user of further updates needed and or to inform the user that an error has been resolved.
It is critical that these notifications accurately inform and help to clarify the issues being presented to users.
#### At A Glance
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

#### Use When
- The notification is directly associated with a form or element within the form
- Use when you need to provide a user the status of an action they’re trying to complete
- As a validation message that notifies someone that they just did something that needs to be corrected (See Error and Warning Types)
- Resolving the instruction within the notification is required
- The notification content provides instructions to resolve an error, warning, or confirms success of a resolved error
#### Don't Use When
- The error or warning is time sensitive, instead replace `role="status"` with `role="alert` as outlined in [alert](../alerts)

#### Anatomy of a Validation Notification
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
#### Validating a required form field

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

  ##### Client-side Validation
Client-side validation results in a better user experience and makes resolving validation errors more understandable.
By using script languages user’s input can be validated as they type. This means a more responsive, visually rich validation.
With client-side validation, form never gets submitted if validation fails. 

##### Server-side Validation
**Server-side Validation responses occur as part of a page refresh, the are available as part of a pages content and are not notifications.**
With these responses information is being sent to the server and validated using server-side languages. 
If the validation fails, the response is then sent back, the page is refreshed and the new data is presented to the users.

This experience is while less optimal than client validation can be helped with the following considerations:

- **May**
  - Change the title of the page
  - Give the error a heading level: Provide a header, preferably a H1, so that assistive technology users can jump directly to the error and correct it.
  - Visually style the error in such a way that it is distinguishable from other content
  - Provide a same-page link so that users can jump directly to the form field that has the error.

#### Required Form Fields Display
The Asterisks may not be read by all screen readers (in all reading modes) and may be difficult for users with low vision because they are rendered in a smaller size than default text.
It is important for authors to include the text indicating that asterisk is used and to consider increasing the size of the asterisk that is presented.

- **Should**
  - Require only fields that are absolutely needed
  - Required fields **SHOULD** have a visual indicator that the field is required.
  - Ensure that information conveyed by color differences is also available in text.

#### Required Form Fields Static properties

- **Must**
  - Set `Required` or `aria-required` to true for inputs that must be completed by the user
- **Should**
  - Require only fields that are absolutely needed
  - Required fields **SHOULD** be programmatically designated as such. Note: At a minimum, WCAG requires an informative error message about the field after the user submits the form.
  - Ensure assistive technology is provided text conveying that the field is required

##### aria-required or required 

#### Required Form Fields On validation
- **Must**
  - Identify each field in error
  - Preserve as much user-entered input as possible
  - set [aria-invalid](#aria-invalid) to `true`
  - map the associated id of the notification instruction to the [aria-errormessage](aria-errormessage) attribute for each field in error
- **May**
  - also use '[aria-describedby]()' in conjunction with [aria-errormessage](aria-errormessage)

#### Notification Instruction
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

#### visual aid and Assistive technology text

-**Should**
-  if the text does not specifically call out the state of the message, error, warning, success, or info - that text should be provided via screen reader accessible text

#### Instruction
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


#### Error Suggestion
- **Must**
  - If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text WCAG 3.3.3

Find more information on this topic in the [Accessibility References](#accessibility-references)

https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html
#### Error Prevention
If the form is submitting any of the following:

-  legal commitments
-  financial transactions
-  user-controllable data (e.g. user profile, social media posts)

we are required to implement at least one of the following error prevention techniques:

-  Reversible: Submissions are reversible.
-  Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
-  Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.

Find more information on this topic in the [Accessibility References](#accessibility-references)

#### Error Detection

##### aria-invalid
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

##### aria-errormessage
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
#### Success Detection
Use at least one of the following techniques:

-  Confirmation text on the web page 
(it may be appropriate to move the keyboard focus to the error message)
-  **Aria-live announcement**

-  Confirmation message in the page `<title>` if the submission causes a page reload or a new page load.
#### Using Available Cedar Components
by default, cedar form elements error message pattern  default to adding `role="status`, automatically setting your validation to a notification
the following Cedar components provide generic validation styling
- cdr-input
- cdr-form-group
- cdr-select

As a notification is generally what you will use for error validation, the cedar form components error message container role defaults to `role="status"`. All you have to do is provide the messaging.

TODO- something about how we only provide the UI/container but not validation logic



#### Accessibility References
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


##### Disabled elements

-  Some dynamic forms will make the submit button unavailable until the form is completed correctly. 
This can be very confusing to users if insufficient error identification is provided

</cdr-doc-table-of-contents-shell>
