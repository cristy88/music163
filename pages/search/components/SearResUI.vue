<script setup>
	import SingleSong from './resComponents/SingleSong.vue'
	import Album from './resComponents/Album.vue'
	import ResSongSheet from './resComponents/ResSongSheet.vue'
	import Artist from './resComponents/Artist.vue'
	import User from './resComponents/User.vue'
	
	const props = defineProps(['data', 'name'])
</script>

<template>
	<view class="res" >
		<view class="" v-if="name==='单曲'||name==='song'">
			<SingleSong :data="data" />
			<!-- {{data}} -->
		</view>
		<view class="" v-if="name==='歌单'||name==='playList'">
			<ResSongSheet :dataRes="data" />
			<!-- {{data}} -->
		</view>
		<view class="" v-if="name==='视频'">
			<!-- <SingleSong :data="data" /> -->
			{{data}}
		</view>
		<view class="" v-if="name==='歌手'||name==='aitist'">
			<Artist :dataArt="data" />
			<!-- {{data}} -->
		</view>
		<view class="" v-if="name==='歌词'">
			<!-- < :data="data" /> -->
			{{data}}
		</view>
		<view class="" v-if="name==='专辑'||name==='album'">
			<Album :dataAlbum="data" />
			<!-- {{data}} -->
		</view>
		<view class="" v-if="name==='用户'||name==='user'">
			<User :dataUser="data" />
			<!-- {{data}} -->
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.res {
		width: 100%;
		background: white;
	}
</style>