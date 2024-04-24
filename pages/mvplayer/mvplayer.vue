<script setup>
	import { ref } from 'vue';
	import { allmvlistApi } from '../../services';
	
	const mvlist =ref([])
	
	allmvlistApi().then(res=>{
		console.log(res.data)
		mvlist.value=res.data
	})
	console.log(mvlist)
</script>

<template>
	<view class="video">
		<video src="http://vodkgeyttp8.vod.126.net/cloudmusic/3793/core/de43/667c55c652dbc078566ca5b4447a6e7b.mp4?wsSecret=1ca645b9fe3aee51e29d40892d1dd6ba&wsTime=1713877654"></video>
		<view class="mv">
			<view class="user-info">
				
				<text class="text-name">作者姓名</text>
			</view>
			<view class="mv-info">
				<view class="mv-name">mv名字</view>
				<view class="mv-click"><a href="">mv名字-作者</a></view>
			</view>
			<view class="btns">
				<view class="btn-item">
					<uni-icons type="folder-add-filled" size="26"></uni-icons>
					<text>收藏</text>
				</view>
				<view class="btn-item">
					<uni-icons type="redo-filled" size="26"></uni-icons>
					<text>转载</text>
				</view>
				<view class="btn-item">
					<uni-icons type="chat-filled" size="26"></uni-icons>
					<text>评论</text>
				</view>
				<view class="btn-item">
					<uni-icons type="hand-up-filled" size="26"></uni-icons>
					<text>点赞</text>
				</view>
			</view>
		</view>
	</view>
	
	<view class="mv-list">
		<view class="mv-item" v-for="(item,index) in mvlist" :key="item.id">
			<view class="image">
				<image :src="item.cover" mode="widthFix"></image>
			</view>
			<view class="right">
				<view class="mvlist-name">{{item.name}}</view>
				<view class="artist-name">{{item.artistName}}</view>
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
			margin-bottom: 10px;
		}
		.mv-info{
			width:100%;
			.mv-click,.mv-name{
				line-height: 30px;
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
			display: flex;
			padding: 5px;
			.image{
				width: 100px;
				image{
					width:100%;
				}
			}
			.right{
				font-size: 14px;
				display: flex;
				flex-direction: column;
			}
		}
	}
	
</style>
