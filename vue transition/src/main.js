import { createApp } from "vue";
import App from "./App.vue";

import Header from "./component/header_footer/appHeader.vue";
import Footer from "./component/header_footer/appFooter.vue";

const app = createApp(App);

app.component("app-header", Header);
app.component("app-footer", Footer);
app.mount("#app");
