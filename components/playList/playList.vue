<script setup>
	import { ref, defineProps } from 'vue'
	import NowList from './components/nowList.vue'
	import HistoryList from './components/historyList.vue'
import nowListVue from './components/nowList.vue';

	const title = ['当前播放', '历史播放']
	const curIndex = ref(0)
	
	const props = defineProps(['musicPlayList'])
	
	
</script>

<template>
	<view class="playlist">
		<view class="playlist-content">
			<view class="titleList">
				<view :class="['title', {'active' : curIndex === index}]" v-for="(item, index) in title" :key="item" @click="curIndex = index">{{item}}</view>
			</view>
			<view class="stripe"></view>
			<view class="songsList">
				<NowList v-if="curIndex === 0" :nowList="musicPlayList"/>
				<HistoryList v-if="curIndex === 1"/>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.playlist{
		.playlist-content{
			position: absolute;
			bottom: 0;
			left: 0;
			height: rpx(460);
			width: 100%;
			background: #ffffff;
			box-sizing: border-box;
			border-radius: rpx(15) rpx(15) 0  0;
			display: flex;
			flex-direction: column;
			.titleList{
				padding: rpx(20) rpx(20) rpx(10);
				display: flex;
				font-size: rpx(18);
				border-bottom: rpx(1) solid #eeeeee;
				.title{
					padding-right: rpx(30);
					font-weight: 400;
					&.active{
						font-weight: 600;
					}
				}
			}
			.stripe{
				width: rpx(72);
				height: rpx(2);
				margin-left: rpx(20);
				background: #999999;
				margin-top: rpx(-2);
			}
			.songsList{
				flex: 1;
				display: flex;
				overflow: hidden;
			}
		}
	}
</style>