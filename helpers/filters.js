import moment from 'moment'

export function toFixed (str, fractionDigits) {
  if (str && str % 1 !== 0) { return parseFloat(str).toFixed(fractionDigits) }
  return str
}

export function howTimePassed (val) {
  if (!val) return 'Еще не опубликована'
  return moment(val).locale('ru').fromNow()
}

export function joinArr (val) {
  const arrStr = []
  val.forEach((item) => {
    arrStr.push(item.name)
  })
  return arrStr.join(', ')
}

export function yearAfter (yearsList, obj, key) {
  if (!obj[key]) return yearsList
  return yearsList.filter(item => moment(item.name, 'YYYY').valueOf() >= moment(obj[key], 'YYYY').valueOf())
}

export function bytesToSize (bytes, sizeString = 'Bytes, KB, MB, GB, TB') {
  const sizes = sizeString.split(', ')
  if (bytes === 0) return `0 ${sizes[0]}`
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
  return `${Math.round(bytes / 1024 ** i, 2)} ${sizes[i]}`
}

export function linkify (text) {
  if (!text) return text
  // eslint-disable-next-line no-useless-escape
  const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
  return text.replace(urlRegex, function (url) {
    return '<a href="' + url + '" target="_blank" class="link">' + url + '</a>'
  })
}

export function isLink (text) {
  if (!text) return false
  // eslint-disable-next-line no-useless-escape
  const urlRegex = new RegExp(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig)
  return urlRegex.test(text)
}

export function localDate (data, isShowTime) {
  if (!data) return null
  const today = moment()
  const yesterday = moment().subtract(1, 'day')
  const addedTime = isShowTime ? ', ' + moment(data).locale(this.$i18n.locale).format('LT') : ''
  if (moment(data).isSame(today, 'day')) return this.$t('base.today') + addedTime
  if (moment(data).isSame(yesterday, 'day')) return this.$t('base.yesterday') + addedTime
  return moment(data).locale(this.$i18n.locale).format('DD MMMM') + addedTime
}

export function localDateShort (data) {
  if (!data) return null
  const today = moment()
  if (moment(data).isSame(today, 'day')) return moment(data).locale(this.$i18n.locale).format('LT')
  return moment(data).locale(this.$i18n.locale).format('DD MMM')
}
