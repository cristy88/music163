"use strict";
const common_vendor = require("../../common/vendor.js");
const services_index = require("../../services/index.js");
require("../../services/request.js");
const _sfc_main = {
  __name: "songs",
  setup(__props) {
    const hotlist = common_vendor.ref([]);
    const curIndex = common_vendor.ref(0);
    services_index.playlisthotApi().then((res) => {
      hotlist.value = res.tags;
      console.log(hotlist.value);
    });
    const changTab = (index) => {
      curIndex.value = index;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(hotlist.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: curIndex.value === index ? 1 : "",
            c: index,
            d: common_vendor.o(($event) => changTab(index), index)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bdf9cecb"], ["__file", "D:/2-前端工程化/weixinxcx/Uni_music/newMusic/pages/songs/songs.vue"]]);
wx.createPage(MiniProgramPage);
