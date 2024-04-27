<script setup>
	
</script>

<template>
	<view class="centre">
		<view class="con">其他</view>
		<view class="list">
			<view class="icon"></view>
			<view class="tit-o">
				<view class="tit">深色模式</view>
				<view class="tit-son">
					<view class="small">切换</view>
					<view class="icon_1">></view>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="icon"></view>
			<view class="tit-o">
					<view class="tit">定时关闭</view>
					<view class="tit-son">
						<view class="icon_1">></view>
					</view>
			</view>
		</view>
		<view class="list">
			<view class="icon"></view>
			<view class="tit-o">
					<view class="tit">个性装扮</view>
					<view class="tit-son">
						<view class="icon_1">></view>
					</view>
			</view>
		</view>
		<view class="list">
			<view class="icon"></view>
			<view class="tit-o">
				<view class="tit">边听边存</view>
				<view class="tit-son">
					<view class="small">未开启</view>
					<view class="icon_1">></view>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="icon"></view>
			<view class="tit-o">
				<view class="tit">在线听歌免流量</view>
				<view class="tit-son">
					<view class="icon_1">></view>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="icon"></view>
			<view class="tit-o">
				<view class="tit">音乐黑名单</view>
				<view class="tit-son">
					<view class="icon_1">></view>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="icon"></view>
			<view class="tit-o">
				<view class="tit">青山年模式</view>
				<view class="tit-son">
					<view class="small">未开启</view>
					<view class="icon_1">></view>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="icon"></view>
			<view class="tit-o">
				<view class="tit">音乐闹钟</view>
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
				width: 250rpx;
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