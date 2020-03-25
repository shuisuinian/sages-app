import WXrequest from '@/utils/request'
import config from '@/utils/config'
import Vue from 'vue'
Vue.prototype.$httpWX = WXrequest

export function login () {
  console.log('login check')
  // 登录检查
  wx.checkSession({
    success: (result) => {
      console.log('存在登录态')
    },
    fail: () => {
      console.log('重新登录')
      wx.login({
        success: res => {
          console.log('获取code成功')
          console.log(res.code)
          wx.request({
            url: config.URL + '/login',
            data: {
              code: res.code
            },
            header: { 'content-type': 'application/x-www-form-urlencoded' },
            method: 'POST',
            success: (result) => {
              console.log('111' + JSON.stringify(result))
              var data = result.data
              wx.setStorage({
                key: 'token',
                data: data.data,
                success: (result) => {
                  console.log('存入token')
                  this.getUserInfo(this.globalData)
                },
                fail: () => { }
              })
            },
            fail: () => {
              console.log('登录失败')
            }
          })
        }
      })
    }
  })
}

export default{
  login
}
