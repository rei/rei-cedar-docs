<template>
  <div>
    <div v-for="modifier in Object.keys(text)" class="stack-1">
      <cdr-text
        tag="h3"
        class="cdr-text--heading-500 stack-1"
      >
          {{ formatTitle(modifier) }}
      </cdr-text>
      <cdr-table>
        <thead>
          <tr>
            <th>UI toolkit</th>
            <th>Token</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="level in text[modifier]" :key="`${modifier}-${level}`">
            <td>
              <cdr-text :class="`cdr-text--${modifier}-${level}`">{{ modifier }}-{{ level }}</cdr-text>
            </td>
            <td>
              <cdr-text>cdr-text-{{ modifier }}-{{ level }}</cdr-text>
            </td>
          </tr>
        </tbody>
      </cdr-table>
    </div>

    <cdr-text tag="h3" class="cdr-text--heading-500 stack-1">
      Helpers
    </cdr-text>

    <cdr-table>
      <thead>
        <tr>
          <th>UI toolkit</th>
          <th>Token</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <cdr-text class="cdr-text--italic">italic</cdr-text>
          </td>
          <td>
            <cdr-text> cdr-text-italic </cdr-text>
          </td>
        </tr>
        <tr>
          <td>
            <cdr-text class="cdr-text--strong">strong</cdr-text>
          </td>
          <td>
            <cdr-text> cdr-text-strong </cdr-text>
          </td>
        </tr>
      </tbody>
    </cdr-table>

    <cdr-text tag="h3" class="cdr-text--heading-500 stack-1">
      Native Mobile App Tokens
    </cdr-text>

    <tokens-typography platform="native" type="header">

    <cdr-text tag="h4" class="cdr-text--heading-400 stack-1">
      Headings
    </cdr-text>

    </tokens-typography>

    <tokens-typography platform="native" type="body">

    <cdr-text tag="h4" class="cdr-text--heading-400 stack-1">
      Body
    </cdr-text>

    </tokens-typography>

    <tokens-typography platform="native" type="button">

    <cdr-text tag="h4" class="cdr-text--heading-400 stack-1">
      Buttons
    </cdr-text>

    </tokens-typography>

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
        'heading-display': [800, 900, 1100, 1200, 1300, 1400, 1500, 1600],
        'heading-serif': [200, 300, 400, 500, 600, 700, 800, 900, 1100, 1200],
        'heading-serif-strong': [600, 700, 800, 900, 1100, 1200],
        'heading-sans': [200, 300, 400, 500, 600],
        'subheading-sans': [300, 400, 500, 600],
        'eyebrow': [100],
        'body': [300, 400, 500],
        'body-strong': [300, 400, 500],
        'utility-sans': [100, 200, 300, 400, 500, 600, 700, 800],
        'utility-sans-strong': [100, 200, 300, 400, 500, 600, 700, 800],
        'utility-serif': [200, 300, 400, 500, 600, 700, 800],
        'utility-serif-strong': [200, 300, 400, 500, 600, 700, 800],
      }
    };
  },
};
</script>

<style lang="scss">
</style>
