<script setup>
	import { ref } from 'vue'
	import { getBannerApi, getHomeIconApi, getRrecommendApi } from '../../services/index.js'
	import { useUserInfo } from '../../store/userInfo.js';
	
	const user = useUserInfo()
	console.log('用户信息', user.profile, user.musicSum)
	if (!user.profile || !user.musicSum) {
		// 登录成功后调用  获取用户详细信息,保存为全局数据
		user.getUserInfo()
	}
	
	const icons = ref([])
	// 获取轮播图
	const banners = ref([])
	const getBanner = async () => {
		try {
			const res = await getBannerApi()
			banners.value = res.banners
			console.log(res)
			const resIcon = await getHomeIconApi()
			console.log('获得icon', resIcon)
			if (resIcon.code === 200) {
				icons.value = resIcon.data
			}
			const command = await getRrecommendApi()
			console.log('获得每日推荐歌单', command)
		} catch (e) {
			console.log(e)
		}
	}
	getBanner()
	
	const clickIcon = (name) => {
		console.log('跳转到icon', name, '界面')
	}
	
</script>

<template>
	<view class="uni-margin-wrap">
		<swiper class="swiper" circular :indicator-dots="true" indicator-active-color="#ffffff" :autoplay="true" :circular="true">
			<swiper-item v-for="item in banners" :key="item.targetId">
				<image :src="item.imageUrl" mode="" />
			</swiper-item>
		</swiper>
	</view>
	<view class="Icons">
		<view class="Icon" v-for="item in icons" :key="item.id" @click="clickIcon(item.name)">
			<image :src="item.iconUrl" mode=""  />
			<view class="title">{{item.name}}</view>
		</view>
	</view>
	<view class="cart">
		<view class="img">
			<image src="" mode=""/>
		</view>
		<view class="info">
			<view class="info_top">我喜欢的音乐</view>
			<view class="info_buttom"></view>
		</view>
		<view class="Play">
			<view class="songsheet">
				<view class="">推荐歌单</view>
				<view class="">...</view>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	
	@function rpx($px) {
		@return $px * 2rpx; 
	}
	
	.uni-margin-wrap {
		width: rpx(342);
		height: rpx(150);
		border-radius: rpx(10);
		overflow: hidden;
		margin: 0 auto;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.Icons {
		width: rpx(342);
		height: rpx(90);
		margin: 0 auto;
		display: flex;
		align-items: center;
		overflow-x: auto;
		&::-webkit-scrollbar{height:0px};
		.Icon {
			width: calc(rpx(342) / 5);
			height: rpx(60);
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			flex-shrink: 0;
			color: #73737e;
			font-size: rpx(14);
			text-align: center;
			image {
				width: 80%;
				background: #FB3454;
			}
			uni-image {
				width: 80%;
			}
		}
	}
	
	.cart {
		height: rpx(80);
		border-bottom: 1px solid #999;
		display: flex;
		.img {
			width: rpx(80);
			height: rpx(60);
		}
	}
	
	.Play {
		width: rpx(342);
		margin: 0 auto;
	}
	
	.songsheet {
		height: rpx(54);
		display: flex;
		justify-content: space-between;
	}
	
</style>
