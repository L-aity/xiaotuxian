<script setup lang="ts">
import { getBannerApi } from '@/apis/Banner.API'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { type bannerDataType } from '@/utils/TSinterface'
const router = useRouter()
const bannerList = ref([]) as any
const getBanner = async () => {
  const { result } = (await getBannerApi()) as any
  bannerList.value = result
}
const toOther = (item: bannerDataType) => {
  router.push(item.hrefUrl)
}
onMounted(() => {
  getBanner()
})
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="" @click="toOther(item)" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
    cursor: pointer;
  }
}
</style>


<!--<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// ✅ 直接在组件内定义类型
interface BannerItem {
  id: number
  imgUrl: string
  hrefUrl: string
  title?: string
}

// 轮播图静态数据
const bannerList = ref<BannerItem[]>([
  {
    id: 1,
    imgUrl: '/images/banner1.jpg',
    hrefUrl: '/',
    title: '春季新品'
  },
  {
    id: 2,
    imgUrl: '/images/banner2.jpg',
    hrefUrl: '/',
    title: '夏日特惠'
  },
  {
    id: 3,
    imgUrl: '/images/banner3.jpg',
    hrefUrl: '/',
    title: '会员专享'
  }
])

const toOther = (item: BannerItem) => {
  router.push(item.hrefUrl)
}
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="" @click="toOther(item)" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
    cursor: pointer;
    object-fit: cover;
  }
}
</style>
-->