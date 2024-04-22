<script setup>
	import { ref } from 'vue'
	import { searchKeywordApi } from '../../../services/index'
	
	const props = defineProps(['trueSearCon'])
	
	const confirmData = ref([])  //搜索结果
	
	const getSearchRes = async () => {
		const res = await searchKeywordApi(props.trueSearCon)
		console.log('搜索结果', res)
		confirmData.value= res.result
	}
	
	getSearchRes()
	
</script>

<template>
	{{confirmData}}
	
</template>


<style>
</style>