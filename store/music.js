import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { getSongDetailApi, getMusicUrlApi } from "../services/index.js"

export const useMusicStore = defineStore('useMusicStore', () => {
	// 播放列表
	const musicPlayList = ref([])
	// 当前播放下标
	const curPlayIndex = ref(0)
	// 音频
	const audio = uni.createInnerAudioContext()
	// 音乐 url
	const musicUrl = ref('')
	// 设置播放暂停
	const isPlay = ref(true)
	// 获取当前播放列表
	const curPlayList = ref([])
	// 当前播放歌曲
	const curMusic = ref('')
	
	
	// 获取播放列表数据
	const setCurPlayList = (item, index, listid) => {
		console.log('当前播放歌曲:',item, '下标：',index, '播放列表：',listid)
		// musicPlayList.value = listid
		// curPlayIndex.value = index
		// curMusic.value = item
		if(index >= 0) {
			musicPlayList.value = listid
			curPlayIndex.value = index
			curMusic.value = item
		} else {
			musicPlayList.value = listid
			curPlayIndex.value = 0
			curMusic.value = musicPlayList.value[0]
		}
	}

	// 歌曲url
	const songDetail = async (ids) => {
		try{
			const resUrl = await getMusicUrlApi(ids)
			audio.autoplay = true;
			audio.src = musicUrl.value = resUrl.data[0].url
		} catch(e) {
			console.log(e)
		}
	}
	songDetail(curPlayIndex.value)
	
	
	// watch(() => curPlayIndex.value, () => {
	// 	songDetail(curPlayIndex.value)
	// 	console.log('音乐url：',resUrl.data[0].url,"+", curPlayIndex.value);
	// })
	
	
	// 音乐播放暂停
	const playing = () => {
		if(audio.paused) {
			audio.play()
			isPlay.value = true
		}else{
			audio.pause()
			isPlay.value = false
		}
	}
	
	// 切换上一首或者下一首
	const cutSong = (num) => {
		curPlayIndex.value += num
		if(curPlayIndex.value < 0) {
			curPlayIndex.value = musicPlayList.value.length - 1
		} else if(curPlayIndex.value >= musicPlayList.value.length - 1) {
			curPlayIndex.value = 0
		}
		curMusic.value = musicPlayList.value[curPlayIndex.value]
		songDetail(curPlayIndex.value)
	}
	
	
	return {
		musicPlayList,
		setCurPlayList,
		curPlayIndex,
		curMusic,
		isPlay,
		playing,
		cutSong,
		songDetail
	}
})

export default useMusicStore