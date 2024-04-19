<script setup>
	import { ref } from 'vue'
	import { loginApi, getCodeApi, isCodeApi, loginStatusApi } from '../../services'
	
	
	const valiFormData = ref({
		phone: '',
		captcha: '',
	})
	 
	const rules = {
		phone: {
			rules: [{
				required: true,
				errorMessage: '姓名不能为空'
			}]
		},
		password: {
			rules: [{
				required: true,
				errorMessage: '验证码'
			}]
		}
	}
	
	const getCode = async () => {
		const res = await getCodeApi({phone: valiFormData.value.phone})
		console.log(res)
	}
	
	const submit = async () => {
		console.log('登录', valiFormData)
		const code = await isCodeApi(valiFormData.value)
		console.log(code)
		if (code.data === true) {
			const status = await loginStatusApi()
			console.log('登陆状态', status)
			// const res = await loginApi(valiFormData.value)
			// console.log('是否登录成功',res)
			uni.switchTab({
				url:'/pages/index/index'
			})
		}
	}
	
</script>

<template>
	<view>
		<view class="example">
						<!-- 基础表单校验 -->
			<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
				<uni-forms-item label="手机号" required name="phone">
					<uni-easyinput v-model="valiFormData.phone" placeholder="请输入手机号" />
				</uni-forms-item>
				<uni-forms-item label="验证码" required name="captcha">
					<uni-easyinput v-model="valiFormData.captcha" placeholder="请输入验证码" />
					<button @click="getCode">获取验证码</button>
				</uni-forms-item>
			</uni-forms>
			<button type="primary" @click="submit('valiForm')">提交</button>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	@function rpx($px) {
		@return $px * 2rpx;
	}
	.example {
		position: fixed;
		width: rpx(273);
		height: rpx(296);
		left: 50%;
		top: 50%;
		transform:translate(-50%, -50%);
	}
</style>
