import request from '@/utils/request'

export function getList(token) {
  return request({
    url: '/user',
    method: 'get',
    params: { token }
  })
}
