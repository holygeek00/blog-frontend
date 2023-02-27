import axios from "axios"

// 引入axios模块

const auth = 'Bearer ' + '777632157a7b1af6035233d3c6c0f6e42a502f2998314a5383ea8b6355f36f6a8679f4dd36ec7711b6d291df2d701f8dbef26f56adc02a31a336a5d767143c4cdd2b82965be39ddaa5774ca1fcc981e91333ae98e89e401a9ddd5712afe6c9b469ced01befaa29f96d0f3ac1f2c46ca5fa0b58dbf9dc90799dda8cea4238ecfd'

// 创建一个axios实例
const instance = axios.create({
  baseURL: 'https://blog.naassh.com/api/', // 设置基础URL
  timeout: 1000, // 设置超时时间
  headers: { 'Authorization': auth },
  validateStatus: function (status) { // 定义哪些状态码表示成功的响应
    return status >= 200 && status < 300 // 默认值
  }
})

export default instance

// // 使用axios实例发送GET请求，并处理响应或错误
// instance.get('/users')
//   .then(function (response) {
//     // 处理成功的响应
//     console.log(response.data) // 打印响应数据
//     console.log(response.status) // 打印响应状态码
//     console.log(response.headers) // 打印响应头部信息
//     console.log(response.config) // 打印请求配置信息
//   })
//   .catch(function (error) {
//     // 处理失败的响应或异常
//     if (error.response) {
//       // 请求已发送，但服务器返回了错误状态码或消息
//       console.log(error.response.data)
//       console.log(error.response.status)
//       console.log(error.response.headers)
//     } else if (error.request) {
//       // 请求已发送，但没有收到任何响应或超时了
//       console.log(error.request)
//     } else {
//       // 请求在发送之前就发生了错误，比如设置错误参数或网络问题等等
//       console.log('Error', error.message)
//     }
//   })
