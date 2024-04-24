<script setup>
	import { ref } from 'vue';
	import { onLoad } from "@dcloudio/uni-app"
	import { getSongDetailApi } from '../../services'
	// import 'animate.css';


	const id = ref('')
  const popup = ref(null)
	
	const songDetail = async (id) => {

		try {
			const res = await getSongDetailApi(id)
			console.log("推荐",res)
		} catch (e) {
			console.log(e)
		}
	} 
	songDetail()
	
	onLoad((option) => {
		console.log("播放歌曲id",option)
		id.value = option.id
	})
	
	const open = () => {
	        // 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
	        popup.value.open('top')
	}
	
</script>

<template>
	<view class="bg">
		<view class="bg-color" style="backgroundImage: url(../../static/img/dailyback.jpg)"></view>
	</view>
	<view class="player">
		<view class="header">
			<!-- <view class=""> -->
				<uni-icons class="down" type="right" size="28" color="#efefef"></uni-icons>
			<!-- </view> -->
			
			<view class="tit">title</view>
			<uni-icons class="redo" type="redo" size="28" color="#efefef"></uni-icons>
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
				<slider class="slider" @change="" block-size="8" active-color="#ffffff"/>
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
				<image class="caidan" src="../../static/caidan.png" mode="widthFix"></image>
			</view>
			<view class="info">
				<image class="xiazai" src="../../static/xiazai.png" mode="widthFix"></image>
				<uni-icons type="more-filled" size="24" color="#ffffff"></uni-icons>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
@import '../../uni.scss';
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
		padding:0 rpx(10) 0 rpx(10);
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
