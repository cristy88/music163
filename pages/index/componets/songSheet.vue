<script setup>
	import { ref } from 'vue'
	
	const props = defineProps(['title', 'firstCommand', 'recommends'])
	// console.log('子组件产值', props
	
</script>

<template>
	<view class="Play">
		<view class="Playtitle">
			<view class=""><text>{{title}}</text><uni-icons type="right" size="30"></uni-icons></view>
			<view class=""><uni-icons type="more-filled" size="30"></uni-icons></view>
		</view>
		<view class="songs">
			<view class="firstAllSongSheet" v-if="firstCommand">
				<swiper class="swiper" circular :autoplay="true" :vertical="true">
					<swiper-item v-for="item in firstCommand" :key="item.id">
						<image :src="item.picUrl" />
					</swiper-item>
				</swiper>
				<view class="">
					{{firstCommand[0]?.name}}
				</view>
			</view>
			<view class="songsheet" v-for="item in recommends" :key="item.id" v-if="recommends">
				<image :src="item.picUrl" mode="scaleToFill" />
				<view class="songsheetdesc">
					{{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.Play {
		margin-left: rpx(16);
		height: rpx(220);
		width: 100%;
		overflow: hidden;
		padding-bottom: rpx(20);
		border-bottom: rpx(1) solid #F2F3F8;
	}
	
	.Playtitle {
		height: rpx(46);
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: rpx(20);
		color: #2C3342;
		view:nth-of-type(2) {
			transform: rotate(90deg);
			width: rpx(40);
			margin-right: rpx(20);
		}
	}
	
	.songs {
		overflow: auto;
		display: flex;
		&::-webkit-scrollbar{height:0px};
	}
	.firstAllSongSheet {
		height: rpx(164);
		width: rpx(112);
		font-size: rpx(12);
	}
	
	.swiper {
		width: rpx(112);
		height: rpx(112);
		border-radius: rpx(10);
		overflow: hidden;
		image {
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, .5);
		}
	}
	
	.songsheet {
		height: rpx(164);
		width: rpx(112);
		font-size: rpx(12);
		margin-left: rpx(10);
		&:last-of-type {
			margin-right: rpx(30);
		}
		image {
			width: rpx(112);
			height: rpx(112);
			border-radius: rpx(10);
			background: rgba(0, 0, 0, .5);
		}
	}
	.songsheetdesc {
		/* 限制在一个块元素中显示的文本的行数 */
		-webkit-line-clamp: 2; 
		/* 隐藏溢出的内容 */
		overflow: hidden;
		/* 为文本添加省略号 */
		text-overflow: ellipsis;
	}
</style>