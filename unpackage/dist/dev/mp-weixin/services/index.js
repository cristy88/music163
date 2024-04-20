"use strict";
const services_request = require("./request.js");
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
