<script setup>
	import useCommentStore from '../../../store/comment';
	
	const commentStore = useCommentStore()
</script>


<template>
	<uni-section
	 class="mb-10" 
	 title="评论" 
	 sub-title="热门" 
	 type="line" 
	 >
		<uni-list>
			<uni-list-item 
				v-for="item in commentStore.hotcomments" 
				:key="item.commentId"
				:avatar-circle="true"
				:title="item.user.nickname"   
				clickable  
				:note="item.content"
				:thumb="item.user.avatarUrl"
				:time="item.timeStr"
				showArrow
				ellipsis
				 ></uni-list-item>
		</uni-list>
	</uni-section>
</template>


<style lang="scss">
</style>