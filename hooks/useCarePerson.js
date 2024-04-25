import { ref } from 'vue'
import { careUserApi } from '@/services/index.js'

// 关注用户公共逻辑
export const useCarePerson = () => {
	
	const carePerson = async (id, t) => {
		const res = await careUserApi(id, t)
		console.log(res)
		if (res.code === 200) {
			uni.showToast({
				icon: 'success',
				title: t===1 ? '添加成功' : '删除成功'
			})
		} else {
			uni.showToast({
				icon:'error',
				res.message
			})
		}
	}
	
	return {
		carePerson
	}
}