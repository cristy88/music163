import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDailyStore = defineStore('dailyStore', () => {
	
	
	const getSongList = () => {
		uni.request({
			url: 'https://zyxcl.xyz/music_api/recommend/resource',
			success: res => {
				console.log('调接口', res.data)
			},
			fail: err => {
				console.log((err))
			}
		})
	}
	
	return {
		getSongList
	}
})