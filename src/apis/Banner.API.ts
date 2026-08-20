//import instance from '@/utils/request'
// 获取banner图
//export const getBannerApi = (distributionSite = 1) => {
//  return instance.get('/api/home/banner', { params: { distributionSite } })
//}
import request from '@/utils/request'

export const getBannerApi = () => {
  console.log('请求地址:', '/api/home/banner')  // ← 添加这行
  return request({
    url: '/api/home/banner',   // ← 必须是 /api/home/banner
    method: 'get',
    params: {
      distributionSite: 1
    }
  })
}