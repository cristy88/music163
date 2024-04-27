<script setup>
import Centre from './child/centre/Centre'
import Service from './child/service/Service'
import Other from './child/other/Other'
import Share from './child/share/Share'
import Quit from './child/quit/Quit'

const $emit = () => {
	// console.log('点击父组件');
}

</script>

<template>
	<view class="box"  @click="$emit('handleClick')">
		<view class="list">
			<view class="list-header">
				<view class="header">
					<view class="ava"></view>
					<view class="name">0616星</view>
					<view class="">></view>
				</view>
				<view class="sweep">
					<img src="./icon/icon_1.png" alt="" />
				</view>
			</view>
			<view class="list-VIP">
				<view class="vip-top">
					<view class="vip-left">
						<view class="tit">黑胶VIP~壹</view>
						<view class="samll">黑胶时光机 | 音乐报告周日更新</view>
					</view>
					<view class="vip-right">会员中心</view>
				</view>
				<view class="vip-foot">
					<view class="samll">您的黑胶VIP即将到期，立享续费优惠</view>
					<view class="samll-img">VIP</view>
				</view>
			</view>
			
			<Centre />
			<Service />
			<Other />
			<Share />
			<Quit />
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.box{
		width: 100%;
		height: 100%;
		position: absolute;
		overflow: hidden; 
		background-color: rgba(0, 0, 0, .6);
		z-index: 10;
		font-size: 25rpx;
		.list{
			width: 80%;
			height: 100%;
			padding: 0 30rpx;
			background: #f0f0f0;
			box-shadow: 5rpx 0 15rpx 5rpx rgba(0, 0, 0, .5);
			display: flex;
			overflow-y: auto;
			flex-direction: column;
			.list-header{
				width: 100%;
				font-size: 36rpx;
				padding: 20rpx 0;
				display: flex;
				justify-content: space-between;
				.header{
					width: 280rpx;
					height: 80rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.ava{
						width: 70rpx;
						height: 70rpx;
						border-radius: 50%;
						background: orange;
					}
				}
				.sweep{
					width: 100rpx;
					height: 100rpx;
					text-align: center;
					line-height: 130rpx;
					img{
						width: 60rpx;
						height: 60rpx;
					}
				}
			}
			.list-VIP{
				padding: 20rpx;
				width: 100%;
				height: 220rpx;
				background: #2E2526;
				border-radius: 30rpx;
				.vip-top{
					width: 100%;
					display: flex;
					justify-content: space-between;
					.vip-left{
						color: #DBB6AB;
						.tit{
							font-size: 30rpx;
							font-weight: 900;
							padding-bottom: 15rpx;
						}
						.samll{
							font-size: 20rpx;
							color: #89756F;
						}
					}
					.vip-right{
						color: #89756F;
						font-size: 26rpx;
						text-align: center;
						border: 1rpx solid #89756F;
						width: 140rpx;
						height: 56rpx;
						border-radius: 30rpx;
						padding: 8rpx;
					}
				}
				.vip-foot{
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 50rpx;
					.samll{
						color: #89756F;
						font-size: 20rpx;
					}
					.samll-img{
						color: #be9c96;
						font-size: 28rpx;
						font-weight: 900;
						background: #500314;
						padding: 5rpx;
						border-radius: 8rpx;
					}
				}
			}
		}
		
	}
</style>