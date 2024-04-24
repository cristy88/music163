<script setup> 
	import { ref, watchEffect } from 'vue';
	import { playlistDetailApi } from '../services';
	
	const props=defineProps(['visible','id','type'])
	const emits=defineEmits("update:visible")
	
	const popup=ref(null)
	const playlist=ref({})
	
	watchEffect(async () => {
		if(props.visible){
			popup.value?.open()
			const res= await playlistDetailApi(props.id)
			playlist.value=res.playlist
			console.log(res.playlist)
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
	<view class="listcover">
		<uni-popup ref="popup" type="center" background-color="#fff" @change="change">
				<view class="header">
					<image :src="playlist.coverImgUrl" mode="widthFix"></image>
					<view>{{playlist.name}}</view>
				</view>
				<view class="mian">
					<view class="tags" >
						<text class="title">标签：</text>
						<text v-if="playlist.tags.lenght>0">{{playlist.tags}}</text>
					</view>
					<view class="tag">{{playlist.description}}</view>
				</view>
		</uni-popup>
	</view>

</template>

<style lang="scss">
	.listcover{
		position: relative;
		.close{
			position: absolute;
			top: 0;
			right: 20px;
		}
	}
	.header{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px;
		border-bottom: 1px solid #ccc;
		image{
			width: 260px;
			height: 260px;
		}
	}
	.mian{
		.tags{
			margin-bottom: 5px;
			.title{
				font-weight: bold;
			}
		}
		padding: 20px;
	}
	
</style>