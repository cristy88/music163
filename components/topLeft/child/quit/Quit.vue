<script setup>
import { ref } from 'vue'

const clickLogin = () => {
	uni.navigateTo({
		url:'/pages/login/login'
	});
	localStorage.clear();  
}
 

</script>

<template>
	<view class="centre">
		<view class="list">
			<view class="icon">
				<img src="../../icon/icon_02.png" alt="" />
			</view>
			<view class="tit-o">
				<view class="tit">切换账号</view>
				<view class="icon_1">></view>
			</view>
		</view>
		<view class="list">
			<view class="icon">
				<img src="../../icon/icon_01.png" alt="" />
			</view>
			<view class="tit-o">
					<view class="tits" @click="clickLogin()">退出登录/关闭</view>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.centre{
		background: white;
		padding: 20rpx;
		width: 100%;
		border-radius: 15rpx;
		margin: 20rpx 0;
		.con{
			height: 80rpx;
			line-height: 80rpx;
		}
		.list{
			height: 80rpx;
			display: flex;
			align-items: center;
			.icon{			
				margin-right: 20rpx;
				img{
					width: 40rpx;
					height: 40rpx;
				}
			}
			.tit-o{
				width: 100%;
				display: flex;
				justify-content: space-between;
				.tits{
					color: #BA4E47;
				}
			}
			.tit-son{
				width: 250rpx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				.icon_1{
					width: 30rpx;
					height: 30rpx;
				}
			}
		}
	}
</style>