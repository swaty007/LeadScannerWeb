'use strict'
/**
 * Success type of HTTP operation.
 * @constant
 * @type {string}
 */
const TYPE_SUCCESS = 'success'
/**
 * Warning type of HTTP operation. Not critical.
 * @constant
 * @type {string}
 */
const TYPE_WARNING = 'warning'
/**
 * Danger type of HTTP operation. Critical.
 * @constant
 * @type {string}
 */
const TYPE_DANGER = 'error'
/**
 * Informative type of HTTP operation.
 * @constant
 * @type {string}
 */
const TYPE_INFO = 'info'
/**
 * Create instant, which represent current status of network operation.
 * @param {number} status - HTTP status code.
 * @param {string|boolean} [message] - Custom message to display.
 * @param {Object} [data] - Custom data.
 */
export default function NetworkStatus (status, message, data = {}) {
  this.status = status
  this.message = message || this.getErrorMessage(status)
  this.type = this.getErrorType(status)
  this.data = data
}
/**
 * Return message for HTTP status code.
 * @param {number} status - HTTP status code.
 * @returns {string} Message of network operation.
 */
NetworkStatus.prototype.getErrorMessage = function (status) {
  let message = ''
  switch (status) {
    case 200:
      message = 'OK.'
      break
    case 201:
      message = 'Created.'
      break
    case 202:
      message = 'Accepted.'
      break
    case 304:
      message = 'Not Modified.'
      break
    case 400:
      message = 'Bad Request.'
      break
    case 401:
      message = 'Unauthorized.'
      break
    case 404:
      message = 'Not Found.'
      break
    case 406:
      message = 'Not Acceptable'
      break
    case 409:
      message = 'Conflict.'
      break
    case 410:
      message = 'Gone.'
      break
    case 411:
      message = 'Length Required.'
      break
    case 423:
      message = 'Locked.'
      break
    case 500:
      message = 'Internal Server Error.'
      break
    case 502:
      message = 'Bad Gateway.'
      break
    default:
      message = 'Oops! Something went wrong.'
      break
  }
  return message
}
/**
 * Returns type of HTTP operation.
 * @param {number} status - HTTP status code.
 * @returns {TYPE_INFO|TYPE_SUCCESS|TYPE_WARNING|TYPE_DANGER} Simple type of network operation.
 */
NetworkStatus.prototype.getErrorType = function (status) {
  let type
  switch (status) {
    case 200:
    case 201:
    case 202:
      type = TYPE_SUCCESS
      break
    case 304:
    case 400:
    case 401:
    case 423:
      type = TYPE_WARNING
      break
    case 404:
    case 406:
    case 409:
    case 410:
    case 411:
    case 500:
    case 502:
      type = TYPE_DANGER
      break
    default:
      type = TYPE_INFO
  }
  return type
}
