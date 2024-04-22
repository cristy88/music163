<script setup>
	import { ref, watchEffect } from 'vue';
	import { commentApi } from '../services';
	
	const props=defineProps(['visible','id','type'])
	const emits=defineEmits("update:visible")
	
	const popup=ref(null)
	const comments=ref([])
	const hotComments=ref([])
	
	watchEffect(async () => {
		if(props.visible){
			popup.value?.open()
			const res= await commentApi(props.type,props.id)
			comments.value=res.comments
			hotComments.value=res.hotComments
			console.log(res.comments)
			console.log(res.hotComments)
		}else{
			popup.value?.close()
		}
	})
	
	const change=(e)=>{
		if(!e.show){
			emits("update:visible",false)
		}
	}
	
	
	
</script>

<template>
	<uni-popup ref="popup" type="bottom" background-color="#fff" @change="change">
		<view class="list">
			<uni-section class="mb-10" title="评论" sub-title="最新" type="line">
				<uni-list>
					<uni-list-item 
						v-for="item in comments" 
						:key="item.commentId"
						:avatar-circle="true"
						:title="item.user.nickname"   
						clickable  
						@click="onClick"
						:note="item.content"
						:thumb="item.user.avatarUrl"
						:time="item.timeStr"
						showArrow
						ellipsis
						 ></uni-list-item>
				</uni-list>
			</uni-section>
		</view>
		
	</uni-popup>
	
</template>

<style lang="scss" scoped>
	.list{
		overflow-y: auto;
		height: 1000rpx;
	}
</style>