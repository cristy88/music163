<script setup>

</script>

<template>
  <view class="historyList">
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
			<view class="song-item">
				<view class="song-info">
					<view class="songName">历史播放</view>
					<view class="singer">xxx</view>
				</view>
				<view class="delete">X</view>
			</view>
		</view>
  </view>
</template>

<style lang="scss" scoped>
	.historyList{
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
				text{
					
				}
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
				display: flex;
				align-items: center;
				justify-content: space-between;
				.song-info{
					flex: 1;
					display: flex;
					align-items: center;
					.songName{
						padding-right: rpx(10);
					}
					.singer{
						font-size: rpx(12);
						color: #bbbbbb;
						padding: rpx(4) rpx(10) 0;
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