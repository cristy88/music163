
<script setup>
	
	
</script>

<template>
	<view class="list">
		<view class="list-one">
			<view class="ILike">
				<view class="img"></view>
				<view class="title">
					<view class="iSongs">我喜欢的音乐</view>
					<view class="shou">4首~13次</view>
				</view>
			</view>
			<view class="heart">心动模式</view>
		</view>
		<view class="list-three">
			<view class="news">+</view>
			<view class="new">新建歌单</view>
		</view>
	</view>
</template>


<style lang="scss" scoped>
.list{
			width: 100%;
			height: 400rpx;
			.list-one{
				margin-top: 50rpx;
				display: flex;
				justify-content: space-between;
				.ILike{
					display: flex;
					align-items: center;
					.img{
						width: 120rpx;
						height: 120rpx;
						background: #BA4E47;
						margin: 0 25rpx;
						border-radius: 20rpx;
					}
					.title{
						.iSongs{
							color: black;
							margin-bottom: 10rpx;
						}
						.shou{
							color: #666666;
							font-size: 30rpx;
						}
					}
				}
				.heart{
					margin-right: 50rpx;
					color: #666666;
					font-size: 25rpx;
					text-align: center;
					padding: 20rpx;
				}
			}
			.list-three{
				margin: 20rpx 0;
				display: flex;
				justify-content: space-between;
				width: 300rpx;
				.news{
					width: 120rpx;
					height: 120rpx;
					background:  #BA4E47;
					margin: 0 25rpx;
					border-radius: 20rpx;
					color: white;
					font-size: 100rpx;
					text-align: center;
					line-height: 100rpx;
				}
				.new{
					margin-top: 30rpx;
					color: #666666;
				}
			}
		}
</style>