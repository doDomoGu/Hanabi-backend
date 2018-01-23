import request from '@/utils/request'

export function getList(accessToken) {
  return request({
    url: '/game',
    method: 'get',
    params: { accessToken }
  })
}
