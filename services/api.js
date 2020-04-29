import { URL } from '../.env'
import HTTP from '../config/axios'
import { paramsSerializerQs, paramsSerializer, prepareParams } from '../helpers/api'

class ApiService {
  static async get (url, params) {
    try {
      const response = await HTTP.get(URL + url, {
        params: prepareParams(params),
        paramsSerializer: paramsSerializerQs,
      })
      return response.data
    } catch (error) {
      throw error
    }
  }

  static async getFile (url, params) {
    try {
      const response = await HTTP.get(URL + url, {
        responseType: 'arraybuffer',
      })
      return response.data
    } catch (error) {
      throw error
    }
  }

  static async post (url, data, config) {
    try {
      const response = await HTTP.post(URL + url, data, {
        transformRequest: [paramsSerializer],
        ...config,
      })
      return response.data
    } catch (error) {
      throw error
    }
  }

  static async put (url, data) {
    try {
      const response = await HTTP.put(URL + url, data, {
        transformRequest: [paramsSerializer],
      })
      return response.data
    } catch (error) {
      throw error
    }
  }

  static async delete (url, data) {
    try {
      const response = await HTTP.delete(URL + url, {
        data,
      })
      return response.data
    } catch (error) {
      throw error
    }
  }

  static async patch (url, data) {
    try {
      const response = await HTTP.patch(URL + url, data)
      return response.data
    } catch (error) {
      throw error
    }
  }

  static async downloadFile (url, data) {
    try {
      const response = await HTTP.post(URL + url, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response.data
    } catch (error) {
      throw error
    }
  }
}

export default ApiService
