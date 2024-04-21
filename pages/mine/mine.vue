<script setup>
import Main from './component/main/Main.vue'
import Music from './component/music/Music.vue'
import Top from './component/top/Top.vue'

// const data = {}	
const search = ()=> {
	uni.navigateTo({
		url:'/pages/search/search'
	})
}

</script>

<template>
	<view class="App">
		<!-- <Top /> -->
		<view class="header">
			<view class="s">
				<!-- <uni-badge class="uni-badge-left-margin" :text="5" absolute="rightTop" :offset="[0, 10]" size="small"> -->
					<view class="icon1"></view>
				<!-- </uni-badge> -->
			</view>
			<view class="status">+添加状态</view>
			<view class="icon">
				<view class="search" @click="search()"></view>
				<view class="point" ></view>
			</view>
		</view>
		<view class="main">
			<Main />
		</view>
		<view class="music">
			<Music />
		</view>
	</view>
</template>


<style lang="scss">
.App{
	width: 100vw;
	height: 100vh;
	background: url(./icon/icon_04.jpg) no-repeat;
	background-size: 750rpx;
	.header{
		background-color: rgba(0, 0, 0, .35);
		height: 70rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.s{
			.icon1{
				padding: 15rpx;	
				background: url(../mine/icon/icon_003.png) no-repeat;
				background-size: 60rpx;
				margin-left: 5rpx;
				margin-top: 5rpx;
				width: 40rpx;
				height: 40rpx;
			}
		}
		.status{
			font-size: 26rpx;
			color: #999999;
		}
		.icon{
			display: flex;
			width: 120rpx;
			padding: 25rpx;
			justify-content: space-between;
			.search{
				background: url(../mine/icon/icon_001.png) no-repeat;
				background-size: 50rpx;
				width: 50rpx;
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
