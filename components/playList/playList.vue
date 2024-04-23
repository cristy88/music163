<script setup>
	import { defineProps } from 'vue'
	
	const props = defineProps({
		showPlayList: Boolean,
		changePlayList: Function
	})
	
</script>

<template>
	<view class="playlist">
		<uni-icons class="closeempty" type="closeempty" size="30" color="#ffffff" @click="changePlayList"></uni-icons>
		<view class="playlist-content">
			<view class="titleList">
				<view class="now">
					当前播放
				</view>
				<view class="history">
					历史播放
				</view>
			</view>
			<view class="stripe"></view>
			<view class="songsList">
				播放歌曲列表
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.playlist{
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .5);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
		.closeempty{
			position: absolute;
			top: rpx(160);
			left: 50%;
			transform: translate(-50%);
		}
		.playlist-content{
			position: absolute;
			bottom: 0;
			left: 0;
			min-height: rpx(460);
			width: 100%;
			background: #ffffff;
			box-sizing: border-box;
			border-radius: rpx(15) rpx(15) 0  0;
			.titleList{
				padding: rpx(20) rpx(20) rpx(10);
				display: flex;
				font-size: rpx(18);
				border-bottom: rpx(1) solid #eeeeee;
				view{
					padding-right: rpx(30);
					font-weight: 400;
				}
			}
			.stripe{
				width: rpx(72);
				height: rpx(2);
				margin-left: rpx(20);
				background: #999999;
				margin-top: rpx(-2);
			}
		}
	}
</style>