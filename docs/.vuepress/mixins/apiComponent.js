export default {
  props: {
    semver: {
      type: String,
      required: true
    }
  },
  computed: {
    chosenVersionIdx: {
      get() {
        return this.$page.frontmatter.versions.findIndex((ele) => {
          return ele.version === this.semver;
        });
      },
      set(newVal) {
        this.semver = this.$page.frontmatter.versions[newVal].version;
      }
    }
  },
  beforeMount() {
    this.chosenVersionIdx = 0;
  },
};