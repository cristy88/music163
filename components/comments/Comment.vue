<script setup>
	import { ref, watchEffect } from 'vue';
	import { commentApi,getMvCommentApi } from '../../services';
	import { useCommentStore } from '../../store/comment';
	import AllComments from './sonComments/AllComments.vue';
	import HotComments from './sonComments/HotComments.vue'
	
	const commentStore = useCommentStore()
	
	const props=defineProps(['visible','id','type'])
	const emits=defineEmits("update:visible")
	const popup=ref(null)
	const curIndex=ref(0)
	const tab=['全部','热门']

	watchEffect(async () => {
		if(props.visible){
			popup.value?.open()
		}else{
			popup.value?.close()
		}
	})
	
	const change=(e)=>{
		if(!e.show){
			emits("update:visible",false)
		}
	}
	
	const changeTab= (index) =>{
		curIndex.value=index
	}
	
</script>

<template>
	<uni-popup ref="popup" type="bottom" background-color="#fff" @change="change">
		<view class="main">
			<view class="list">
				<view class="left">评论区</view>
				<view class="right">
					<view
					 class="list-item" 
					 :class="{active:curIndex === index}"
					 v-for="(item,index) in tab" 
					 :key="item"
					 @click="changeTab(index)"
					 >
						{{item}}
					 </view>
				</view>
			</view>
			<AllComments v-if="curIndex === 0"></AllComments>
			<HotComments v-if="curIndex === 1"></HotComments>
		</view>
		
	</uni-popup>
	
</template>

<style lang="scss" scoped>
	.main{
		overflow-y: auto;
		height: 1000rpx;
		.list{
			height: 50px;
			display: flex;
			line-height: 50px;
			text-align: center;
			justify-content: space-between;
			.left{
				margin-left: 10px;
			}
			.right{
				display: flex;
				.list-item{
					margin-right:10px;
					font-size: 14px;
				}
				.active{
					color: tomato;
				}
			}
			
		}
	}
</style>