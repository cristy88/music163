<script setup>
	import { ref } from 'vue'
	import Mcon from './son/Mcon.vue'
	import Bcon from './son/Bcon.vue'
	import Dcon from './son/Dcon.vue'
	
	const currIndex = ref(0);   //当前下标
	const tab = ['音乐' , '博客' , '动态'];  
	
	const changeTab = (index) => {
		currIndex.value = index;
	};
	

</script>

<template>
	<view class="music">
		<view class="top">
			<view class="songs" v-for="(item , index) in tab" 
			:key="index" 
			:class="{active: currIndex === index}"
			@click="changeTab(index)"
			>{{item}}</view>
		</view>
		
		<Mcon />
		<Bcon />
		<Dcon />
	</view>
</template>


<style lang="scss">
	.music{
		height: 900rpx;
		background: white;
		color: white;
		border-radius: 25rpx 0 0 25rpx;
		box-shadow: 0 10rpx 10rpx 15rpx rgba(0, 0, 0, .8);
		.top{
			width: 100%;
			height: 70rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;
			color: #999999;
			font-weight: 900;
			.active{
				border-bottom: 4rpx solid #BA4E47;
				padding: 15rpx 0;
				color: black;
			}
		}
		
		
	}
</style>