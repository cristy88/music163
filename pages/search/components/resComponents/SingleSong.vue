<script setup>
	import { ref } from 'vue'
 	
	const props = defineProps(['data']);

	const clickPlayer = (e) => {
		uni.navigateTo({
			url:'/pages/player/player'
		})
	}
	
	const clickAdd = (e) => {
		e.stopPropagation();
	}

	
</script>

<template>
	<view class="single">
		<view class="top">
			<view class="topTit">单曲</view>
			<view class="topAll">
				<view class="allPlayer"></view>
				<view class="all">播放全部</view>
			</view>
		</view>
		<view class="allSongs" v-for="item in data.songs" :key="item.id" @click="clickPlayer()">
			<view class="songs">
				<view class="songName">{{item.name}}</view>
				<view class="songZj"><view class="zj">专辑</view>{{item.al.name}}</view>
				<view class="songSinger"><view class="singer">歌手</view>{{item.ar[0].name}}</view>
			</view>
			<view class="icons">
				<view class="sPlayer" @click="clickAdd()"></view>
				<view class="point"></view>
			</view>
		</view>
		<view class="much">{{data.moreText}} ></view>
		
	</view>
</template>

<style lang="scss" scoped>
	.single{
		width: 100%;
		height: 100%;
		padding: 0 30rpx;
		.top{
			width: 100%;
			display: flex;
			justify-content: space-between;
			padding: 10rpx 0;
			.topTit{
				font-weight: 900;
				font-size: 40rpx;
			}
			.topAll{
				width: 150rpx;
				height: 45rpx;
				border: 1px solid #BA4E47;
				border-radius: 30rpx;
				display: flex;
				align-items: center;
				.allPlayer{
					width: 50rpx;
					height: 50rpx;
					background: url(../../icon/icon_01.png) no-repeat center;
					background-size: 26rpx;
				}
				.all{
					font-size: 22rpx;
					color: #BA4E47;
				}
			}
		}
		.allSongs{
			width: 100%;
			height: 155rpx;
			margin: 5rpx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #eaecda;
			.songs{
				width: 100%;
				.songName{
					color: #427aa5;
					font-size: 30rpx;
					font-weight: 600;
				}
				.songZj{
					color: #B4B4B4;
					display: flex;
					font-size: 24rpx;
					margin: 5rpx 0; 
					white-space: nowrap; 
					.zj{
						border: 1px solid orange;
						font-size: 24rpx;
						color: orange;
						border-radius: 10rpx;
						margin-right: 10rpx;
					}
				}
				.songSinger{
					display: flex;
					font-size: 25rpx;
					color: #959595;
					.singer{
						color: #B4B4B4;
						margin-right: 10rpx;
					}
				}
			}
			.icons{
				width: 150rpx;
				height: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.sPlayer{
					width: 50rpx;
					height: 50rpx;
					background: url(../../icon/icon_02.png) no-repeat center;
					background-size: 40rpx;
				}
				.point{
					width: 50rpx;
					height: 50rpx;
					background: url(../../icon/icon_003.png) no-repeat center;
					background-size: 50rpx;
				}
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
