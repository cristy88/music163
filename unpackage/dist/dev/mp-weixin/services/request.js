"use strict";
const common_vendor = require("../common/vendor.js");
const BaseURL = "https://zyxcl.xyz/music/api";
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
