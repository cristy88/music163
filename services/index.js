import { request } from './request.js'

// 登录
export const loginApi = ({ email, password }) => {
  return request({
    url: '/login',
    method: 'GET',
    data: {
      email,
      password
    }
  })
}

// 登录状态
export const loginStatusApi = () => {
  return request({
    url: '/login/status',
  })
}

// 退出登录状态

// 轮播图
export const getBannerApi = () => {
	return request({ url: '/banner' })
}

// 获取首页图标
export const getHomeIconApi = () => {
	return request({url: '/homepage/dragon/ball'})
}

// 获得每日推荐歌单
export const getRrecommendApi = () => {
	return request({'url': '/recommend/resource'})
}

// 获取用户等级信息 
export const getUserLevelrecomApi = () => {
	return request({'url': '/user/level'})
}

// 获取用户关注列表
export const getUserFollowsApi = () => {
	return request({'url': '/user/follows'})
}

// 获取用户粉丝列表
export const getUserFollowedsApi = () => {
	return request({'url': '/user/followeds'})
}

// 心动模式/智能播放
export const getPlaymodeIntelligenceLsitApi = () => {
	return request({'url': '/playmode/intelligence/list'})
}

// 新建歌单
export const getPlaylistCreateApi = () => {
	return request({'url': '/playlist/create'})
}

// 最近播放歌曲
export const getRecordRecentSongApi = () => {
	return request({'url': '/record/recent/song'})
}

// 已购单曲
export const getSongPurchasedApi = () => {
	return request({'url': '/song/purchased'})
}

// 获取云盘数据
export const getUserCloudApi = () => {
	return request({'url': '/user/cloud'})
}
//排行榜接口
export const toplistApi=()=>{
	return request({url:'/toplist/detail'})
}

//歌单详情接口
export const playlistDetailApi = (id) => {
	return request({url:'/playlist/detail',data:{id} })
}

//获取全部歌单
export const allTagsApi = () => {
	return request({url:'/playlist/catlist'})
}

//获取热门标签
export const playlisthotApi = () => {
	return request({url:'/playlist/hot'})
}

//获取推荐歌单
export const topPlaylistApi = () => {
	return request({url:'/top/playlist'})
}



