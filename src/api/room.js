import request from '@/utils/request'

export function getList(accessToken) {
  return request({
    url: '/room',
    method: 'get',
    params: { accessToken }
  })
}
