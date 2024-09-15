<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <comp-directive></comp-directive>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import compDirective from "@/components/directive/index.vue";
export default {
  components: {
    compDirective,
  },
  data() {
    return {};
  },
};
</script>
