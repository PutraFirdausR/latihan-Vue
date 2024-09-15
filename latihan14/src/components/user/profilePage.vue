<template>
  <div class="user_profile">
    <h3>User Information</h3>
    <ul>
      <li><span>asKnows:</span> {{ aka }}</li>
      <li><span>Name:</span> {{ name }}</li>
      <li><span>LastName:</span> {{ last }}</li>
      <li><span>Age:</span> {{ userAge }}</li>
      <li v-for="(value, key, index) in userParent" :key="index">
        {{ value }} : {{ key }}
      </li>
    </ul>
    <button @click="updateLastName">Change Last Name</button>
    <button @click="sayHello">Say Hello</button>
    <button @click="updateAge(80)">Change Age</button>
  </div>
</template>

<script>
export default {
  props: {
    aka: String,
    last: {
      type: String,
      validator(value) {
        if (value === "Firdaus") {
          return console.log("jalankan fungsi true");
        } else {
          return console.log("jalankan fungsi false");
        }
      },
    },
    userAge: [Number, String],
    userParent: Object,
    updateAge: Function,
  },

  data() {
    return {
      name: "Budi",
    };
  },
  methods: {
    updateLastName() {
      this.$emit("update-last", "Ramandani");
    },
    sayHello() {
      this.$emit("say-hello");
    },
  },
};
</script>
