<template>
  <div>
    <aside>
      <h3>Introduction</h3>
      <ul>

      </ul>
      <h3>Documentation</h3>
        <ul>
          <li>Installation</li>
          <li>Configuration</li>
        </ul>
      <h3>Components</h3>
      <ul>
        <li v-for="name in compNames" :key="name">
          <nuxt-link :to="name">{{name}}</nuxt-link>
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
  float: left;
}

ul {
  list-style-type: none;
  padding: 16px;
}

.content {
  float: left;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
