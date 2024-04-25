<script setup>
import { defineProps } from 'vue';

	const props = defineProps({
		showSeletMenu: Boolean , 
		toSelected: Function
	})
	
</script>

<template>
  <view class="selected">
    <view class="header">
			<uni-icons class="back" type="arrow-left" size="34" color="#333333" @click="toSelected"></uni-icons>
			<text class="num">已选择0项</text>
			<view class="allSelected">
				全选
			</view>
    </view>
		<view class="main">
			歌曲列表
		</view>
		<view class="footer">
			button
		</view>
  </view>
</template>

<style lang="scss" scoped>
	.selected{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		background: pink;
		position: absolute;
		background: #ffffff;
		padding: 0 rpx(20);
		top: 0;
		left: 0;
		z-index: 1;
		.header{
			height: rpx(60);
			display: flex;
			align-items: center;
			justify-content: space-between;
			.back{
				width: rpx(40);
				margin-right: rpx(10);
			}
			.num{
				font-size: rpx(18);
				font-weight: 600;
			}
		}
		.main{
			flex: 1;
			overflow: auto;
		}
		.footer{
			height: rpx(60);
			display: flex;
			align-items: center;
		}
	}
</style>