<script setup>
	import { ref } from 'vue'
	import { useCarePerson } from '@/hooks/useCarePerson.js'
	
	const props = defineProps(['dataArt', 'moreText'])
	const emits = defineEmits(['toDetail'])
	const carePerson = useCarePerson()
	
	console.log('歌手', props.dataArt)
</script>

<template>
	<view class="art">
		<view class="top">艺人</view>
		<view class="artList" v-for="item in dataArt" :key="item.id">
			<view class="list">
				<image :src="item.picUrl"></image>
				<view class="list-tit">
					<view class="name">{{item.name}}</view>
					<view class="nums">粉丝：<view class="num">{{item.albumSize}}万</view></view>
					<view class ="TA"></view>
				</view>
			</view>
			<view class="GZ" v-if="!item.followed" @click="carePerson.carePerson(item.id, 1)">+ 关注</view>
			<view class="GZ isCare" v-else @click="carePerson.carePerson(item.id, 0)">
				<uni-icons type="checkmarkempty" size="12"></uni-icons>
				<text>已关注</text>
			</view>
		</view>
		<view class="much" @click="$emit('toDetail', 4)" v-if="moreText">{{moreText}}</view>
	</view>
</template>

<style lang="scss" scoped>
	.art{
		width: 100%;
		padding: 30rpx;
		.top{
			height: 80rpx;
			line-height: 80rpx;
			font-weight: 900;
			font-size: 40rpx;
		}
		.artList{
			width: 100%;
			height: 160rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.list{
				display: flex;
				align-items: center;
				image{
					width: 120rpx;
					height: 120rpx;
					border-radius: 50%;
					margin: 15rpx;
				}
				.list-tit{
					.name{
						font-weight: 600;
						line-height: 50rpx;
					}
					.nums{
						display: flex;
						font-size: 25rpx;
						color: #B4B4B4;
					}
				}
			}
			.GZ{
				width: 130rpx;
				height: 40rpx;
				border: 1px solid #BA4E47;
				border-radius: 40rpx;
				text-align: center;
				color: #BA4E47;
				font-size: 25rpx;
				margin-right: 10rpx;
			}
			.isCare {
				border-color: #959595;
				color: #959595;
			}
		}
		.much{
			color: #959595;
			font-size: 25rpx;
			text-align: center;
			padding: 30rpx 0;
		}
	}
</style>