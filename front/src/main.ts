import Vue from "vue";
import Vuex from "vuex";
import Main from "./pages/Main.vue";
import router from "./routes/main";
//import store from "./store/main";

Vue.use(Vuex);

// main vue の初期化
new Vue({
    router,
    render: h => h(Main)
}).$mount("#app");