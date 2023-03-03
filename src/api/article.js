import request from '@/api/request.js'

const articleApi = {
  getAboutme () {
    return request.get('/aboutme?populate=*')
  }
}

export default articleApi

//API 使用
// export default function getAboutMe () {
//   instance.get('/aboutme')
//     .then(function (response) {
//       // 处理成功的响应
//       console.log(response.data) // 打印响应数据
//       console.log(response.status) // 打印响应状态码
//       console.log(response.headers) // 打印响应头部信息
//       console.log(response.config) // 打印请求配置信息
//     })
//     .catch(function (error) {
//       // 处理失败的响应或异常
//       if (error.response) {
//         // 请求已发送，但服务器返回了错误状态码或消息
//         console.log(error.response.data)
//         console.log(error.response.status)
//         console.log(error.response.headers)
//       } else if (error.request) {
//         // 请求已发送，但没有收到任何响应或超时了
//         console.log(error.request)
//       } else {
//         // 请求在发送之前就发生了错误，比如设置错误参数或网络问题等等
//         console.log('Error', error.message)
//       }
//     })
// }

// import request from '@/request.js'

// const userApi = {
//   getUsers () {
//     return request.get('/users')
//   },

//   createUser (user) {
//     return request.post('/users', user)
//   },

//   updateUser (id, user) {
//     return request.put(`/users/${id}`, user)
//   },

//   deleteUser (id) {
//     return request.delete(`/users/${id}`)
//   }
// }

// export default userApi

