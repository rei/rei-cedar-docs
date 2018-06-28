<template>
  <div>
    <cdr-doc-version :versOpts="compVersions" @versionChanged="updateSemver" />

    <div v-if="apiExists('props')">
      <cdr-text :tag="this.headerTag">Props</cdr-text>
      <cdr-doc-api type="prop" :semver="selectedVersion" :apiVersions="compVersions" />
    </div>
    <div v-if="apiExists('slots')">
      <cdr-text :tag="this.headerTag">Slots</cdr-text>
      <cdr-doc-api type="slot" :semver="selectedVersion" :apiVersions="compVersions" />
    </div>
    <div v-if="apiExists('events')">
      <cdr-text :tag="this.headerTag">Events</cdr-text>
      <cdr-doc-api type="event" :semver="selectedVersion" :apiVersions="compVersions" />
    </div>
  </div>
</template>

<script>
import VerSelect from './cdr-doc-version.vue';
import Api from './cdr-doc-api.vue';
import CDO from '../../../cedar-data.json';
import { CdrText } from '@rei/cdr-text';

export default {
  name: 'cdr-doc-versioned-api',
  props: {
    compName: {
      type: String,
      required: true,
      validator: (value) => {
        return CDO.components.some(ele => ele.name.toLowerCase() === value.toLowerCase()) ||
          CDO.compositions.some(ele => ele.name.toLowerCase() === value.toLowerCase());
      }
    },
    headerTag: {
      type: String,
      default: 'h3'
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
    Api,
    CdrText
  },
  methods: {
    updateSemver(value) {
      this.selectedVersion = value;
    },
    apiExists(apiType) {
      return this.compVersions.some((version) => {
        console.log(`API for ${apiType}:\n${version.api[apiType]}`)
        return version.version === this.selectedVersion &&
          version.api[apiType] !== undefined &&
          version.api[apiType].length > 0
      });
    }
  }
}
</script>

<style>

</style>
