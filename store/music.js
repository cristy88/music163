import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { getSongDetailApi, getMusicUrlApi } from "../services/index.js"

export const useMusicStore = defineStore('useMusicStore', () => {
	// 播放列表
	// const musicPlayList = ref([])
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
	const setCurPlayList = (item,list) => {
		// console.log(list)
		const index = list.findIndex((v) => v.id === item.id)
		console.log(`%c 点击歌曲下标`,"color:red", index)
		curPlayList.value = list
		if(index >= 0) {
			curPlayIndex.value = index
			curMusic.value = item
		} else {
			curPlayIndex.value = 0
			curMusic.value = curPlayList.value[0]
		}
	}
	
	// 点击添加并播放
	const addSong = (item) => {
		// 排他
		const index = curPlayList.value.findIndex(v => v.id === item.id)
		if(index > -1) {
			curPlayIndex.value = index
		} else {
			curPlayList.value.splice(curPlayIndex.value + 1, 0, item)
			songDetail(item.id)
			curMusic.value = item
			curPlayIndex.value = curPlayIndex.value + 1
		}
	}
	
	// 点击添加到下一首
	const addToSongList = (item) => {
		curPlayList.value.splice(curPlayIndex.value + 1, 0, item)
	}

	
	// 监听歌曲改变
	watch(() => curMusic.value, () => {
		songDetail(curMusic.value.id)
	})

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
			curPlayIndex.value = curPlayList.value.length - 1
		} else if(curPlayIndex.value >= curPlayList.value.length - 1) {
			curPlayIndex.value = 0
		}
		curMusic.value = curPlayList.value[curPlayIndex.value]
		songDetail(curPlayIndex.value)
	}
	
	
	
	return {
		// musicPlayList,
		curPlayList,
		setCurPlayList,
		curPlayIndex,
		curMusic,
		isPlay,
		playing,
		cutSong,
		songDetail,
		addSong,
		addToSongList
	}
})

export default useMusicStore