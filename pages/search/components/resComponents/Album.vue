<script setup>
	import { ref } from 'vue'
	
	const props = defineProps(['dataAlbum']);
	
	
</script>

<template>
	<view class="album">
		<view class="top">专辑</view>
		<view class="lists" v-for="item in dataAlbum?.albums" :key="item.id">
			<image :src="item.blurPicUrl" mode="widthFix"></image>
			<view class="list">
				<view class="list-tit">{{item.name}}</view>
				<view class="list-small">{{item.artist.name}}</view>
			</view>
		</view>
		<view class="much" v-if="dataAlbum.moreText">{{dataAlbum.moreText}} ></view>
	</view>
</template>

<style lang="scss" scoped>
	.album{
		width: 100%;
		height: 100%;
		padding: 0 30rpx;
		.top{
			height: 80rpx;
			line-height: 80rpx;
			font-weight: 900;
			font-size: 40rpx;
			border-top: 1px solid #eaecda;
		}
		.lists{
			width: 100%;
			padding: 10rpx ;
			display: flex;
			image{
				width: 120rpx;
				border-radius: 22rpx;
				.top-img{
					width: 50rpx;
					height: 50rpx;
					border-radius: 50%;
					background: orange;
				}
			}
			.list{
				padding: 15rpx;
				.list-tit{
					font-size: 35rpx;
					font-weight: 600;
				}
				.list-small{
					font-size: 25rpx;
					line-height: 40rpx;
					color: #B4B4B4;
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