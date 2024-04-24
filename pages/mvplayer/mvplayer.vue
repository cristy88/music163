<script setup>
	import { ref } from 'vue';
	import {onLoad} from "@dcloudio/uni-app"
	import { allmvlistApi,getMvUrlApi,getMvDataApi } from '../../services';
	
	const mvlist =ref([])
	const id=ref('')
	const mvurl=ref({})
	const mvData=ref({})
	
	allmvlistApi().then(res=>{
		console.log(res.data)
		mvlist.value=res.data
	})
	
	const getmvUrl=async (id)=>{
		const res1= await getMvUrlApi(id)
		const res2= await getMvDataApi(id)
		mvurl.value=res1.data
		mvData.value=res2.data
		console.log(res2.data)
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
				<image :src="mvData.cover" style="width: 50px; height: 50px; border-radius: 50%;" mode="aspectFill"></image>
				<text class="text-name">{{mvData.name}}</text>
			</view>
			<view class="mv-info">
				<view class="mv-name">{{mvData.name}}</view>
				<view class="mv-click">
					<a href="">{{mvData.name}} --{{mvData.artistName}}</a>
				</view>
			</view>
			<view class="btns">
				<view class="btn-item">
					<uni-icons type="folder-add-filled" size="26"></uni-icons>
					<text>收藏</text>
				</view>
				<view class="btn-item">
					<uni-icons type="redo-filled" size="26"></uni-icons>
					<text>{{mvData.shareCount}}</text>
				</view>
				<view class="btn-item">
					<uni-icons type="chat-filled" size="26"></uni-icons>
					<text>{{mvData.commentCount}}</text>
				</view>
				<view class="btn-item">
					<uni-icons type="hand-up-filled" size="26"></uni-icons>
					<text>{{mvData.subCount}}</text>
				</view>
			</view>
		</view>
	</view>
	
	<view class="mv-list">
		<view class="mv-item" v-for="(item,index) in mvlist" :key="item.id" @click="playmv(item.id)">
			<view class="image">
				<image :src="item.cover" style="width: 100px; height: 60px;" mode="aspectFill"></image>
			</view>
			<view class="right">
				<view class="mvlist-name">{{item.name}}</view>
				<view class="artist-name">
					<text>{{item.artistName}}</text>
					<text>{{item.playCount}}次播放 {{mvData.publishTime}}</text>
				</view>
			</view>
		</view>
	</view>
	
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
