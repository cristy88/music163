"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_recommend = common_vendor.resolveComponent("recommend");
  (_easycom_uni_icons2 + _component_recommend)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "daily",
  setup(__props) {
    const title = ["每日推荐", "风格推荐"];
    const curIndex = common_vendor.ref(0);
    const move = (index) => {
      console.log(event.touches[0].clientX);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "arrow-left",
          size: "40",
          color: "#ffffff"
        }),
        b: common_vendor.f(title, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: curIndex.value === index ? 1 : "",
            c: common_vendor.o(($event) => curIndex.value = index)
          };
        }),
        c: curIndex.value,
        d: common_vendor.f(title, (item, index, i0) => {
          return {
            a: "64e581c1-1-" + i0,
            b: common_vendor.n("swiper-item" + index),
            c: item,
            d: common_vendor.o(($event) => curIndex.value = index, item),
            e: common_vendor.o(($event) => move(), item)
          };
        }),
        e: common_vendor.p({
          name: "每日推荐"
        }),
        f: curIndex.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/13116/Desktop/music163/pages/daily/daily.vue"]]);
wx.createPage(MiniProgramPage);
