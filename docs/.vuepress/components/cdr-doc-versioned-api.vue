<template>
  <div>
    <cdr-doc-version @versionChanged="updateSemver" />

    <h3>Props</h3>
    <cdr-doc-api type="prop" :semver="selectedVersion" />
    <h3>Slots</h3>
    <cdr-doc-api type="slot" :semver="selectedVersion" />
    <h3>Events</h3>
    <cdr-doc-api type="event" :semver="selectedVersion" />
  </div>
</template>

<script>
import VerSelect from './cdr-doc-version.vue';
import Api from './cdr-doc-api.vue';

export default {
  name: 'cdr-doc-versioned-api',
  data() {
    return {
      selectedVersion: ''
    }
  },
  beforeMount() {
    this.selectedVersion = this.$page.frontmatter.versions[0].version;
  },
  components: {
    VerSelect,
    Api
  },
  methods: {
    updateSemver(value) {
      this.selectedVersion = value;
      console.log(`selectedVersion on update: ${this.selectedVersion}`);
    }
  }
}
</script>

<style>

</style>
