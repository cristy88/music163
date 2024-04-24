
<script setup>
import { ref , defineEmits } from 'vue'
	
	const clickMusic = ()=> {
		uni.navigateTo({
			url:'/pages/search/search'
		})
	}
</script>

<template>
	<view class="box">
		<view class="tit">分享你喜欢的音乐吧</view>
		<view class="con" @click="clickMusic()">去分享</view>
	</view>
</template>

<style lang="scss" scoped>
	.box{
		width: 100%;
		// height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 30%;
		.tit{
			color: #9D9EA2;
			margin-bottom: 20rpx;
		}
		.con{
			color: black;
			border: 1px solid #9D9EA2;
			width: 140rpx;
			height: 65rpx;
			text-align: center;
			border-radius: 35rpx;
			padding: 10rpx;
		}
	}
</style>