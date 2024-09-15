<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <button @click="this.activeComp = 'comp-orange'">Orange</button>
      <button @click="this.activeComp = 'comp-grape'">Grape</button>

      <!-- <comp-orange v-if="activeComp === 'comp-orange'"></comp-orange>
      <comp-grape v-if="activeComp === 'comp-grape'"></comp-grape> -->
      <keep-alive>
        <component :is="activeComp"></component>
      </keep-alive>
    </div>
    <div id="teleport-is-here"></div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import compOrange from "@/components/fruits/orange.vue";
import compGrape from "@/components/fruits/grape.vue";
export default {
  components: {
    compOrange,
    compGrape,
  },
  data() {
    return {
      activeComp: "comp-orange",
    };
  },
};
</script>
