<script setup>
	import { getUserSongSheetApi, isLikeSongSheet } from '../../services/userApi.js'
	const userId = uni.getStorageSync('id')
	const testApi = async () => {
		const res2 = await getUserSongSheetApi(userId)
		console.log('获得用户歌单', res2)
		const res3 = await isLikeSongSheet(userId)
		console.log('相关歌单推荐', res3)
	}
	
	testApi()
	
</script>

<template>
	<view>
		
	</view>
</template>

<style lang="scss">

</style>
