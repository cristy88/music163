import { request } from './request.js'

// 登录
export const loginApi = ({ phone, captcha }) => {
  return request({
    url: '/login/cellphone',
    method: 'GET',
    data: {
      phone,
      captcha
    }
  })
}

// 登录状态
export const loginStatusApi = () => {
  return request({
    url: '/login/status',
  })
}

export const getCodeApi = ({phone}) => {
	return request({
		url: '/captcha/sent',
		data: {
			phone
		}
	})
}

export const isCodeApi = ({phone, captcha}) => {
	return request({
		url: '/captcha/verify',
		data: {
			phone,
			captcha
		}
	})
}


// 轮播图
export const getBannerApi = () => {
	return request({ url: '/banner' })
}

export const getHomeIconApi = () => {
	return request({url: '/homepage/dragon/ball'})
}

// 获得每日推荐歌单
export const getRrecommendApi = () => {
	return request({'url': '/recommend/resource'})
}