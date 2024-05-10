// import axios, from "axios";
// import {message, Modal} from "antd";
// import {NProgress} from "nprogress";
// import {clear, get} from "./storage";
//
// const service = axios.create({
//   baseURL: "http://127.0.0.1:5000",
//   timeout: 5000,
// })
//
// service.interceptors.request.use(
//     config => {
//       NProgress.start();
//       config.headers['Authorization'] = get('token')
//       return config
//     },
//     error => {
//       NProgress.done()
//       return Promise.reject(error)
//     }
// )
//
// service.interceptors.response.use(
//     response => {
//       NProgress.done()
//       if (response.status === 200) {
//         const {code} = response.data
//         if (code === 4003) {
//           message.warning('你的登陆状态已丢失，请退出后重新登陆')
//           return Promise.reject('请登陆')
//         } else if (code === 4000) {
//           clear()
//           return Promise.reject('认证失败！')
//         }
//
//         return response
//       } else {
//         Modal.error({title: '请求网络失败！'})
//       }
//       return Promise.reject('网络请求错误！')
//     },
//     error => {
//       Modal.error({title: '网络请求错误！'})
//       NProgress.done()
//       return Promise.reject(error)
//     }
// )
//
//
// export default service
