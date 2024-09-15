<template>
  <div>
    <ul>
      <li v-for="(car, index) in cars" :key="index">
        {{ car.brand }}: {{ car.model }}
      </li>
    </ul>
    <button @:click="changeCar">ChangeCar</button>
  </div>
</template>

<script>
export default {
  inject: ["cars"],
};
</script>
