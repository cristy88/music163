import { defineStore } from 'pinia'
import {watch,ref} from 'vue'
import { commentApi,getMvCommentApi } from '../services'

export const useCommentStore = defineStore('comment',()=>{
	const comments =ref([])
	const hotcomments=ref([])
	
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
			hotcomments.value=res1.hotComments

		}else{
			comments.value=res2.comments
			hotcomments.value=res2.hotComments
		}
		
		console.log(res1)
		console.log(res2)
		console.log(comments)
		console.log((hotcomments))
	
	}
console.log(comments)
	return {
		getComments,
		comments,
		hotcomments
	}
	
})

export default useCommentStore