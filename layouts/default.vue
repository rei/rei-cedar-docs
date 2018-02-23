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
        <li v-for="name in componentNames" :key="name">
          <a :href="'#' + name">{{name}}</a>
        </li>
      </ul>
      <h3><a href="#compositions">Compositions</a></h3>
      <ul>
        <li v-for="name in compositionNames" :key="name">
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
import Compositions from '~/compositions/_index'

export default {
  methods: {
    compNames(compsObj) {
      let names = []
      for(const compKey in compsObj) {
        if (compsObj[compKey].name) {
          names.push(compsObj[compKey].name)
        }
      }
      return names
    }
  },
  computed: {
    componentNames () {
      return this.compNames(Components)
    },
    compositionNames () {
      return this.compNames(Compositions)
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
  z-index: 10;
  overflow-x: hidden;
  background-color: #f5f5f5;
  border: #e8e8e8;
  border-width: 0 1px 0 0;
}

aside ul {
  list-style-type: none;
  padding: 16px;
}

@media screen and (max-height: 450px) {
    aside {padding-top: 15px;}
    aside a {font-size: 18px;}
}

.content {
  margin-left: 200px;
  padding: 16px;
}
</style>
