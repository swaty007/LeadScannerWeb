import ApiService from '~/services/api'

export function postFile (data) {
  return new Promise((resolve, reject) => {
    ApiService.downloadFile('/file', data)
      .then((response) => {
        resolve(response.payload)
      }).catch((error) => {
      reject(error)
    })
  })
}
