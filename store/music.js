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
	// 音乐总时长
	const duration = ref(0)
	// 当前播放时间
	const currentTime = ref(0)
	// 当前播放时间在进度条的位置
	const progress = ref(0)
	// 播放顺序
	const order = ref(0)  // 0：顺序 1：单曲 2：随机
	
	
	// 获取播放歌曲的详情
	const songDetail = async (id) => {
		const res = await getSongDetailApi(id)
		const musUrl = await getMusicUrlApi(id)
		// console.log('%c 当前播放歌曲详情：', 'color:red',res.songs[0], musUrl.data[0])
		audio.autoplay = true;
		isPlay.value = ref(true)
		audio.src = musicUrl.value = musUrl?.data[0].url
	}
	
	// 获取音乐播放时长
	audio.onCanplay(() => {
		console.log('%c 歌曲时长：','color:pink', audio.duration)
		duration.value =  audio.duration
	})
	
	// 更新播放时间
	audio.onTimeUpdate(() => {
		currentTime.value = audio.currentTime
	})
	
	// 进度条改变时更新播放位置
	const onSliderChange = (v) => {
		console.log('点击的进度',v)
	  currentTime.value = v / 100 * audio.duration;
		console.log(v / 100 * audio.duration)
	}
	
	// 获取播放列表数据
	const setCurPlayList = (item,list) => {
		// console.log(list)
		const index = list.findIndex((v) => v.id === item.id)
		console.log(`%c 点击歌曲下标`,"color:red", curPlayIndex.value)
		curPlayList.value = list
		if(index >= 0) {
			curPlayIndex.value = index
			curMusic.value = item
		} else {
			curPlayIndex.value = 0
			curMusic.value = curPlayList.value[0]
		}
		audio.autoplay = true;
	}
	
	// 点击添加并播放
	const addSong = async (id) => {
		// 排他
		const index = curPlayList.value.findIndex(v => v.id === id)
		console.log('添加歌曲下标',index)
		if(index > -1) {
			curPlayIndex.value = index
			const res = await getSongDetailApi(id)
			const musUrl = await getMusicUrlApi(id)
			curMusic.value = res.songs[0]
			musicUrl.value = musUrl?.data[0].url
		} else {
			curPlayIndex.value = curPlayIndex.value + 1
			// 获取当前歌曲详情
			const res = await getSongDetailApi(id)
			const musUrl = await getMusicUrlApi(id)
			curPlayList.value.splice(curPlayIndex.value, 0, res.songs[0])
			curMusic.value = res.songs[0]
			musicUrl.value = musUrl?.data[0].url
		}
	}

	// 点击添加到下一首
	const addToSongList = async (id) => {
		const res = await getSongDetailApi(id)
		curPlayList.value.splice(curPlayIndex.value + 1, 0, res.songs[0])
	}

	// 监听歌曲改变
	watch(() => curMusic.value, () => {
		songDetail(curMusic.value.id)
	})
	
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
		} else if(curPlayIndex.value >= curPlayList.value.length) {
			curPlayIndex.value = 0
		}
		curMusic.value = curPlayList.value[curPlayIndex.value]
		songDetail(curMusic.value.id)
	}
	
	// 播放顺序
	const playOrder = (r) => {
		order.value = r
		console.log(r)
		if(order.value === 0) {
			console.log('按顺序播放')
			// if(curPlayIndex.value < 0) {
			// 	curPlayIndex.value = curPlayList.value.length - 1
			// } else if(curPlayIndex.value >= curPlayList.value.length) {
			// 	curPlayIndex.value = 0
			// }
			// curMusic.value = curPlayList.value[curPlayIndex.value + 1]
			// songDetail(curPlayIndex.value)
		} else if(order.value === 1) {
			// curMusic.value = curPlayList.value[curPlayIndex.value]
			// songDetail(curPlayIndex.value)
			console.log('单曲循环')
			audio.loop = true;
		} else {
			console.log('随机播放')
			curPlayIndex.value = Math.floor(Math.random() * curPlayList.value.length)
			curMusic.value = curPlayList.value[curPlayIndex.value]
			songDetail(curPlayIndex.value)
		}
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
		addToSongList,
		order,
		playOrder,
		duration,
		currentTime,
		progress,
		onSliderChange
	}
})

export default useMusicStore