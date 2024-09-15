<template>
  <app-header></app-header>
  <div class="container">
    <comp-validate></comp-validate>
  </div>
  <app-footer></app-footer>
</template>

<script>
import compValidate from "./component/validate/index.vue";
export default {
  components: {
    compValidate,
  },
};
</script>
