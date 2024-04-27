<script setup>
	import { ref } from 'vue'
	import { getAlbumConApi, getAlbumDynamic } from '@/services/index.js'
	
	const descCon = ref({})
	
	const getAlbum = async (id) => {
		const res = await getAlbumConApi(id)
		descCon.value = res[showType[numid].nickname]
		console.log(res)
		const res1 = await getAlbumDynamic(id)
		console.log(res1)
	}
</script>

<template>
	<view class="allSongs">
		<view class="topBar">
			<uni-icons type="arrow-left" size="30" color="#ffffff" @click="goBack"></uni-icons>
			<text class="cen">专辑</text>
			<uni-icons class="icon" type="more-filled" size="30" color="#ffffff"></uni-icons>
		</view>
		<view class="albumCon">
			<view class="title">
				<view class="img">
					<image src="descCon.picUrl" mode=""></image>
				</view>
				<view class="rightTit">
					<view class="">{{descCon.name}}</view>
					<view class="artists">{{descCon.artist.name}}</view>
					<view class="">
						{{descCon.publishTime}}
					</view>
				</view>
			</view>
			<view class="item" v-for="item in 100" :key="item">
				{{item}}
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.allSongs {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.topBar {
		width: 100%;
		height: rpx(50);
		display: flex;
		justify-content: space-between;
		background: paleturquoise;
		align-items: center;
		padding: 0 rpx(10);
		color:white;
		.cen {
			flex: 1;
			margin-left: rpx(10);
			font-size: rpx(20);
		}
		.icon {
			transform: rotate(90deg);
		}
	}
	
	.albumCon {
		flex: 1;
		overflow: hidden;
		overflow-y: auto;
	}
</style>
