<template>
  <div>
    <div v-for="modifier in Object.keys(text)" class="cdr-mb-space-one-x">
      <cdr-text
        tag="h3"
        modifier="heading-500"
        class="cdr-mb-space-one-x"
      >
          {{ formatTitle(modifier) }}
      </cdr-text>
      <table>
        <thead>
          <tr>
            <th>Example</th>
            <th>Token</th>
            <th>Utility class</th>
            <th>Component Modifier</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="level in text[modifier]" :key="`${modifier}-${level}`">
            <td>
              <cdr-text :modifier="`${modifier}-${level}`">{{ modifier }}-{{ level }}</cdr-text>
            </td>
            <td>
              <cdr-text>cdr-text-{{ modifier }}-{{ level }}</cdr-text>
            </td>
            <td>
              <cdr-text>cdr-text--{{ modifier }}-{{ level }}</cdr-text>
            </td>
            <td>
              <cdr-text>{{ modifier }}-{{ level }}</cdr-text>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <cdr-text tag="h3" modifier="heading-500" class="cdr-mb-space-one-x">
      Helpers
    </cdr-text>

    <table>
      <thead>
        <tr>
          <th>Example</th>
          <th>Token</th>
          <th>Utility class</th>
          <th>Component Modifier</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <cdr-text modifier="italic">italic</cdr-text>
          </td>
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
            <cdr-text modifier="strong">strong</cdr-text>
          </td>
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

    <hr>

    <cdr-text tag="h3" modifier="heading-500" class="cdr-mb-space-one-x">
      Mobile App Tokens
    </cdr-text>

    <tokens-typography platform="native" type="header">
    
    <cdr-text tag="h4" modifier="heading-400" class="cdr-mb-space-one-x">
      Headings
    </cdr-text>

    </tokens-typography>

    <tokens-typography platform="native" type="body">
    
    <cdr-text tag="h4" modifier="heading-400" class="cdr-mb-space-one-x">
      Body
    </cdr-text>

    </tokens-typography>

    <tokens-typography platform="native" type="button">
    
    <cdr-text tag="h4" modifier="heading-400" class="cdr-mb-space-one-x">
      Buttons
    </cdr-text>

    </tokens-typography>

<hr/>

  </div>
</template>

<script>
export default {
  name: 'TextDocOverView',
  methods: {
    formatTitle(key) {
      return key.split('-').map(x => x.charAt(0).toUpperCase() + x.substring(1)).join(' ');
    }
  },
  data() {
    return {
      text: {
        'heading-serif': [200, 300, 400, 500, 600, 700, 800, 900, 1100, 1200],
        'heading-serif-strong': [600, 700, 800, 900, 1100, 1200],
        'heading-sans': [200, 300, 400, 500, 600],
        'subheading-sans': [300, 400, 500, 600],
        'eyebrow': [100],
        'body': [300, 400, 500],
        'body-strong': [300, 400, 500],
        'utility': [100, 200, 300, 400, 500, 600, 700, 800],
        'utility-strong': [100, 200, 300, 400, 500, 600, 700, 800],
        'utility-serif': [200, 300, 400, 500, 600, 700, 800],
        'utility-serif-strong': [200, 300, 400, 500, 600, 700, 800],
      }
    };
  },
};
</script>

<style lang="scss">
</style>
