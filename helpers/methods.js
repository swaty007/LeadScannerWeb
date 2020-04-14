import moment from 'moment'

export function findIndexByUuid (uuid, arr) {
  return arr.findIndex((el) => {
    if (el.uuid === uuid) {
      return true
    }
  })
}

export function fillYearList (startYear, Array) {
  for (let i = startYear; i <= moment().year(); i++) {
    Array.push({ name: i.toString(), uuid: i.toString() })
  }
}
