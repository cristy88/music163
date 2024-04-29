<script setup>
	import { ref, watch, computed } from 'vue';
	import { onLoad } from "@dcloudio/uni-app"
	import { getSongDetailApi, getMusicUrlApi } from '../../services'
	import Share from './components/share.vue'
	import PlayList from '../../components/playList/playList.vue'
	import useMusicStore from '../../store/music.js'

	// 获取音乐实例
	const musicStore = useMusicStore()
	// 展示分享
	const showShare = ref(false)
	// 展示歌曲列表
	const popup = ref(null)
	const showPlayList = ref(false)
	
	// 当前播放歌曲详情
	musicStore.songDetail(musicStore.curMusic.id)
	
	console.log(musicStore.duration)
	
	// 返回上一页
	const changePage = () => {
		uni.navigateBack(-1)
	}
	
	// 展示隐藏分享
	const changeShare = e => {
		// #ifndef MP-WEIXIN
		if(event.target === event.currentTarget) {
			showShare.value = !showShare.value
		}
		// #endif
		// #ifdef MP-WEIXIN
			showShare.value = !showShare.value
		// #endif
	}
	
	// 展示隐藏播放列表
	const changePlayList = e => {
		showPlayList.value = !showPlayList.value
		popup.value.open('bottom')
	}
	
	// 时间格式化
	const formatTime = (time) => {
	  const m = Math.floor(time / 60);
	  const s = Math.floor(time % 60);
	  return `${m}:${s < 10 ? '0' : ''}${s}`;
	};
	
</script>

<template>
	<view class="playerPage">
		<view class="bg">
			<view class="bg-color" :style="{backgroundImage: `url(${musicStore.curMusic.al?.picUrl})`}"></view>
		</view>
		<view class="player">
			<view class="header">
				<uni-icons class="down" type="right" size="28" color="#efefef" @click="changePage"></uni-icons>
				<view class="tit">{{musicStore.curMusic.al?.name}}</view>
				<uni-icons class="redo" type="redo" size="28" color="#efefef" @click="changeShare"></uni-icons>
			</view>
			<view class="main">
				<image :class="['needle',  musicStore.isPlay? 'play' : 'stop']" src="../../static/img/playneedle.png" mode="widthFix"></image>
				<view class="circle">
					<view :class="['circle-ring', musicStore.isPlay? 'playing' : 'paused']">
						<view class="img">
							<image :src="musicStore.curMusic.al?.picUrl"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="footer">
				<!-- 歌名 -->
				<view class="songTitle">
					<view class="songName">
						<view class="song">
							{{musicStore.curMusic.name}}
						</view>
						<view class="singer">
							<view class="singer-item" v-for="singer in musicStore.curMusic.ar" :key="singer.id">
								{{singer.name}}<span v-if="singer !== musicStore.curMusic.ar[musicStore.curMusic.ar.length - 1]">/</span>
							</view>
						</view>
					</view>
					<uni-icons class="like" type="heart" size="26" color="#ffffff"></uni-icons>
					<uni-icons class="review" type="chat" size="28" color="#ffffff"></uni-icons>
				</view>
				<!-- 进度条 -->
				<view class="control">
					<slider class="slider" block-size="8" active-color="#ffffff" :value="musicStore.currentTime" @change="e => musicStore.onSliderChange(e.detail.value)" :max="musicStore.duration"/>
					<view class="time">
						<view class="begin">
							{{formatTime(musicStore.currentTime)}}
						</view>
						<view class="end">
							{{formatTime(musicStore.duration)}}
						</view>
					</view>
				</view>
				<!-- 按键 -->
				<view class="playBar">
					<view class="xunxu-btn">
						<image class="xunhuan" v-if="musicStore.order === 0" src="../../static/shunxubofang.png" mode="widthFix" @click="musicStore.playOrder"></image>
						<image class="xunhuan" v-if="musicStore.order === 1" src="../../static/danquxunhuan.png" mode="widthFix" @click="musicStore.playOrder"></image>
						<image class="xunhuan" v-if="musicStore.order === 2" src="../../static/suijibofang.png" mode="widthFix" @click="musicStore.playOrder"></image>
					</view>
					<image class="shang" src="../../static/shang.png" mode="widthFix" @click="musicStore.cutSong(-1)"></image>
					<view class="play-btn" @click="musicStore.playing">
						<image class="bofang" v-if="musicStore.isPlay" src="../../static/zanting.png" mode="widthFix"></image>
						<image class="bofang" v-else src="../../static/bofang.png" mode="widthFix"></image>
					</view>
					<image class="xia" src="../../static/shang.png" mode="widthFix" @click="musicStore.cutSong(1)"></image>
					<image class="caidan" src="../../static/caidan.png" mode="widthFix" @click="changePlayList"></image>
				</view>
				<view class="info">
					<image class="xiazai" src="../../static/xiazai.png" mode="widthFix"></image>
					<uni-icons type="more-filled" size="24" color="#ffffff"></uni-icons>
				</view>
			</view>
		</view>
		<Share v-if="showShare" @click="changeShare" :share="showShare" :changeShare="changeShare"></Share>
		<uni-popup ref="popup" type="bottom" border-radius="10px 10px 0 0">
			<PlayList :curPlayList="musicStore.curPlayList"></PlayList>
		</uni-popup>
	</view>
</template>

<style lang="scss" scoped>
@import '../../uni.scss';
@keyframes spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
// @keyframes needle {
// 	from {
// 		transform: rotate(0deg);
// 	}
// 	to {
// 		transform: rotate(90deg);
// 	}
// }
.playerPage, .animate__animated{
	width: 100%;
	height: 100%;
}
.bg{
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
	overflow: hidden;
	position: fixed;
	top: 0;
	left: 0;
	.bg-color{
		width: 100%;
		height: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		filter: blur(100px);
	}
}
.player{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	color: #ffffff;
	position: relative;
	.header{
		height: rpx(100);
		padding:rpx(30) rpx(10) 0 rpx(10);
		line-height: rpx(40);
		display: flex;
		align-items: center;
		overflow: hidden;
		.down{
			transform: rotate(90deg);
			width: rpx(40);
		}
		.tit{
			flex: 1;
			text-align: center;
			color: #efefef;
		}
		.redo{
			width: rpx(40);
		}
		
	}
	.main{
		flex: 1;
		overflow: hidden;
		position: relative;
		.needle{
			width: rpx(90);
			position: absolute;
			top: 0;
			left: 50%;
			// transform-origin: rpx(10) rpx(130);
			// transform: rotate(-6deg);
			z-index: 1;
			&.play{
				transform-origin: rpx(12) rpx(90);
				transform: rotate(-6deg);
			}
			&.stop{
				transform-origin: rpx(12) rpx(22);
				transform: rotate(-46deg);
			}
		}
		.circle{
			width: rpx(280);
			height: rpx(280);
			background: pink;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background: rgba(225, 225, 225, .3);
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			.circle-ring{
				width: rpx(250);
				height: rpx(250);
				background: green;
				transform-origin: 0 ,0;
				background: #202020;
				border-radius: 50%;
				animation: spin 5s linear infinite;
				&.playing{
					animation-play-state: running;
				}
				&.paused{
					animation-play-state: paused;
				}
				.img{
					width: rpx(160);
					height: rpx(160);
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					background-repeat:no-repeat;
					background-position: center;
					background-size: rpx(160);
					overflow: hidden;
					border-radius: 50%;
					image{
						width: rpx(160);
						height: rpx(160);
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
					}
				}
			}
		}
	}
	.footer{

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: rpx(200);
		.songTitle{
			display: flex;
			align-items: center;
			padding: 0 rpx(20);
			.songName{
				flex: 1;
				overflow: hidden;
				.song{
					line-height: rpx(26);
					font-size: rpx(18);
					font-weight: 600;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.singer{
					color: #efefef;
					overflow: hidden;
					white-space: nowrap;
					// text-overflow: ellipsis;
					display: flex;
					span{
						padding: 0 rpx(5);
					}
				}
			}
			.like{
				padding:0 rpx(18);
			}
			.review{
				padding-left:rpx(20);
			}
		}
		.control{
			padding:0 rpx(10);
			.slider{
				margin:rpx(12) rpx(15) rpx(2);
			}
			.time{
				display: flex;
				justify-content: space-between;
				font-size: rpx(10);
				padding: 0 rpx(10);
			}
		}
		.playBar{
			flex: 1;
			padding: rpx(15) rpx(20);
			display: flex;
			justify-content: space-between;
			align-items: center;
			image{
				width: rpx(24);
			}
			.xunxu-btn{
				width: rpx(24);
				height: rpx(24);
			}
			.play-btn{
				width: rpx(32);
				height: rpx(32);
				.bofang{
					width: rpx(32);
					height: rpx(32)
				}
			}

			.xia{
				transform: rotate(180deg);
			}
		}
		.info{
			display: flex;
			justify-content: space-around;
			// margin-bottom: rpx(8);
			padding: 0 rpx(20) rpx(8);
			.xiazai{
				width: rpx(20);
			}
		}
	}
}
</style>
