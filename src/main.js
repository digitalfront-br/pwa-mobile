import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./services/routes";
import store from "./services/store";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "./sass/custom.sass";
UIkit.use(Icons);
Vue.config.productionTip = false;

new Vue({
  router,
  UIkit,
  Icons,
  store,
  render: h => h(App)
}).$mount("#app");
