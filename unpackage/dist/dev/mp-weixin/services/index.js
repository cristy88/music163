"use strict";
const services_request = require("./request.js");
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
const getBannerApi = () => {
  return services_request.request({ url: "/banner" });
};
const getHomeIconApi = () => {
  return services_request.request({ url: "/homepage/dragon/ball" });
};
const getRrecommendApi = () => {
  return services_request.request({ "url": "/recommend/resource" });
};
const toplistApi = () => {
  return services_request.request({ url: "/toplist/detail" });
};
const playlistDetailApi = (id) => {
  return services_request.request({ url: "/playlist/detail", data: { id } });
};
const playlisthotApi = () => {
  return services_request.request({ url: "/playlist/hot" });
};
exports.getBannerApi = getBannerApi;
exports.getHomeIconApi = getHomeIconApi;
exports.getRrecommendApi = getRrecommendApi;
exports.loginApi = loginApi;
exports.loginStatusApi = loginStatusApi;
exports.playlistDetailApi = playlistDetailApi;
exports.playlisthotApi = playlisthotApi;
exports.toplistApi = toplistApi;
