import createCache from 'vuex-cache'
export const plugins = [
  createCache({ timeout: 1000 * 60 * 10 }),// 10min
]
