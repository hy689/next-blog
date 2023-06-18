export const isObject = obj => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export const isFunction = obj => {
  return Object.prototype.toString.call(obj) === '[object Function]'
}

export const isString = obj => {
  return Object.prototype.toString.call(obj) === '[object String]'
}
