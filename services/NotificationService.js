import Vue from 'vue'

export default function notify (options) {
  Vue.prototype.$notify({ group: 'alert', ...options })
};
