(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{510:function(e,t,r){"use strict";r.r(t);var i=r(4),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("cdr-doc-table-of-contents-shell",{attrs:{parentSelector:"h2",childSelector:"h3"}},[r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[e._v("Form validation ensures the data a user has entered into a form matches the requirements of our systems. Validation allows us to cater contextual feedback and instructions to what the user is doing.\nValidation feedback can be presented before, during or after an interaction, depending on the need and technique used.\nValidation should only be used once non-blocking techniques such as providing help text, accepting multiple formats for input data and using input masking have all failed.")]),e._v(" "),r("h3",{attrs:{id:"basics"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[e._v("#")]),e._v(" Basics")]),e._v(" "),r("ul",[r("li",[e._v("Ensure forms are logical and easy to use")]),e._v(" "),r("li",[e._v("Ensure forms are keyboard accessible")]),e._v(" "),r("li",[e._v("Associate form labels with controls")]),e._v(" "),r("li",[e._v("Label must have a relationship to the input")]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/patterns/validation-notifications/#grouping-controls"}},[e._v("Groups of controls")]),e._v(" should use the "),r("RouterLink",{attrs:{to:"/components/form-group/"}},[e._v("cdr-form-group")]),e._v(" component or be within a "),r("code",[e._v("fieldset")]),e._v(", and be provided a legend description")],1),e._v(" "),r("li",[e._v("Avoid using the "),r("code",[e._v("placeholder")]),e._v(" attribute, instead, use the help "),r("code",[e._v("text")]),e._v(" slots to provide formatting information")]),e._v(" "),r("li",[e._v("Outside of page and site controls, form elements should be contained within a form")]),e._v(" "),r("li",[e._v("Limit the amount or need of validation using other options first")])]),e._v(" "),r("h2",{attrs:{id:"best-practices-for-form-validation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#best-practices-for-form-validation"}},[e._v("#")]),e._v(" Best Practices for Form Validation")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Avoid it - design to prevent errors")]),e._v(" "),r("ul",[r("li",[e._v("Clearly label required fields")]),e._v(" "),r("li",[e._v("Label text must adequately inform the user of input type expectations")]),e._v(" "),r("li",[e._v("Accept and filter multiple formats for data")]),e._v(" "),r("li",[e._v("Use helper text slots to state content requirements")]),e._v(" "),r("li",[e._v("Use helper text to clearly and concisely inform the user of formatting requirements")]),e._v(" "),r("li",[e._v("Only require form fields that are absolutely needed")]),e._v(" "),r("li",[e._v("Integrate input masking that can clearly visualize formatting expectations")]),e._v(" "),r("li",[e._v("Only use live validation on form fields with the strictest input requirements")]),e._v(" "),r("li",[e._v("Do not place formatting help or expectations in the placeholder of an input")])])]),e._v(" "),r("li",[r("strong",[e._v("Limit it")]),e._v(" "),r("ul",[r("li",[e._v("Request less information in your form. Combine fields such as first and last name where possible and solicit only the most relevant and important information from your users.")]),e._v(" "),r("li",[e._v("Provide instruction or hints once a user has interacted and moved on from the form field")]),e._v(" "),r("li",[e._v("Do not provide instruction to a form field which has not received user input, for example to one clicked into and out of")])])]),e._v(" "),r("li",[r("strong",[e._v("Make it easy")]),e._v(" "),r("ul",[r("li",[e._v("Position the required label next to the input field label")]),e._v(" "),r("li",[e._v("Provide instruction that changes progressively to guide the user through the error process")]),e._v(" "),r("li",[e._v("Use clear and simple language")]),e._v(" "),r("li",[e._v("Ensure the instruction is visible to all users:\n"),r("ul",[r("li",[e._v("Avoid moving the form fields up or down when displaying validation")]),e._v(" "),r("li",[e._v("Place helpful formatting instruction above the input if that formatting instruction will remain helpful to your users during error resolution")]),e._v(" "),r("li",[e._v("Display notifications directly below the field in error (note that this will overlay the bottom help text slot on cdr-inputs)")]),e._v(" "),r("li",[e._v("For a group of elements such a form group of checkboxes, display notifications below the fieldset container")])])]),e._v(" "),r("li",[e._v("Use meaningful colors and iconography")]),e._v(" "),r("li",[e._v("Display messages within the context of the action")]),e._v(" "),r("li",[e._v("Direct the user’s attention to issues in the form after using the submit button (forms will not submit to the server until issues are resolved)")]),e._v(" "),r("li",[e._v("Don't remove incorrect data entered by the user")]),e._v(" "),r("li",[e._v("Don't provide validation messages for unfilled inputs until the user attempts to submit the form")])])]),e._v(" "),r("li",[r("strong",[e._v("Make it unassuming and friendly")]),e._v(" "),r("ul",[r("li",[e._v("Don’t use technical language")]),e._v(" "),r("li",[e._v("Don't shame the user for the error")]),e._v(" "),r("li",[e._v("Don't joke with the user about the error")]),e._v(" "),r("li",[e._v("Don't use cute language")]),e._v(" "),r("li",[e._v("Use language that conveys REI's Brand")]),e._v(" "),r("li",[e._v("Avoid uppercase text as it gives the visual impact of shouting")])])])]),e._v(" "),r("h3",{attrs:{id:"validation-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#validation-requirements"}},[e._v("#")]),e._v(" Validation Requirements")]),e._v(" "),r("cdr-img",{attrs:{src:e.$withBase("/notifications/validationAnatomy.png"),alt:"Diagram showing the location of the following requirements"}}),e._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"#error-prevention"}},[e._v("Error prevention")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#error-detection"}},[e._v("Error detection")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#validation-notifications"}},[e._v("Validation Notifications")])])]),e._v(" "),r("h3",{attrs:{id:"error-prevention"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#error-prevention"}},[e._v("#")]),e._v(" Error Prevention")]),e._v(" "),r("p",[e._v("The best interaction a user can have with a form is to easily enter their data and to move on, never interacting with the provided validation.\nWe can help our users avoid blocking validation by clearly identifying required form fields, using clear and informative text for labels, and providing persistent formatting instructions.\nThe following requirements will help reduce user exposure to form blocking validation.")]),e._v(" "),r("h4",{attrs:{id:"anatomy-of-form-validation-error-prevention"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#anatomy-of-form-validation-error-prevention"}},[e._v("#")]),e._v(" Anatomy of Form Validation Error Prevention")]),e._v(" "),r("cdr-img",{attrs:{src:e.$withBase("/forms/ErrorPrevention.png"),alt:"Diagram showing the location of the following requirements"}}),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("Must")])]),e._v(" "),r("ul",[r("li",[e._v("Clearly label required form fields")]),e._v(" "),r("li",[e._v("Apply the "),r("code",[e._v("Required")]),e._v(" and/or "),r("code",[e._v("aria-required")]),e._v(' attributes to "required" form fields')]),e._v(" "),r("li",[e._v("Ensure assistive technology is provided text conveying that the field is required")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Must Not")])]),e._v(" "),r("ul",[r("li",[e._v("Use color alone to convey required or non-required fields")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Should")])]),e._v(" "),r("ul",[r("li",[e._v('Provide an explanation to the user when the "submit" button is not available')]),e._v(" "),r("li",[e._v("Provide a clear and informative form title")]),e._v(" "),r("li",[e._v("Create a clean and easy to understand layout by placing groups of form fields into fieldsets and providing adequate spacing between all elements")]),e._v(" "),r("li",[e._v("Accept and filter multiple formats for form field data")]),e._v(" "),r("li",[e._v("Use helper text to clearly and concisely inform the user of any formatting requirements")]),e._v(" "),r("li",[e._v("Integrate "),r("RouterLink",{attrs:{to:"/components/input/#input-masking"}},[e._v("input masking")]),e._v(" that can clearly visualize formatting expectations")],1),e._v(" "),r("li",[e._v("Only require fields that are absolutely needed")]),e._v(" "),r("li",[e._v("Use an asterisk to indicate that the field is required")]),e._v(" "),r("li",[e._v('Append "(Optional)" text to non-required fields within a form where the bulk of elements are required')]),e._v(" "),r("li",[e._v("Consider placing formatting instruction above the input if that formatting instruction will remain helpful to your users during error resolution")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Should Not")])]),e._v(" "),r("ul",[r("li",[e._v("Alter the user provided input to make it validate")]),e._v(" "),r("li",[e._v("Place formatting help or expectations in the placeholder of an input")])])])]),e._v(" "),r("h3",{attrs:{id:"error-detection"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#error-detection"}},[e._v("#")]),e._v(" Error Detection")]),e._v(" "),r("p",[e._v("Once the user has created an error and validation has been triggered, it's necessary to call out the form field(s) in error and provide instruction on how to resolve them.")]),e._v(" "),r("h4",{attrs:{id:"anatomy-of-form-validation-error-detection"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#anatomy-of-form-validation-error-detection"}},[e._v("#")]),e._v(" Anatomy of Form Validation Error Detection")]),e._v(" "),r("cdr-img",{attrs:{src:e.$withBase("/forms/ErrorDetection.png"),alt:"Diagram showing the location of the following requirements"}}),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("Must")])]),e._v(" "),r("ul",[r("li",[e._v("Identify each field in error")]),e._v(" "),r("li",[e._v("Provide suggestions to correct the errors")]),e._v(" "),r("li",[e._v("Append "),r("code",[e._v('aria-invalid="true"')]),e._v(" to the input")]),e._v(" "),r("li",[e._v("Map the associated id of the notification instruction to the input via "),r("code",[e._v("aria-describedby")]),e._v(" (widely supported) or "),r("a",{attrs:{href:"https://a11ysupport.io/tech/aria/aria-errormessage_attribute",target:"_blank",rel:"noopener noreferrer"}},[e._v("aria-errormessage"),r("OutboundLink")],1),e._v(" (not yet widely supported)")]),e._v(" "),r("li",[e._v("Append "),r("code",[e._v("aria-live")]),e._v(" "),r("code",[e._v('role="status"')]),e._v(", or "),r("code",[e._v('role="alert"')]),e._v(" to the notification container")]),e._v(" "),r("li",[e._v("Not hide the content of error messages when "),r("code",[e._v("aria-errormessage")]),e._v(" is pertinent")]),e._v(" "),r("li",[e._v("Ensure the notification content is hidden or remove the "),r("code",[e._v("aria-errormessage")]),e._v(" attribute or its value")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Must Not")])]),e._v(" "),r("ul",[r("li",[e._v("Use color alone to convey a field in error")]),e._v(" "),r("li",[e._v("Expose "),r("code",[e._v("aria-errormessage")]),e._v(" for an object with an aria-invalid value of false")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Should")])]),e._v(" "),r("ul",[r("li",[e._v("Preserve as much user-entered input as possible")]),e._v(" "),r("li",[e._v("Add information about the error in the page "),r("code",[e._v("<title>")]),e._v(" if the submission causes a page reload or a new page load")]),e._v(" "),r("li",[e._v("Consider disabling the form submission to help direct the user's attention to issues that exist")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Should Not")])]),e._v(" "),r("ul",[r("li",[e._v("Rely solely on visual cues to indicate an error")]),e._v(" "),r("li",[e._v("Set the "),r("code",[e._v("aria-invalid")]),e._v(" attribute on required field prior to incorrect user data or attempted submission")]),e._v(" "),r("li",[e._v("Be scripted to occur with every keystroke/OnInput unless there is a delay built into the script to avoid "),r("code",[e._v("role")]),e._v(" or "),r("code",[e._v("aria-live")]),e._v(" announcements while the user is actively typing")]),e._v(" "),r("li",[e._v("Be scripted to occur when a user leaves a field, because the "),r("code",[e._v("aria-live")]),e._v("\nannouncement may conflict with the screen reader's attempt to read the next\nelement which receives focus, causing some information to be interrupted\nor not announced at all")]),e._v(" "),r("li",[e._v("Alter the user-provided input to make it validate without providing the user with a validation message conveying this change")]),e._v(" "),r("li",[e._v("Remove incorrect data entered by the user")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("May")])]),e._v(" "),r("ul",[r("li",[e._v("Also use "),r("code",[e._v("aria-describedby")]),e._v(" in conjunction with "),r("code",[e._v("aria-errormessage")])]),e._v(" "),r("li",[e._v("Be scripted to show on the screen for sighted users, but attempts to announce the real-time messages to screen reader users\ncan be problematic. It is usually acceptable to wait to announce\nreal-time errors until after form submission, assuming that no data has been saved yet.")])])])]),e._v(" "),r("h4",{attrs:{id:"error-detection-location"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#error-detection-location"}},[e._v("#")]),e._v(" Error Detection Location")]),e._v(" "),r("p",[e._v("A user's ability to complete a form may be impacted if the "),r("RouterLink",{attrs:{to:"/patterns/validation-notifications/#form-control-validation-notification"}},[e._v("validation notification")]),e._v(" is not displayed in a manner the user expects.")],1),e._v(" "),r("p",[e._v("When providing inline instruction it is important to be non-disruptive, as enabling users to think less allows them to complete a form more quickly.\nWe can help reduce a user's cognitive lift by adding any additional information to locations within their natural reading flow, either to the right of the form element or below it. Displaying all validation in a "),r("RouterLink",{attrs:{to:"/patterns/validation-notifications/#validation-summary"}},[e._v("validation summary")]),e._v(" at the top of a page or top/bottom of a form will produce a poorer user experience than providing messaging inline as the user interacts with each form element.")],1),e._v(" "),r("p",[e._v("Cedar recommends placing validation information below the form field for a couple of reasons:")]),e._v(" "),r("ul",[r("li",[e._v("Constrained space will not alter the location of instruction")]),e._v(" "),r("li",[e._v("Below the form element is an expected pattern that is within a user's reading flow")])]),e._v(" "),r("p",[e._v("There are three unique opportunities which can be targeted to provide notification updates:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#while-user-is-typing-oninput"}},[e._v("While user is typing")]),e._v(": using the "),r("code",[e._v("OnInput")]),e._v(" event")]),e._v(" "),r("li",[r("a",{attrs:{href:"#once-the-user-moves-focus-onchange"}},[e._v("Once the user moves focus")]),e._v(": using the "),r("code",[e._v("OnChange")]),e._v(" event")]),e._v(" "),r("li",[r("a",{attrs:{href:"#once-the-user-submits-onsubmit"}},[e._v("Once the user submits")]),e._v(": using the "),r("code",[e._v("OnSubmit")]),e._v(" event")])]),e._v(" "),r("h5",{attrs:{id:"while-user-is-typing-oninput"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#while-user-is-typing-oninput"}},[e._v("#")]),e._v(" While user is typing (OnInput)")]),e._v(" "),r("p",[e._v('"On input" validation provides instant feedback as the user types making it highly visible.\nHowever, it forces them out of a "completion" mindset and may cause frustration.')]),e._v(" "),r("p",[e._v("While useful for form fields with very strict input requirements, research has\n"),r("a",{attrs:{href:"https://www.researchgate.net/publication/221054469_Online_Form_Validation_Don't_Show_Errors_Right_Away",target:"_blank",rel:"noopener noreferrer"}},[e._v("proven"),r("OutboundLink")],1),e._v("\nit to "),r("a",{attrs:{href:"https://www.researchgate.net/publication/220054837_Usable_error_message_presentation_in_the_World_Wide_Web_Do_not_show_errors_right_away",target:"_blank",rel:"noopener noreferrer"}},[e._v("cause"),r("OutboundLink")],1),e._v("\nmore user errors and take longer to successfully complete the form.")]),e._v(" "),r("p",[e._v("Instruction offered this way should focus on positive progressive cues and should not present error instruction.\nIt should not be used to immediately communicate that the user has caused an error.")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Use instant validation:")]),e._v(" "),r("ul",[r("li",[e._v("For difficult-to-answer questions where a user may create several formatting errors")]),e._v(" "),r("li",[e._v("To indicate progress as a user types")])])]),e._v(" "),r("li",[r("p",[e._v("Don't annoy the user")]),e._v(" "),r("ul",[r("li",[e._v("By providing instant error instruction")]),e._v(" "),r("li",[e._v("By using on simple inputs")])])])]),e._v(" "),r("h5",{attrs:{id:"once-the-user-moves-focus-onchange"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#once-the-user-moves-focus-onchange"}},[e._v("#")]),e._v(" Once the user moves focus (OnChange)")]),e._v(" "),r("p",[e._v('"On Change" validation takes place after the user changes or removes focus from their current element.\nIn most cases this is the best time to begin validating user data as the user will not need to locate or navigate back to the form field that contains the error.\nThis informs the user that there are additional expectations but does not block them from moving on and working through the remainder of the form.')]),e._v(" "),r("p",[e._v("Providing validation instruction on change, and enhancing the validation on submit can ease the users through the form without blocking or frustrating them.\nWe could for example, alter the the appearance of an element on change, which would warn or confirm the user's input and if needed on submit reinforce this change with additional validation instruction.")]),e._v(" "),r("cdr-img",{attrs:{src:e.$withBase("/input/progressiveexample.png"),alt:"An example on REI.com of this notification",width:"500px"}}),e._v(" "),r("h5",{attrs:{id:"once-the-user-submits-onsubmit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#once-the-user-submits-onsubmit"}},[e._v("#")]),e._v(" Once the user submits (OnSubmit)")]),e._v(" "),r("p",[e._v("A user submitting a form will be expecting to move on or to be reminded of existing errors.\nThey may be on a location of the page where they are unable to see individual invalidated form fields.\nIt may benefit user of longer forms to be presented with a "),r("RouterLink",{attrs:{to:"/patterns/validation-notifications/#validation-summary"}},[e._v("validation summary")]),e._v(" that can reiterate the errors and guide them to the locations needing work.")],1),e._v(" "),r("p",[e._v("OnSubmit is a user-expected location to offer validation.\nWhile less optimal than onChange, this event is preferable to OnInput. Users in a completion mindset may knowingly move through a form,\neven once aware of errors, and wait to submit prior to addressing additional form needs. Consider pairing OnChange progressively with onSubmit validation.\nA user who receives errors after submitting the form may no longer be able to see the input errors due to page scroll or some other limiting factor, in this case they may find a validation summary useful or needed.")]),e._v(" "),r("h5",{attrs:{id:"as-a-return-from-the-server-server-side-validation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#as-a-return-from-the-server-server-side-validation"}},[e._v("#")]),e._v(" As a return from the server (server-side validation)")]),e._v(" "),r("p",[e._v('Client side or "inline" validation notifications can interact with the user as they are working through the form process.\nInline validation allows us to interact with a user prior to the data being submitted to a server.')]),e._v(" "),r("p",[e._v("As this provides an enhanced user experience, inline validation should be used where possible.")]),e._v(" "),r("p",[e._v("This validation does not replace server validation, rather it enhances it with the ability to present instruction prior to submitting or refreshing the page.")]),e._v(" "),r("p",[e._v("When the user submits the form their information is sent to the server and validated. If validation did not take place prior to server validation or if there are additional errors, the response of the “validator” is sent back to the user’s computer.")]),e._v(" "),r("p",[e._v("Server-side validation notifications:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Must")]),e._v(" "),r("ul",[r("li",[e._v("Return the form (with the user's data still in the fields)")]),e._v(" "),r("li",[e._v("Provide a validation summary at the top of the page")])])]),e._v(" "),r("li",[r("strong",[e._v("May")]),e._v(" "),r("ul",[r("li",[e._v("Change the title of the page")]),e._v(" "),r("li",[e._v("Give the error a heading level: provide a header, preferably a H1, so that assistive technology users can jump directly to the error and correct it.")]),e._v(" "),r("li",[e._v("Provide a same-page link so that users can jump directly to the form field that has the error.")])])])]),e._v(" "),r("h3",{attrs:{id:"validation-notifications"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#validation-notifications"}},[e._v("#")]),e._v(" Validation Notifications")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/patterns/validation-notifications/"}},[e._v("Validation Notifications")]),e._v(" provide the instruction on how to resolve the detected errors or confirm task completion.\nThere are multiple types of validation notification which are applicable based on the validation technique being used, such as inline feedback and validation summaries. Detailed information about the types and requirements can be found on the "),r("RouterLink",{attrs:{to:"/patterns/validation-notifications/"}},[e._v("Validation Notifications")]),e._v(" page.")],1),e._v(" "),r("h2",{attrs:{id:"more-reading-and-resources"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#more-reading-and-resources"}},[e._v("#")]),e._v(" More Reading and Resources")]),e._v(" "),r("ul",[r("li",[e._v("Accessibility:\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://dequeuniversity.com/checklists/web/form-validation-feedback",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deque Checklist"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.w3.org/WAI/perspective-videos/notifications/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Notifications and feedback"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.w3.org/WAI/RD/wiki/Accessible_Notifications",target:"_blank",rel:"noopener noreferrer"}},[e._v("Accessible Notifications"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("WCAG status messages 4.1.3"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("WCAG Error Identification 3.3.1 (lvl A)"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions",target:"_blank",rel:"noopener noreferrer"}},[e._v("WCAG Labels or Instructions 3.3.2 (lvl A)"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion",target:"_blank",rel:"noopener noreferrer"}},[e._v("WCAG Error Suggestion 3.3.3 (lvl AA)"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("WCAG Error Prevention 3.3.4 (lvl AA) "),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.w3.org/WAI/tutorials/forms/notifications/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Form Notifications"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using Aria-Invalid to Indicate An Error Field"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using the aria-describedby property to provide a descriptive label for user interface controls"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Use "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions",target:"_blank",rel:"noopener noreferrer"}},[e._v("aria-live"),r("OutboundLink")],1),e._v(" to indicate that an element will be updated. It describes the types of updates the user agents, assistive technologies, and user can expect from the live region.")]),e._v(" "),r("li",[e._v("Use "),r("a",{attrs:{href:"https://www.digitala11y.com/aria-atomic-properties/",target:"_blank",rel:"noopener noreferrer"}},[e._v("aria-atomic"),r("OutboundLink")],1),e._v(" to indicate whether assistive technologies will present all, or only parts of the changed region based on the change notifications defined by the aria-relevant attribute.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-relevant_attribute",target:"_blank",rel:"noopener noreferrer"}},[e._v("aria-relevant"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.w3.org/WAI/tutorials/forms/grouping/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grouping Controls"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.tenon.io/accessible-validation-of-checkbox-and-radiobutton-groups/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Checkbox and radiobutton groups"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[e._v("UX/UI\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://uxmovement.com/forms/why-users-make-more-errors-with-instant-inline-validation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Instant Validation"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.nngroup.com/articles/errors-forms-design-guidelines/",target:"_blank",rel:"noopener noreferrer"}},[e._v("UI Guidelines"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://uxmovement.com/forms/the-best-place-for-error-messages-on-forms/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Error message placement"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://medium.com/@andrew.burton/form-validation-best-practices-8e3bec7d0549",target:"_blank",rel:"noopener noreferrer"}},[e._v("Form Validation Best Practices"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Constraint validation"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[e._v("Front-end\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTML5 Constraint validation"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Constraint validation API"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/ValidityState",target:"_blank",rel:"noopener noreferrer"}},[e._v("Validity state API"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=D9JHizCAx8U",target:"_blank",rel:"noopener noreferrer"}},[e._v("Validity API overview video"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity",target:"_blank",rel:"noopener noreferrer"}},[e._v("checkValidity()"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity",target:"_blank",rel:"noopener noreferrer"}},[e._v("setCustomValidity()"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://vuejs.org/v2/cookbook/form-validation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue validation cookbook"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Client-side form validation"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://medium.com/front-end-weekly/html5-form-validation-in-react-65712f778196",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTML5 form validation"),r("OutboundLink")],1)])])])])],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);