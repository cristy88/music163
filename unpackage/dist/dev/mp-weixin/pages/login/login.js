"use strict";
const common_vendor = require("../../common/vendor.js");
const services_index = require("../../services/index.js");
require("../../services/request.js");
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
    const valiFormData = common_vendor.ref({
      phone: "",
      captcha: ""
    });
    const rules = {
      phone: {
        rules: [{
          required: true,
          errorMessage: "姓名不能为空"
        }]
      },
      password: {
        rules: [{
          required: true,
          errorMessage: "验证码"
        }]
      }
    };
    const getCode = async () => {
      const res = await services_index.getCodeApi({ phone: valiFormData.value.phone });
      console.log(res);
    };
    const submit = async () => {
      console.log("登录", valiFormData);
      const code = await services_index.isCodeApi(valiFormData.value);
      console.log(code);
      if (code.data === true) {
        const status = await services_index.loginStatusApi();
        console.log("登陆状态", status);
        const res = await services_index.loginApi(valiFormData.value);
        console.log("是否登录成功", res);
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => valiFormData.value.phone = $event),
        b: common_vendor.p({
          placeholder: "请输入手机号",
          modelValue: valiFormData.value.phone
        }),
        c: common_vendor.p({
          label: "手机号",
          required: true,
          name: "phone"
        }),
        d: common_vendor.o(($event) => valiFormData.value.captcha = $event),
        e: common_vendor.p({
          placeholder: "请输入验证码",
          modelValue: valiFormData.value.captcha
        }),
        f: common_vendor.o(getCode),
        g: common_vendor.p({
          label: "验证码",
          required: true,
          name: "captcha"
        }),
        h: common_vendor.sr("valiForm", "e4e4508d-0"),
        i: common_vendor.p({
          rules,
          modelValue: valiFormData.value
        }),
        j: common_vendor.o(($event) => submit())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"], ["__file", "E:/qianduan/37203_1/Music/music/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
