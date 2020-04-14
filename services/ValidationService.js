import notify from '@/services/NotificationService'
import NetworkStatus from '@/services/NetworkStatus'
const set = require('lodash.set')
const get = require('lodash.get')
function checkRequestCodeStatus (req) {
  if (req && req.response.status) {
    return req.response.status
  }
  return 0
}
export function validateState (name) {
  const n = name.split('.')
  let p = this.$v.form[n.shift()]
  n.forEach((e) => {
    p = p[e]
  })
  const { $dirty, $error } = p
  return $dirty ? !$error : null
}
export const serverValidator = getter => function (value) {
  return this.vPromise ? this.vPromise.catch((res) => {
      if (undefined !== res.response.data.formErrors && undefined !== get(res.response.data.formErrors, getter)) {
        set(this.serverErrors, getter, get(res.response.data.formErrors, getter))
        return false
      }
      return true
    }
  ) : true
}

export const clearServerErrors = function () {
  if (undefined === this.vPromise) {
    throw new Error('$v.vPromise must be defined.')
  }
  if (undefined === this.serverErrors) {
    throw new Error('$v.serverErrors must be defined.')
  }
  this.vPromise = null
  this.$v.$touch()
  Object.keys(this.serverErrors).forEach((k) => {
    this.serverErrors[k] = []
  })
}
export default function (res, customError) {
  const errors = []
  if (checkRequestCodeStatus(res) !== 422) {
    const dataError = new NetworkStatus(res.status, res.message, res.data)
    if (checkRequestCodeStatus(res) === 409 || checkRequestCodeStatus(res) === 406) {
      dataError.message = dataError.data && dataError.data.message ? dataError.data.message : dataError.message
    }
    if (res.response.data.hasOwnProperty('messageDescription')) {
      notify({ type: 'error', text: customError || res.response.data.messageDescription })
    } else {
      notify({ type: 'error', text: customError || res.response.data.message })
    }
  } else if (res.response.data.hasOwnProperty('formErrors')) {
      for (const [key, value] of Object.entries(res.response.data.formErrors)) {
        errors[key] = value
        const text = customError || `${key}, ${value}`
        notify({ type: 'error', text })
      }
      return errors
    } else if (res.response.data.message && typeof res.response.data.message === 'string') {
    console.log(3)
      notify({ type: 'error', text: customError || res.response.data.message })
    } else if (res.response.message) {
    console.log(4)
      notify({ type: 'error', text: customError || res.response.data.message })
    }
}
