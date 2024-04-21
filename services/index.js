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
export const getRrecommendApi = () => {
	return request({'url': '/user/level'})
}

// 获取用户关注列表
export const getRrecommendApi = () => {
	return request({'url': '/user/follows'})
}

// 获取用户粉丝列表
export const getRrecommendApi = () => {
	return request({'url': '/user/followeds'})
}

// 心动模式/智能播放
export const getRrecommendApi = () => {
	return request({'url': '/playmode/intelligence/list'})
}

// 新建歌单
export const getRrecommendApi = () => {
	return request({'url': '/playlist/create'})
}

// 最近播放歌曲
export const getRrecommendApi = () => {
	return request({'url': '/record/recent/song'})
}

// 已购单曲
export const getRrecommendApi = () => {
	return request({'url': '/song/purchased'})
}

获取云盘数据
export const getRrecommendApi = () => {
	return request({'url': '/user/cloud'})
}