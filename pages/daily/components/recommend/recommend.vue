<script setup>
	// import { getRrecommendApi } from '../../services'
	// const getRrecommend = async () => {
	// 	try {
	// 		const res = await getRrecommendApi()
	// 		console.log(res)
	// 	} catch (e) {
	// 		console.log(e)
	// 	}
	// } 
	// getRrecommend()
	
</script>


<template>
	<view class="recommend">
		<view class="header">
			
		</view>
		<view class="main">
			<view class="nav">
				<img class="playicon" src="../../static/play.png" alt="" />
				<text>播放全部</text>
				<img class="refreshicon" src="../../static/refresh.png" alt="" />
				<img class="selecticon" src="../../static/selecticon.png" alt="" />
			</view>
			<view class="songsList">
				<ul>
					<li>1</li>
					<li>1</li>
					<li>1</li>
					<li>1</li>
					<li>1</li>
					<li>1</li>
				</ul>
			</view>
		</view>
</template>



<style lang="scss">
	.recommend{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.header{
			height: 355rpx;
			background: rgba(0, 0, 0, .3);
		}
		.main{
			flex: 1;
			overflow: hidden;
			background: #ffffff;
			display: flex;
			flex-direction: column;
			.nav{
				height: 80rpx;
				background: pink;
				flex-shrink: 0;
			}
			.songsList{
				flex: 1;
				overflow: auto;
				ul{
					
					li{
						height: 80rpx;
					}
				}
			}
		}
	}
</style>