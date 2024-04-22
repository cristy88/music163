"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (Main + Music)();
}
const Main = () => "./component/main/Main.js";
const Music = () => "./component/music/Music.js";
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    const search = () => {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => search())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/13116/Desktop/music163/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
