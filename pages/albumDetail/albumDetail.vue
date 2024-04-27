<script setup>
	import { ref } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	import MusicList from '@/components/musicList.vue'
	import { getAlbumConApi, getAlbumDynamicApi } from '@/services/index.js'
	// 专辑描述
	const descCon = ref({})
	const songs = ref([])  //歌曲
	const albumInfo = ref({})  //专辑动态
 	const publicTime = ref('')  //时间
	const changeTime = (timestamp) => {
		console.log(+new Date())
		// 此处时间戳以毫秒为单位
		let date = new Date(parseInt(timestamp))
		let Year = date.getFullYear()
		let Moth = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
		let Day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
		publicTime.value = Year+'.'+Moth +'.' + Day
	}
	
	const getAlbum = async (id) => {
		const res = await getAlbumConApi(id)
		descCon.value = res.album
		songs.value = res.songs
		console.log(res)
		changeTime(descCon.value.publishTime)
	}
	
	const getAlbumDynamic = async (id) => {
		const res1 = await getAlbumDynamicApi(id)
		console.log(res1)
		albumInfo.value = res1
	}
	
	onLoad((opt) => {
		getAlbum(opt.id)
		getAlbumDynamic(opt.id)
	})
	
	const goBack = () => {
		uni.navigateBack()
	}
	
	const toArtist = (id) => {
		console.log('跳转到歌手详情页')
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
					<image :src="descCon?.picUrl" mode="widthFix"></image>
				</view>
				<view class="rightTit">
					<view class="rightTop">
						<view class="tit">{{descCon.name}}</view>
						<view class="artists" @click="toArtist(descCon.artist?.id)">
							<text>歌手</text> 
							<text>{{descCon.artist?.name}}</text>
							<uni-icons type="right" size="14" color="#C7C1C7"></uni-icons>
						</view>
					</view>
					<view class="rightBottom">
						<view class="publicTime">发行时间 {{publicTime}}</view>
						<view class="descAlbum">
							<view class="desc">{{descCon.description}}</view>
							<uni-icons type="right" size="14" color="#C7C1C7"></uni-icons>
						</view>
					</view>
				</view>
			</view>
			<view class="info">
				<view class="">
					<uni-icons type="folder-add" size="20" v-if="!albumInfo.isSub"></uni-icons>
					<uni-icons type="checkbox" size="20" v-if="albumInfo.isSub"></uni-icons>
					<text>{{albumInfo.subCount}}</text>
				</view>
				<view class="">
					<uni-icons type="chat" size="20"></uni-icons>
					<text>{{albumInfo.commentCount}}</text>
				</view>
				<view class="">
					<uni-icons type="redo" size="20"></uni-icons>
					<text>{{albumInfo.shareCount}}</text>
				</view>
			</view>
			<MusicList :musicList="songs" type="album" />
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
		background: #9E949F;
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
	
	.title {
		display: flex;
		justify-content: center;
		width: 100%;
		height: rpx(190);
		padding: 0 rpx(20);
		overflow: hidden;
		background: #9E949F;
		color: white;
		.img {
			width: rpx(120);
			height: rpx(120);
			border-radius: 50%;
			background: #000000;
			position: relative;
			flex-shrink: 0;
			image {
				width: rpx(120);
				height: rpx(120);
				border-radius: rpx(10);
				overflow: hidden;
				position: absolute;
				top: rpx(20);
				left: 0;
			}
		}
	}
	
	.info {
		width: rpx(278);
		height: rpx(44);
		background: white;
		border-radius: rpx(25);
		margin-left: calc((100% - rpx(278)) / 2);
		margin-bottom: rpx(10);
		margin-top: rpx(-22);
		box-shadow: 0 rpx(-1) rpx(5) #f1f1f1;
		display: flex;
		align-items: center;
		view {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: rpx(24);
			border-right: rpx(1) solid #EEEEEE;
			text {
				margin-left: rpx(3);
			}
		}
	}
	
	.rightTit {
		width: 100%;
		height: rpx(120);
		margin-left: rpx(30);
		margin-top: rpx(20);
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.tit {
		font-size: rpx(18);
		font-weight: 900;
	}
	.artists {
		font-size: rpx(14);
	}
	
	.rightBottom {
		width: 100%;
		font-size: rpx(12);
		line-height: rpx(20);
		color: #C7C1C7;
		.descAlbum {
			width: rpx(204);
			height: rpx(24);
			display: flex;
			view {
				width: rpx(190);
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}
</style>
