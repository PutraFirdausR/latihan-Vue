<template>
  <h3>{{ text }}</h3>
  <button @:click="this.text = 'ChangedText'">ChangeText</button>
</template>
<script>
export default {
  data() {
    return {
      text: "LifeCycle Hook",
    };
  },
  beforeCreate() {
    console.log("1-beforeCreated");
  },
  created() {
    console.log("2-created");
  },
  beforeMount() {
    console.log("3-beforeMount");
  },
  mounted() {
    console.log("4-mounted");
  },
  beforeUpdate() {
    console.log("U1-beforeUpdated");
  },
  updated() {
    console.log("U2-updated");
  },
  beforeUnmount() {
    console.log("D1-beforeUnmount");
  },
  unmounted() {
    console.log("D2-unmounted");
  },
};
</script>
