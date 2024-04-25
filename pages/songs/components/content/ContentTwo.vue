<script setup>
</script>

<template>
	<view class="content">
		<view class="title">用户的歌单</view>
		<view class="main">
			<view class="pic">
				<image src="../../../../static/c1.png" mode=""></image>
				<view class="text">分厂好听</view>
			</view>
			<view class="pic">
				<image src="../../../../static/c1.png" mode=""></image>
				<view class="text">分厂好听</view>
			</view>
			<view class="pic">
				<image src="../../../../static/c1.png" mode=""></image>
				<view class="text">分厂好听</view>
			</view>
			<view class="pic">
				<image src="../../../../static/c1.png" mode=""></image>
				<view class="text">分厂好听</view>
			</view>
			<view class="pic">
				<image src="../../../../static/c1.png" mode=""></image>
				<view class="text">分厂好听</view>
			</view>
			<view class="pic">
				<image src="../../../../static/c1.png" mode=""></image>
				<view class="text">分厂好听</view>
			</view>
		</view>
	</view>
</template>


<style lang="scss" scoped>
	.content{
		width: 100%;
		height: 100%;
		display:flex;
		flex-direction: column;
		.title{
			height: rpx(40);
			line-height: rpx(40);
			padding-left: rpx(10);
			background: pink;
		}
		.main{
			flex: 1;
			background: plum;
			display: flex;
			flex-wrap: wrap;
			padding: rpx(20) rpx(20);
			.pic{
				width: calc(33.33%);
				image{
					display: block;
					width: rpx(100);
					height: rpx(100);
					border: rpx(1) solid;
					border-radius: rpx(10);
				}
				.text{
					text-align: center;
					line-height: rpx(30);
				}
			}
		}
	}
</style>