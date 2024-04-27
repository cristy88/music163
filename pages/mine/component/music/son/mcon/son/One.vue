<script setup>
import { onMounted, ref } from 'vue'
import { getPlaylistCreateApi } from '@/services/index.js'
import { getUserSongSheetApi } from '@/services/userApi.js'

	// 新建歌单名称
	const playList = ref('丞星')
	const res = ref([])   //初始数据
	const createNewPlaylist = async () => {
		// 歌单名字不能为空
		if (playList.value.trim() === '') {
			console.error('请输入歌单名');
			return;
		} 
		try {  
			const res = await getPlaylistCreateApi(playList.value)
			if (res && res.playlist && res.playlist.name) {
				console.log('新建歌单成功', res.playlist.name);
			} else {
				console.error('新建歌单失败');
			}
		} catch (e) {
			console.log(e);
		}
	}
	
	// 
	
	// 点击加号 出现新命名的歌单
	// const newList = ref(false)
	
	// 跳转播放页
	const clickHeart = () => {
		uni.navigateTo({
			url:'/pages/player/player'
		})
	}

</script>

<template> 
	<view class="list">		
		<view class="list-one">
			<view class="ILike">
				<view class="img"></view>
				<view class="title">
					<view class="iSongs">我喜欢的音乐</view>
					<view class="shou">首~次</view>
				</view>
			</view>
			<view class="heart" @click="clickHeart()">心动模式</view>
		</view>
	
		<view class="newList" v-for="item in res.playlist" :key="item.id">
			<view class="ILike">
				<view class="img"></view>
				<view class="title">
					<view class="iSongs">{{item?.playlist?.name}}</view>
					<view class="shou">首~次</view>
				</view>
			</view>
		</view>
		
		<view class="list-two">
			<view class="listent"> 
				<view class="img"></view>
				<view class="title">
					<view class="iSongs">听歌排行</view>
					<view class="shou">累计听歌 首</view>
				</view>
			</view>
			<view class="pinned"></view>
		</view>
		
		<view class="list-three" @click="createNewPlaylist()">
			<view class="news">+</view>
			<view class="new">
				<view class="">新建歌单</view>
			</view>
		</view>
		
		<view class="restrict">展示创建/收藏的30条内容，该列表仅自己可见</view>
	</view>
</template>


<style lang="scss" scoped>
.list{
	width: 100%;
	height: 560rpx;
	.list-one{
		margin-top: 50rpx;
		display: flex;
		justify-content: space-between;
		.ILike{
			display: flex;
			align-items: center;
			.img{
				width: 120rpx;
				height: 120rpx;
				background: #BA4E47;
				margin: 0 25rpx;
				border-radius: 20rpx;
			}
			.title{
				.iSongs{
					color: black;
					margin-bottom: 10rpx;
				}
				.shou{
					color: #666666;
					font-size: 30rpx;
				}
			}
		}
		.heart{
			height: 100%;
			width: 130rpx;
			margin-right: 50rpx;
			color: #666666;
			font-size: 24rpx;
			text-align: center;
			padding: 10rpx;
			border: 1px solid #999999;
			border-radius: 50rpx;
		}
	}
	.newList {
		margin-top: 20rpx 0;
		display: flex;
		justify-content: space-between;
		.ILike{
			display: flex;
			align-items: center;
			.img{
				width: 120rpx;
				height: 120rpx;
				background: #BA4E47;
				margin: 0 25rpx;
				border-radius: 20rpx;
			}
			.title{
				.iSongs{
					color: black;
					margin-bottom: 10rpx;
				}
				.shou{
					color: #666666;
					font-size: 30rpx;
				}
			}
		}
	}
	.list-two{
		margin: 20rpx 0;
		display: flex;
		justify-content: space-between;
		.listent{
			display: flex;
			.img{
				width: 120rpx;
				height: 120rpx;
				background:  #BA4E47;
				margin: 0 25rpx;
				border-radius: 20rpx;
			}
			.iSongs{
				color: black;
				margin-bottom: 10rpx;
			}
			.shou{
				color: #666666;
				font-size: 30rpx;
			}
		}
	}
	.list-three{
		margin: 20rpx 0;
		display: flex;
		justify-content: space-between;
		width: 300rpx;
		.news{
			width: 120rpx;
			height: 120rpx;
			background:  #BA4E47;
			margin: 0 25rpx;
			border-radius: 20rpx;
			color: white;
			font-size: 100rpx;
			text-align: center;
			line-height: 100rpx;
		}
		.new{
			margin-top: 30rpx;
			color: #666666;
		}
	}
	.restrict{
		color: #999999;
		font-size: 25rpx;
		text-align: center;
		padding: 20rpx;
	}
}
</style>