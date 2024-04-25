<script setup>
	import Tag from './components/tag/Tag.vue'
	import Content from './components/content/Content.vue'
	import ContentTwo from './components/content/ContentTwo.vue'
	
	// import { ref,reactive,onMounted} from 'vue'
	// import { topListApi } from '../../services'
	
	// const hotlist = reactive([]) //获取热门标签
	// const curIndex = ref(0)  //初始高亮下标
	// const topPlaylist = raactive([])  //获取推荐歌单

	
	// onMounted(async () => {
	// 	const res = await playlisthotApi()
		
	// 	hotlist.value = res
		
	// 	console.log(res)
	// 	// playlisthotApi().then(res => {
	// 	// // console.log(res.tags)
	// 	// hotlist.value = res.tags
	// 	// console.log(hotlist.value)
	// })
	// })
	
	// const changTab = (index) => {
	// 	curIndex.value = index
	// }
	
	// topListApi().then(res => {
	// 	// console.log(res.playlists)
	// 	topPlaylist.Target = res.playlists
	// 	console.log(topPlaylist.Target)
	// })
	
</script>

<template>
	<view class="songs">
			<Tag />
		<view class="main">
			<Content />
			<!-- <br />
			<ContentTow /> -->
		</view>
		<view class="footer">
			
		</view>
		
	</view>
</template>

<!-- <template>
	<view class="songs">
		<view class="top" >
			<view 
				class="top-item" 
				:class="{active: curIndex === index}"
				:key="index"
				v-for="(item,index) in hotlist" 
				@click="changTab(index)"
			>{{item.name}}</view>
		</view>
		<view class="main">
			<view class="title">用户专属歌单</view>
			<view class="list">
				<view class="item" v-for="item in topPlaylist" :key="item.id" @click="clickImg(item.id)">
					<image 
						class="pic" 
						:src="item.coverImgUrl" mode="" />
					<view class="dec">{{item.name}}</view>
				</view>
				
				
				<view class="item">
					<image class="pic" src="../../static/c1.png" mode=""></image>
					<view class="dec">猜你喜欢</view>
				</view>
				<view class="item">
					<image class="pic" src="../../static/c1.png" mode=""></image>
					<view class="dec">猜你喜欢</view>
				</view>
				<view class="item">
					<image class="pic" src="../../static/c1.png" mode=""></image>
					<view class="dec">猜你喜欢</view>
				</view>
			</view>
		</view>
		<view class="footer">
			
		</view>
	</view>
</template> -->

<style lang="scss">
	.songs{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.main{
			flex: 1;
			
		}
		.footer{
			height: rpx(50);
			background: tomato;
		}
	}
// 	.songs{
// 		width: 100%;
// 		height: 100%;
// 		display: flex;
// 		flex-direction: column;
// 		.top{
// 			height: rpx(50);
// 			line-height: rpx(50);
// 			display: flex;
// 			overflow: auto;
// 			.active{
// 					border-bottom:rpx(2) solid tomato;
// 					padding:rpx(10)
// 				}
// 			&::-webkit-scrollbar{height:0px}
// 			.top-item{
// 				flex-shrink: 0;
// 				padding:0 rpx(10);
				
// 			}
// 		}
// 		.main{
// 			flex: 1;
// 			.title{
// 				height: rpx(30);
// 				line-height: rpx(30);
// 				padding-left:rpx(30);
// 				background: palegreen;
// 			}
// 			.list{
// 				height: rpx(80);
// 				display: flex;
// 				flex-wrap: wrap;
// 				.item{
// 					width: calc(33.33%);
// 					// height: rpx(80);
// 					display: flex;
// 					flex-direction: column;
// 					align-items: center;
// 						.pic{
// 							display: block;
// 							width: rpx(100);
// 							height: rpx(100);
// 							border-radius: rpx(8);
// 							border: rpx(1) solid;
// 						}
// 				}
				
// 			}
// 		}
// 		.footer{
// 			height: rpx(50);
// 			line-height: rpx(50);
// 			background: tomato;
// 		}
// 	}
</style>
