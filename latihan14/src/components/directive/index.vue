<template>
  <div v-user-lastName="lastName"></div>
  <!-- <h1 v-custDir.blue.big="valDirective"></h1>
  <button @click="this.valDirective = 'Changed Text'">ChangeText</button> -->
</template>
<script>
export default {
  data() {
    return {
      valDirective: "text from data",
      lastName: "Putra",
    };
  },
  directives: {
    "user-lastName": {
      beforeMount(el, binding) {
        el.innerHTML = binding.value;
        el.style.color = "magenta";
        el.style.padding = "20px";
        el.style.fontSize = "50px";
      },
    },
    "user-firstName": {
      //......
    },
    "user-firstName": {
      //......
    },
    "user-firstName": {
      //......
    },
    "user-firstName": {
      //......
    },
  },
};
</script>
