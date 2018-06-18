<template>
  <div>
    <cdr-doc-version :versOpts="compVersions" @versionChanged="updateSemver" />

    <h3>Props</h3>
    <cdr-doc-api type="prop" :semver="selectedVersion" :apiVersions="compVersions" />
    <h3>Slots</h3>
    <cdr-doc-api type="slot" :semver="selectedVersion" :apiVersions="compVersions" />
    <h3>Events</h3>
    <cdr-doc-api type="event" :semver="selectedVersion" :apiVersions="compVersions" />
  </div>
</template>

<script>
import VerSelect from './cdr-doc-version.vue';
import Api from './cdr-doc-api.vue';
import CDO from '../../../cedar-data.json';

export default {
  name: 'cdr-doc-versioned-api',
  props: {
    compName: {
      type: String,
      required: true
      ,validator: (value) => {
        return CDO.components.some(ele => ele.name.toLowerCase() === value.toLowerCase()) ||
          CDO.compositions.some(ele => ele.name.toLowerCase() === value.toLowerCase());
      }
    }
  },
  data() {
    return {
      selectedVersion: ''
    }
  },
  computed: {
    cdrDataObj() {
      return CDO.components.find(ele => ele.name.toLowerCase() === this.compName.toLowerCase()) ||
      CDO.compositions.find(ele => ele.name.toLowerCase() === this.compName.toLowerCase());
    },
    compVersions() {
      return this.cdrDataObj.versions;
    }
  },
  beforeMount() {
    this.selectedVersion = this.compVersions[0].version;
  },
  components: {
    VerSelect,
    Api
  },
  methods: {
    updateSemver(value) {
      this.selectedVersion = value;
    }
  }
}
</script>

<style>

</style>
