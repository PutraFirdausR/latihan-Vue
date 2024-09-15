<template><div>Orange Component</div></template>
<script>
export default {
  mounted() {
    console.log("orange mounted");
  },
  activated() {
    console.log("Orange activated");
  },
  deactivated() {
    console.log("Orange deactivated");
  },
  unmounted() {
    console.log("orange unmounted");
  },
};
</script>
