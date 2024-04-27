<script setup>
	
</script>

<template>
	<view class="centre">
		<view class="list">
			<view class="icon">
				<img src="../../icon/icon_11.png" alt="" />
			</view>
			<view class="tit-o">
				<view class="tit">我的消息</view>
				<view class="tit-son">
					<view class="num">0</view>
					<view class="icon_1">></view>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="icon">
				<img src="../../icon/icon_22.png" alt="" />
			</view>
			<view class="tit-o">
					<view class="tit">云贝中心</view>
					<view class="tit-son">
						<view class="small">即使兑换福利</view>
						<view class="icon_1">></view>
					</view>
			</view>
		</view>
		<view class="list">
			<view class="icon">
				<img src="../../icon/icon_33.png" alt="" />
			</view>
			<view class="tit-o">
					<view class="tit">徽章中心</view>
					<view class="icon_1">></view>
			</view>
		</view>
		<view class="list">
			<view class="icon">
				<img src="../../icon/icon_44.png" alt="" />
			</view>
			<view class="tit-o">
					<view class="tit">创作者中心</view>
					<view class="icon_1">></view>
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
		.list{
			height: 80rpx;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #eeeeee;
			.icon{
				margin-right: 20rpx;
				img{
					width: 40rpx;
					height: 40rpx;
				}
			}
			.tit-o{
				width: 100%;
				display: flex;
				justify-content: space-between;
			}
			.tit-son{
				width: 220rpx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				.small{
					font-size: 25rpx;
					margin-right: 20rpx;
					color: #999999;
				}
				.num {
					width: 30rpx;
					height: 30rpx;
					border-radius: 50%;
					font-size: 25rpx;
					margin-right: 20rpx;
					background: #BA4E47;
					color: white;
					text-align: center;
				}
				.icon_1{
					width: 30rpx;
					height: 30rpx;
				}
			}
		}
	}
</style>