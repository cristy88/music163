<script setup>
	import { ref } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	import { searchHotApi, searchSuggest } from '../../services/index'
	import SearchResData from './components/SearchResData.vue'
	
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
	onLoad(options => {
		searCon.value = decodeURIComponent(options.content)
	})
	
	// 点击搜索
	const confirm = async () => {
		showUI.value = 2
		trueData.value =  inputValue.value.length === 0 ? searCon.value : inputValue.value
		inputValue.value = trueData.value
		hisData.value.push(inputValue.value)
		// uni.setStorageSync('hisData', JSON.stringify(hisData))
	}
	const back = () => {
		uni.navigateBack()
	}
	
	const clearInput = async e => {
		console.log(e.detail.value)
		inputValue.value = e.detail.value
		if (e.detail.value.length > 0) {
			showIcon.value = true
			showUI.value = 1
			filterHisData.value = hisData.value.filter(item => item.includes(e.detail.value.length))
			const res = await searchSuggest(e.detail.value)
			console.log('搜索结果', res)
			if (res.code === 200) {
				const orderList = res.result.order
				resTime.value = orderList.map(item => res.result[item]).flat(true)
				console.log(resTime.value)
			}
			// debounce(async function() {
			// 	console.log('实时搜索le')
			// 	const res = await searchSuggest(e.detail.value)
			// 	console.log('搜索结果', res)
			// }, 500)
		} else {
			showIcon.value = false
			showUI.value = 0
		}
	}
	
	// 清楚搜索内容
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
			<view class="" v-for="item in 100" :key="item" v-if="showUI === 0">
				{{item}}
			</view>
			<view class="TimeRes" v-if="showUI === 1">
				<view class="TimeResCon" v-for="item in filterHisData" :key="item"  >
					<view class="">
						<uni-icons type="medal" size="30"></uni-icons>
						<view>{{item.name}}</view>
					</view>
				</view>
				<view class="TimeResCon" v-for="item in resTime" :key="item.id" >
					<view class="">
						<uni-icons type="search" size="30"></uni-icons>
						<view>{{item.name}}</view>
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

	.box-bg {
		background-color: #F5F5F5;
		padding: rpx(5) 0;
	}
	
	.TimeResCon {
		> view {
			height: rpx(45);
			display: flex;
			padding-left: rpx(20);
			align-items: center;
			> view {
				border-bottom: rpx(1) solid #F9FAFE;
				padding-right: rpx(20);
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
		background-color: #f8f8f8;
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
		background-color: #f8f8f8;
	}
</style>
