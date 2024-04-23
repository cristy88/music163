import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { getSongDetailApi, checkMusic, getMusicUrl } from "../services/index.js"

export const useMusicStore = defineStore('music', () => {
	// 播放列表
	const playList = ref([])
	
	
	
	return {
		playList
	}
})