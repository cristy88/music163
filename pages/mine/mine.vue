<script setup>
	import { ref , defineEmits } from 'vue'
	import Main from './component/main/Main.vue'
	import Music from './component/music/Music.vue'
	import Top from './component/top/Top.vue'
	import TopLeft from '../topLeft/TopLeft.vue'

		
	const search = ()=> {
		uni.navigateTo({
			url:'/pages/search/search'
		})
	}


	const showLeft = ref(false)
	const showPoint = ref(false)
	const handleClick = () => {
		showPoint.value = false;
	}
	const handlClick = () => {
		showLeft.value = false;
	}

</script>

<template>
	<view class="App">
		<TopLeft v-if="showLeft" @click="handlClick()"/>
		<Top v-if="showPoint" @click="handleClick()"/>
		<view class="header">
			<view class="s">
				<uni-badge class="uni-badge-left-margin" :text="1" absolute="rightTop"
				:offset="[-7, 8]" size="small">
					<view class="icon1" @click="showLeft = !showLeft"></view>
				</uni-badge>
			</view>
			<view class="status">+添加状态</view>
			<view class="icon">
				<view class="search" @click="search()"></view>
				<view class="point" @click="showPoint = !showPoint"></view>
			</view>
		</view>
		<view class="con">
			<Main />
			<Music />
		</view>
		
	</view>
</template>


<style lang="scss" scoped>
.App{
	width: 100vw;
	height: 100%;
	background: url(./icon/004.webp) no-repeat;
	background-size: 750rpx;
	display: flex;
	flex-direction: column;
	.con{
		overflow: auto;
		flex: 1;
	}
	.header{
		background-color: rgba(0, 0, 0, .35);
		height: 70rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.s{
			.uni-badge-left-margin{
				z-index: 2;
			}
			.icon1{
				padding: 15rpx;	
				background: url(../mine/icon/icon_003.png) no-repeat;
				background-size: 50rpx;
				margin-left: 5rpx;
				margin-top: 5rpx;
				width: 40rpx;
				height: 40rpx;
			}
		}
		.status{
			font-size: 26rpx;
			color: #eeeeee;
		}
		.icon{
			display: flex;
			width: 150rpx;
			justify-content: space-around;
			.search{
				background: url(../mine/icon/icon_001.png) no-repeat center;
				background-size: 45rpx;
				width: 80rpx;
				height: 50rpx;
			}
			.point{
				background: url(../mine/icon/icon_002.png) no-repeat center;
				background-size: 80rpx;
				margin-top: 0;
				width: 50rpx;
				height: 50rpx;
			}
		}	
	}
	
}
</style>
