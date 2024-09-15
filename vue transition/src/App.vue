<template>
  <app-header></app-header>
  <div class="container">
    <comp-transition></comp-transition>
  </div>
  <app-footer></app-footer>
</template>

<script>
import compTransition from "./component/transition/two.vue";
export default {
  components: {
    compTransition,
  },
};
</script>
