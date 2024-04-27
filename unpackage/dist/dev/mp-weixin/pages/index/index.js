"use strict";
const common_vendor = require("../../common/vendor.js");
const services_index = require("../../services/index.js");
const store_userInfo = require("../../store/userInfo.js");
require("../../services/request.js");
require("../../services/userApi.js");
if (!Math) {
  (HomeSearch + SongSheet)();
}
const SongSheet = () => "./componets/songSheet.js";
const HomeSearch = () => "./componets/HomeSearch.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const user = store_userInfo.useUserInfo();
    console.log("用户信息", user.profile, user.musicSum);
    if (!user.profile || !user.musicSum) {
      user.getUserInfo();
    }
    const icons = common_vendor.ref([]);
    const banners = common_vendor.ref([]);
    const recommends = common_vendor.ref([]);
    const firstCommand = common_vendor.ref([]);
    const getBanner = async () => {
      try {
        const res = await services_index.getBannerApi();
        banners.value = res.banners;
        console.log(res);
        const resIcon = await services_index.getHomeIconApi();
        console.log("获得icon", resIcon);
        if (resIcon.code === 200) {
          icons.value = resIcon.data;
        }
      } catch (e) {
        console.log(e);
      }
    };
    const getSongSheet = async () => {
      const res = await services_index.getRrecommendApi();
      console.log("获得每日推荐歌单", res);
      if (res.code === 200) {
        const shuffled = res.recommend.slice().sort(() => Math.random() - 0.5);
        recommends.value = shuffled.slice(0, 5);
        firstCommand.value = shuffled.slice(5);
      }
    };
    const getSong = async () => {
      const res = await services_index.getCommitSongApi();
      console.log("获得每日推荐歌曲", res);
    };
    getBanner();
    getSongSheet();
    getSong();
    const clickIcon = (name) => {
      console.log("跳转到icon", name, "界面");
      let url = "";
      if (name === "每日推荐") {
        url = "/pages/daily/daily";
      } else if (name === "排行榜") {
        url = "/pages/toplist/toplist";
      }
      console.log(url);
      common_vendor.index.navigateTo({
        url
      });
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
        }),
        c: common_vendor.p({
          title: "推荐歌单",
          firstCommand: firstCommand.value,
          recommends: recommends.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/day1前端/前端练习/day35 uni.app/music163/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
