<script setup>

</script>

<template>
  <view class="nowList">
		<view class="iconGroup">
			<image src="../../../static/danquxunhuan.png" mode="widthFix"></image>
			<image src="../../../static/xiazai.png" mode="widthFix"></image>
			<image src="../../../static/shoucang.png"  mode="widthFix"></image>
			<image src="../../../static/shanchu.png"  mode="widthFix"></image>
		</view>
		<view class="songs">
			<view class="song-item">
				歌曲
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
			line-height: rpx(40);
			display: flex;
		}
		.songs{
			flex: 1;
			overflow: auto;
			&::-webkit-scrollbar{width: 0;}
			.song-item{
				height: rpx(60);
				line-height: rpx(60);
				border-bottom: rpx(1) #eeeeee dashed;
			}
		}
	}
</style>
