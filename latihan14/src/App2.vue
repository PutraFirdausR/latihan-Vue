<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <compBrand>
        <template v-slot:brand1>
          <ul>
            <li v-for="(merek, index) in brand" :key="index">{{ merek }}</li>
          </ul>
        </template>
      </compBrand>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import compBrand from "@/components/cars/brand.vue";
export default {
  components: {
    compBrand,
  },
  data() {
    return {
      brand: ["Toyota", "Nisaan", "Honda"],
      cars: [
        { model: "Jazz", brand: "Honda" },
        { model: "Syline", brand: "Nissan" },
        { model: "Lancer", brand: "Honda" },
      ],
    };
  },
  provide() {
    return {
      cars: this.cars,
      changeCar: this.changeCar,
    };
  },
  methods: {
    changeCar() {
      this.cars[0].brand = "Pagani";
    },
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
container {
  min-height: 80vh;
  box-sizing: border-box;
  pad: 20px;
}
</style>
