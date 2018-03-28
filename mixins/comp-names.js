export default {
  methods: {
    compNames(compsObj) {
      let names = []
      for(const compKey in compsObj) {
        if (compsObj[compKey].name) {
          names.push(compsObj[compKey].name.toString())
        }
      }
      return names
    }
  },
}