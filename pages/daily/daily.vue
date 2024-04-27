<script setup>
	import { ref, watch } from 'vue'
	import { getDailySongsApi } from '../../services'
	import Recommend from '../../components/musicList.vue'
	import PlayCart from '../../components/playCart/playCart.vue';
	// import Selected from '../../components/selected.vue'
	import useMusicStore from '../../store/music';
	
	const musicStore = useMusicStore()
	
	const title = [{name:'每日推荐', id:123456234}, {name:'风格推荐'}]
	// 推荐歌单数据
	const recommendList = ref([])
	// tab高亮
	const curIndex = ref(0)
	const changeIndex = (index) => {
		curIndex.value = index
	}
	// 刷新
	const refresh = ref(true)
	// // 展示选择菜单
	const showSeletMenu = ref(false)
	
	// const recommend = ref(null)
	
	// 获取歌曲列表数据
	const getRrecommend = async () => {
		try {
			const res = await getDailySongsApi()
			console.log(res)
			recommendList.value = res.data.dailySongs
		} catch (e) {
			console.log(e)
		}
	} 
	getRrecommend()
	
	
	// 刷新
	const toRefresh = () => {
		console.log('刷新一次')
		refresh.value = false
		console.log(refresh.value)
	}
	// 滑动改变tab
	// const move = (index) => {
	// 	console.log(event.touches[0].clientX)
		// if(event.touches[0].clientX > 0 && event.touches[0].clientX <= 300){
		// 	curIndex.value = 1
		// } else {
		// 	curIndex.value = 0
		// }
	// }
	// const goBack = () => {
	// 	uni.navigateBack(-1)
	// }
</script>
<template>
	<view class="daily">
		<view class="title-bar">
			<navigator url="/pages/index/index" open-type="switchTab" hover-class="other-navigator-hover">
				<uni-icons class="back" type="arrow-left" size="40" color="#ffffff"></uni-icons>
			</navigator>
			<view class="tab">
				<view
					v-for="(item, index) in title"
					:key="item"
					:class="[' tab-item' ,{active: curIndex === index}]"
					@click="curIndex = index"
					:current="curIndex">
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		<view class="swiper-box" :current="curIndex">
			<!-- 每日推荐歌单 -->
			<view class="songlist">
				<view class="header">
				
				</view>
				<!-- 歌曲列表 -->
				<Recommend v-if="curIndex === 0" :musicList="recommendList"/>
				<Recommend v-if="curIndex === 1"/>
			</view>
		</view>
	</view>
	<!-- <PlayCart /> -->
</template>
<style lang="scss" scoped>

	@import '../../uni.scss';

	.daily{
		width: 100%;
		height: 100%;
		position: relative;
		.title-bar{
			width: 100%;
			padding: rpx(10) rpx(10) 0;
			position: absolute;
			top: 0;
			left: 0;
			display: flex;
			align-items: center;
			.back{
				width: rpx(20);
				height: rpx(20);
				// position: absolute;
				// top: rpx(20);
				// top: 20rpx;
				// left: rpx(16);
				// z-index: 1;
				// color: "#ffffff";
			}
			.tab{
				// flex: 1;
				margin-left: rpx(55);
				height: rpx(36);
				width: rpx(160);
				background: rgba(0, 0, 0, .1);
				border-radius: rpx(40);
				display: flex;
				line-height: rpx(28);
				padding: rpx(4);
				font-size: rpx(14);
				.tab-item{
					flex: 1;
					text-align: center;
					height: 100%;
					border-radius: rpx(46);
					color: #ffffff;
					&.active{
						background: #ffffff;
						color: black;
						font-weight: 600;
					}
				}	
			}
		}
		
	}
	.swiper-box {
		height: 100vh;
		.swiper-item {
			height: 100%;
		}
	}
	.songlist{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.header{
			height: rpx(180);
			padding: 0 rpx(15);
			background: url(../../static/img/dailyback.jpg) no-repeat center;
			// background: rgba(0, 0, 0, .3);
			background-size: 100%;
		}
	}
</style>


