<script setup>
	import { topPlaylistApi } from '@/services';
	import { ref,computed } from 'vue';
	
	const songslist = ref([])
	const id=ref('')
	
	const getSongs = async ()=>{
		const res= await topPlaylistApi()
		// console.log(res.playlists)
		songslist.value=res.playlists
		console.log(songslist)
	}
	getSongs()
	
	// 使用计算属性来选择数组的前六个元素
	const displayItems = computed(() => songslist.value.slice(0, 6));
	console.log(displayItems)
	
	//跳转页面
	const Tag = () =>{
		uni.navigateTo({
			url:"/pages/songlist/songlist"
		})
	}

</script>

<template>
	<view class="content">
		<view class="title">用户的歌单</view>
		<view class="main">
			<view class="pic" 
				v-for="(item,index) in displayItems" 
				:key="item.id"
				@click="Tag()">
				{{item.id}}
				<image :src="item.coverImgUrl" mode="" />
				<view class="text">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.content{
		width: 100%;
		height: 100%;
		display:flex;
		flex-direction: column;
		.title{
			height: rpx(40);
			line-height: rpx(40);
			padding-left: rpx(10);
			background: pink;
		}
		.main{
			flex: 1;
			background: plum;
			display: flex;
			flex-wrap: wrap;
			padding: rpx(20) rpx(20);
			.pic{
				width: calc(33.33%);
				image{
					width: rpx(100);
					height: rpx(100);
					border: rpx(1) solid;
					border-radius: rpx(10);
				}
				.text{
					width:rpx(100);
					text-align: center;
					line-height: rpx(30);
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2; /* 限制在2行内 */
					overflow: hidden;
				}
			}
		}
	}
</style>