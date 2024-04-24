<script setup>
	import { ref } from 'vue'
	
	const props = defineProps(['dataUser']);
	const users = ref(props.dataUser.users || props.dataUser.userprofiles)
</script>

<template>
	<view class="user">
		<view class="top">用户</view>
		<view class="list" v-for="item in users" :key="item.id">
				<view class="list-user">
					<image :src="item.avatarUrl" mode="widthFix"></image>
					<view class="name">{{item.nickname}}</view>
				</view>
				<view class="GZ">+ 关注</view>
		</view>
		<view class="much">{{dataUser.moreText}} ></view>
	</view>
</template>

<style lang="scss" scoped>
	.user{
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
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 20rpx;
			.list-user{
				width: 350rpx;
				display: flex;
				align-items: center;
				image{
					width: 100rpx;
					border-radius: 50%;
					margin-right: 20rpx;
				}
			}
			.GZ{
				width: 130rpx;
				height: 40rpx;
				border: 1px solid #BA4E47;
				border-radius: 40rpx;
				text-align: center;
				color: #BA4E47;
				font-size: 25rpx;
				margin-right: 10rpx;
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