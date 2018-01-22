import request from '@/utils/request'

export function login(username, password) {
  return request({
    // url: '/user/login',
    url: '/auth',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    // url: '/user/info',
    url: '/auth',
    method: 'get',
    params: { 'accessToken': token }
  })
}

export function logout() {
  return request({
    url: '/admin/logout',
    method: 'post'
  })
}
