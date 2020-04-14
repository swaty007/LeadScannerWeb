export const nameTest = /^[_a-zA-Zа-яА-ЯёЁіІ'їЇєЄ0-9]*((-|\s)*[_a-zA-Zа-яА-ЯёЁіІ'їЇєЄ0-9])*$/

export function notGmail (value = '') {
  return !value.includes('gmail')
}

export function isNameSymbols (value = '') {
  return !!value.match(nameTest)
}
