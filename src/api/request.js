import axios from 'axios'

const service = axios.create({
  baseURL: `${import.meta.env.VITE_BASIC_API}/api`,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    config.headers['Authorization'] = 'Bearer ' + '777632157a7b1af6035233d3c6c0f6e42a502f2998314a5383ea8b6355f36f6a8679f4dd36ec7711b6d291df2d701f8dbef26f56adc02a31a336a5d767143c4cdd2b82965be39ddaa5774ca1fcc981e91333ae98e89e401a9ddd5712afe6c9b469ced01befaa29f96d0f3ac1f2c46ca5fa0b58dbf9dc90799dda8cea4238ecfd'
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据做些什么
    return response.data
  },
  error => {
    // 对响应错误做些什么
    return Promise.reject(error)
  }
)

export default service

//tips
// import request from '@/request.js'

// export default {
//   data () {
//     return {
//       users: []
//     }
//   },
//   mounted () {
//     request.get('/users')
//       .then(response => {
//         this.users = response
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   },
//   methods: {
//     createUser (user) {
//       request.post('/users', user)
//         .then(response => {
//           console.log(response)
//         })
//         .catch(error => {
//           console.log(error)
//         })
//     }
//   }
// }

