<script setup>
	import { ref } from 'vue'
	import { playlisthotApi } from '@/services/index.js'
	
	const hotlist = ref([]) //获取热门标签
	const curIndex = ref(0)  //初始高亮下标
	
	
	playlisthotApi().then(res => {
		// console.log(res.tags)
		hotlist.value  = res.tags
		console.log('热门推荐', hotlist.value)
	})
	
	//高亮下标
	 const changTab = (index) =>{
		curIndex.value = index
	}
	
	//跳转页面
	const Tag = () =>{
		uni.navigateTo({
			url:"/pages/songTags/songTags"
		})
	}
	
</script>

<template>
	<view class="headerTag">
		<view class="left">
			<view class="item" 
				v-for="(item,index) in hotlist" 
				:key="item.id"
				:class="{active : curIndex === index}"
				@click="changTab(index)"
				>{{item.name}}</view>
		</view>
		<view class="right" @click="Tag()"><image src="../../icon/icon01.png" mode=""></image></view>
	</view>	
</template>


<style lang="scss" scoped>
	.headerTag{
		width: 100%;
		height: rpx(50);
		display: flex;
		.left{
			flex: 1;
			display: flex;
			overflow-x: auto;
			.active{
				border-bottom: rpx(2) solid red;
			}
			&::-webkit-scrollbar{height:0px};
			.item{
				padding: 0 rpx(10);
				line-height: rpx(50);
				flex-shrink: 0;
			}
		}
		.right{
			width: rpx(40);
			line-height: rpx(50);
			text-align: center;
			image{
				width: rpx(40);
				height: rpx(40);
				margin-top: rpx(5);
			}
		}
	}
</style>
