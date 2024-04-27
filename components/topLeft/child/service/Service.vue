<script setup>
	
</script>

<template>
	<view class="centre">
		<view class="con">音乐服务</view>
		<view class="list">
			<view class="icon">
				<img src="" alt="" />
			</view>
			<view class="tit-o">
				<view class="tit">趣测</view>
				<view class="tit-son">
					<view class="small">点击查看今日运势</view>
					<view class="icon_1">></view>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="icon">
				<img src="" alt="" />
			</view>
			<view class="tit-o">
					<view class="tit">云村有票</view>
					<view class="tit-son">
						<view class="icon_1">></view>
					</view>
			</view>
		</view>
		<view class="list">
			<view class="icon">
				<img src="" alt="" />
			</view>
			<view class="tit-o">
					<view class="tit">商城</view>
					<view class="tit-son">
						<view class="icon_1">></view>
					</view>
			</view>
		</view>
		<view class="list">
			<view class="icon">
				<img src="" alt="" />
			</view>
			<view class="tit-o">
				<view class="tit">Beat专区</view>
				<view class="tit-son">
					<view class="small">投稿Beat瓜分万元推歌金</view>
					<view class="icon_1">></view>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="icon">
				<img src="" alt="" />
			</view>
			<view class="tit-o">
				<view class="tit">音乐收藏家</view>
				<view class="tit-son">
					<view class="small">与音乐人共享收益</view>
					<view class="icon_1">></view>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="icon">
				<img src="" alt="" />
			</view>
			<view class="tit-o">
				<view class="tit">彩铃专区</view>
				<view class="tit-son">
					<view class="small">pick你的音乐彩铃</view>
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
				width: 250rpx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				.small{
					font-size: 23rpx;
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