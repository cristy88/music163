<script setup>
	import { ref, defineProps } from 'vue'
	const props = defineProps({
		nowList: Array
	})
</script>

<template>
  <view class="nowList">
		<view class="iconGroup">
			<view class="bofang">
				<image src="../../../static/huixunhuan.png" mode="widthFix"></image>
				<text>列表播放</text>
			</view>
			<image src="../../../static/huixiazai.png" mode="widthFix"></image>
			<image src="../../../static/shoucang.png"  mode="widthFix"></image>
			<image src="../../../static/shanchu.png"  mode="widthFix"></image>
		</view>
		<view class="songs">
			<view class="song-item" v-for="item in nowList" :key="item.id">
				<view class="song-info">
					<view class="songName">{{item.name}}</view>
					<view class="singer">
						<view class="singer-item"  v-for="ar in item.ar" :key="ar.id">
							{{ar.name}}<span v-if="ar !== item.ar[item.ar.length - 1]">/</span>
						</view>
					</view>
				</view>
				<view class="delete">X</view>
			</view>
		</view>
  </view>
</template>

<style lang="scss" scoped>
	.nowList{
		width: 100%;
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		padding:rpx(10) rpx(20);
		.iconGroup{
			height: rpx(40);
			display: flex;
			align-items: center;
			.bofang{
				flex: 1;
				font-size: rpx(12);
				display: flex;
				align-items: center;
			}
			image{
				width: rpx(20);
				margin: 0 rpx(10);
			}
		}
		.songs{
			flex: 1;
			overflow: auto;
			&::-webkit-scrollbar{width: 0;}
			.song-item{
				height: rpx(55);
				border-bottom: rpx(1) #eeeeee dashed;
				// overflow: hidden;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.song-info{
					height: 100%;
					display: flex;
					overflow: hidden;
					align-items: center;
					margin-right: rpx(10);
					.songName{
						// margin-right: rpx(10);
						flex-shrink: 0;
					}
					.singer{
						// flex: 1;
						flex-shrink: 0;
						font-size: rpx(12);
						color: #bbbbbb;
						margin: rpx(4) 0 0 rpx(10);
						white-space: nowrap;
						display: flex;
					}
				}
				.delete{
					color: #bbbbbb;
					font-size: rpx(16);
				}

			}
		}
	}
</style>
