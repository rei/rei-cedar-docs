---
{
  "title": "Forms",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": "Use form patterns to allow users to enter information",
  "sandboxData": {
    "components": "CdrInput, CdrLink, CdrSelect"
  },
  "breadcrumbs": [
    {
      "text": "Patterns/"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Overview

Forms are the primary way that users interact with a website or application. Consistent application of form design patterns across an online experience improves the overall usability of user interactions, and helps create a familiar interface for users to more easily accomplish their tasks.

Forms allow users to:
- Register for / log into an account
- Make selections
- Purchase a product
- Enter information
- Provide feedback

Cedar provides components for the main HTML input elements: [CdrInput](../../components/input/), [CdrSelect](../../components/selects/), [CdrCheckbox](../../components/checkboxes/), [CdrRadio](../../components/radio/). Input groups that contain logically related form inputs or groups of CdrRadio or CdrCheckbox elements can be constructed using [CdrFormGroup](../../components/form-group/). These Cedar components provide built in labels, controls, and error state logic. Form controls can be constructed using the [CdrButton](../../components/buttons) or [CdrLink](../../components/links) components. Other components may be used to further enhance forms.

## Guidelines

- Ensure the entire field, including validation messaging, is in-view and unobstructed when a field is selected
- Each Cedar component may have specific accessibility or usage guidelines, it is recommended to check the documentation for any components you are using
- The CdrInput component sets some default attributes to help ensure a consistent experience, see the [CdrInput documentation](../../components/input#default-input-attrs) for more information


## Examples of common input patterns

### Email

- Don’t automatically opt-in users to email marketing offers
- Disable auto-correct and auto-capitalization
- Set `type` attribute to "email"
- set autocomplete value to "email"

<!-- TODO: update CdrInput to auto-disable auto-correct/cap/etc. -->

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :model="{defaultModel: ''}" :methods="{}">

```html
<cdr-input
  v-model="defaultModel"
  label="Email"
  type="email"
  autocomplete="email"
  autocorrect="off"
  autocapitalize="off"
  spellcheck="false"
  required="true"
>
</cdr-input>
```

</cdr-doc-example-code-pair>

### Phone Number

- Explain why a phone number is required and/or how the data will be used
- If a phone number can be provided optionally, consider placing the input behind a link
- Provide a formatting hint to help the user input the correct format
- Add special characters automatically—don’t make the user type them (but if they do, accommodate them)
<hr/>
- Set `type` attribute to "tel"
- Set `autocomplete` attribute to "tel-national" if no country code is required
- See the [CdrInput documentation](../../components/input#input-masking) for information on setting up an input mask


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

### Name

- Use a single “Full name” field whenever possible—”First name” and “Last name” fields are not culturally inclusive
- Consider giving the user the option of choosing a “Prefered name” to be used in instances of personalization (eg. marketing emails)
- If first and last names are required for payment validation, consider adding helper text clarifying the need to match the card and splitting the data on the back-end
- Avoid optionally asking for a middle name or initial
<hr/>
- Disable auto-correct
- Set `autocomplete` attribute to "name"
- Validate for at least two words if the full name is required for payment processing

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :model="{defaultModel: '', preferredModel: '', errorMessage: false}" :methods="{validate() {this.errorMessage = this.defaultModel.split(' ').length >= 2 ? false : 'Please enter your full name as it appears on your credit card'}}">

```html
<div>
  <cdr-input
    v-model="defaultModel"
    label="Full name"
    autocomplete="name"
    @blur="validate"
    :error="errorMessage"
    :required="true"
  >
    <template slot="helper-text-top">
      As it appears on your credit card.
    </template>
  </cdr-input>
  <cdr-input
    v-model="preferredModel"
    label="Preferred name"
    autocomplete="name"
    :optional="true"
  >
    <template slot="helper-text-top">
      Is there another name you prefer to go by?
    </template>
  </cdr-input>
</div>
```

</cdr-doc-example-code-pair>

### Address

- Place the secondary address field behind a link
- Be descriptive with what types of information a secondary address field might contain
<hr/>
- Disable auto-correct
- Use an address finder, if available
- Assign appropriate autocomplete value—note: “address-line1” vs. “address-level2”

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :model="{lineOne: '', lineTwo: '', showLineTwo: false}" :methods="{}">

```html
<div>
  <cdr-input
    v-model="lineOne"
    label="Street address"
    required="true"
    autocomplete="address-line1"
    :required="true"
  >
  </cdr-input>
  <cdr-link tag="button" @click="showLineTwo = true" v-if="!showLineTwo">Add Apt #, Suite, etc.</cdr-link>
  <cdr-input
    v-if="showLineTwo"
    v-model="lineTwo"
    label="Adddress line 2"
    autocomplete="address-level2"
    :optional="true"
  >
  </cdr-input>
</div>
```

</cdr-doc-example-code-pair>

### Postal Code

- To reduce typing effort and reduce errors, ask for the postal code before the City and State fields so they can be automatically populated
- Size the field to the data expected
<hr/>
- Invoke special “numeric” keyboard by passing `:numeric="true"` to CdrInput
- Dynamically change keyboard type depending on country selected—some countries may have letters in their postal code (eg. United Kingdom)
- Set `autocomplete` attribute to "postal-code" if no country code is required
- Use an `input` listener to control the format of the input
- Use the `maxlength` property to restrict input to the maximum expected length


<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :model="{defaultModel: ''}" :methods="{massageInput() {this.defaultModel = this.defaultModel.replace(/\D/g, '')}}">

```html
<cdr-input
  v-model="defaultModel"
  label="Postal code"
  autocomplete="postal-code"
  :numeric="true"
  maxlength="5"
  @input="massageInput"
>
</cdr-input>
```

</cdr-doc-example-code-pair>

### Credit Card Number

- Once identified, dynamically provide a thumbnail icon of the card type
- Use the field label “Card number” as charge cards and debit cards are accepted card types alongside credit cards
- The numerical spacing of the data should match the physical card
<hr/>
- Invoke special “numeric” keyboard by passing `:numeric="true"` to CdrInput
- Actively validate the card number field
- Auto-detect the card type based on the card number
- Once know, Match the numerical sequence of the field to the physical card
- Ensure the user doesn’t need to re-enter their number if they go back a step in the checkout flow
- Assign appropriate autocomplete value: “cc-number”
- See the [CdrInput documentation](../../components/input#input-masking) for information on setting up an input mask

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :model="{defaultModel: ''}" :methods="{validate() {}}">

```html
<cdr-input
  v-mask="'#### #### #### ####'"
  label="Credit card"
  v-model="defaultModel"
  autocomplete="cc-number"
  :numeric="true"
>
</cdr-input>
```

</cdr-doc-example-code-pair>

### Security Code

- Provide a format hint based on card type
- Size the field to the data that’s expected using an `input` event listener
<hr/>
- Invoke special “numeric” keyboard by passing `:numeric="true"` to CdrInput
- Use an `input` listener to limit input to possible values for the security code
- Use the `maxlength` attribute to restrict input to the maximum possible length for the security code
- Assign appropriate autocomplete value: “cc-csc”
- Dynamically update format hints based on card type

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :model="{defaultModel: ''}" :methods="{restrictInput(e) {this.defaultModel = this.defaultModel.replace(/\D/g, '')}}">

```html
<cdr-input
  v-model="defaultModel"
  label="Security code"
  autocomplete="cc-csc"
  :numeric="true"
  maxlength="3"
  @input="restrictInput"
>
  <template slot="helper-text-top">
    Three digit number on the back.
  </template>
</cdr-input>
```

</cdr-doc-example-code-pair>

### Expiration Date

- Use the MM/YY format
- Size the field to the data that’s expected
<hr/>
- Invoke special “numeric” keyboard by passing `:numeric="true"` to CdrInput
- Assign appropriate autocomplete value: “cc-exp”
- See the [CdrInput documentation](../../components/input#input-masking) for information on setting up an input mask

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :model="{defaultModel: ''}" :methods="{}">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  v-mask="'##/##'"
  autocomplete="cc-exp"
  :numeric="true"
>
</cdr-input>
```

</cdr-doc-example-code-pair>

### Country

- Assign appropriate autocomplete value: “country”

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :model="{defaultModel: ''}" :methods="{}">

```html
<cdr-select
  v-model="defaultModel"
  label="Country"
  autocomplete="country"
>
  <option value="United States">United States</option>
  <option value="Canada">Canada</option>
  <option value="Mexico">Mexico</option>
</cdr-select>
```

</cdr-doc-example-code-pair>

### Gender

- Never ask for a user’s gender unless absolutely necessary
- Always provide a reason why the information is required and how it will be used
- Give the user the option to self-identify
- Consider adding an additional, optional field for users to further clarify their answer
- Size the field to the data that’s expected
<hr/>
- Assign appropriate autocomplete value: “sex”

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :model="{defaultModel: ''}" :methods="{}">

```html
<cdr-input
  v-model="defaultModel"
  label="Gender"
  autocomplete="sex"
>
</cdr-input>
```

</cdr-doc-example-code-pair>


</cdr-doc-table-of-contents-shell>
