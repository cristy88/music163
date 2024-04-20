"use strict";
const services_request = require("./request.js");
<<<<<<< HEAD
=======
const loginApi = ({ email, password }) => {
  return services_request.request({
    url: "/login",
    method: "GET",
    data: {
      email,
      password
    }
  });
};
const loginStatusApi = () => {
  return services_request.request({
    url: "/login/status"
  });
};
>>>>>>> test
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
exports.getHomeIconApi = getHomeIconApi;
exports.getRrecommendApi = getRrecommendApi;
<<<<<<< HEAD
=======
exports.loginApi = loginApi;
exports.loginStatusApi = loginStatusApi;
>>>>>>> test
