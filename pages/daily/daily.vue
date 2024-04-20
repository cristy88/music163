<script setup>
	import { ref } from 'vue'
	// #ifdef H5
	import recommend from './wxcomponents/recommend/recommend.vue'
	// #endif
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
		<uni-icons class="back" type="arrow-left" size="40" color="#ffffff"></uni-icons>
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
					<recommend name="每日推荐"></recommend>
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

</style>


