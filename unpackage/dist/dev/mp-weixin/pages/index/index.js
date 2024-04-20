"use strict";
const common_vendor = require("../../common/vendor.js");
const services_index = require("../../services/index.js");
require("../../services/request.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const icons = common_vendor.ref([]);
    const banners = common_vendor.ref([]);
    const getBanner = async () => {
      try {
        const res = await services_index.getBannerApi();
        banners.value = res.banners;
        console.log(res);
        const resIcon = await services_index.getHomeIconApi();
        if (resIcon.code === 200) {
          icons.value = resIcon.data;
        }
        const command = await services_index.getRrecommendApi();
        console.log("获得每日推荐歌单", command);
      } catch (e) {
        console.log(e);
      }
    };
    getBanner();
    const clickIcon = (name) => {
      console.log("跳转到icon", name, "界面");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(banners.value, (item, k0, i0) => {
          return {
            a: item.imageUrl,
            b: item.targetId
          };
        }),
        b: common_vendor.f(icons.value, (item, k0, i0) => {
          return {
            a: item.iconUrl,
            b: common_vendor.t(item.name),
            c: item.id,
            d: common_vendor.o(($event) => clickIcon(item.name), item.id)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/13116/Desktop/music163/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
