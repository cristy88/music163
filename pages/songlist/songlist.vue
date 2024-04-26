<script setup>
	import { playlistDetailApi } from '../../services';
	import { ref } from 'vue';
	import { onLoad } from '@dcloudio/uni-app';
	import Comment from "../../components/comment.vue"
	import PlaylistCover from "../../components/playlistCover.vue"
	import SongsList from "../../components/songsList.vue"
	import { useMusicStore } from '../../store/music';
	import { useCommentStore } from '../../store/comment';
	
	const commentStore =useCommentStore()
 	const musicStore = useMusicStore()
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
	const goDetail= (item)=>{
		musicStore.setCurPlayList(item,playlist.value.tracks)
		uni.navigateTo({
			url: `/pages/player/player`,
		});
	}
	
	const comment = (item) =>{
		commentStore.getComments(item)
		commentShow=true
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
			<view class="description" @click="show=true">{{playlist.description}}</view>
			<view class="btns">
				<view class="btn-item">
					<uni-icons type="redo-filled" color="#fff" size="20px"></uni-icons>
					{{playlist.shareCount}}
				</view> 
				<!-- 评论 -->
				<view class="btn-item" @click="comment(playlist)">
					<uni-icons type="chat" color="#fff" size="20px"></uni-icons>
					{{playlist.commentCount}}
				</view>
				<view class="btn-item">
					<uni-icons type="download" color="#fff" size="20px"></uni-icons>
					{{playlist.subscribedCount}}
				</view> 
			</view>
		</view>
		<SongsList />
		<PlaylistCover v-model:visible="show" :id="id" type="playlist" />
		<Comment v-model:visible="commentShow" :id="id" type="playlist" />
</template>

<style lang="scss" scoped>
	.header{
		width: 100%;
		display: flex;
		flex-direction: column;
		max-height: 210px;
	}
	.info{
		display: flex;
		padding: 10px;
		image {
		    width: 120px;
		    height: 120px;
		    border-radius: 10px;
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
			flex: 1;
			height: 40px;
			line-height: 40px;
			text-align: center;
			background: #666666;
			margin: 0 15rpx;
			border-radius: 20px;
		}
	}	
</style>