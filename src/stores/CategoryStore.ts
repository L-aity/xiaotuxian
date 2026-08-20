import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import { getCategoryApi } from '@/apis/CategoryAPI'
// 获取分类
export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([]) as any
  const getCategory = async () => {
    const { result } = (await getCategoryApi()) as any
    categoryList.value = result
  }
  onMounted(() => {
    getCategory()
  })
  return {
    categoryList,
    getCategory
  }
})

/*import { defineStore } from 'pinia'
import request from '@/utils/request'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: []
  }),
  actions: {
    async getCategoryHead() {
      try {
        // ❌ 错误写法
        // const res = await request.get('https://pcapi-xiaotuxian-front-devtest.itheima.net/home/category/head')
        
        // ✅ 正确写法
        const res = await request.get('/api/home/category/head')
        this.categories = res.data
        return res
      } catch (error) {
        console.error('获取分类数据失败：', error)
        throw error
      }
    }
  }
})
  */