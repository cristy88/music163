
<script setup>
import { defineEmits } from 'vue';

const $emit = () => {
	// console.log('点击父组件');

}

const changeMine = () => {
	 uni.navigateTo({
	 	url:'/pages/address/address'
	 })
};

	
</script>

<template>
	<view class="box" @click="$emit('handleClick')">
		<view class="list">
			<view class="list-tit">0616星</view>
			<view class="list-one" @click="changeMine()"><view class="img"></view>编辑资料</view>
			<view class="list-one"><view class="img"></view>更换封面</view>
			<view class="list-one"><view class="img"></view>隐私设置</view>
			<view class="list-one"><view class="img"></view>分享</view>
		</view>
	</view>
	
</template>

<style lang="scss" scoped>
	.box{
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, .6);
		position: fixed;
		.list{
			width: 100%;
			height: 100%;
			position: absolute;
			top: 50%;
			left: 0;
			background: white;
			border-radius: 30rpx 30rpx 0 0;
			.list-tit{
				padding: 20rpx;
				border-bottom: 1px solid #999999;
				font-weight: 900;
			}
			.list-one{
				display: flex;
				align-items: center;
				padding: 25rpx 0;
				font-size: 35rpx;
				margin: 0 30rpx;
				font-size: 33rpx;
				.img{
					width: 50rpx;
					height: 50rpx;
					background: #BA4E47;
					margin-right: 30rpx;
				}
			}
		}
	}
</style>