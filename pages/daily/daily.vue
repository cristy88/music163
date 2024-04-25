<script setup>
	import { ref } from 'vue'
	// import recommend from './wxcomponents/recommend/recommend.vue'
	import { getDailySongsApi } from '../../services'
	import PlayCart from '../../components/playCart/playCart.vue';
	import Selected from '../../components/selected.vue'
	import useMusicStore from '../../store/music';
	
	
	const {setCurPlayList} = useMusicStore()
	
	const title = ['每日推荐', '风格推荐']
	// 推荐歌单数据
	const recommendList = ref([])
	// tab高亮
	const curIndex = ref(0)
	const changeIndex = (index) => {
		curIndex.value = index
	}
	// 刷新
	const refresh = ref(true)
	// 展示选择菜单
	const showSeletMenu = ref(false)
	
	// 获取歌曲列表数据
	const getRrecommend = async () => {
		try {
			const res = await getDailySongsApi()
			recommendList.value = res.data.dailySongs
		} catch (e) {
			console.log(e)
		}
	} 
	getRrecommend()
	
	// 跳转播放页面
	const goPlayer = (item, index) => {
		setCurPlayList(item, index, recommendList.value)
		uni.navigateTo({
			url: `/pages/player/player`
		})
	}
	
	// 刷新
	const toRefresh = () => {
		console.log('刷新一次')
		refresh.value = false
		console.log(refresh.value)
	}

	// 选择菜单
	const toSelected = () => {
		console.log('选择')
		showSeletMenu.value = !showSeletMenu.value
		console.log(showSeletMenu.value);
	}
	
	// 点击更多
	const moreDetail = () => {
		console.log('更多详情')
	}
	
	// 滑动改变tab
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
				:key="item"
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
								<image class="playicon" src="../../static/play.png" alt="" />
								<view class="playAll">
									<text>播放全部</text>
									<text class="vip">VIP歌曲免费畅听</text>
								</view>
								<img class="refreshicon" src="../../static/shuaxin.png" alt=""  @click.stop="toRefresh"/>
								<img class="selecticon" src="../../static/xuanze.png" alt="" @click.stop="toSelected"/>
							</view>
							<!-- 歌曲列表展示 -->
							<view class="songsList">
								<!-- 跳转播放 @click="goPlayer(item.id)" -->
								<view class="songs" v-for="(item, index) in recommendList" :key="item.id" @click="goPlayer(item, index)"> 
									<img class="img" :src="item.al.picUrl" alt="" />
									<view class="title">
										<view class="song">
											<view class="name">{{item.name}}</view>
											<text v-for="alia in item.alia" :key="alia">({{alia}})</text>
										</view>
										<view class="singer">
											<view  v-for=" ar in item.ar" :key="ar.name">
												{{ar.name}}<span v-if="ar !== item.ar[item.ar.length - 1]">/</span>
											</view>
											<text> - {{item.al.name}}</text>
										</view>
									</view>
									<view class="detail"  @click.stop="moreDetail">
										<uni-icons type="more-filled" size="20" color="#ADADAD"></uni-icons>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
	<!-- <PlayCart /> -->
	<Selected v-if="showSeletMenu" :showSeletMenu="showSeletMenu" :toSelected="toSelected"/>
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
			background: url(../../static/img/dailyback.jpg) no-repeat center;
			background-size: 100%;
		}
		.main{
			flex: 1;
			overflow: auto;
			background: #ffffff;
			display: flex;
			flex-direction: column;
			::-webkit-scrollbar{width: 0rpx;};
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
						overflow: hidden;
						margin-left: rpx(10);
						height: rpx(42);
						.song{
							font-size: rpx(16);
							font-weight: 400;
							line-height: rpx(25);
							display: flex;
							.name{
								flex-shrink: 0;
							}
							text{
								color: #ADADAD;
								 white-space: nowrap;
								 overflow: hidden;
								 text-overflow: ellipsis;
							}
						}
						.singer{
							font-size: rpx(12);
							color: #ADADAD;
							display: flex;
							text{
								padding-left: rpx(4);
							}
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


