<template>
  <div>
    <cdr-text
      tag="h3"
      modifier="heading-500">
        Heading Serif 
    </cdr-text>
    <table>
      <thead>
        <tr>
          <th>Token</th>
          <th>Utility class</th>
          <th>Component Modifier</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="level in heading.serif"
          :key="`heading-serif-${level}`">
          <td>
            <cdr-text>cdr-text-heading-serif-{{level}}</cdr-text>
          </td>
          <td>
            <cdr-text>cdr-text--heading-serif-{{level}}</cdr-text>
          </td>
          <td>
            <cdr-text>heading-serif-{{level}}</cdr-text>
          </td>
        </tr>
      </tbody>
    </table>

    <cdr-text
    tag="h3"
    modifier="heading-500">
      Heading Serif Strong
    </cdr-text>

      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Utility class</th>
            <th>Component Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr 
           v-for="level in heading.serifStrong"
           :key="`heading-serif-${level}`">
            <td>
              <cdr-text>cdr-text-heading-serif-strong-{{level}}</cdr-text>
            </td>
            <td>
              <cdr-text>cdr-text--heading-serif-strong-{{level}}</cdr-text>
            </td>
            <td>
              <cdr-text>heading-serif-strong-{{level}}</cdr-text>
            </td>
          </tr>
        </tbody>
      </table>

      <cdr-text
      tag="h3"
      modifier="heading-500">
        Heading Sans
      </cdr-text>

      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Utility class</th>
            <th>Component Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr 
           v-for="level in heading.sans"
           :key="`heading-serif-${level}`">
            <td>
              <cdr-text>cdr-text-heading-sans-{{level}}</cdr-text>
            </td>
            <td>
              <cdr-text>cdr-text--heading-sans-{{level}}</cdr-text>
            </td>
            <td>
              <cdr-text>heading-sans-{{level}}</cdr-text>
            </td>
          </tr>
        </tbody>
      </table>

      <cdr-text
      tag="h3"
      modifier="heading-500">
        Subheading Sans
      </cdr-text>

      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Utility class</th>
            <th>Component Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr 
           v-for="level in subheading.sans"
           :key="`heading-serif-${level}`">
            <td>
              <cdr-text>cdr-text-subheading-sans-{{level}}</cdr-text>
            </td>
            <td>
              <cdr-text>cdr-text--subheading-sans-{{level}}</cdr-text>
            </td>
            <td>
              <cdr-text>subheading-sans-{{level}}</cdr-text>
            </td>
          </tr>
        </tbody>
      </table>

      
      <cdr-text
      tag="h3"
      modifier="heading-500">
        Eyebrow
      </cdr-text>

      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Utility class</th>
            <th>Component Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <cdr-text>cdr-text-eyebrow-100</cdr-text>
            </td>
            <td>
              <cdr-text>cdr-text--eyebrow-100</cdr-text>
            </td>
            <td>
              <cdr-text>eyebrow-100</cdr-text>
            </td>
          </tr>
        </tbody>
      </table>

      <cdr-text
      tag="h3"
      modifier="heading-500">
        Body
      </cdr-text>

      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Utility class</th>
            <th>Component Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr 
           v-for="level in body"
           :key="`body-${level}`">
            <td>
              <cdr-text>cdr-text-body-{{level}}</cdr-text>
            </td>
            <td>
              <cdr-text>cdr-text--body-{{level}}</cdr-text>
            </td>
            <td>
              <cdr-text>body-{{level}}</cdr-text>
            </td>
          </tr>
        </tbody>
      </table>

    <cdr-text
      tag="h3"
      modifier="heading-500">
        Body Strong
    </cdr-text>

    <table>
      <thead>
        <tr>
          <th>Token</th>
          <th>Utility class</th>
          <th>Component Modifier</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="level in bodyStrong"
          :key="`body-${level}`">
          <td>
            <cdr-text>cdr-text-body-strong-{{level}}</cdr-text>
          </td>
          <td>
            <cdr-text>cdr-text--body-strong-{{level}}</cdr-text>
          </td>
          <td>
            <cdr-text>body-strong-{{level}}</cdr-text>
          </td>
        </tr>
      </tbody>
    </table>

    <cdr-text
      tag="h3"
      modifier="heading-500">
        Utility
      </cdr-text>

      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Utility class</th>
            <th>Component Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr 
           v-for="level in utility.default"
           :key="`utility-default-${level}`">
            <td>
              <cdr-text>cdr-text-utility-{{level}}</cdr-text>
            </td>
            <td>
              <cdr-text>cdr-text--utility-{{level}}</cdr-text>
            </td>
            <td>
              <cdr-text>utility-{{level}}</cdr-text>
            </td>
          </tr>
        </tbody>
      </table>

      <cdr-text
      tag="h3"
      modifier="heading-500">
        Utility Strong
      </cdr-text>

      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Utility class</th>
            <th>Component Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr 
           v-for="level in utility.strong"
           :key="`utility-strong-${level}`">
            <td>
              <cdr-text>cdr-text-utility-strong-{{level}}</cdr-text>
            </td>
            <td>
              <cdr-text>cdr-text--utility-strong-{{level}}</cdr-text>
            </td>
            <td>
              <cdr-text>utility-strong-{{level}}</cdr-text>
            </td>
          </tr>
        </tbody>
      </table>

      <cdr-text
      tag="h3"
      modifier="heading-500">
        Utility Serif
      </cdr-text>

      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Utility class</th>
            <th>Component Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr 
           v-for="level in utility.strong"
           :key="`utility-serif-${level}`">
            <td>
              <cdr-text>cdr-text-utility-serif-{{level}}</cdr-text>
            </td>
            <td>
              <cdr-text>cdr-text--utility-serif-{{level}}</cdr-text>
            </td>
            <td>
              <cdr-text>utility-serif-{{level}}</cdr-text>
            </td>
          </tr>
        </tbody>
      </table>

      <cdr-text
      tag="h3"
      modifier="heading-500">
        Utility Serif Strong
      </cdr-text>

      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Utility class</th>
            <th>Component Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr 
           v-for="level in utility.serifStrong"
           :key="`utility-serifStrong-${level}`">
            <td>
              <cdr-text>cdr-text-utility-serif-strong-{{level}}</cdr-text>
            </td>
            <td>
              <cdr-text>cdr-text--utility-serif-strong-{{level}}</cdr-text>
            </td>
            <td>
              <cdr-text>utility-serif-strong-{{level}}</cdr-text>
            </td>
          </tr>
        </tbody>
      </table>

            <cdr-text
      tag="h3"
      modifier="heading-500">
        Helpers
      </cdr-text>

      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Utility class</th>
            <th>Component Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <cdr-text> N/A </cdr-text>
            </td>
            <td>
              <cdr-text>cdr-text--italic</cdr-text>
            </td>
            <td>
              <cdr-text>italic</cdr-text>
            </td>
          </tr>
          <tr>
            <td>
              <cdr-text> N/A </cdr-text>
            </td>
            <td>
              <cdr-text>cdr-text--strong</cdr-text>
            </td>
            <td>
              <cdr-text>strong</cdr-text>
            </td>
          </tr>
        </tbody>
      </table>

  </div>
</template>

<script>
export default {
  name: 'TextDocOverView',
  data() {
    return {
      heading: {
        serif: [200, 300, 400, 500, 600, 700, 800, 900, 1100, 1200],
        serifStrong: [600, 700, 800, 900, 1100, 1200],
        sans: [200, 300, 400, 500, 600],
      },
      subheading: {
        sans: [300, 400, 500, 600],
      }, 
      body: [300, 400, 500],
      bodyStrong: [300, 400, 500],
      utility: {
        default: [100, 200, 300, 400, 500, 600, 700, 800],
        strong: [100, 200, 300, 400, 500, 600, 700, 800],
        serif:[200, 300, 400, 500, 600, 700, 800],
        serifStrong:[200, 300, 400, 500, 600, 700, 800],
      },
    };
  },
};
</script>

<style lang="scss">
</style>
