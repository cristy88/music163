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
const getCommitSongApi = () => {
  return services_request.request({ url: "/recommend/songs" });
};
const toplistApi = () => {
  return services_request.request({ url: "/toplist/detail" });
};
const playlistDetailApi = (id) => {
  return services_request.request({ url: "/playlist/detail", data: { id } });
};
const getDailySongsApi = () => {
  return services_request.request({ url: "/recommend/songs" });
};
const getSongDetailApi = (ids) => {
  return services_request.request({ url: "/song/detail", data: { ids } });
};
const commentApi = (type, id) => {
  return services_request.request({
    url: `/comment/${type}`,
    data: { id }
  });
};
const searchDefaultApi = () => {
  return services_request.request({ "url": "/search/default" });
};
const searchKeywordApi = (keywords, limit = 30, type = 1018) => {
  return services_request.request({
    url: "/search",
    data: {
      keywords,
      limit,
      type
    }
  });
};
<<<<<<< HEAD
const searchHotApi = () => {
  return services_request.request({
    url: "/search/hot/detail"
  });
};
const searchSuggestApi = (keywords) => {
=======
const searchSuggest = (keywords) => {
>>>>>>> liu
  return services_request.request({
    url: "/search/suggest",
    data: {
      keywords
    }
  });
};
<<<<<<< HEAD
const hotUpApi = (limit = 20) => {
  return services_request.request({
    url: "/dj/toplist/popular",
    data: {
      limit
    }
  });
};
=======
>>>>>>> liu
exports.commentApi = commentApi;
exports.getBannerApi = getBannerApi;
exports.getCommitSongApi = getCommitSongApi;
exports.getDailySongsApi = getDailySongsApi;
exports.getHomeIconApi = getHomeIconApi;
exports.getRrecommendApi = getRrecommendApi;
exports.getSongDetailApi = getSongDetailApi;
exports.hotUpApi = hotUpApi;
exports.loginApi = loginApi;
exports.loginStatusApi = loginStatusApi;
exports.playlistDetailApi = playlistDetailApi;
exports.searchDefaultApi = searchDefaultApi;
<<<<<<< HEAD
exports.searchHotApi = searchHotApi;
exports.searchKeywordApi = searchKeywordApi;
exports.searchSuggestApi = searchSuggestApi;
=======
exports.searchKeywordApi = searchKeywordApi;
exports.searchSuggest = searchSuggest;
>>>>>>> liu
exports.toplistApi = toplistApi;
