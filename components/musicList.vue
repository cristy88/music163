<script setup>
	import {ref, defineProps} from 'vue'
	import useMusicStore from '../store/music';
	import Selected from '../components/selected.vue'
	
	const props = defineProps(["musicList"])
	
	const musicStore = useMusicStore()
	// 展示选择菜单
	const showSeletMenu = ref(false)
	// 刷新
	const refresh = ref(true)
	
	// 跳转播放页面
	const goPlayer = (item) => {
		musicStore.setCurPlayList(item, props.musicList)
		uni.navigateTo({
			url: "/pages/player/player"
		})
	}
	
	// 刷新
	const toRefresh = () => {
		console.log('刷新一次')
		refresh.value = false
		console.log(refresh.value)
	}
	
	// 选择菜单
	// const toBatchPage = () => {
	// 	uni.navigateTo({
	// 		url: `/pages/batchPage/batchPage`
	// 	})
	// 	showSeletMenu.value = !showSeletMenu.value
	// 	console.log(showSeletMenu.value);
	// }
	
	// 选择菜单
	const toSelected = () => {
		showSeletMenu.value = !showSeletMenu.value
	}
	
	// 点击更多
	const moreDetail = () => {
		console.log('更多详情')
	}
	
</script>

<template>
	<view class="main">
		<!-- 导航 -->
		<view class="nav" @click="goPlayer">
			<image class="playicon" src="@/static/play.png" alt="" />
			<view class="playAll">
				<text>播放全部</text>
				<text class="vip">VIP歌曲免费畅听</text>
			</view>
			<img class="refreshicon" src="@/static/shuaxin.png" alt=""  @click.stop="toRefresh"/>
			<img class="selecticon" src="@/static/xuanze.png" alt="" @click.stop="toSelected"/>
		</view>
		<!-- 歌曲列表展示 -->
		<view class="songsList">
			<!-- 跳转播放 -->
			<view class="songs" v-for="(item, index) in musicList" :key="item.id" @click="goPlayer(item, index)">
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
		<Selected v-if="showSeletMenu" @toSelected="toSelected" :musicList="musicList"/>
	</view>
</template>

<style lang="scss" scoped>
	.main{
		width: 100%;
		height: 100%;
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
			&::-webkit-scrollbar{width: 0rpx;};
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
	
</style>