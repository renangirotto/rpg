<template>
  <svg ref="container" xmlns='http://www.w3.org/2000/svg' :viewBox='filterIcon(this.name).viewBox' />
</template>

<script>
import iconsList from "@/assets/svg/icons.json";

export default {
  name: "c-icon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  mounted: function () {
    //take the reference to the SVG tag and use the return of filter function to build the html inside it
    this.$refs.container.innerHTML = this.filterIcon(this.name).code;
  },
  methods: {
    filterIcon: (name) => {
      //filter the icons JSON, the JSON contains the code and viewBox to use in the SVG tag
      const icon = iconsList.filter((item) => item.name === name);
      return icon[0];
    }
  },
};
</script>

<style>
</style>