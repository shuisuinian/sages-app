import config from '@/utils/config'

const URL = config.URL

function request (url, method, data, header = {}) {
  wx.showLoading({
    title: '加载中'
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: URL + url,
      method: method,
      data: data,
      headers: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.hideLoading()
        resolve(res.data)
      },
      fail: function (res) {
        wx.hideLoading()
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  })
}

function get (obj) {
  return request(obj.url, 'GET', obj.data)
}

function post (obj) {
  return request(obj.url, 'POST', obj.data)
}

function put (obj) {
  return request(obj.url, 'PUT', obj.data)
}

function del (obj) {
  return request(obj.url, 'DELETE', obj.data)
}

export default {
  request,
  get,
  post,
  put,
  del
}
