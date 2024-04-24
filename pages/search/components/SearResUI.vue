<script setup>
	const props = defineProps(['data'])
</script>

<template>
	<view class="res">
		搜索结果
		{{data}}
	</view>
</template>

<style lang="scss" scoped>
	.res {
		width: 100%;
		height: 100%;
		background: white;
		overflow: hidden;
		overflow-y: auto;
	}
</style>