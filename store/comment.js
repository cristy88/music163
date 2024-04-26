import { defineStore } from 'pinia'
import {watch,ref} from 'vue'
import { commentApi,getMvCommentApi } from '../services'

export const useCommentStore = defineStore('comment',()=>{
	const comments =ref ([])
	const mvComment =ref ([])
	
	//歌单的评论
	const getComments= async (item)=>{
		const id=comments.value.findIndex(v=>v.id===item.id)
		if(id){
			const res = await commentApi(id)
			comments.value=res.comments
			return comments
		}else{
			const res = await getMvCommentApi(id)
			comments.value =res.content
			return comments
		}
	}
	console.log(comments)
	return {
		getComments,
		comments
	}
	
})