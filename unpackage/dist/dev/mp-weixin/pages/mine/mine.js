"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_badge2 = common_vendor.resolveComponent("uni-badge");
  _easycom_uni_badge2();
}
const _easycom_uni_badge = () => "../../uni_modules/uni-badge/components/uni-badge/uni-badge.js";
if (!Math) {
  (TopLeft + Top + _easycom_uni_badge + Main + Music)();
}
const Main = () => "./component/main/Main.js";
const Music = () => "./component/music/Music.js";
const Top = () => "./component/top/Top.js";
const TopLeft = () => "../topLeft/TopLeft.js";
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    const search = () => {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    };
    const showLeft = common_vendor.ref(false);
    const showPoint = common_vendor.ref(false);
    const handleClick = () => {
      showPoint.value = false;
    };
    const handlClick = () => {
      showLeft.value = false;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: showLeft.value
      }, showLeft.value ? {
        b: common_vendor.o(($event) => handlClick())
      } : {}, {
        c: showPoint.value
      }, showPoint.value ? {
        d: common_vendor.o(($event) => handleClick())
      } : {}, {
        e: common_vendor.o(($event) => showLeft.value = !showLeft.value),
        f: common_vendor.p({
          text: 2,
          absolute: "rightTop",
          offset: [-7, 8],
          size: "small"
        }),
        g: common_vendor.o(($event) => search()),
        h: common_vendor.o(($event) => showPoint.value = !showPoint.value)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7c2ebfa5"], ["__file", "E:/day1前端/前端练习/day35 uni.app/music163/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
