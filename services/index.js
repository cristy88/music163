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

// 获得推荐歌单
export const getCommandApi = () => {
	return request({url: '/personalized'})
}

// 获得每日推荐歌曲
export const getCommitSongApi = () => {
	return request({url: '/recommend/songs'})
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

//获取每日推荐歌曲
export const getDailySongsApi = () => {
	return request({url:'/recommend/songs'})
}

// 歌曲详情
export const getSongDetailApi = (ids) => {
	return request({url:'/song/detail', data:{ids}})
}
//歌单评论
export const commentApi = (type,id) =>{
	return request({
		url:`/comment/${type}`,
		data:{id}
	})
}
// 获取热门话题
export const getHotTopicApi = () => {
	return request({url: '/hot/topic'})
}

// 搜索默认内容
export const searchDefaultApi = () => {
	return request({'url': '/search/default'})
}

// 搜索接口
export const searchKeywordApi = (keywords, limit=30, type=1018) => {
	return request({
		url: '/search',
		data: {
			keywords,
			limit,
			type
		}
	})
}

// 热搜列表详情
export const searchHotApi = () => {
	return request({
		url: '/search/hot/detail'
	})
}

// 搜索建议
export const searchSuggest = (keywords) => {
	return request({
		url: '/search/suggest',
		data: {
			keywords
		}
	})
}

// 搜索多重匹配
export const serachMult = (keywords) => {
	return request({
		url: '/search/multimatch',
		data: {
			keywords
		}
	})
}

//所有mv接口
export const allmvlistApi = ()=>{
	return request({ url:'/mv/all' })
}