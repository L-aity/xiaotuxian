// src/apis/home.ts
import request from '@/utils/request'

// 首页相关API
export const homeAPI = {
  // 获取热门数据
  getHot: () => request.get('/api/home/hot'),
  
  // 获取新品数据
  getNew: () => request.get('/api/home/new'),
  
  // 获取商品数据
  getGoods: () => request.get('/api/home/goods'),
  
  // 获取分类头部
  getCategoryHead: () => request.get('/api/home/category/head')
}