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
const searchKeywordApi = (keywords, type = 1018, offset = 1, limit = 30) => {
  return services_request.request({
    url: "/search",
    data: {
      keywords,
      type,
      offset,
      limit
    }
  });
};
const searchHotApi = () => {
  return services_request.request({
    url: "/search/hot/detail"
  });
};
const searchSuggestApi = (keywords) => {
  return services_request.request({
    url: "/search/suggest",
    data: {
      keywords
    }
  });
};
const allmvlistApi = () => {
  return services_request.request({ url: "/mv/all" });
};
const hotUpApi = (limit = 20) => {
  return services_request.request({
    url: "/dj/toplist/popular",
    data: {
      limit
    }
  });
};
const getMusicUrlApi = (id) => {
  return services_request.request({ url: "/song/url", data: { id } });
};
const getMvUrlApi = (id) => {
  return services_request.request({ url: "/mv/url", data: { id } });
};
const getMvDataApi = (mvid) => {
  return services_request.request({ url: "/mv/detail", data: { mvid } });
};
const allTagsApi = () => {
  return services_request.request({ url: "/playlist/catlist" });
};
const playlisthotApi = () => {
  return services_request.request({ url: "/playlist/hot" });
};
const topPlaylistApi = () => {
  return services_request.request({ url: "/top/playlist" });
};
const getAlbumConApi = (id) => {
  return services_request.request({
    url: "/album",
    data: {
      id
    }
  });
};
const getSimilarMvApi = (mvid) => {
  return services_request.request({
    url: "/simi/mv",
    data: { mvid }
  });
};
const getVideoUrlApi = (id) => {
  return services_request.request({ url: "/video/url", data: { id } });
};
exports.allTagsApi = allTagsApi;
exports.allmvlistApi = allmvlistApi;
exports.commentApi = commentApi;
exports.getAlbumConApi = getAlbumConApi;
exports.getBannerApi = getBannerApi;
exports.getCommitSongApi = getCommitSongApi;
exports.getDailySongsApi = getDailySongsApi;
exports.getHomeIconApi = getHomeIconApi;
exports.getMusicUrlApi = getMusicUrlApi;
exports.getMvDataApi = getMvDataApi;
exports.getMvUrlApi = getMvUrlApi;
exports.getRrecommendApi = getRrecommendApi;
exports.getSimilarMvApi = getSimilarMvApi;
exports.getSongDetailApi = getSongDetailApi;
exports.getVideoUrlApi = getVideoUrlApi;
exports.hotUpApi = hotUpApi;
exports.loginApi = loginApi;
exports.loginStatusApi = loginStatusApi;
exports.playlistDetailApi = playlistDetailApi;
exports.playlisthotApi = playlisthotApi;
exports.searchDefaultApi = searchDefaultApi;
exports.searchHotApi = searchHotApi;
exports.searchKeywordApi = searchKeywordApi;
exports.searchSuggestApi = searchSuggestApi;
exports.topPlaylistApi = topPlaylistApi;
exports.toplistApi = toplistApi;
