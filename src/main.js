import Vue from "vue";
import App from "./App.vue";
import "@/assets/scss/reset.scss";
import "@/assets/scss/main.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas, far);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

new Vue({
  render: h => h(App)
}).$mount("#app");
