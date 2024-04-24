<script setup>
	import { ref } from 'vue'
	
	const props = defineProps(['dataRes']);
	
</script>

<template>
	<view class="resSong">
		<view class="top">歌单</view>
		<view class="list" v-for="item in dataRes.playLists" :key="item.id">
			<image :src="item.coverImgUrl" mode="widthFix"></image>
			<view class="list-con">
				<view class="name">{{item.name}}</view>
				<view class="list-num">
					<view class="num">共 {{item.trackCount}}首</view>
				</view>
				<view class="songName">包含<view class="song">《{{item.track.name}}》</view></view>
			</view>
		</view>
		<view class="much">{{dataRes.moreText}} ></view>
	</view>
</template>

<style lang="scss" scoped>
	.resSong{
		width: 100%;
		height: 100%;
		padding: 0 30rpx;
		.top{
			height: 80rpx;
			line-height: 80rpx;
			font-weight: 900;
			font-size: 40rpx;
		}
		.list{
			width: 100%;
			height: 135rpx;
			border-bottom: 1px solid #eaecda;
			display: flex;
			align-items: center;
			image{
				width: 100rpx;
				margin: 10rpx;
				border-radius: 22rpx;
			}
			.list-con{
				margin-left: 10rpx;
			}
			.name{
				font-size: 28rpx;
				font-weight: 600;
				white-space: nowrap; 
			}
			.list-num{
				width: 100%;
				font-size: 25rpx;
				color: #B4B4B4;
				display: flex;
				.num-con{
					width: 100%;
				}
			}
			.songName{
				display: flex;
				font-size: 25rpx;
					color: #B4B4B4;
				.song{
					color: #427aa5;
				}
			}
		}
		
		.much{
			color: #959595;
			font-size: 25rpx;
			text-align: center;
			padding: 30rpx 0;
			border-bottom: 1rpx solid #eaecda;
		}
	
	}
</style>