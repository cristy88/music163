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

//排行榜接口
export const toplistApi=()=>{
	return request({url:'/toplist/detail'})
}

//歌单详情接口
export const playlistDetailApi = (id) => {
	return request({url:'/playlist/detail',data:{id} })
}
