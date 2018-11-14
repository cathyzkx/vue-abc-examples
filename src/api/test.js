import fetch from '../utils/fetch'

// 仓库管理-仓库列表
export function barChart1 (params) {
  return fetch({
    url: 'tool/echarts/bar-chart-1',
    method: 'get',
    params
  })
}
