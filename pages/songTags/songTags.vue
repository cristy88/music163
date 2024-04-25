<script setup>
	import { ref } from 'vue'
	import { allTagsApi }  from '@/services/index.js'
	
	//获取分类后的歌单标签
	const trueRes = ref({})
	
	const getTrueRes = (sub, cata) => {
		const conT = Object.values(cata)
		console.log(conT)
		sub.forEach(item => {
			if (trueRes.value[cata[item.category]]) {
				trueRes.value[cata[item.category]].push(item)
			} else {
				trueRes.value[cata[item.category]] = [item]
			}
		})
		console.log('分类后结果', trueRes.value)
	}
	
	const allTags = async () => {
		const res = await allTagsApi()
		console.log(res)
		getTrueRes(res.sub, res.categories)
	}
	
	allTags()
	
</script>

<template>
	<view class="tags">
		<view class="top">
			<view class="title">我的歌单广场
				<view class="small">(长按可编辑)</view>
			</view>
			<view class="edit">编辑</view>
		</view>
		<view class="main">
			<view class="taglist">
				<view class="item">推荐</view>
				<view class="item">官方</view>
				<view class="item">精品</view>
				<view class="item">华语</view>
				<view class="item">摇滚</view>
				<view class="item">民谣</view>
				<view class="item">电子</view>
				<view class="item">轻音乐</view>
			</view>
			<view class="middle" 
				v-for="(item,index) in trueRes"
				:key="item.name">
				<view class="categories">{{index}}</view>
				<view class="content">
					<view class="item" 
						v-for="item in trueRes[index]"
					>
						<image 
							v-if="item.hot" 
							class="icon"
							src="../songs/icon/icon02.png" mode="" />
							<view class="text">{{item.name}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>	
</template>


<style lang="scss" scoped>
	.tags{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		margin-top: rpx(15);
			.top{
				height: rpx(40);
				line-height: rpx(40);
				text-align: center;
				display: flex;
				.title{
					flex: 1;
					font-weight: 900;
					display: flex;
					padding-left: rpx(10);
					.small{
						padding-left: rpx(8);
						font-size: rpx(12);
					}
				}
				.edit{
					width: rpx(80);
					margin-right: rpx(10);
					border: rpx(1) solid red;
					border-radius: rpx(20);
					color: red;
				}
			}
			.main{
				flex: 1;
				display: flex;
				flex-direction: column;
				.taglist{
					height: rpx(130);
					display: flex;
					flex-wrap: wrap;
					justify-content:space-around;
					align-content: flex-start;
					margin: rpx(15) rpx(15);
					.item{
						width:23%;
						height: rpx(40);
						line-height: rpx(40);
						border-radius: rpx(20);
						background:#F2F2F2 ;
						text-align: center;
						margin-top: rpx(15);
					}
				}
				.middle{
					flex: 1;
					display: flex;
					flex-direction: column;
					.categories{
						height: rpx(40);
						line-height: rpx(40);
						padding-left: rpx(10);
						font-weight: bold;
					}
					.content{
						flex: 1;
						display: flex;
						flex-wrap: wrap;
						margin-left: rpx(10);
						.item{
							display: flex;
							width:24%;
							height: rpx(40);
							line-height: rpx(40);
							background:#F2F2F2 ;
							border-radius: rpx(20);
							margin-top: rpx(20);
							.icon{
								width: rpx(25);
								height: rpx(25);
								margin-top: rpx(8);
							}
							.text{
								flex: 1;
								font-size: rpx(12);
								margin-right: rpx(8);
								text-align: center;
								.text::after{
									content: "";
									width: 24%;
									height: rpx(40);
								}
							}	
						}
					}
				}
			}
	}
</style>
