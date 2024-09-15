import { createApp } from "vue";
import App from "./App.vue";
import Header from "./components/generals/appHeader.vue";
import Footer from "./components/generals/appFooter.vue";

const app = createApp(App);
app.directive("custDir", {
  created(el, parentNode) {
    console.log("created");
    console.log(el, parentNode);
  },
  beforeMount(el, binding) {
    console.log("beforeMount");
    console.log(el.parentNode);

    el.style.color = binding.modifiers.blue ? "blue" : "red";
    el.style.fontSize = binding.modifiers.small ? "15px" : "50px";
    el.innerHTML = binding.value;
  },
  mounted(el) {
    console.log("mounted");
    console.log(el.parentNode);
  },
  beforeUpdate(el, binding) {
    console.log("beforeUpdate");
    el.innerHTML = binding.value;
  },
  updated() {
    console.log("Updated");
    console.log("button telah di klik");
  },
});
app.component("app-header", Header);
app.component("app-footer", Footer);
app.mount("#app");
