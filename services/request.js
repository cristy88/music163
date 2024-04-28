
const BaseURL = 'https://zyxcl.xyz/music/api'

// 封装请求函数
export const request = ({ url, method = 'GET', data = {}, header = {} }) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BaseURL + url,
      method,
      data: {
        cookie: uni.getStorageSync('curCookie') || '',
        ...data
      },
      header,
      withCredentials: true, // 跨域请求携带 cookie
      success: res => {
        resolve(res.data)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}
