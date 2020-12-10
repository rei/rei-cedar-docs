<template>
  <div>
    {{name}} styles are available through the `@rei/cdr-component-variables` package as SCSS and LESS mixins.
    See examples on the <a :href="`../component-variables/#${name}`">Component Variables page</a>. <slot/>
  </div>
</template>

<script>
  export default {
    name: 'CdrDocCompVars',
    props: ["name"],
  };
</script>
