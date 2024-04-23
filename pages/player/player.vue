<script setup>
	import { ref } from 'vue';
	import { onLoad } from "@dcloudio/uni-app"
	import { getSongDetailApi } from '../../services'
	import 'animate.css';
	import Share from './components/share.vue'
	import PlayList from '../../components/playList/playList.vue'


	const id = ref('')
	// 展示分享
	const showShare = ref(false)
	// 展示歌曲列表
	const showPlayList = ref(false)
	const popup = ref('')
	
	// 获取歌曲id
	onLoad((option) => {
		console.log("播放歌曲id",option)
		id.value = option.id
	})
	
	const songDetail = async (ids) => {
		ids = id?.value
		try {
			const res = await getSongDetailApi(ids)
			// console.log("推荐",res)
		} catch (e) {
			console.log(e)
		}
	} 
	songDetail()
	
	
	// 展示隐藏于页面，跳至上一页
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
	
</script>

<template>
	<!-- <view :class="[isShow ? ['animate__animated','animate__slideInUp'] : ['animate__animated','animate__slideOutDown']]"></view> -->
	<view class="playerPage">
		<view class="bg">
			<view class="bg-color" style="backgroundImage: url(../../static/img/dailyback.jpg)"></view>
		</view>
		<view class="player">
			<view class="header">
				<uni-icons class="down" type="right" size="28" color="#efefef" @click="changePage"></uni-icons>
				<view class="tit">title</view>
				<uni-icons class="redo" type="redo" size="28" color="#efefef" @click="changeShare"></uni-icons>
			</view>
			<view class="main">
				<image class="needle" src="../../static/img/playneedle.png" mode="widthFix"></image>
				<view class="circle">
					<view class="circle-ring">
						<view class="img">
							<image src="../../static/img/dailyback.jpg"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="footer">
				<!-- 歌名 -->
				<view class="songTitle">
					<view class="songName">
						<view class="song">
							吹梦到西洲
						</view>
						<view class="singer">
							妖扬
						</view>
					</view>
					<uni-icons class="like" type="heart" size="26" color="#ffffff"></uni-icons>
					<uni-icons class="review" type="chat" size="28" color="#ffffff"></uni-icons>
				</view>
				<!-- 进度条 -->
				<view class="control">
					<slider class="slider" block-size="8" active-color="#ffffff"/>
					<view class="time">
						<view class="begin">
							00:00
						</view>
						<view class="end">
							00:00
						</view>
					</view>
				</view>
				<!-- 按键 -->
				<view class="playBar">
					<image class="xunhuan" src="../../static/suijibofang.png" mode="widthFix"></image>
					<image class="shang" src="../../static/shang.png" mode="widthFix"></image>
					<image class="bofang" src="../../static/bofang.png" mode="widthFix"></image>
					<image class="xia" src="../../static/shang.png" mode="widthFix"></image>
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
			<PlayList></PlayList>
		</uni-popup>
	</view>
</template>

<style lang="scss" scoped>
@import '../../uni.scss';

.playerPage, .animate__animated{
	width: 100%;
	height: 100%;
}
.bg{
	width: 100%;
	height: 100%;
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
			transform-origin: rpx(10) rpx(130);
			transform: rotate(-6deg);
			z-index: 1;
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
			.circle-ring{
				width: rpx(250);
				height: rpx(250);
				background: green;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				background: #202020;
				border-radius: 50%;
				.img{
					width: rpx(160);
					height: rpx(160);
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					background-repeat:no-repeat;
					background-position: center;
					background-size: cover;
					overflow: hidden;
					border-radius: 50%;
					image{
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
				.song{
					line-height: rpx(26);
					font-size: rpx(18);
					font-weight: 600;
				}
				.singer{
					color: #efefef;
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
			// display: flex;
			// flex-direction: column;
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
			padding: rpx(15) rpx(20);
			display: flex;
			justify-content: space-between;
			align-items: center;
			image{
				width: rpx(24);
			}
			.bofang{
				width: rpx(32);
			}
			.xia{
				transform: rotate(180deg);
			}
		}
		.info{
			display: flex;
			justify-content: space-around;
			margin-bottom: rpx(8);
			padding: 0 rpx(20);
			.xiazai{
				width: rpx(20);
			}
		}
	}
}
</style>
