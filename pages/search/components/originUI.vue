<script setup>
	import { ref } from 'vue'
	import { hotUpApi, hotCommentApi, anyToplistApi, searchHotApi, allToplistApi } from '../../../services/index.js'

	const props = defineProps(['hisData'])
	const emits = defineEmits(['clickTab', 'clearhisData'])
	const hotlist = ref([])
	
	const getHotUp = async () => {
		try {
			const res = await hotUpApi()
			// console.log('最热主播帮', res)
		}catch(e) {}
	}
	
	// const getHotComment = async () => {
	// 	try {
	// 		const res = await hotCommentApi()
	// 		console.log('最热评论', res)
	// 	}catch(e) {}
	// }
	
	const getSearHot = async () => {
		try {
			const res = await searchHotApi()
			// console.log('热搜榜', res)
			hotlist.value = res.data
		}catch(e) {}
	}
	
	const list = ref([])
	
	getSearHot()
	getHotUp()
	// getHotComment()


	const popup = ref(null)
	const open = () => {
		popup.value.open()
	}
	
	const close = () => {
		popup.value.close()
	}
	
	const confirm = () => {
		// console.log('点击确定')
		emits('clearhisData')
		popup.value.close()
	}

</script>

<template>
	<view class="searOrigin">
		<view class="his" v-if="hisData.length > 0">
			<view class="hisTitle">
				<text>搜索历史</text>
				<uni-icons type="trash" size="20" @click="open"></uni-icons>
			</view>
			<view class="hisCon">
				<view v-for="item in hisData" :key="item" @click="$emit('clickTab', item)">
					<view class="">{{item}}</view>
				</view>
			</view>
		</view>
		<view class="topList">
			<view class="toplistCon">
				<view class="title">
					热搜榜
				</view>
				<view class="li" v-for="(item, index) in hotlist" :key="item.score" @click="$emit('clickTab', item.searchWord)">
					<text :class="['act', {'active': index < 3}]">{{index}}</text> <text>{{item.searchWord}}</text>
					<image :src="item.iconUrl" mode=""></image>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog  message="" title="确定要删除历史信息吗" :duration="10" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<style lang="scss" scoped>
	.searOrigin {
		padding-top: rpx(20);
	}
	.his {
		width: rpx(342);
		margin: rpx(10) auto;
	}
	.hisTitle {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: rpx(34);
		color: #393F4F;
		text {
			font-weight: 900;
		}
	}
	
	.hisCon {
		display: flex;
		flex-wrap: wrap;
		font-size: rpx(14);
		view {
			background: white;
			margin: rpx(7);
			border-radius: rpx(30);
		}
	}
	
	.topList {
		margin-bottom: rpx(30);
		display: flex;
		overflow: hidden;
		overflow-x: auto;
	}
	
	.toplistCon {
		width: rpx(240);
		border-radius: rpx(8);
		background: white;
		padding: 0 rpx(14);
		margin-left: rpx(16);
		image {
			width: rpx(16);
			height: rpx(16);
		}
	}
	.title {
		height: rpx(51);
		border-bottom: rpx(1) solid #F7F7F7;
		display: flex;
		align-items: center;
		line-height: rpx(50);
		font-size: rpx(18);
	}
	
	.li {
		height: rpx(36);
		line-height: rpx(36);
		display: flex;
		align-items: center;
		.act {
			width: rpx(30);
		}
		.active {
			color: red;
		}
	}
</style>