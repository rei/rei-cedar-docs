<template>
  <div>
    <aside>
      <h3><a href="#intro">Introduction</a></h3>
      <h3><a href="#docs">Documentation</a></h3>
        <ul>
          <li><a href="#install">Installation</a></li>
          <li><a href="#config">Configuration</a></li>
        </ul>
      <h3><a href="#components">Components</a></h3>
      <ul>
        <li v-for="name in compNames" :key="name">
          <a :href="'#' + name">{{name}}</a>
        </li>
      </ul>
    </aside>
    <div class="content">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Components from '~/components/_index'

export default {
  computed: {
    compNames () {
      let names = []
      for (const comp in Components) {
        if(Components[comp].name) {
          names.push(Components[comp].name)
        }
      }
      return names
    } 
  }
}
</script>

<style>
aside {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 16px;
  width: 200px;
  overflow: auto;
  background-color: #f5f5f5;
  border: #e8e8e8;
  border-width: 0 1px 0 0;
}

ul {
  list-style-type: none;
  padding: 16px;
}

.content {
  position: relative;
  left: 200px;
  float: left;
  padding: 16px;
}
</style>
