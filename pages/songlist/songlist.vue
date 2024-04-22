<script setup>
	import { playlistDetailApi } from '../../services';
	import { ref } from 'vue';
	import { onLoad } from '@dcloudio/uni-app';
	import Comment from "../../components/comment.vue"
	
	const commentShow=ref(false)
	const playlist = ref({})
	const id=ref('')
	const show=ref(false)
	
	const getDetail = async (id)=>{
		const res= await playlistDetailApi(id)
		playlist.value=res.playlist
		console.log(res.playlist)
	}
	
	onLoad((options)=>{
		id.value = options.id 
		getDetail(options.id)
	})
	
	const change=(e)=>{
		this.show=e.show
	}
	const goDetail= item =>{
		uni.navigateTo({
			url: '/pages/player/player',
		});
	}
	
</script>

<template>
	<view class="header">
			<view class="info">
				<image :src="playlist.coverImgUrl" mode="widthFix"></image>
				<view class="right">
					<view class="song-name">{{playlist.name}}</view>
					<view class="song-info">
						<image class="avatar" :src="playlist.creator?.avatarUrl " mode="widthFix"></image>
						<view class="nickname">{{playlist.creator?.nickname}}</view>
					</view>
				</view>
			</view>
			<view class="description">{{playlist.description}}</view>
			<view class="btns">
				<view class="btn-item">
					<uni-icons type="redo-filled" color="#fff" size="20px"></uni-icons>
					{{playlist.shareCount}}
				</view> 
				<!-- 评论 -->
				<view class="btn-item" @click="commentShow=true">
					<uni-icons type="chat" color="#fff" size="20px"></uni-icons>
					{{playlist.commentCount}}
				</view>
				<view class="btn-item">
					<uni-icons type="download" color="#fff" size="20px"></uni-icons>
					{{playlist.subscribedCount}}
				</view> 
			</view>
		</view>
		<view class="playlist">
			<view class="top-btns">
				<button class="play-btn" type="default" size="mini" >播放全部 ({{playlist.tracks?.length}})</button>
			</view>
			<view class="songs">
				<view
				 class="song-item" 
				 v-for="(item, index) in playlist.tracks"
				 :key="item.id"
				 @click="goDetail(item)"
				>{{index+1}}.{{item.name}}</view>
			</view>
		</view> 
		<Comment v-model:visible="commentShow" :id="id" type="playlist" />
</template>

<style lang="scss">
	.header{
		width: 100%;
		display: flex;
		flex-direction: column;
		
	}
	.info{
		display: flex;
		padding: 10px;
		image {
		    width: 240rpx;
		    height: 240rpx;
		    border-radius: 20rpx;
		}
		.right{
			margin-left: 20px;
			display: flex;
			flex-direction: column;
			.song-name{
				font-size: 20px;
				font-size: 900;
			}
			.song-info{
				margin-top: 10px;
				display: flex;
				image{
					width: 20px;
					height: 20px;
				}
			}
		}
		
	}
	.description{
		padding:0 10px ;
		font-size: 14px;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		}
	.btns{
		display: flex;
		padding: 5px;
		justify-content: center;
		.btn-item{
			width: 100px;
			height: 40px;
			line-height: 40px;
			text-align: center;
			background: #666666;
			margin: 0 15rpx;
			border-radius: 20px;
		}
	}	
	.playlist{
		.top-btns{
			height: 60px;
			border-bottom: 1px solid #ccc;
			.play-btn{
				margin-top: 14px;
				font-size: 14px;
				font-weight: 600;
			}
		}
		.songs{
			.song-item{
				padding: 10px;
			}
		}
	}
</style>