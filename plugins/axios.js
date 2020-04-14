// import axios from './../config/axios'
// let isRefreshing = false
// let failedQueue = []
// const processQueue = (error, token = null) => {
//   failedQueue.forEach((prom) => {
//     if (error) {
//       prom.reject(error)
//     } else {
//       prom.resolve(token)
//     }
//   })
//
//   failedQueue = []
// }
// export default ({ store, app, req, redirect }) => {
//   axios.interceptors.request.use(
//     (config) => {
//       config.headers.locale = app.i18n.locale
//       const token = store.getters['auth/getAccessToken']
//       if (token) {
//         config.headers.Authorization = 'Bearer ' + token
//       }
//       return config
//     },
//     (error) => {
//       Promise.reject(error)
//     })
//
//   axios.interceptors.response.use(
//     response => response,
//     (error) => {
//       const originalRequest = error.config
//       if (error.response.status === 400 || error.response.code === 400) {
//         // If response is 400, logout
//         // app.router.push(app.localePath({ name: 'auth-login' }))
//         return Promise.reject(error)
//       }
//       // If 401 and I'm not processing a queue
//       if (error.response.status === 401 && !originalRequest._retry) {
//         if (isRefreshing) {
//           // If I'm refreshing the token I send request to a queue
//           return new Promise((resolve, reject) => {
//             failedQueue.push({ resolve, reject })
//           })
//             .then((token) => {
//               originalRequest.headers.Authorization = 'Bearer ' + token
//               return axios(originalRequest)
//             })
//             .catch(() => {
//               app.router.push(app.localePath({ name: 'auth-login' }))
//               // return Promise.reject(error)
//             })
//         }
//         // If header of the request has changed, it means I've refreshed the token
//         if (store.getters['auth/getAccessToken'] && originalRequest.headers.Authorization !== 'Bearer ' + store.getters['auth/getAccessToken']) {
//           originalRequest.headers.Authorization = 'Bearer ' + store.getters['auth/getAccessToken']
//           return Promise.resolve(axios(originalRequest))
//         }
//         if (!store.getters['auth/getAccessToken']) {
//           app.router.push(app.localePath({ name: 'auth-login' }))
//           return Promise.reject(error)
//         }
//         originalRequest._retry = true // mark request a retry
//         isRefreshing = true // set the refreshing var to true
//
//         // If none of the above, refresh the token and process the queue
//         return new Promise((resolve, reject) => {
//           const refreshToken = store.getters['auth/getRefreshToken']
//           store.dispatch('auth/refreshToken', refreshToken).then((response) => {
//             processQueue(null, store.getters['auth/getAccessToken'])
//             resolve(axios(originalRequest))
//           }).catch((error) => {
//             // processQueue(error, null)
//             app.router.push(app.localePath({ name: 'auth-login' }))
//             reject(error)
//           }).then(() => {
//             isRefreshing = false
//           })
//         })
//       }
//
//       return Promise.reject(error)
//     }
//   )
// }

// Test
// export default ({ store, app, req, redirect }) => {
//   axios.interceptors.request.use(
//     (config) => {
//       config.headers.locale = app.i18n.locale
//       const token = store.getters['auth/getAccessToken']
//       if (token) {
//         config.headers.Authorization = 'Bearer ' + token
//       }
//       return config
//     },
//     (error) => {
//       Promise.reject(error)
//     })
//
//   function createAxiosResponseInterceptor () {
//     // Refresh token
//     axios.axiosResponseInterceptor = axios.interceptors.response.use(
//       response => response,
//       (error) => {
//         const errorResponse = error.response
//         if (errorResponse.status === 401) {
//           axios.interceptors.response.eject(axios.axiosResponseInterceptor)
//           return store.dispatch('auth/refreshToken', store.getters['auth/getRefreshToken']).then((response) => {
//             store.dispatch('auth/setToken', response.data)
//             return axios(errorResponse.config)
//           }).catch(e => store.dispatch('auth/logOut')).finally(() => {
//             createAxiosResponseInterceptor()
//           })
//         }
//         return Promise.reject(error)
//       }
//     )
//   }
//   createAxiosResponseInterceptor()
// }
