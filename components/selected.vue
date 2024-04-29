<script setup>
import { ref, defineProps } from 'vue';

	const props = defineProps(["musicList"])
	const emit = defineEmits(["toSelected"])
	const checkout = ref(false)
	const list = ref([])
	
	const checkboxChange = (e) => {
		// const items = props.musicList,
		// 	values = e.detail.value;
		// for ( var i = 0, lenI = items.length; i < lenI; ++i) {
		// 	const item = items[i]
		// 	if(values.includes(item.value)){
		// 		// this.$set(item,'checked',true)
		// 		checkout.value = true
		// 		list.value.push(item)
		// 	}else{
		// 		// this.$set(item,'checked',false)
		// 		checkout.value = false
		// 	}
		// }
		props.musicList.forEach( item => {
			// console.log(item)
			
		})
		// console.log(list.value)
	}
	
</script>

<template>
  <view class="selected">
    <view class="header">
			<uni-icons class="back" type="arrow-left" size="34" color="#333333" @click="$emit('toSelected')"></uni-icons>
			<text class="num">已选择0项</text>
			<view class="allSelected">
				全选
			</view>
    </view>
		<view class="main">
			<view class="vipSong">
				开通VIP
			</view>
			<checkbox-group  @change="checkboxChange">
				<label class="sel-song"  v-for="item in musicList" :key="item.id">
					<view>
						<checkbox :value="item.value" :checked="item.checked" />
					</view>
					<view class="song">
						<view class="songName">
							{{item.name}}
						</view>
						<view class="message">
								<view class="name"  v-for="ar in item.ar" :key="ar.id">
									{{ar.name}}<span v-if="ar !== item.ar[item.ar.length - 1]">/</span>
								</view>
								<view class="f"> - </view>
								<view class="al">
									{{item.al.name}}
								</view>
						</view>
					</view>
				</label>
			</checkbox-group>
		</view>
		<view class="footer">
			button
		</view>
  </view>
</template>

<style lang="scss" scoped>
	.selected{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		background: pink;
		position: absolute;
		background: #ffffff;
		padding: 0 rpx(15);
		top: 0;
		left: 0;
		z-index: 100;
		.header{
			height: rpx(60);
			display: flex;
			align-items: center;
			justify-content: space-between;
			.back{
				width: rpx(40);
				margin-right: rpx(10);
				margin-left: rpx(-8);
			}
			.num{
				font-size: rpx(18);
				font-weight: 600;
			}
		}
		.main{
			flex: 1;
			overflow: auto;
			&::-webkit-scrollbar{width: 0;}
			.vipSong{
				height: rpx(60);
				background: #ffedf0;
				text-align: center;
				line-height: rpx(60);
			}
			.sel-song{
				height: rpx(55);
				display: flex;
				align-items: center;
				.song{
					margin-left: rpx(15);
					display: flex;
					flex-direction: column;
					.songName{
						margin: rpx(2) 0;
					}
					.message{
						font-size: rpx(10);
						color: #888888;
						display: flex;
						.f{
							padding: 0 rpx(2);
						}
					}
				}
			}
		}
		.footer{
			height: rpx(60);
			display: flex;
			align-items: center;
		}
	}
</style>