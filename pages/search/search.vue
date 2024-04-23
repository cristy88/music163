<script setup>
	import { ref } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	import { searchHotApi, searchSuggestApi } from '../../services/index'
	import SearchResData from './components/SearchResData.vue'
	import OriginUI from './components/originUI.vue'
	
	const data = {}
	
	const searCon = ref('')  //搜索初始默认内容
	const inputValue = ref('')  //搜索框里的内容
	const showIcon = ref(false)  //是否展示搜索框上的叉号 
	const showUI = ref(0)  //控制展示哪一个页面
	// const his = JSON.parse(uni.getStorageSync('hisData')) || []
	const hisData = ref([]) //记录搜索记录
	const filterHisData = ref([]) //过滤过的搜索记录
	const trueData = ref([])  //真实搜索数据
	const resTime = ref([])  //实时搜索结果
	const resTimeNull = ref(false)  //实时搜索是否有结果
	const timeOut = ref(null)   //实现防抖效果的延时器
	onLoad(options => {
		searCon.value = decodeURIComponent(options.content)
	})
	
	// 点击搜索
	const confirm = async () => {
		showUI.value = 2
		showIcon.value = true
		trueData.value =  inputValue.value.length === 0 ? searCon.value : inputValue.value
		inputValue.value = trueData.value
		if (!hisData.value.find(v => v === inputValue.value)) {
			hisData.value.push(inputValue.value)
		}
		// uni.setStorageSync('hisData', JSON.stringify(hisData))
	}
	const back = () => {
		uni.navigateBack()
	}
	// 实时搜索
	const clearInput = e => {
		console.log(e.detail.value)
		inputValue.value = e.detail.value
		if (e.detail.value.length > 0) {
			showIcon.value = true
			showUI.value = 1
			clearTimeout(timeOut.value)
			timeOut.value = setTimeout(async () => {
				filterHisData.value = hisData.value.filter(item => item.includes(e.detail.value.length))
				const res = await searchSuggestApi(e.detail.value)
				console.log('搜索结果', res)
				if (res.code === 200) {
					const orderList = res.result.order
					if (!orderList) {
						resTime.value = []
					} else {
						resTime.value = orderList.map(item => res.result[item]).flat(true)
						resTimeNull.value = false
					}
					if (resTime.value.length===0 && filterHisData.value.length===0) {
						resTimeNull.value = true
					}
					if (filterHisData.value.length>0) {
						resTimeNull.value = true
					}
					// console.log(resTime.value, filterHisData.value)
				}
			}, 500)
		} else {
			showIcon.value = false
			showUI.value = 0
		}
	}
	
	// 清除搜索内容
	const clearIcon = () => {
		inputValue.value = ''
		showIcon.value = false
		showUI.value = 0
	}
	const goSongPerson = () => {
		console.log('跳去歌手页面')
	}
	
	const goMusicType = () => {
		console.log('跳去曲风页面')
	}
	
	const goMusic = () => {
		console.log('跳去专区')
	}
	
	const clickTab = (item) => {
		inputValue.value = item
		confirm()
	}
	
	const clearhisData = () => {
		hisData.value = []
	}
	
</script>

<template>
	<view class="xxSearch">
		<view class="box-bg">
			<uni-nav-bar :border="false" backgroundColor="#F8F9FD" left-icon="arrow-left"  @clickLeft="back" right-text="搜索" @clickRight="confirm">
				<view class="input-view">
					<uni-icons class="input-uni-icon" type="search" size="18" color="#999" />
					<input confirm-type="search" focus class="nav-bar-input" type="text" :placeholder="searCon"
						@confirm="confirm" :value="inputValue" @input="clearInput" />
						<uni-icons class="uni-icon" v-if="showIcon" @click="clearIcon" type="close" size="14"></uni-icons>
				</view>
			</uni-nav-bar>
		</view>
		<view class="searchBottom" v-if="showUI===0">
			<view class="" @click="goSongPerson()">
				<image src="../../static/MusicSearch/songPerson.png"  />
				<text>歌手</text>
			</view>
			<view class="" @click="goMusicType()">
				<image src="../../static/MusicSearch/musicqufeng.png"  />
				<text>曲风</text>
			</view>
			<view class="" @click="goMusic()">
				<image src="../../static/MusicSearch/music.png"  />
				<text>专区</text>
			</view>
			<view class="">
				<image src="../../static/MusicSearch/hustong.png"  />
				<text>识曲</text>
			</view>
		</view>
		<view class="search">
			<OriginUI v-if="showUI === 0" :hisData="hisData"  @clickTab="clickTab" @clearhisData="clearhisData" />
			<view class="TimeRes" v-if="showUI === 1">
				<view class="Empty" v-if="resTimeNull">
					正在搜索 “{{inputValue}}”
				</view>
				<view class="TimeResCon" v-for="item in filterHisData" :key="item" @click="clickTab(item.name)" >
					<view>
						<uni-icons type="medal" size="30"></uni-icons>
						<view class="TimeRR">{{item.name}}</view>
					</view>
				</view>
				<view class="TimeResCon" v-for="item in resTime" :key="item.id" @click="clickTab(item.name)" >
					<view class="">
						<uni-icons type="search" size="30"></uni-icons>
						<view class="TimeRR">{{item.name}}</view>
					</view>
				</view>
			</view>
			<SearchResData :trueSearCon="trueData" v-if="showUI === 2"/>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	$nav-height: rpx(30);
	
	.xxSearch {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: #F8F9FD;
	}
	
	.search {
		flex: 1;
		width: 100%;
		overflow: hidden;
		overflow-y: auto;
	}

	.searchBottom {
		display: flex;
		height: rpx(36);
		view {
			width: 25%;
			display: flex;
			justify-content: center;
			align-items: center;
			border-right: 1px solid #E5E7EC;
			&:last-of-type {
				border-right: none;
			}
			image {
				width: rpx(18);
				height: rpx(18);
			}
		}
	}

	.Empty {
		color: skyblue;
		height: rpx(42);
		line-height: rpx(42);
		padding-left: rpx(20);
	}
	.box-bg {
		background-color: #F8F9FD;
		padding: rpx(5) 0;
	}
	
	.TimeResCon {
		> view {
			height: rpx(45);
			display: flex;
			padding-left: rpx(20);
			align-items: center;
			line-height: rpx(45);
			.TimeRR {
				flex: 1;
				margin-left: rpx(20);
				border-bottom: rpx(1) solid #F1F2F6;
				padding-right: rpx(30);
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}

	.city {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		// width: 160rpx;
		margin-left: 4px;
	}

	.input-view {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		// width: 500rpx;
		flex: 1;
		background-color: #ffffff;
		height: $nav-height;
		border-radius: 15px;
		padding: 0 15px;
		flex-wrap: nowrap;
		margin: 7px 0;
		line-height: $nav-height;
	}

	.input-uni-icon {
		line-height: $nav-height;
	}

	.nav-bar-input {
		height: $nav-height;
		line-height: $nav-height;
		/* #ifdef APP-PLUS-NVUE */
		width: 370rpx;
		/* #endif */
		padding: 0 5px;
		font-size: 12px;
		background-color: white;
	}
</style>
