import ApiService from '../services/api'

export const actions = {
  getFilter (context, params) {
    return new Promise((resolve, reject) => {
      ApiService.get(`/filter/${params}`)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
