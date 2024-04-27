import { defineStore } from 'pinia'
import {watch,ref} from 'vue'
import { commentApi,getMvCommentApi } from '../services'

export const useCommentStore = defineStore('comment',()=>{
	const comments =ref([])
	const mvComment =ref([])
	
	//歌单的评论
	const getComments= async (type,id)=>{
		const ids=type.id
		console.log(ids)
		console.log(type)
		const res1 = await commentApi(id)
		const res2 = await getMvCommentApi(id)
		console.log(res1)
		if(res1.comments.length>0){
			comments.value=res1.comments
		}else{
			comments.value=res2.comments
		}
		
		console.log(res1.comments)
		console.log(res2.comments)
		console.log(comments)
			// const res = await getMvCommentApi(id)
			// comments.value =res.content
			// console.log(res.content)
			// return comments
	
	}
console.log(comments)
	return {
		getComments,
		comments
	}
	
})

export default useCommentStore