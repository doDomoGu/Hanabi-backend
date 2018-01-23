import request from '@/utils/request'

export function getList(accessToken) {
  return request({
    url: '/user',
    method: 'get',
    params: { accessToken }
  })
}
