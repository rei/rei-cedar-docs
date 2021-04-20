---
{
  "title": "Notifications",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": "How to choose the correct component for your content",
  "sandboxData": {
    "components": "CdrAlert"
  },
  "breadcrumbs": [
    {
      "text": "Patterns/"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
* Response to change > User Input(not time sensitive)

A notification provides user feedback on changes to a specific element or page section. They are responses to a user’s input that provide helpful UI ques or brief messages.
Generally they are not required to interact with. however, the notification may pertain to required fields that would need to be complete prior to proceeding beyond the current page. 
They are intended to keep users informed of changes to a specific element or page section. 

- **Must**
  - Page state has changed based on user submit
  - Not be present on page load
  - Be activated by user or by system after page load
  - Be focusable
  - Not block page navigation
  - Not open in new page
  - Not open in new window
  - Use Aria live or “role=”status” markup to announce the notification without interrupting the page flow of the user
  - If moving focus to the notification, the notification 
    - Must provide At least one focusable UI element (ie. Close button, primary button)
    - Additional content container must be dismissable
    - Return to focus to the next logical location in the page flow on dismissal 

- **Should**
  - Use the HTML aside tag, denoting the section that, though related to the main element, doesn't belong to the main flow 
- **May**
  - open or update content in locations unrelated to the action which caused the notification to appear 
  - Update a live region of the page


## Usage
- Use when:
  - Use when you need to provide a user the status of an action they’re trying to complete 
  - notifying users of a potential problem that may require their attention
  - As a validation message that notifies someone that they just did something that needs to be corrected (See Error and Warning Types)
  - As confirmation that a task was completed successfully (See Success Type)
  - As contextual information that might need their attention (See Informational Type)
  - communicating a status change caused by the user.
  - The page state has changed based on user input
- Don't use when:
- providing on page static messaging

- Something changed after page load on the current page due to user interaction
- A screen reader should speak changes whenever the user is idle.
- Focus should not be automatically moved to the notification
- The notification must be able to receive focus
- The notification should not block page navigation
- The notification should not open in new page or new window

## Best Practices
Clearly communicate what is happening
Succinctly describe how a user can resolve it
Keep titles three to five words if possible
For titles, use title case
Don’t overuse notifications. To some extent they can be perceived as interrupting workflow and too many can be a bad user experience
Notifications should not be the primary communication channel with your users, as frequent interruptions may cause irritation
Avoid designing notifications that disappear automatically
Avoid messages that encourage the user to return to an app, but provide no direct value, such as "Haven't seen you in a while"
Preserve as much user-entered input as possible
If error is occurring in a form, use Alerts. Always pair error messages with inline form errors to identify which fields are in error (See Alerts)
Help users understand how to fix problems
For messages, use full sentences with punctuation. Use sentence case
If you need to display more than one message on a page, you can stack them vertically and combine them with other message types.

## Anatomy
<cdr-table>
<tbody>
<tr>
<th class="advanced-table__header" scope="row">Content </th>
<td>Includes the core, most important alert content.</td>
</tr>
<tr>
  <th class="advanced-table__header" scope="row">Container attribute </th>
  <td>Add `aria-live="polite"` or `role=”status"` to the container wrapper </td>
</tr>
<tr>
<th class="advanced-table__header" scope="row">Keyboard interactions</th>
<td>element may recive focus</td>
</tr>
<tr>
<th class="advanced-table__header" scope="row">Focus managment</th>
<td>element may recive focus</td>
</tr>
</tbody>
</cdr-table>

```html
<div class="my-notification" role="status">
  <icon-warning-fill/> Hold on, you need to fix <a href="#thisURL">this</a> before you can move on.
</div>

```

## Status Message Examples
* After a user presses an Add to Shopping Cart button, a section of content near the Shopping Cart icon adds the text "5 items". A screen reader announces "Five items" or "Shopping cart, five items".
* After a user presses a Search button, the page content is updated to include the results of the search, which are displayed in a section below the Search button. The change to content also includes the message "5 results returned" near the top of this new content. This text is given an appropriate role for a status message. A screen reader announces, "Five results returned".
* After a user enters incorrect text in an input called Postal Code, a message appears above the input reading "Invalid entry". The screen reader announces, "Invalid entry" or "Postal code, invalid entry".
* After a user activates a process, an icon symbolizing 'busy' appears on the screen. The screen reader announces "application busy".
* An application displays a progressbar to indicate the status of an upgrade. The element is assigned a suitable role. The screen reader provides intermittent announcements of the progress.
* After a user submits a form, text is added to the existing form which reads, "Your form was successfully submitted." The screen reader announces the same message.
* After a user unsuccessfully fills in a form because some of the data is in the incorrect format, text is added to the existing form which reads "5 errors on page". The screen reader announces the same message.

The intent of this Success Criterion is to make users aware of important changes in content that are not given focus, and to do so in a way that doesn't unnecessarily interrupt their work.
This means that these requierments are for dynamic, user caused notifications and do not apply to static messaging.





## Notification patterns

@flowstart
noteSt=>start: Identify approriate components
noteE=>end: End

interactive=>condition: Interactive
accociated=>condition: Accociated to a specific page section
succinct=>condition: succinct
accociatedYes=>operation: validation,inline toast
succinctNo=>operation: toast
succinctYes=>operation: cdr-alert

interactive(no)->accociated(yes)->accociatedYes
accociated(no, bottom)->succinctNo()
interactive(yes)->succinct(no)->succinctNo
succinct(yes)->succinctYes
@flowend

### Form validation
These notifications are contextual to inline elements on the page. 
They help to clarify an issue and/or notify users of a potential problem that may require their attention.

by default, cedar form elements error message pattern  default to adding `role="status`, automatically setting your validation to a notification

#### Available Components
- cdr-input
- cdr-form-group
- cdr-select

As a notification is generaly what you will use for error validation, the cedar form components error message container role defaults to `role="status"`. All you have to do is provide the messaging.

TODO- something about how we only provide the UI/container but not validation logic

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :model="{defaultModel: '', errorMessage: false}" :methods="{validate() {this.errorMessage = !this.defaultModel.length ? 'A telephone number is required.' : this.defaultModel.length === 14 ? false : 'Enter a 10-digit telephone number beginning with the area code.'}}">

```html
<cdr-input
  v-model="defaultModel"
  label="Phone number"
  type="tel"
  v-mask="'(###) ###-####'"
  autocomplete="tel-national"
  :error="errorMessage"
  @blur="validate"
>
  <template slot="helper-text-top">
    To call if there's an issue with your order
  </template>

  <!-- <template slot="info">
    <cdr-tooltip id="phone-number-example" position="top">
      <cdr-link slot="trigger" tag="buttton">
        Why?
      </cdr-link>
      <div>
        To call if there's an issue with your order
      </div>
    </cdr-tooltip>
  </template> -->
</cdr-input>
```    
</cdr-doc-example-code-pair>


- [WCAG status messages 4.1.3](https://www.w3.org/WAI/WCAG21/Understanding/status-messages)
- [WCAG 3.3.1 Error Identification (lvl A)](https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html)
- [WCAG 3.3.2 Labels or Instructions (lvl A)](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions)
- [WCAG 3.3.3 Error Suggestion (lvl AA)](https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion)
- [WCAG 3.3.4: Error Prevention (lvl AA)](https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data)

Validation considerations

* Providing client-side validation and adding error text via the DOM
* Providing text descriptions to identify required fields that were not completed
* Identifying a required field with the aria-required property

The intent of this Success Criterion is to ensure that users are aware that an error has occurred and can determine what is wrong. The error message should be as specific as possible.
Examples:
* the user fails to enter the proper abbreviation in to state, province, region, etc. field;
* the user enters a state abbreviation that is not a valid state;
* the user enters a non existent zip or postal code;
* the user enters a birth date 2 years in the future;
* the user enters alphabetic characters or parentheses into their phone number field that only accepts numbers;


When an error message is provided it must be identified in certain ways to be accessible. These include:

identifying each field in error
providing suggestions (when known) to correct the errors,
properly exposing this information to assistive technology.

**role="status"**

**aria-errormessage**

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

### Cart item indicator (header)

### Status updates
| Accessibility       |
|---------------------|
| role=”status"       |

</cdr-doc-table-of-contents-shell>
