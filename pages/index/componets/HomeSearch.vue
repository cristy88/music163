<script setup>
	import { ref } from 'vue'
	import { searchDefaultApi } from '../../../services/index.js'
	
	const defaultSearch = ref('')
	const Sear = ref(null)
	
	// 获得每日默认搜索
	const getdefaultSearch = async () => {
		const res = await searchDefaultApi()
		console.log('默认搜索', res)
		defaultSearch.value = res.data.showKeyword
	}
	
	getdefaultSearch()
	
	const toSearch = () => {
		uni.navigateTo({
			url:`/pages/search/search?content=${encodeURIComponent(defaultSearch.value)}`
		})
	}
	
</script>

<template>
	<view class="search">
		<uni-icons type="bars" size="30"></uni-icons>
		<view class="SearchCon" @click="toSearch()">
			<uni-icons type="search" size="26"></uni-icons>
			<view class="searRight" ref="Sear">
				{{ defaultSearch }}
			</view>
		</view>
		<uni-icons type="mic" size="30"></uni-icons>
	</view>
</template>

<style lang="scss" scoped>
	.search {
		height: rpx(70);
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: rpx(342);
		margin: 0 auto;
	}
	
	.SearchCon {
		width: rpx(280);
		height: rpx(40);
		line-height: rpx(40);
		display: flex;
		border: 1px solid #999999;
		border-radius: rpx(20);
		justify-content: center;
	}
</style>