
<script setup>
	
</script>

<template>
	<view class="yy">
		音乐
	</view>
	<view class="box">
		<view class="top-small">
			<view class="small">
				<view class="recent">近期</view>
				<view class="found">创建</view>
			</view>
			<view class="all"></view>
		</view>
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
			<view class="list-two">
				<view class="listent">
					<view class="img"></view>
					<view class="title">
						<view class="iSongs">听歌排行</view>
						<view class="shou">累计听歌126首</view>
					</view>
				</view>
				<view class="pinned"></view>
			</view>
			<view class="list-three">
				<view class="news">+</view>
				<view class="new">新建歌单</view>
			</view>
		</view>
		<view class="restrict">展示创建/收藏的30条内容，该列表仅自己可见</view>
		<view class="youLike">
			<view class="Like-listO"></view>
			<view class="Like-listT"></view>
			<view class="Like-listS"></view>
		</view>
	</view>
	
</template>

<style lang="scss">
	.box{
		width: 100%;
		.top-small{
			margin-top: 40rpx;
			display: flex;
			justify-content: space-between;
			padding: 0 30rpx;
			color: black;
			.small{
				display: flex;
				justify-content: space-around;
				width: 180rpx;
				color: black;
				font-weight: 900;
				.found{
					color: #999999;
				}
			}
			.all{
				width: 40rpx;
				height: 40rpx;
				background: url(../../../icon/icon_03.png) no-repeat;
				background-size: 50rpx;
			}
		}
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
			.list-two{
				margin: 20rpx 0;
				display: flex;
				justify-content: space-between;
				.listent{
					display: flex;
					.img{
						width: 120rpx;
						height: 120rpx;
						background:  #BA4E47;
						margin: 0 25rpx;
						border-radius: 20rpx;
					}
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
			.list-three{
				margin: 20rpx 0;
				display: flex;
				justify-content: space-between;
				width: 380rpx;
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
					margin-right: 50rpx;
					margin-top: 30rpx;
					color: #666666;
				}
			}
		}
		.restrict{
			font-size: 25rpx;
			text-align: center;
			margin: 50rpx;
			color: #666666;
		}
	}
	
</style>