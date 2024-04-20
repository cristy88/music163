"use strict";
const common_vendor = require("../../common/vendor.js");
const Tab = () => "../../components/Tab.js";
const _sfc_main = {
  components: {
    Tab
  },
  props: {
    tabs: ["推荐", "摇滚", "轻音乐", "官方", "精品", "华语"]
  },
  setup(props) {
    const activeTab = common_vendor.ref(0);
    return {
      activeTab
    };
  }
};
if (!Array) {
  const _component_Tab = common_vendor.resolveComponent("Tab");
  _component_Tab();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.tabs, (tab, k0, i0) => {
      return {
        a: common_vendor.t(tab.title),
        b: tab.id,
        c: $setup.activeTab === tab.id ? 1 : "",
        d: common_vendor.o(($event) => $setup.activeTab = tab.id, tab.id)
      };
    }),
    b: common_vendor.f($props.tabs, (tab, k0, i0) => {
      return {
        a: tab.id,
        b: "6591cccb-0-" + i0,
        c: common_vendor.p({
          tab,
          activeTab: $setup.activeTab
        })
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/13116/Desktop/music163/pages/songs/songs.vue"]]);
wx.createPage(MiniProgramPage);
