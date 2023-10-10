import Vue from "vue";
import Desktop from "./screens/DesktopWrap.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Desktop)
}).$mount("#app");