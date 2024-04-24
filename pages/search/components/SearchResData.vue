<script setup>
	import { ref } from 'vue'
	import { searchKeywordApi } from '../../../services/index'
	import SingleSongVue from './resComponents/SingleSong.vue'
	import ResSongSheetVue from './resComponents/ResSongSheet.vue';
	import Artist from './resComponents/Artist.vue';
	import Album from './resComponents/Album.vue';
	import User from './resComponents/User.vue';

	
	const searchType = [
		{ name: '综合', id:1018  , resData: [] },
		{ name: '单曲', id: 1 , resData: [] },
		{ name: '歌单', id: 1000 , resData: [] },
		{ name: '视频', id: 1014 , resData: [] },
		{ name: '歌手', id: 1000 , resData: [] },
		{ name: '歌词', id: 1006 , resData: [] },
		{ name: '专辑', id: 10 , resData: [] },
		{ name: '用户', id: 1002 , resData: [] }
	]
	
	const props = defineProps(['trueSearCon'])
	
	const confirmData = ref([])  //综合搜索结果
	
	const getSearchRes = async () => {
		const res = await searchKeywordApi(props.trueSearCon)
		console.log('搜索结果', res)
		confirmData.value= res.result
	}
	
	getSearchRes()
	
</script>

<template>
	<view class="">
		<SingleSongVue :data="confirmData.song" />
		<ResSongSheetVue :dataRes="confirmData.playList" />
		<Artist :dataArt="confirmData.artist"/>
		<Album :dataAlbum="confirmData.album"/>
		<User :dataUser="confirmData.user"/>
		<!-- {{confirmData}} -->
	</view>
</template>


<style>
</style>