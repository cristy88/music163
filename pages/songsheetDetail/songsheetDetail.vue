<script setup>
	import { ref } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	import MusicList from '@/components/musicList.vue'
	import {
		playlistAllApi,   //歌单所有歌曲
		playlistDetailApi,
		playlistDunamicApi,
		playlistCountApi,
	} from '@/services/index.js'

	
	const descCon = ref({})
	const songs = ref([])
	const songsheetInfo = ref({})
	
	const getPlayAll = async (id) => {
		try {
			const res = await playlistAllApi(id)
			console.log('歌单内所有歌曲', res)
			songs.value = res.songs
			const res1 = await playlistDetailApi(id)
			console.log('歌单详情', res1)
			descCon.value = res1.playlist
			const res2 = await playlistDunamicApi(id)
			songsheetInfo.value = res2
			console.log('获取 歌单动态数据', res2)
		} catch(e) {}
	}
	
	onLoad((options) => {
		console.log(options)
		getPlayAll(options.id)
	})
	
	const goBack = () => {
		uni.navigateBack()
	}
	
	const myImg = ref(null)
	const isLoad = () => {
		const img = myImg.value; // 通过ref属性获取到图片元素
		const canvas = document.createElement('canvas'); // 创建画布对象
		const context = canvas.getContext('2d'); // 获取上下文
		
		canvas.width = img.naturalWidth || img.clientWidth; // 设置画布大小为图片原始宽度或者客户区域宽度（如果未定义）
		canvas.height = img.naturalHeight || img.clientHeight; // 设置画布高度为图片原始高度或者客户区域高度（如果未定义）
		
		context.drawImage(img, 0, 0); // 将图片绘制到画布上
		img.crossOrigin = ''//防止跨域报错不能使用，但依然会报错
		const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data; // 获取图像数据
		
		let rTotal = 0;
		let gTotal = 0;
		let bTotal = 0;
		for (let i = 0; i < imageData.length; i += 4) {
			rTotal += imageData[i];
			gTotal += imageData[i + 1];
			bTotal += imageData[i + 2];
		}
		
		const totalPixels = imageData.length / 4;
		const avgR = Math.round(rTotal / totalPixels);
		const avgG = Math.round(gTotal / totalPixels);
		const avgB = Math.round(bTotal / totalPixels);
		
		console.log(`Average RGB color of the image is (${avgR}, ${avgG}, ${avgB})`);
	}
	
	
</script>

<template>
	<view class="allSongs">
		<view class="topBar">
			<uni-icons type="arrow-left" size="30" color="#ffffff" @click="goBack"></uni-icons>
			<text class="cen">歌单</text>
			<uni-icons class="icon" type="more-filled" size="30" color="#ffffff"></uni-icons>
		</view>
		<view class="songCon">
			<view class="albumCon">
				<view class="title">
					<view class="img">
						<image ref="myImg" :src="descCon?.coverImgUrl" mode="widthFix" @load="isLoad"></image>
					</view>
					<view class="rightTit">
						<view class="rightTop">
							<view class="tit">{{descCon.name}}</view>
							<view class="artists">
								<image :src="descCon.creator?.avatarUrl" mode=""></image>
								<text>{{descCon.creator?.nickname}}</text>
								<uni-icons type="right" size="14" color="#C7C1C7"></uni-icons>
							</view>
						</view>
					</view>
				</view>
				<view class="descAlbum">
					<view class="desc">{{descCon.description}}</view>
					<uni-icons type="right" size="14" color="#C7C1C7"></uni-icons>
				</view>
				<view class="info">
					<view class="">
						<uni-icons type="redo" size="20" color="#ffffff"></uni-icons>
						<text>{{songsheetInfo.shareCount}}</text>
					</view>
					<view class="desc">
						<uni-icons type="chat" size="20" color="#ffffff"></uni-icons>
						<text>{{songsheetInfo.commentCount}}</text>
					</view>
					<view class="">
						<uni-icons type="folder-add" size="20" color="#ffffff" v-if="!songsheetInfo.followed"></uni-icons>
						<uni-icons type="checkbox" size="20" color="#ffffff" v-if="songsheetInfo.followed"></uni-icons>
						<text>{{songsheetInfo?.bookedCount}}</text>
					</view>
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
		background: red;
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
	
	.songCon {
		flex: 1;
		overflow: hidden;
		overflow-y: auto;
	}
	
	.albumCon {
		background: red;
		padding-bottom: rpx(1);
	}
	
	.title {
		display: flex;
		justify-content: center;
		width: 100%;
		height: rpx(160);
		padding: rpx(20) rpx(20) 0;
		overflow: hidden;
		color: white;
		.img {
			width: rpx(120);
			height: rpx(120);
			flex-shrink: 0;
			image {
				width: rpx(120);
				height: rpx(120);
				border-radius: rpx(10);
				overflow: hidden;
			}
		}
	}
	
	.info {
		width: rpx(342);
		height: rpx(44);
		margin: rpx(20) auto;
		display: flex;
		color: white;
		view {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: rpx(42);
			width: rpx(120);
			background: rgba(255, 255, 255, .3);
			border-radius: rpx(25);
			&:nth-of-type(2) {
				margin: 0 rpx(20);
			}
			text {
				margin-left: rpx(3);
			}
		}
	}
	
	.rightTit {
		width: 100%;
		height: rpx(120);
		margin-left: rpx(30);
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
		display: flex;
		align-items: center;
		image {
			width: rpx(30);
			height: rpx(30);
			border-radius: 50%;
		}
		text {
			margin-left: rpx(10);
		}
	}
	
	.rightBottom {
		width: 100%;
		font-size: rpx(12);
		line-height: rpx(20);
		color: #C7C1C7;
	}
	
	.descAlbum {
		width: rpx(342);
		height: rpx(24);
		display: flex;
		align-items: center;
		margin: 0 auto;
		color: #C7C3CB;
	}
	.desc {
		width: rpx(320);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
</style>
