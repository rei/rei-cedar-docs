<template>
  <table class="a-t-example">
    <tbody>
      <tr class="a-t-example__primary">
        <td>text-color-primary-on-dark</td>
        <td>AAA 13.94:1</td>
        <td>AAA 16.67:1</td>
      </tr>
      <tr class="a-t-example__secondary">
        <td>text-color-secondary-on-dark</td>
        <td>AAA 5.11:1</td>
        <td>AAA 6.11:1</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'AccessibleTextExample'
}
</script>

<style lang="scss">
@import '../theme/styles/cdr-tokens.scss';

.a-t-example {
  
  &__primary {
    color: $cdr-color-text-primary-darkmode;
  }
  &__secondary {
    color: $cdr-color-text-secondary-darkmode;
  }

  td {
    padding: 16px;
    border: none;
    background-color: $cdr-color-background-darker;

    &:nth-of-type(3) {
      background-color: cdr-color-background-dark;
    }

    &:nth-of-type(n+2) {
      text-align: right;
    }
  }
}
</style>
