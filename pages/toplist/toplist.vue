<script setup>
	import { ref } from 'vue';
	import { toplistApi } from '../../services';
	
	const toplist =ref([])
	const globalListt =ref([])
	
	toplistApi().then(res => {
		console.log(res.list)
		toplist.value = res.list.filter(v => v.tracks.length > 0 )
		globalListt.value = res.list.filter(v => v.tracks.length === 0 )
	})
	
	const goDetail = id => {
		uni.navigateTo({
			url:`/pages/songlist/songlist?id=${id}`
		})
	} 

</script>

<template>
	<uni-section title="官方榜" type="line" >
		<uni-card
		 v-for="item in toplist"
		 :key="item.id"
		 :title="item.name" 
		 :sub-title="item.id" 
		 :extra="item.updateFrequency" 
		 :thumbnail="item.coverImgUrl" 
		 @click="goDetail(item.id)"
		>
			<view class="songs" v-for="(song,index) in item.tracks">
				<view class="song-item">
					<text>{{index+1}}.{{song.first}}</text>
					<text> --{{song.second}}</text>
				</view>
			</view>
		</uni-card>
	</uni-section>
	
	<uni-section title="全球媒体帮" type="line" padding>
		<uni-grid :column="3" :highlight="true">
			<uni-grid-item
			 v-for="item in globalListt"
			 :key="item.id">
				<view class="grid-item-box">
					<image :src="item.coverImgUrl" mode="widthFix" @click="goDetail(item.id)"></image>
					<text class="text">{{item.name}}</text>
				</view>
			</uni-grid-item>
		</uni-grid>
	</uni-section>
</template>



<style lang="scss">

.uni-grid-item{
	margin-bottom: 20px;
	padding: 16rpx;
	box-sizing: border-box;
	font-size: 12px;
	text-align: center;
	image{
		width:100%;
		border-radius: 10px;
	}
}

</style>
