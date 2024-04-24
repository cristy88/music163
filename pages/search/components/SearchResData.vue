<script setup>
	import { ref, watch } from 'vue'
	import { searchKeywordApi } from '../../../services/index'
	import SingleSongVue from './resComponents/SingleSong.vue'
	import SearResUI from './SearResUI.vue'
	import ResSongSheet from './resComponents/ResSongSheet.vue'
	import Album from './resComponents/Album.vue'
	import Artist from './resComponents/Artist.vue'
	import User from './resComponents/User.vue'

	const searchType = ref([
		{ name: '单曲', id: 1 , resData: [] },
		{ name: '歌单', id: 1000 , resData: [] },
		{ name: '视频', id: 1014 , resData: [] },
		{ name: '歌手', id: 1000 , resData: [] },
		{ name: '歌词', id: 1006 , resData: [] },
		{ name: '专辑', id: 10 , resData: [] },
		{ name: '用户', id: 1002 , resData: [] }
	])
	// const searType = ['综合', '单曲', '歌单', '视频', '歌手', '歌词', '专辑', '用户']
	const searType = [
		{ name: '综合', id: 1018},
		{ name: '单曲', id: 1 }	,
		{ name: '歌单', id: 1000 },
		{ name: '视频', id: 1014 },
		{ name: '歌手', id: 1000 },
		{ name: '歌词', id: 1006 },
		{ name: '专辑', id: 10 , },
		{ name: '用户', id: 1002 }
	]
	
	
	const props = defineProps(['trueSearCon', 'showRes'])
	// 当前所在的页数
	console.log(props.showRes)
	const showAnyRes = ref(props.showRes || 0)
	const scrollLeft = ref(0)
	
	const confirmData = ref([])  //综合搜索结果
	
	// 综合搜索结果
	const getSearchRes = async (id) => {
		const res = await searchKeywordApi(props.trueSearCon, id)
		console.log('搜索结果', res)
		confirmData.value= res.result
	}
	
	// 其他搜索结果
	const getSearAnyRes = async (index) => {
		console.log('id', searchType.value[index-1].id)
		const res = await searchKeywordApi(props.trueSearCon, searchType.value[index-1].id)
		searchType.value[index - 1].resData = res.result
		console.log(searchType.value[index-1].name, res)
	}
	
	// 滚动条移动效果
	const swiperChange = (event) => {
		showAnyRes.value = event.detail.current
	}
	
	const swichMenu = (index) => {
		showAnyRes.value = index
	}
	
	watch(showAnyRes, () => {
		let ind = showAnyRes.value
		if (ind > 0 && searchType.value[ind - 1].resData.length === 0 ) {
			getSearAnyRes(ind)
		}
		// console.log(ind)
		// 滑动swiper后，每个选项距离父元素最左侧的距离
		scrollLeft.value = 0
		scrollLeft.value = (ind - 2) * 60
	})
	
	getSearchRes()
	
</script>

<template>
	<view class="searRes">
		<!-- 使用scroll-view实现tab切换功能 -->
		<scroll-view class="top-menu-view" scroll-x="true" scroll-with-animation :scroll-left="scrollLeft">
			<view class="menu-topic-view" v-for="(item,index) in searType" :id="item.id" :key="item.id"
				@click="swichMenu(index)">
				<view :class="showAnyRes==index ? 'menu-topic-act' : 'menu-topic'">
					<text class="menu-topic-text">{{item.name}}</text>
					<view class="menu-topic-bottom">
						<view class="menu-topic-bottom-color"></view>
					</view>
				</view>
			</view>
		</scroll-view>
		<swiper
			class="swiper-box-list"
			:current="showAnyRes"
			@change="event => swiperChange(event)"
		>
			<swiper-item class="swiper-topic-list">
				<SingleSongVue :data="confirmData?.song" />
				<ResSongSheet :data="confirmData?.playList" />
				<Artist :data="confirmData?.artist" />
				<Album :data="confirmData?.album" />
				<User :data="confirmData?.user" />
			</swiper-item>
			<swiper-item class="swiper-topic-list" v-for="item in searchType" :key="item.id">
				<view class="swiper-item">
					<SearResUI :data="item.resData" />
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<style lang="scss" scoped>
	.searRes {
		width: 100%;
		height: 100%;
		display:flex;
		flex-direction: column;
		overflow: hidden;
	}
	
	.scroll-view::-webkit-scrollbar{height:0px};
	
	.top-menu-view {
		display: flex;
		white-space: nowrap;
		width: 100%;
		background-color: white;
		height: 86rpx;
		line-height: 86rpx;
		.menu-topic-view {
			display: inline-block;
			white-space: nowrap;
			height: rpx(42);
			position: relative;
			.menu-topic-text {
				font-size: 30rpx;
				color: #303133;
				padding: 10rpx 40rpx;
				font-weight: 500;
			}
			.menu-topic-bottom {
				position: absolute;
				bottom: 0;
				width: 100%;
				.menu-topic-bottom-color {
					width: 40rpx;
					height: 4rpx;
				}
			}
			.menu-topic-act .menu-topic-bottom {
				display: flex;
				justify-content: center;
			}
			.menu-topic-act .menu-topic-text {
				color: #ff0000;
			}
			.menu-topic-act .menu-topic-bottom-color {
				background: #ff0000;
			}
		}
	}
	
	.swiper-box-list {
		width: 100%;
		flex: 1;
		overflow: hidden;
		flex: 1;
		background-color: #FFFFFF;
		.swiper-topic-list {
			width: 100%;
			height: 100%;
			padding: rpx(16) 40rpx;
		}
		.swiper-item {
			width: 100%;
			height: 100%;
			overflow-y: auto;
		}
	}
	
	.uni-scroll-view::-webkit-scrollbar{display:none};
</style>