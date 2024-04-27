
<script setup>
	import { ref } from 'vue'
	import One from './son/One.vue'
	import Two from './son/Two.vue'
	
	const currIndex = ref(0);   //当前下标
	const tab = ['近期' , '创建'];  
	
	
	const changeTab = (index) => {
		currIndex.value = index;
	};
</script>

<template>
	<view class="box">
		<view class="top-small">
			<view class="small">
				<view class="recent" v-for="(item , index) in tab"
				:key="index" 
				:class="{active: currIndex === index}"
				@click="changeTab(index)"
				>{{item}}</view>
			</view>
			<view class="all">
				<img src="" alt="" />
			</view>
		</view>
		<One v-if="currIndex === 0"/>
		<Two v-else="currindex === 1"/>		
		
	</view>
</template>

<style lang="scss" scoped>
	.box{
		width: 100%;
		.top-small{
			margin-top: 40rpx;
			display: flex;
			justify-content: space-between;
			padding: 0 30rpx;
			color: black;
			.small{
				display: flex;
				justify-content: space-around;
				width: 180rpx;
				color: #999999;
				font-weight: 900;
				.active{
					color: black;
				}
			}
			.all{
				width: 40rpx;
				height: 40rpx;
				background: #666666;
				// background: url(../../../icon/icon_03.png) no-repeat;
				// background-size: 50rpx;
			}
		}
		.restrict{
			font-size: 25rpx;
			text-align: center;
			margin: 50rpx;
			color: #666666;
		}
	}
	
</style>