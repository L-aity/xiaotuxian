import instance from '@/utils/request'
// 获取结算页面的信息
export const getCheckoutInfoApi = () => {
  return instance.get('/api/member/order/pre')
}
// 删除地址
export const delAddressApi = (id: string) => {
  return instance.delete(`/api/member/address/${id}`)
}
// 添加地址
export const addAddressApi = (data: any) => {
  return instance.post('/api/member/address', data)
}
// 修改地址
export const editAddressApi = (id: string, data: any) => {
  return instance.put(`/api/member/address/${id}`, data)
}
