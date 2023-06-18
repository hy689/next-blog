import { message } from 'antd';
import { isObject, isString } from './index'
// import toLoginPage from './toLoginPage'
const handleError = err => {
  // if (err && err.errorCode === 2) {
  //   Message({
  //     type: 'error',
  //     message: '即将跳转登录页'
  //   })

  //   setTimeout(() => toLoginPage(), 3000)

  //   return
  // }

  //重复请求不报错
  if (err && err.message === 'duplicated request') {
    console.warn(err)
    return
  }

  var msg = err
  if (isObject(err) && isString(err.message)) {
    msg = err.message
  }


  message.error(msg)
}

export default handleError
