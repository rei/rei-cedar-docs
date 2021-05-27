<template>
  <div>
    For projects that cannot make use of the Vue.js component, the {{name}} styles are available through the `@rei/cdr-component-variables` package as SCSS and LESS mixins which can be applied to plain HTML elements.
    See examples on the <a :href="`../component-variables/#${name}`">Component Variables page</a>. <slot/>
  </div>
</template>

<script>
  export default {
    name: 'CdrDocCompVars',
    props: ["name"],
  };
</script>
