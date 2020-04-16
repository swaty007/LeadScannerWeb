import ApiService from '../services/api'

export const actions = {
  getCompanyList (context, params) {
    return new Promise((resolve, reject) => {
      ApiService.get('/leadlist', params)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getCompany (context, uuid) {
    return new Promise((resolve, reject) => {
      ApiService.get(`/lead/${uuid}`)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
