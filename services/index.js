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
export const exitLoginApi = () => {
	return request({
		url: '/logout'
	})
}


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

// 获得所有榜单
export const allToplistApi = () => {
	return request({url: '/toplist'})
}

// 获取不同榜单的数据
export const anyToplistApi = (idx) => {
	return request({
		url: '/top/list',
		data: {
			idx
		}
	})
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
export const searchKeywordApi = (keywords, type=1018, offset=0, limit=30 ) => {
	return request({
		url: '/search',
		data: {
			keywords,
			type,
			offset,
			limit
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
export const searchSuggestApi = (keywords) => {
	return request({
		url: '/search/suggest',
		data: {
			keywords
		}
	})
}

// 搜索多重匹配
export const serachMultApi = (keywords) => {
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

// 热评榜
export const hotCommentApi = () => {
	return request({
		url: '/comment/hotwall/list'
	})
}

// 最热主播榜
export const hotUpApi = (limit = 20) => {
	return request({
		url: '/dj/toplist/popular',
		data: {
			limit
		}
	})
}

// 获得视频标签列表
export const getVideoIconApi = () => {
	return request({url: '/video/group/list'})
}


// 音乐是否可用
export const checkMusicApi = (id) => {
	return request({url:'/check/music',data: {id}})
}

// 获取音乐 url 
export const getMusicUrlApi = (id) => {
	return request({url: '/song/url', data: {id}})
}

//获取mv地址url
export const getMvUrlApi = (id) =>{
	return request({url:'/mv/url', data:{id} })
}

//获取mv详情
export const getMvDataApi = (mvid) =>{
	return request({url:'/mv/detail', data:{mvid} })
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

// 关注取消用户   t 1关注
export const careUserApi = (id, t) => {
	return request({
		url: '/follow',
		data: {
			id,
			t
		}
	})
}

// 获得专辑内容
export const getAlbumConApi = (id) => {
	return request({
		url: '/album',
		data: {
			id
		}
	})
}

// 获取专辑动态信息
export const getAlbumDynamic = (id) => {
	return request({
		url: '/album/detail/dynamic',
		data: {
			id
		}
	})
}

// 收藏取消专辑
export const careAlbumSubApi = (id) => {
	return request({
		url: '/album/sub',
		data: {
			id,
			t
		}
	})
}

//mv评论
export const getMvCommentApi = (tyep,id) =>{
	return request({
		url:`/comment/${type}`,
		data:{id} ,
	})
}

//获取相似mv
export const getSimilarMvApi = (mvid) =>{
	return request({
		url:'/simi/mv',
		data:{mvid}
	})
}

//获取视频地址
export const getVideoUrlApi = (id) =>{
	return request({url:'/video/url', data:{id} })
}