import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import "@/plugins/axios";
import "@/access";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "@/assets/iconfont_aixin/iconfont.css";
import "@/assets/iconfont_pinglun/iconfont.css";
import "@/assets/iconfont_github/iconfont.css";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(ElementPlus).use(store).use(router).mount("#app");
