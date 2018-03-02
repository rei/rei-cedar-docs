<template>
  <div v-if="versions.length > 0">
    <span>Version:</span>&nbsp;
    <select @change="navigate($event)" v-model="selected">
      <option disabled>Please select version</option>
      <option 
        value="" 
      >
        Current
      </option>
      <template v-for="version in versions">
        <option 
          :key="version" 
          :value="compPath + '-' + version" 
        >
          {{version}}
        </option>
      </template>
    </select>
    <hr/>
  </div>
</template>

<script>
import archive from '~/archive-versions'

export default {
  name: 'Versions',
  data() {
    return {
      selected: ''
    }
  },
  props: {
    compPath: {
      type: String,
      require: true,
    }
  },
  /*
  * Make sure the select dropo down menu is set to the correct option when the page loads
  */
  created() {
    let openingPath = this.$route.path;
    const childSegmentStart = openingPath.indexOf(`/${this.compPath}`) + this.compPath.length + 2
    const childSegment = openingPath.substring(childSegmentStart)
    
    this.selected = childSegment
  },
  computed: {
    archive() {
      return archive
    },
    versions() {
      return archive[this.compPath]
    }
  },
  methods: {
    /*
    * Change the child view to the correct versioned documentation when the drop down changes
    */
    navigate (evt) {
      if (evt.target.tagName === 'SELECT') {
        const path = (evt.target.value === '') ? `/${this.compPath}` :  `/${this.compPath}/${evt.target.value}`
        $nuxt.$router.push({ path })
      }
    }
  }
}
</script>

<style>

</style>
