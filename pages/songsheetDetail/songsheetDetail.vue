<script setup>
	import { ref } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	import {
		playlistAllApi,   //歌单所有歌曲
		playlistDetailApi,
		playlistDunamicApi,
		playlistCountApi,
	} from '@/services/index.js'

	
	const descCon = ref({})
	
	const getPlayAll = async (id) => {
		try {
			const res = await playlistAllApi(id)
			console.log('歌单内所有歌曲', res)
			const res1 = await playlistDetailApi(id)
			console.log('歌单详情', res1)
			const res2 = await playlistDunamicApi(id)
			console.log('获取 歌单动态数据', res2)
		} catch(e) {}
	}
	
	
	
	const songList = ref([])
	onLoad((options) => {
		console.log(options)
		getPlayAll(options.id)
	})
	
	const goBack = () => {
		uni.navigateBack()
	}
	
</script>

<template>
	<view class="allSongs">
		<view class="topBar">
			<uni-icons type="arrow-left" size="30" color="#ffffff" @click="goBack"></uni-icons>
			<text class="cen">歌单</text>
			<uni-icons class="icon" type="more-filled" size="30" color="#ffffff"></uni-icons>
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
