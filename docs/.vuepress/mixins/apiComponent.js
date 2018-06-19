export default {
  props: {
    semver: {
      type: String,
      required: true
    },
    apiVersions: {
      type: Array,
      required: true
    }
  },
  computed: {
    chosenVersionIdx: {
      get() {
        return this.apiVersions.findIndex((ele) => {
          return ele.version === this.semver;
        });
      },
      set(newVal) {
        this.semver = this.apiVersions[newVal].version;
      }
    }
  },
  beforeMount() {
    this.chosenVersionIdx = 0;
  },
};