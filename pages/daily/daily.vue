<script setup>
	import { ref } from 'vue'
	// import recommend from './wxcomponents/recommend/recommend.vue'
	import { useDailyStore } from '../../store/daily.js'
	
	const dailyStore = useDailyStore()
	dailyStore.getSongList()
	
	const title = ['每日推荐', '风格推荐']
	const curIndex = ref(0)
	const changeIndex = (index) => {
		curIndex.value = index
	}
	const move = (index) => {
		console.log(event.touches[0].clientX)
		// if(event.touches[0].clientX > 0 && event.touches[0].clientX <= 300){
		// 	curIndex.value = 1
		// } else {
		// 	curIndex.value = 0
		// }
	}
</script>
<template>
	<view class="daily">
		<uni-icons class="back" type="arrow-left" size="40" @click=""></uni-icons>
		<view class="tab">
			<view
				class="tab-item"
				v-for="(item, index) in title"
				key="item"
				:class="{active: curIndex === index}"
				@click="curIndex = index"
				:current="curIndex">
				<text>{{item}}</text>
			</view>
		</view>
		<swiper class="swiper-box" :current="curIndex">
			<swiper-item
				v-for="(item, index) in title"
				:key="item"
				@change="curIndex = index"
				@touchmove="move(index)"
			>
				<view class="swiper-item" :class="'swiper-item' + index">
					<!-- 每日推荐主页面 -->
					<view class="recommend">
						<view class="header">
							
						</view>
						<view class="main">
							<view class="nav">
								<img src="" alt="" />
							</view>
							<view class="songsList">
								<ul>
									<li>1</li>
								</ul>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>
<style lang="scss">
	.daily{
		width: 100vw;
		height: 100vh;
		position: relative;
		.back{
			position: absolute;
			top: 20rpx;
			left: 18rpx;
			z-index: 1;
			color: "#ffffff";
		}
		.tab{
			height: 70rpx;
			width: 428rpx;
			background: rgba(0, 0, 0, .1);
			position: fixed;
			top: 20rpx;
			left: 50%;
			transform: translate(-50%);
			border-radius: 80rpx;
			z-index: 1;
			display: flex;
			line-height: 70rpx;
			padding: 8rpx;
			.tab-item{
				flex: 1;
				text-align: center;
				height: 100%;
				border-radius: 72rpx;
				color: #ffffff;
				&.active{
					background: #ffffff;
					color: black;
				}
			}
		}
	}
	.swiper-box {
		height: 100vh;
	}
	.swiper-item {
		height: 100%;
	}
	.recommend{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.header{
			height: 355rpx;
			background: rgba(0, 0, 0, .3);
		}
		.main{
			flex: 1;
			overflow: hidden;
			background: #ffffff;
			display: flex;
			flex-direction: column;
			.nav{
				height: 80rpx;
				background: pink;
				flex-shrink: 0;
			}
			.songsList{
				flex: 1;
				overflow: auto;
				ul{
					
					li{
						height: 80rpx;
					}
				}
			}
		}
	}

</style>


