<script setup>
	
</script>

<template>
	<view class="centre">
		<view class="list">
			<view class="icon"></view>
			<view class="tit-o">
				<view class="tit">我的订单</view>
				<view class="tit-son">
					<view class="icon_1">></view>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="icon"></view>
			<view class="tit-o">
					<view class="tit">优惠券</view>
					<view class="tit-son">
						<view class="icon_1">></view>
					</view>
			</view>
		</view>
		<view class="list">
			<view class="icon"></view>
			<view class="tit-o">
					<view class="tit">我的客服</view>
					<view class="tit-son">
						<view class="icon_1">></view>
					</view>
			</view>
		</view>
		<view class="list">
			<view class="icon"></view>
			<view class="tit-o">
				<view class="tit">分享网易云音乐</view>
				<view class="tit-son">
					<view class="icon_1">></view>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="icon"></view>
			<view class="tit-o">
				<view class="tit">个人信息收集与使用清单</view>
				<view class="tit-son">
					<view class="icon_1">></view>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="icon"></view>
			<view class="tit-o">
				<view class="tit">个人信息第三方共享清单</view>
				<view class="tit-son">
					<view class="icon_1">></view>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="icon"></view>
			<view class="tit-o">
				<view class="tit">个人信息与隐私保护</view>
				<view class="tit-son">
					<view class="icon_1">></view>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="icon"></view>
			<view class="tit-o">
				<view class="tit">关于</view>
				<view class="tit-son">
					<view class="icon_1">></view>
				</view>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.centre{
		background: white;
		padding: 20rpx;
		width: 100%;
		border-radius: 15rpx;
		margin: 20rpx 0;
		.con{
			height: 80rpx;
			line-height: 80rpx;
		}
		.list{
			height: 80rpx;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #eeeeee;
			.icon{
				width: 30rpx;
				height: 30rpx;
				background: #BA4E47;
				margin-right: 20rpx;
			}
			.tit-o{
				width: 100%;
				display: flex;
				justify-content: space-between;
			}
			.tit-son{
				width: 100rpx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				.small{
					font-size: 25rpx;
					margin-right: 20rpx;
					color: #999999;
				}
				.icon_1{
					width: 30rpx;
					height: 30rpx;
				}
			}
		}
	}
</style>