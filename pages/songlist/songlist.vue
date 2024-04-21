<script setup>
	import { playlistDetailApi } from '../../services';
	import { ref } from 'vue';
	import { onLoad } from '@dcloudio/uni-app';
	
	const playlist = ref({})
	const id=ref('')
	
	const getDetail = async (id)=>{
		const res= await playlistDetailApi(id)
		playlist.value=res.playlist
		console.log(playlist)
	}
	
	onLoad((options)=>{
		id.value = options.id 
		getDetail(options.id)
	})
	
</script>

<template>
	<view class="header">
		<view class="info">
			<image :src="playlist.coverImgUrl" mode=""></image>
		</view>
	</view>
</template>

<style>
	
</style>