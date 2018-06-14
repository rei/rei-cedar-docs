export default {
  props: {
    semver: {
      type: String,
      required: true
    }
  },
  computed: {
    chosenVersionIdx () {
      return $page.frontmatter.versions.findIndex(function (ele) {
        return ele.version === this.semver;
      });
    }
  },
  created() {
    this.chosenVersionIdx = 0;
  },
};