<script setup>
	import { computed } from 'vue'
	const props = defineProps(['data', 'moreText'])
	const emits = defineEmits(['toDetail'])
	
	
	console.log('视频数据', props.data)
	const toVideo = (id) => {
		console.log('播放视频的id', id)
	}
	
	const toZero = (n) => {
		return String(n)[1] ? n : '0' + n
	}
	
	const allTime = computed(() => {
		return props.data?.map(v => {
			const time = toZero(Math.floor(v.durationms / 1000 / 60))
			const sun = toZero(Math.floor(v.durationms / 1000 - time * 60))
			let playTime = v.playTime
			if (v.playTime > 10000) playTime =( v.playTime / 10000).toFixed(1) + '万'
			if (v.playTime > 100000000) playTime =( v.playTime / 100000000).toFixed(1) + '亿'
			return {
				anytime: `${time}:${sun}`,
				num: playTime
			}
		})
	})

</script>

<template>
	<view class="video">
		<view class="videoCon">
			<view class="videoLi" v-for="(item,index) in data" :key="item.id" @click="toVideo(item.id)">
				<view class="img">
					<image :src="item.coverUrl" mode="widthFix"></image>
					<view class="time">
						{{allTime[index]?.anytime}}
					</view>
				</view>
				<view class="Con">
					<view class="title">
						{{item.title}}
					</view>
					<view class="videoUser">
						<view v-for="user in item.creator" :key="index">
							{{user.userName}}
						</view>
					</view>
					<view class="bofang">
						<text>{{allTime[index]?.num}}</text>播放
					</view>
				</view>
			</view>
		</view>
		<view class="much" @click="$emit('toDetail', 3)" v-if="moreText">{{moreText}} ></view>
	</view>
</template>

<style lang="scss" scoped>
	.video {
		padding: 0 rpx(20);
	}
	.videoLi {
		height: rpx(86);
		display: flex;
		margin: rpx(15) 0;
	}
	.img {
		width: rpx(150);
		height: rpx(86);
		border-radius: rpx(10);
		flex-shrink: 0;
		position: relative;
		overflow: hidden;
		.time {
			position: absolute;
			bottom: rpx(10);
			right: rpx(10);
			color: white;
			font-size: rpx(12);
		}
		image {
			width: 100%;
			height: 100%;
		}
	}
	.Con {
		flex: 1;
		margin-left: rpx(20);
		overflow: hidden;
		.title {
			line-height: rpx(20);
			height: rpx(40);
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.videoUser, .bofang {
			color: #A1A1A1;
			font-size: rpx(12);
			line-height: rpx(20);
		}
	}
	
	.much{
		color: #959595;
		font-size: 25rpx;
		text-align: center;
		padding: 30rpx 0;
		border-bottom: 1rpx solid #eaecda;
	}
</style>