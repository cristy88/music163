<script setup>
	const props = defineProps(['data'])
</script>

<template>
	<view class="single">
		<view class="" v-for="item in data.songs" :key="item.id">
			{{item.name}}
		</view>
		<view class="">
			{{data.moreText}}
		</view>
	</view>
</template>

<style>
</style>