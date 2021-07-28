import { createApp } from "vue";
import App from "@/App.vue";
import "@/registerServiceWorker";

// @ts-ignore
import PanZoom from "vue-panzoom";

import router from "@/router";
import store from "@/store";
import i18n from "@/i18n";

import "@/scss/index.scss";

createApp(App).use(i18n).use(store).use(PanZoom).use(router).mount("#app");
