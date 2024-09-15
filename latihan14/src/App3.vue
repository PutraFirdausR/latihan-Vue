<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <compLife v-if="showIt"></compLife>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import compLife from "@/components/Life/index.vue";
export default {
  components: {
    compLife,
  },
  data() {
    return {
      showIt: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showIt = false;
    }, 2000);
  },
};
</script>
