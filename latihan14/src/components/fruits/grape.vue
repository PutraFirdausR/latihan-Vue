<template>
  <h3>Grape Component</h3>
  <Teleport to="#teleport-is-here">
    <comp-modal></comp-modal>
  </Teleport>
</template>
<script>
import compModal from "@/components/utills/modal.vue";
export default {
  components: {
    compModal,
  },
  name: "grape-comp",
  unmounted() {
    console.log("grap unmounted");
  },
};
</script>
