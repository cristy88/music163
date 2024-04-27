<script setup>
import { ref } from 'vue'
import { useUserInfo } from '@/store/userInfo'
// import { getUserSongSheetApi } from '@/services/userApi'

const userInfo = useUserInfo()
// const playList = res([])

const changeAddress = () => {
	uni.navigateTo({
		url: '/pages/address/address'
	})
}
	
</script>

<template>
	<view class="main">
		<view class="ava"></view>
		<view class="name" ></view>
		<view class="address" @click="changeAddress()">
			<view class="badge">0枚徽章</view>
			<view class="age"></view>
			<view class="province">~  ~</view>
			<view class="cun">村龄年</view>
		</view>
		<view class="detail">
			<view class="GZ">{{userInfo.profile?.followeds}}</view>关注
			<view class="FS">粉丝</view>
			<view class="DJ">等级</view>
			<view class="TG">听歌</view>
		</view>
		<view class="store">
			<view class="zj">最近</view>
			<view class="zj">本地</view>
			<view class="zj">云盘</view> 
			<view class="zj">已购</view>
			<view class="zj">更多</view>
		</view>
		<view class="VIP">
			<view class="VIP-tit">
				<view class="VIP-shopping"></view>
				<view class="tit">黑胶VIP畅享超21项权益，点击尊享</view>
			</view>
			<view class="shopping">></view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.main{
		height: 535rpx;
		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: rgba(0, 0, 0, .2);
		.ava{
			width: 150rpx;
			height: 150rpx;
			background: orange;
			// background: url(../../icon/icon_05.jpg) no-repeat;
			// background-size:150rpx;
			border-radius: 50%;
			margin-top: 20rpx;
		}
		.name{
			padding: 10rpx;
			font-size: 40rpx;
			font-weight: 900;
		}
		.address{
			display: flex;
			font-size: 22rpx;
			color: #eeeeee;
			.badge{
				margin-right: 20rpx;
			}
		}
		.detail{
			display: flex;
			font-size: 22rpx;
			color: #eeeeee;
			padding: 10rpx;
			.GZ{
				margin-left: 20rpx;
			}
			.FS{
				margin-left: 20rpx;
			}
			.DJ{
				margin-left: 20rpx;
			}
			.TG{
				margin-left: 20rpx;
			}
		}
		.store{
			width: 100%;
			display: flex;
			justify-content: space-around;
			color: #eeeeee;
			padding: 30rpx;
			font-size: 22rpx;
			.zj{
				background: rgba(0, 0, 0, .5);
				width: 150rpx;
				height: 80rpx;
				text-align: center;
				line-height: 80rpx;
				border-radius: 15rpx;
				margin: 0 20rpx;
			}
		}
		.VIP{
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 22rpx;
			height: 70rpx;
			background:  rgba(0, 0, 0, .5);
			border-radius: 25rpx 25rpx 0 0;
			.VIP-tit{
				width: 500rpx;
				display: flex;
				justify-content: space-around;
				.VIP-shopping{
					width: 70rpx;
					height: 30rpx;
					border-radius: 50rpx;
					background: #ffffff;
				}
			}
			.shopping{
				margin-right: 30rpx;
			}
		}
	}
	
</style>