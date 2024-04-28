<script setup>
	import { ref, watch } from 'vue'
	import { onShow } from '@dcloudio/uni-app'
	import { getBannerApi, getHomeIconApi, getRrecommendApi, getCommandApi, getCommitSongApi, loginStatusApi, loginTouristApi } from '../../services/index.js'
	import { useUserInfo } from '../../store/userInfo.js'
	import SongSheet from './componets/songSheet.vue'
	import HomeSearch from './componets/HomeSearch.vue'
	const icons = ref([])
	// 获取轮播图
	const banners = ref([])
	const recommends = ref([])   //展示歌单
	const firstCommand = ref([])  //轮播歌单
	const user = useUserInfo()
	
	const toLogintourist = async () => {
		const res = await loginTouristApi()
		if (res.code === 200) {
			uni.setStorageSync('curCookie', res.cookie)
			user.setId(res.userId)
		} else {
			uni.showToast({
				icon:'none',
				title: '出现错误'
			})
		}
	}
	// 查看登录状态
	const getLoginStatus = async () => {
		const status = await loginStatusApi()
		if (status.data && status.data.account) {
			uni.setStorageSync('id', String(status.data.account.id))
			user.setId(status.data.account.id)
		} else {   //没有登录使用游客身份登录
			toLogintourist()
		}
	}
	
	onShow(() => {
		console.log('进入首页')
		getLoginStatus()
	})
	
	const getBanner = async () => {
		try {
			const res = await getBannerApi()
			banners.value = res.banners
			console.log(res)
		} catch (e) {
			console.log(e)
		}
	}
	
	const getIcons = async () => {
		try {
			const resIcon = await getHomeIconApi()
			console.log('获得icon', resIcon)
			if (resIcon.code === 200) {
				icons.value = resIcon.data
			}
		} catch (e) {}
	}
	
	// 获得每日推荐歌单
	const getSongSheet = async () => {
		const res = await getRrecommendApi()
		console.log('获得每日推荐歌单', res)
		if (res.code === 200) {
			const shuffled = res.recommend.slice().sort(() => Math.random() - 0.5) // 打乱数组顺序
			recommends.value = shuffled.slice(0, 5) // 截取前count个元素
			firstCommand.value = shuffled.slice(5)
		}
	}
	
	const isLoginCanGet = () => {
		getIcons()
		getSongSheet()
	}
	
	getBanner()
	// 当用户登录游客身份之后重新调用接口
	watch(() => user.userId, () => {
		console.log('存储的用户信息', user.userId)
		isLoginCanGet()
	})
	isLoginCanGet()
	const clickIcon = (name) => {
		console.log('跳转到icon', name, '界面')
		let url = ''
		if (name === '每日推荐') {
			url = '/pages/daily/daily'
		} else if (name === '排行榜') {
			url = '/pages/toplist/toplist'
		}
		console.log(url)
		uni.navigateTo({
			url
		})
	}
	
</script>

<template>
	<view class="home">
		<HomeSearch />
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="true" indicator-active-color="#ffffff" :autoplay="true" :circular="true">
				<swiper-item v-for="item in banners" :key="item.targetId">
					<image :src="item.imageUrl" mode="" />
				</swiper-item>
			</swiper>
		</view>
		<view class="Icons">
			<view class="Icon" v-for="item in icons" :key="item.id" @click="clickIcon(item.name)">
				<image :src="item.iconUrl" mode=""  />
				<view class="title">{{item.name}}</view>
			</view>
		</view>
		<SongSheet title="推荐歌单"  :firstCommand="firstCommand" :recommends="recommends" :show="true" />
	</view>
</template>

<style lang="scss" scoped>
	.home {
		width: 100%;
		overflow: hidden;
		overflow-y: auto;
		height: 100%;
	}
	
	.uni-margin-wrap {
		width: rpx(342);
		height: rpx(150);
		border-radius: rpx(10);
		overflow: hidden;
		margin: 0 auto;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.Icons {
		width: rpx(342);
		height: rpx(90);
		margin: 0 auto;
		display: flex;
		align-items: center;
		overflow-x: auto;
		border-bottom: 1px solid #999;
		&::-webkit-scrollbar{height:0px;}
		.Icon {
			width: calc(rpx(342) / 5);
			height: rpx(60);
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			flex-shrink: 0;
			color: #73737e;
			font-size: rpx(14);
			text-align: center;
			image {
				width: 80%;
				background: #FB3454;
				border-radius: 50%;
			}
			uni-image {
				width: 80%;
			}
		}
	}
	
</style>
