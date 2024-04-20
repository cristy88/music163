import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getUserSUMApi, getUserInfoApi } from '../services/userApi.js'

export const useUserInfo = defineStore('useUserInfo', () => {
	const profile = ref(null)  //用户信息
	const musicSum = ref(null)  //获取用户信息 , 歌单，收藏，mv, dj 数量
	
	// 获取用户信息
	const getUserInfo = async () => {
		const userId = Number(uni.getStorageSync('id'))
		console.log('获取用户xinxi')
		const res = await getUserSUMApi()
		musicSum.value = res
		const res1 = await getUserInfoApi(userId)
		profile.value = res1.profile
	}

	return {
		getUserInfo,
		profile,
		musicSum
	}
})