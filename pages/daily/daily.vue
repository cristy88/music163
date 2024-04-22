<script setup>
	import { ref } from 'vue'
	// import recommend from './wxcomponents/recommend/recommend.vue'
	import { getRrecommendApi } from '../../services'
	
	const title = ['每日推荐', '风格推荐']
	// tab高亮
	const curIndex = ref(0)
	const changeIndex = (index) => {
		curIndex.value = index
	}
	// 刷新
	const refresh = ref(true)
	
	// 获取歌曲列表数据
	const getRrecommend = async () => {
		try {
			const res = await getRrecommendApi()
			console.log(res)
		} catch (e) {
			console.log(e)
		}
	} 
	getRrecommend()
	
	// 跳转播放页面
	const goPlayer = () => {
		uni.navigateTo({
			url: '/pages/player/player'
		})
	}
	
	// 刷新
	const toRefresh = () => {
		console.log('刷新一次')
		event.stopPropagation()
		refresh.value = false
		console.log(refresh.value)
	}

	

	
	// 滑动改变tab？？？？？
	const move = (index) => {
		console.log(event.touches[0].clientX)
		// if(event.touches[0].clientX > 0 && event.touches[0].clientX <= 300){
		// 	curIndex.value = 1
		// } else {
		// 	curIndex.value = 0
		// }
	}
</script>
<template>
	<view class="daily">
		<navigator url="/pages/index/index" open-type="switchTab" hover-class="other-navigator-hover">
			<uni-icons class="back" type="arrow-left" size="40" color="#ffffff"></uni-icons>
		</navigator>
		<view class="tab">
			<view
				v-for="(item, index) in title"
				key="item"
				:class="[' tab-item' ,{active: curIndex === index}]"
				@click="curIndex = index"
				:current="curIndex">
				<text>{{item}}</text>
			</view>
		</view>
		<swiper class="swiper-box" :current="curIndex">
			<swiper-item
				v-for="(item, index) in title"
				:key="item"
				@change="curIndex = index"
				@touchmove="move(index)"
			>
				<view class="swiper-item" :class="'swiper-item' + index">
					<!-- 每日推荐主页面 -->
					<view class="recommend">
						<view class="header">
							
						</view>
						<!-- 歌曲列表 -->
						<view class="main">
							<!-- 导航 -->
							<view class="nav" @click="goPlayer">
								<img class="playicon" src="../../static/play.png" alt="" />
								<view class="playAll">
									<text>播放全部</text>
									<text class="vip">VIP歌曲免费畅听</text>
								</view>
								<img class="refreshicon" src="../../static/shuaxin.png" alt=""  @click="toRefresh(e)"/>
								<img class="selecticon" src="../../static/xuanze.png" alt="" />
							</view>
							<!-- 歌曲列表展示 -->
							<view class="songsList">
								<view class="songs" @click="goPlayer">
									<img class="img" src="" alt="" />
									<view class="title">
										<view class="song">
											小美满
											<text>(电影热辣滚烫)</text>
										</view>
										<view class="singer">
											周深
										</view>
									</view>
									<uni-icons class="detail" type="more-filled" size="26" color="#ADADAD"></uni-icons>
								</view>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>
<style lang="scss" scoped>

	@import '../../uni.scss';

	.daily{
		width: 100%;
		height: 100%;
		position: relative;
		.back{
			position: absolute;
			top: rpx(20);
			// top: 20rpx;
			left: rpx(16);
			z-index: 1;
			color: "#ffffff";
		}
		.tab{
			height: rpx(36);
			width: rpx(160);
			background: rgba(0, 0, 0, .1);
			position: fixed;
			top: rpx(20);
			left: 50%;
			transform: translate(-50%);
			border-radius: rpx(40);
			z-index: 1;
			display: flex;
			line-height: rpx(28);
			padding: rpx(4);
			font-size: rpx(14);
			.tab-item{
				flex: 1;
				text-align: center;
				height: 100%;
				border-radius: rpx(46);
				color: #ffffff;
				&.active{
					background: #ffffff;
					color: black;
					font-weight: 600;
				}
			}
		}
	}
	.swiper-box {
		height: 100vh;
		.swiper-item {
			height: 100%;
		}
	}

	.recommend{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.header{
			height: rpx(180);
			padding: 0 rpx(15);
			background: rgba(0, 0, 0, .3);
		}
		.main{
			flex: 1;
			overflow: hidden;
			background: #ffffff;
			display: flex;
			flex-direction: column;
			.nav{
				height: rpx(50);
				padding: 0 rpx(15);
				display: flex;
				align-items: center;
				.playicon, .refreshicon, .selecticon{
					width: rpx(22);
					height: rpx(22);
				}
				.playAll{
					flex: 1;
					text{
						font-weight: 600;
						margin-left: rpx(15);
					}
					.vip{
						border: rpx(1) solid #BEAC6A;
						border-radius: rpx(3);
						font-size: rpx(10);
						color: #BEAC6A;
						margin: 0 rpx(5);
						padding:rpx(1) rpx(2);
						vertical-align: middle;
					}
				}
				.refreshicon{
					margin: 0 rpx(20);
				}
				.selecticon{
					margin: 0 rpx(5);
				}
			}
			.songsList{
				flex: 1;
				overflow: auto;
				padding: 0 rpx(15);
				.songs{
					height: rpx(65);
					display: flex;
					align-items: center;
					.img{
						width: rpx(42);
						height: rpx(42);
						border-radius: rpx(5);
					}
					.title{
						flex: 1;
						margin-left: rpx(10);
						height: rpx(42);
						.song{
							font-size: rpx(16);
							font-weight: 400;
							line-height: rpx(25);
							text{
								color: #ADADAD;
							}
						}
						.singer{
							font-size: rpx(12);
							color: #ADADAD;
						}
					}
					.detail{
						transform: rotate(90deg);
						padding: 0 rpx(10);
					}
				}
			}
		}
	}

</style>


