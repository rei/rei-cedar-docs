---
{
  "title": "Forms",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
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

<!-- TODO: type="number" IS NOT compatible with v-mask! can't restrict input type AND use v-mask out of the box... fork it? -->

## Form Patterns

TODO: overview

## Guidelines

Ensure the entire field, including validation messaging, is in-view and unobstructed when a field is selected

## Input Masking

TODO: make CdrInputMasked instead.

User input should be automatically formatted to make forms easier to comprehend and use, for example by adding parentheses and a dash to a phone number or inserting a space between every four digits of a credit card number.

Input masking has not been integrated directly into Cedar, however the CdrInput component implements the same API as a plain HTML text input element and can be used in conjunction with most input masking libraries.

We recommend using [v-mask](https://github.com/probil/v-mask) as a local directive in any components where you need input masking. Benefits: small library, simple API, if we add input masking to cedar directly will use similar API.

```
<script>
import { CdrInput } from "@rei/cedar";
import { VueMaskDirective } from "v-mask";

export default {
  name: "VueDirectiveExample",
  components: {
    CdrInput,
  },
  directives: {
    mask: VueMaskDirective,
  },
};
</script>

```

## Examples

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


- Set `type` attribute to "tel"
- Set `autocomplete` attribute to "tel-national" if no country code is required


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
    autocorrect="off"
    spellcheck="off"
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
    autocorrect="off"
    spellcheck="off"
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

<!-- TODO: autocomplete? -->

- Place the secondary address field behind a link
- Be descriptive with what types of information a secondary address field might contain

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
    autocorrect="off"
    spellcheck="off"
    :required="true"
  >
  </cdr-input>
  <cdr-link tag="button" @click="showLineTwo = true" v-if="!showLineTwo">Add Apt #, Suite, etc.</cdr-link>
  <cdr-input
    v-if="showLineTwo"
    v-model="lineTwo"
    label="Adddress line 2"
    autocomplete="address-level2"
    autocorrect="off"
    spellcheck="off"
    :optional="true"
  >
  </cdr-input>
</div>
```

</cdr-doc-example-code-pair>

### Postal Code

- To reduce typing effort and reduce errors, ask for the postal code before the City and State fields so they can be automatically populated
- Size the field to the data expected

- Set `type` attribute to "number"
- Dynamically change keyboard type depending on country selected—some countries may have letters in their postal code (eg. United Kingdom)
- Set `autocomplete` attribute to "postal-code" if no country code is required

<!-- TODO: update CdrInput so type="number" dynamically adds pattern/inputmode/novalidate -->


<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :model="{defaultModel: ''}" :methods="{}">

```html
<cdr-input
  v-model="defaultModel"
  label="Postal code"
  autocomplete="postal-code"
  type="number"
  pattern="[0-9]*"
  inputmode="numeric"
  novalidate
>
</cdr-input>
```

</cdr-doc-example-code-pair>

### Credit Card Number

- Once identified, dynamically provide a thumbnail icon of the card type
- Use the field label “Card number” as charge cards and debit cards are accepted card types alongside credit cards
- The numerical spacing of the data should match the physical card

- Invoke special “numeric” keyboard
- Actively validate the card number field
- Auto-detect the card type based on the card number
- Once know, Match the numerical sequence of the field to the physical card
- Ensure the user doesn’t need to re-enter their number if they go back a step in the checkout flow
- Assign appropriate autocomplete value: “cc-number”

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :model="{defaultModel: ''}" :methods="{validate() {}}">

```html
<cdr-input
      placeholder="Credit card"
      v-mask="'#### #### #### ####'"
      label="Credit card"
      v-model="defaultModel"
      autocomplete="cc-number"
      type="number"
    >
</cdr-input>
```

</cdr-doc-example-code-pair>

### Security Code

- Provide a format hint based on card type
- Size the field to the data that’s expected

- Invoke special “numeric” keyboard
- Assign appropriate autocomplete value: “cc-csc”
- Dynamically update format hints based on card type

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :model="{defaultModel: ''}" :methods="{}">

```html
<cdr-input
  v-model="defaultModel"
  label="Security code"
  autocomplete="cc-csc"
  type="number"
  pattern="[0-9]*"
  inputmode="numeric"
  novalidate
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

- Invoke special “numeric” keyboard
- Assign appropriate autocomplete value: “cc-exp”

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :model="{defaultModel: ''}" :methods="{}">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  v-mask="'##/##'"
  placeholder="MM/YY"
  autocomplete="cc-exp"
>
</cdr-input>
```

</cdr-doc-example-code-pair>

### Country


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

</cdr-doc-table-of-contents-shell>
