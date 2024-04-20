"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
<<<<<<< HEAD
  "./pages/index/index.js";
  "./pages/podcast/podcast.js";
  "./pages/mine/mine.js";
  "./pages/attention/attention.js";
  "./pages/community/community.js";
  "./pages/login/login.js";
=======
  "./pages/songs/songs.js";
  "./pages/index/index.js";
>>>>>>> wbh
}
const _sfc_main = {
  onLaunch: function() {
    console.warn("当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
<<<<<<< HEAD
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/qianduan/37203_1/Music/music/App.vue"]]);
=======
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/2-前端工程化/weixinxcx/Uni_music/newMusic/App.vue"]]);
>>>>>>> wbh
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
