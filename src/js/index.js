// 本地存储
const localStorage = {
  fetch (STORAGE_KEY) {
    return window.localStorage.getItem(STORAGE_KEY) || ''
  },
  save (STORAGE_KEY, items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }
}

export {
  localStorage
}
