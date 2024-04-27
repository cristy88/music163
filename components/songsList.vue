<script setup>
	import { playlistDetailApi } from '../services';
	import { ref } from 'vue';
	import {onLoad} from "@dcloudio/uni-app"
	import { useMusicStore } from '../store/music';
	
	const musicStore = useMusicStore()
	const playlist =ref({})
	const id=ref('')
	
	const getDetail = async (id)=>{
		const res= await playlistDetailApi(id)
		playlist.value=res.playlist
		// console.log(res.playlist)
	}	
	
	onLoad((options)=>{
		id.value = options.id 
		getDetail(options.id)
	})	
	
	const goDetail= (item)=>{
		musicStore.setCurPlayList(item,playlist.value.tracks)
		uni.navigateTo({
			url: `/pages/player/player`,
		});
	}	
</script>

<template>
		<view class="playlist">
			<view class="top-btns">
				<button class="play-btn" type="default" size="mini" @click="goDetail" >播放全部 ({{playlist.tracks?.length}})</button>
			</view>
			<view class="songs">
				<view
				 class="song-item" 
				 v-for="(item, index) in playlist.tracks"
				 :key="item.id"
				 @click="goDetail(item)"
				>{{index+1}}.{{item.name}} --
				 <text v-for="v in item.ar">{{v.name}}/</text>
				 </view>
			</view>
		</view> 
	
	
</template>


<style lang="scss" scoped>
	.playlist{
		.top-btns{
			height: 60px;
			border-bottom: 1px solid #ccc;
			.play-btn{
				margin-top: 14px;
				font-size: 14px;
				font-weight: 600;
			}
		}
		.songs{
			.song-item{
				padding: 10px;
				width: 100%;
				height: 30px;
				overflow: hidden;
				text-overflow: ellipsis;
				flex-wrap: nowrap;
			}
		}
	}	
</style>