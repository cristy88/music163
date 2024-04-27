<script setup>
	import { ref } from 'vue'
	import SingleSong from '@/components/resComponents/SingleSong.vue'
	import Album from '@/components/resComponents/Album.vue'
	import ResSongSheet from '@/components/resComponents/ResSongSheet.vue'
	import Artist from '@/components/resComponents/Artist.vue'
	import User from '@/components/resComponents/User.vue'
	import Video from '@/components/resComponents/Video.vue'
	
	const props = defineProps(['data', 'name', 'numId', 'moreText'])
	const emits = defineEmits(['toDetail', 'scrollDown'])
	const resPage = ref(null)
	
	// scrollTop + clientHeight == scrollHeight。
	const scrollEl = () => {
		console.log(props.name, '滚动到底了')
		emits('scrollDown', props.name)
	}
	
	const toDetailSear = id => {
		emits('toDetail', id)
	}
	
</script>

<template>
	<scroll-view
		class="Refres"
		:scroll-x="false"
		:scroll-y="true"
		@scrolltolower="scrollEl"
	>
		<view class="" v-if="name==='单曲'||name==='song'">
			<SingleSong :data="data" :moreText="moreText"  @toDetail="toDetailSear" />
			<!-- {{data}} -->
		</view>
		<view class="" v-if="name==='歌单'||name==='playList'">
			<ResSongSheet :dataRes="data" :moreText="moreText" @toDetail="toDetailSear" />
			<!-- {{data}} -->
		</view>
		<view class="" v-if="name==='视频'">
			<Video :data="data" :moreText="moreText" @toDetail="toDetailSear" />
		</view>
		<view class="" v-if="name==='歌手'||name==='aitist'">
			<Artist :dataArt="data" :moreText="moreText" @toDetail="toDetailSear" />
			<!-- {{data}} -->
		</view>
		<view class="" v-if="name==='歌词'">
			<!-- < :data="data" /> -->
			{{data}}
		</view>
		<view class="" v-if="name==='专辑'||name==='album'">
			<Album :dataAlbum="data" :moreText="moreText"  @toDetail="toDetailSear" />
			<!-- {{data}} -->
		</view>
		<view class="" v-if="name==='用户'||name==='user'">
			<User :dataUser="data" :moreText="moreText"  @toDetail="toDetailSear" />
			<!-- {{data}} -->
		</view>
	</scroll-view>
</template>

<style lang="scss" scoped>
	.Refres {
		width: 100%;
		height: 100%;
		background: white;
		overflow: hidden;
		overflow-y: auto;
		&::-webkit-scrollbar{width: 0px;}
	}
</style>