<script setup>
	import { ref } from 'vue';
	import { defineProps } from 'vue';

	const props = defineProps({
		share: Boolean , 
		changeShare: Function
	})

	const shareTo = () => {
		console.log('分享')
	}

</script>

<template>
	<view class="share">
		<view class="content" @click="shareTo">
			<view class="title">
				分享至
			</view>
			<view class="app">
				<view class="app-item wxpyq">微信朋友圈</view>
				<view class="app-item hy">微信好友</view>
				<view class="app-item yyy">云音乐</view>
				<view class="app-item sx">私信</view>
				<view class="app-item xhs">小红书</view>
				<view class="app-item fz">复制</view>
				<view class="app-item qq">QQ好友</view>
				<view class="app-item wb">微博</view>
			</view>
		</view>
		<uni-icons class="closeempty" type="closeempty" size="30" color="#ffffff" @click="changeShare"></uni-icons>
	</view>
</template>

<style lang="scss" scoped>
	@import '../../../uni.scss';

	.share{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, .5);
		z-index: 2;
		.content{
			width: rpx(300);
			height: rpx(160);
			background-color: #ffffff;
			border-radius: rpx(20);
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			display: flex;
			flex-direction: column;
			padding: rpx(20);
			.title{
				height: rpx(40);
				line-height: rpx(40);
			}
			.app{
				flex: 1;
				overflow: auto;
				display: flex;
				align-items: center;
				&::-webkit-scrollbar{width: 0; height: 0};
				.app-item {
					width: rpx(60);
					margin-right:rpx(15);
					flex-shrink: 0;
					font-size: rpx(12);
				}
			}
		}
		.closeempty{
			position: absolute;
			bottom: rpx(180);
			left: 50%;
			transform: translate(-50%);
		}
	}


</style>

