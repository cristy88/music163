<script setup>
	import { ref, watchEffect } from 'vue';
	
	
	const props=defineProps(['commentShow','id','playlist'])
	
	console.log(props)
	watchEffect(async ()=>{
		// if()
	})
</script>

<template>
	<view class="commen">
		评论
	</view>
	
	
	
</template>

<style lang="scss">
	
</style>