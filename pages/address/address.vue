
<script setup>

</script>

<template>
	<view class="address">
		<view class="ava"></view>
		<view class="list">
			<view class="name">昵称</view>
			<view class="details">昵称 ></view>
		</view>
		<view class="list">
			<view class="name">性别</view>
			<view class="details">请选择 ></view>
		</view>
		<view class="list">
			<view class="name">我的二维码</view>
			<view class="details">></view>
		</view>
		<view class="list">
			<view class="name">我的村龄</view>
			<view class="details"></view>
		</view>
		<view class="list">
			<view class="name">IP属地</view>
			<view class="details">请选择</view>
		</view>
		<view class="list">
			<view class="name">生日</view>
			<view class="details">请选择 ></view>
		</view>
		<view class="list">
			<view class="name">地区</view>
			<view class="details">请选择 ></view>
		</view>
		<view class="list">
			<view class="name">大学</view>
			<view class="details">请选择 ></view>
		</view>
		<view class="list">
			<view class="name">音乐标签</view>
			<view class="details">请选择 ></view>
		</view>
		<view class="list">
			<view class="name">简介</view>
			<view class="details">介绍一下自己吧 ></view>
		</view>
		<view class="list">
			<view class="name">云音乐等级</view>
			<view class="details">></view>
		</view>
		<view class="list">
			<view class="name">个人相册</view>
			<view class="details">请上传照片介绍自己 ></view>
		</view>
		<view class="list">
			<view class="name">村民证</view>
			<view class="details">领取村民证 ></view>
		</view>
		<view class="list">
			<view class="name">个人主页隐私设置</view>
			<view class="details">></view>
		</view>
		<view class="list lists">
			<view class="name">账号与绑定设置</view>
			<view class="details">></view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
.address{
	width: 100%;
	height: 100%;
	padding: 0 25rpx;
	.ava{
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
		background: orange;
		margin: 30rpx auto;
	}
	.list{
		width: 100%;
		display: flex;
		justify-content: space-between;
		line-height: 60rpx;
		padding: 20rpx 0;
		border-bottom: 1px solid #f1f1f1;
		.details{
			color: #d6d6d6;
		}
	}
	.lists{
		padding-bottom: 80rpx;
	}
}
</style>
