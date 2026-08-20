<script setup lang="ts">
import HomePanel from './HomePanel.vue'
import { getNewApi } from '@/apis/NewAPI'
import { ref, onMounted } from 'vue'
const newList = ref([]) as any
const getNew = async () => {
  const { result } = (await getNewApi()) as any
  newList.value = result
}
onMounted(() => {
  getNew()
})
</script>

<!--<script setup lang="ts">
import { onMounted } from 'vue'
import request from '@/utils/request'

const getNewData = async () => {
  try {
    // ❌ 错误写法
    // const res = await request.get('https://pcapi-xiaotuxian-front-devtest.itheima.net/home/new')
    
    // ✅ 正确写法
    const res = await request.get('/api/home/new')
    console.log('新品数据：', res)
  } catch (error) {
    console.error('获取新品数据失败：', error)
  }
}

onMounted(() => {
  getNewData()
})
</script>
-->
<template>
  <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
    <ul class="goods-list">
      <li v-for="item in newList" :key="item.id">
        <RouterLink :to="`detail/${item.id}`">
          <img :src="item.picture" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="price">&yen;{{ item.price }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
