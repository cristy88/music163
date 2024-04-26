<script setup>
	import { ref } from 'vue';
	import {onLoad} from "@dcloudio/uni-app"
	import { allmvlistApi,getMvUrlApi,getMvDataApi,getSimilarMvApi,getVideoUrlApi } from '../../services';
	import Comment from "../../components/comment.vue"
	
	const mvlist =ref([])
	const id=ref('')
	const mvurl=ref({})
	const mv=ref({})
	const sMvList=ref([])
	const videoUrl=ref({})
	const commentShow=ref(false)
	
	allmvlistApi().then(res=>{
		console.log(res.data)
		mvlist.value=res.data
	})
	
	const getmvUrl=async (id)=>{
		//mv地址
		const res1 = await getMvUrlApi(id)
		//mv详细数据
		const res2 = await getMvDataApi(id)
		//相似mv
		const res3 = await getSimilarMvApi(id)
		//视频地址
		const res4 = await getVideoUrlApi(id)
		mvurl.value=res1.data
		mv.value=res2.data
		sMvList.value = res3.mvs
		console.log(res4)
	}
	
	onLoad((options)=>{
		console.log("id",options)
		id.value=options.id
		getmvUrl(options.id)
	})
	
	
	
	const playmv=(id)=>{
		uni.navigateTo({
			url: `/pages/mvplayer/mvplayer?id=${id}`,
		});
	}

	
</script>

<template>
	<view class="video">
		<video id="myVideo" :src="mvurl?.url" controls></video>
		<view class="mv">
			<view class="user-info">
				<image :src="mv.cover" style="width: 50px; height: 50px; border-radius: 50%;" mode="aspectFill"></image>
				<text class="text-name">{{mv.name}}</text>
			</view>
			<view class="mv-info">
				<view class="mv-name">{{mv.name}}</view>
				<!-- 歌手跳转 -->
				<view class="mv-click">
					<a href="">{{mv.name}} --{{mv.artistName}}</a>
				</view>
			</view>
			<view class="btns">
				<view class="btn-item">
					<uni-icons type="folder-add-filled" size="26"></uni-icons>
					<text>收藏</text>
				</view>
				<!-- 分享 -->
				<view class="btn-item">
					<uni-icons type="redo-filled" size="26"></uni-icons>
					<text>{{mv.shareCount}}</text>
				</view>
				<!-- 评论 -->
				<view class="btn-item" @click="commentShow=true">
					<uni-icons type="chat-filled" size="26"></uni-icons>
					<text>{{mv.commentCount}}</text>
				</view>
				<view class="btn-item">
					<!-- 点赞 -->
					<uni-icons type="hand-up-filled" size="26"></uni-icons>
					<text>{{mv.subCount}}</text>
				</view>
			</view>
		</view>
	</view>
	
	<view class="mv-list">
		<view class="mv-item" v-for="(item,index) in sMvList" :key="item.id" @click="playmv(item.id)">
			<view class="image">
				<image :src="item.cover" style="width: 100px; height: 60px;" mode="aspectFill"></image>
			</view>
			<view class="right">
				<view class="mvlist-name">{{item.name}}</view>
				<view class="artist-name">
					<text>{{item.artistName}}</text>
					<text>{{item.playCount}}次播放 {{mv.publishTime}}</text>
				</view>
			</view>
		</view>
	</view>
	<Comment v-model:visible="commentShow" :id="id" type="mv" />
</template>



<style lang="scss">
	.video{
		width:100%;
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid #ccc;
		video{
			width: 100%;
			height: 200px;
		}
	}
	.mv{
		padding: 10px 10px;
		.user-info{
			height: 50px;
			margin-bottom: 10px;
			display: flex;
			.text-name{
				margin-left: 10px;
			}
		}
		.mv-info{
			width:100%;
			.mv-click,.mv-name{
				font-size: 14px;
				flex-wrap: wrap;
				a{
					font-size: 10px;
				}
			}
		}
		.btns{
			display: flex;
			.btn-item{
				flex: 1;
				justify-content: center;
				align-items: center;
				display: flex;
				flex-direction: column;
				margin-top: 15px;
			}
		}
	}
	
	.mv-list{
		width:100%;
		.mv-item{
			height: 100px;
			display: flex;
			padding: 5px;
			.image{
				width: 100px;
				image{
					width:100%;
					height: 100%;
				}
			}
			.right{
				margin-left: 5px;
				font-size: 14px;
				display: flex;
				flex-direction: column;
				.mvlist-name{
					display: flex;
					width: 100%;
					flex-wrap: nowrap;
					font-weight: bold;
				}
				.artist-name{
					display: flex;
					flex-direction: column;
					font-size: 12px;
				}
			}
		}
	}
	
</style>
