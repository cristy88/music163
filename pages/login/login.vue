<script setup>
	import { ref } from 'vue'
	import { loginApi, loginStatusApi } from '../../services'
	import { useUserInfo } from '../../store/userInfo'
	
	const userInfo = useUserInfo()
	
	const getLoginStatu = async () => {
		const status = await loginStatusApi()
		if (status.data.account) {
			uni.setStorageSync('id', String(status.data.account.id))
			uni.switchTab({
				url: '/pages/index/index'
			})
		}
		console.log('登陆状态', status)
	}
	
	getLoginStatu()
	
	const valiFormData = ref({
		email: '',
		password: '',
	})
	
	const valiForm = ref(null)
	
	const rules = {
		email: {
			rules: [{
				required: true,
				errorMessage: '邮箱不能为空'
			}]
		},
		password: {
			rules: [{
				required: true,
				errorMessage: '密码'
			}]
		}
	}
	
	// 是否登录
	const isLogin = async () => {
		console.log('登录', valiFormData)
		const res = await loginApi(valiFormData.value)
		console.log('是否登录成功',res)
		if (res.code !== 200) {
			uni.showToast({
				title: `账号或密码错误`,
				icon: 'error'
			})
			return
		}
		uni.showToast({
			title: `登录成功`,
			icon: 'success'
		})
		uni.setStorageSync('curCookie', res.cookie)
		uni.setStorageSync('token', res.token)
		// 调用登陆状态,记录用户id
		getLoginStatu()
		uni.switchTab({
			url:'/pages/index/index'
		})
	}
	
	const submit = () => {
		valiForm.value.validate().then(res => {
			console.log('success', res)
			uni.showToast({
				title: `校验通过`
			})
			isLogin()
		}).catch(err => {
			console.log('err', err)
		})
	}
	
</script>

<template>
	<view>
		<view class="example">
						<!-- 基础表单校验 -->
			<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
				<uni-forms-item label="邮箱" required name="email">
					<uni-easyinput v-model="valiFormData.email" placeholder="请输入邮箱" />
				</uni-forms-item>
				<uni-forms-item label="密码" required name="password">
					<uni-easyinput v-model="valiFormData.password" placeholder="请输入密码" type="password" />
				</uni-forms-item>
			</uni-forms>
			<button type="primary" @click="submit()">提交</button>
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
