<template>
  <app-header></app-header>
  <div class="container">
    <profilePage
      :aka="name"
      :last="lastname"
      :userAge="age"
      :userParent="parents"
      @update-last="lastname = $event"
      @say-hello="sayHello"
      :updateAge="updateAge"
    ></profilePage>
  </div>
  <button @click="updateName">Change Name</button>
  <app-footer></app-footer>
</template>

<script>
import profilePage from "./components/user/profilePage.vue";
export default {
  components: {
    profilePage,
  },
  data() {
    return {
      name: "Putra",
      lastname: "Firdaus",
      age: 18,
      parents: {
        Mother: "Poniati",
        Father: "Budi",
      },
    };
  },
  methods: {
    updateName() {
      this.name = "Ramandani";
    },
    sayHello() {
      alert("Hello World");
    },
    updateAge(value) {
      this.age = value;
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
