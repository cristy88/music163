<script setup>
	import { ref } from 'vue'
	import { loginApi, loginStatusApi } from '../../services/index.js'
	import { useUserInfo } from '@/store/userInfo'
	
	const userInfo = useUserInfo()
	
	const getLoginStatu = async () => {
		const status = await loginStatusApi()
		if (status.data.account && status.data.account.status === 0) {
			uni.setStorageSync('id', String(status.data.account.id))
			if (!userInfo.profile || !userInfo.musicSum) {
				// 登录成功后调用  获取用户详细信息,保存为全局数据
				userInfo.getUserInfo()
			}
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
			// console.log('success', res)
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
	<view class="login">
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
	.login {
		padding-top: rpx(150);
	}
	.example {
		width: rpx(273);
		height: rpx(296);
		margin: 0 auto;
	}
</style>
