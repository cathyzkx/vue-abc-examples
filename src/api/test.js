import fetch from '../utils/fetch'

// 仓库管理-仓库列表
export function test (params) {
  return fetch({
    url: '/tool/test',
    method: 'get',
    params
  })
}
