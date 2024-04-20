"use strict";
const common_vendor = require("../common/vendor.js");
const BaseURL = " http://121.89.213.194:5001";
const request = ({ url, method = "GET", data = {}, header = {} }) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: BaseURL + url,
      method,
      data: {
        cookie: common_vendor.index.getStorageSync("curCookie") || "",
        ...data
      },
      header,
      withCredentials: true,
      // 跨域请求携带 cookie
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};
exports.request = request;
