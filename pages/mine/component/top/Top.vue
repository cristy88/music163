
<script setup>
import { defineEmits } from 'vue';
import 'animate.css'

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
			<view class="list-one" @click="changeMine()"><img src="./icon/icon_01.png" alt="" />编辑资料</view>
			<view class="list-one"><img src="./icon/icon_02.png" alt="" />更换封面</view>
			<view class="list-one"><img src="./icon/icon_03.png" alt="" style="width: 35rpx;"/>隐私设置</view>
			<view class="list-one"><img src="./icon/icon_04.png" alt="" />分享</view>
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
				img{
					width: 38rpx;
					height: 38rpx;
					margin-right: 20rpx;
				}
			}
		}
	}
</style>