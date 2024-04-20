<!-- // <script setup>
	import axios from 'axios'
	Mounted() {
		axios.get('http://121.89.213.194:5001/banner').then(res => {
			console.log(res)
		})
	}
// </script> -->


<!-- <template>
	<view class="box">
		
		<view class="main">
			<view class="title">用户的专属歌单</view >
			<view class="img">
				<span>2290万</span>
			</view>
			<view class="gaisu">
				那些无限循环的歌
			</view>
		</view>
		<view class="footer">
				哼哼唧唧可口可乐
		</view>
	</view>
</template> -->


<!-- <style lang="scss" scoped>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
		box-sizing: border-box;
	}
	html,body{
		width: 100vw;
		height: 100vh;
	}
	.box{
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		overflow: auto;
		.nav{
			height: 80px;
			line-height: 80px;
			display: flex;
			justify-content: space-around;
		}
		.main{
			flex: 1;
			.title{
				height: 30px;
				line-height: 30px;
			}
			.img{
				width: 100px;
				height: 100px;
				background: pink;
			}
			.gaisu{
				font-size: 12px;
				color: #000000;
			}
		}
		.footer{
			height: 50px;
			line-height: 50px;
		}
	}
</style> -->

<template>
  <view class="tabs">
    <view
      v-for="tab in tabs"
      :key="tab.id"
      :class="{ active: activeTab === tab.id }"
      @click="activeTab = tab.id"
    >
      {{ tab.title }}
    </view>
    <Tab v-for="tab in tabs" :key="tab.id" :tab="tab" :activeTab="activeTab" />
  </view>
</template>

<script>
import Tab from '../../components/Tab.vue';
import { ref } from 'vue';

export default {
  components: {
    Tab,
  },
  props: {
    tabs:['推荐','摇滚','轻音乐','官方','精品','华语'],
  },
  setup(props) {
    const activeTab = ref(0); // 默认激活第一个 tab

    return {
      activeTab,
    };
  },
};
</script>