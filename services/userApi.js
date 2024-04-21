import { request } from './request.js'

// 获取用户歌单
export const getUserSongSheetApi = (uid) => {
	return request({
		url: '/user/playlist',
		data: {
			uid
		}
	})
}

// 相关歌单推荐
export const isLikeSongSheet = (id) => {
	return request({
		url: '/related/playlist',
		data: {
			id
		}
	})
}

// 获取用户详细信息
export const getUserInfoApi = (uid) => {
	return request({
		url:'/user/detail',
		data: {
			uid
		}
	})
}

// 获取用户信息 , 歌单，收藏，mv, dj 数量
export const getUserSUMApi = () => {
	return request({
		url: '/user/subcount'
	})
}
