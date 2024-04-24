"use strict";
const common_vendor = require("../../common/vendor.js");
const services_index = require("../../services/index.js");
const store_userInfo = require("../../store/userInfo.js");
require("../../services/request.js");
require("../../services/userApi.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    store_userInfo.useUserInfo();
    const getLoginStatu = async () => {
      const status = await services_index.loginStatusApi();
      if (status.data.account) {
        common_vendor.index.setStorageSync("id", String(status.data.account.id));
        common_vendor.index.switchTab({
          url: "/pages/index/index"
        });
      }
      console.log("登陆状态", status);
    };
    getLoginStatu();
    const valiFormData = common_vendor.ref({
      email: "",
      password: ""
    });
    const valiForm = common_vendor.ref(null);
    const rules = {
      email: {
        rules: [{
          required: true,
          errorMessage: "邮箱不能为空"
        }]
      },
      password: {
        rules: [{
          required: true,
          errorMessage: "密码"
        }]
      }
    };
    const isLogin = async () => {
      console.log("登录", valiFormData);
      const res = await services_index.loginApi(valiFormData.value);
      console.log("是否登录成功", res);
      if (res.code !== 200) {
        common_vendor.index.showToast({
          title: `账号或密码错误`,
          icon: "error"
        });
        return;
      }
      common_vendor.index.showToast({
        title: `登录成功`,
        icon: "success"
      });
      common_vendor.index.setStorageSync("curCookie", res.cookie);
      common_vendor.index.setStorageSync("token", res.token);
      getLoginStatu();
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    };
    const submit = () => {
      valiForm.value.validate().then((res) => {
        console.log("success", res);
        common_vendor.index.showToast({
          title: `校验通过`
        });
        isLogin();
      }).catch((err) => {
        console.log("err", err);
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => valiFormData.value.email = $event),
        b: common_vendor.p({
          placeholder: "请输入邮箱",
          modelValue: valiFormData.value.email
        }),
        c: common_vendor.p({
          label: "邮箱",
          required: true,
          name: "email"
        }),
        d: common_vendor.o(($event) => valiFormData.value.password = $event),
        e: common_vendor.p({
          placeholder: "请输入密码",
          type: "password",
          modelValue: valiFormData.value.password
        }),
        f: common_vendor.p({
          label: "密码",
          required: true,
          name: "password"
        }),
        g: common_vendor.sr(valiForm, "e4e4508d-0", {
          "k": "valiForm"
        }),
        h: common_vendor.p({
          rules,
          modelValue: valiFormData.value
        }),
        i: common_vendor.o(($event) => submit())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"], ["__file", "D:/Desktop/sss/music163/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
