"use strict";
const services_request = require("./request.js");
const loginApi = ({ phone, captcha }) => {
  return services_request.request({
    url: "/login/cellphone",
    method: "GET",
    data: {
      phone,
      captcha
    }
  });
};
const loginStatusApi = () => {
  return services_request.request({
    url: "/login/status"
  });
};
const getCodeApi = ({ phone }) => {
  return services_request.request({
    url: "/captcha/sent",
    data: {
      phone
    }
  });
};
const isCodeApi = ({ phone, captcha }) => {
  return services_request.request({
    url: "/captcha/verify",
    data: {
      phone,
      captcha
    }
  });
};
const getBannerApi = () => {
  return services_request.request({ url: "/banner" });
};
const getHomeIconApi = () => {
  return services_request.request({ url: "/homepage/dragon/ball" });
};
const getRrecommendApi = () => {
  return services_request.request({ "url": "/recommend/resource" });
};
exports.getBannerApi = getBannerApi;
exports.getCodeApi = getCodeApi;
exports.getHomeIconApi = getHomeIconApi;
exports.getRrecommendApi = getRrecommendApi;
exports.isCodeApi = isCodeApi;
exports.loginApi = loginApi;
exports.loginStatusApi = loginStatusApi;
