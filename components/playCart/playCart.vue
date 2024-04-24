<script setup>
	import { ref } from 'vue'
	import PlayList from '../playList/playList.vue'
	
	// 展示列表
	const popup = ref('')
	const showPlayList = ref(false)
	
	const changePlayList = e => {
		showPlayList.value = !showPlayList.value
		popup.value.open('bottom')
	}
	
	const goPlayer = (id) => {
		uni.navigateTo({
			url: `/pages/player/player?id=${id}`
		})
	}
	
</script>

<template>
	<view class="playCart">
		<view class="song"  @click="goPlayer(id = 1422785546)">
			不再见
		</view>
		<view class="play">
			<image src="../../static/zanting.png" mode="widthFix"></image>
		</view>
		<view class="playlist">
			<image src="../../static/caidan.png" mode="widthFix"  @click="changePlayList"></image>
		</view>
	</view>
	<uni-popup ref="popup" type="bottom" border-radius="10px 10px 0 0">
		<PlayList></PlayList>
	</uni-popup>
</template>

<style lang="scss" scoped>
	.playCart{
		width: 100%;
		height: rpx(50);
		padding: 0 rpx(20);
		background: rgba(225, 225, 225, .8);
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		.song{
			flex: 1;
		}
		image{
			width: rpx(20);
			margin-left: rpx(30);
		}
	}
</style>