<template>
  <div class="home">
    <Top/>
    <div class="content">
      <Filter/>
      <div class="pro-box">
        <ul class="pro-con">
          <li class="pro-list" v-for="(item, index) in proGroup" :key="index">
            <div class="pro-img">
              <img src="@/assets/images/demo.jpg" alt="" />
                <div class="info">
                <p class="price">价格：{{ item.price }}元</p>
                <p class="page">页数：{{ item.page }}</p>
              </div>
            </div>
            <div class="name" :title="item.name">{{ item.name }}</div>
            <div class="desc">
              <p class="p1 mini">编号：<van-tag type="success">{{ item.num }}</van-tag></p>
              <p class="p2 mini">技术：<van-tag type="primary">{{ item.tech }}</van-tag></p>
            </div>

          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { Tag } from 'vant';
  import Top from '@/components/top.vue'
  import Filter from '@/components/filter.vue'

  let proGroup = ref([
    {name:'个人博客',id:1,num:'A001',tech:'div+css',price:10,page:1},
    {name:'个人博客',id:2,num:'A002',tech:'div+css',price:10,page:1},
    {name:'个人博客',id:3,num:'A003',tech:'div+css',price:10,page:1},
    {name:'个人博客',id:4,num:'A004',tech:'div+css',price:10,page:1},
    {name:'个人博客',id:5,num:'A005',tech:'div+css',price:10,page:1},
    {name:'个人博客',id:6,num:'A006',tech:'div+css',price:10,page:1},
    {name:'个人博客',id:7,num:'A007',tech:'div+css',price:10,page:1},
    {name:'个人博客',id:8,num:'A008',tech:'div+css',price:10,page:1},
  ])
</script>

<style scoped lang="scss">
  .content {
    background: #eff2f5;
    padding: 4.6rem 1rem 1rem;
  }
  .pro-box {
    width: 100%;
    margin-top: 0.8rem;
    .pro-con {
      display:flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-between;
    }
    .pro-list {
      width: calc(25% - 0.6rem);
      background: #fff;
      border-radius:0.4rem;
      position: relative;
      overflow: hidden;
      margin-bottom: 0.8rem;
      .pro-img {
        width: 100%;
        overflow: hidden;
        height: 12rem;
        border-radius:0.4rem;
        position: relative;
        img{width: 100%;height: 100%;}
      }
      .name {
        padding:0.6rem 0.6rem 0 0.6rem;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .desc {
        padding:0.6rem 0.6rem 0 0.6rem;
        p{margin-bottom: 0.4rem;}
      }
      .info {
        position: absolute;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,0.4);
        display:flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding:0.4rem 0.6rem;
        p{margin-bottom: 0;}
        .price {color:#fafd00;}
        .page {color:#fff;}
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .pro-list {
      width: calc(33.33% - 0.4rem)!important;
    }
  }

  @media screen and (max-width: 1000px) {
    .pro-list {
      width: calc(50% - 0.4rem)!important;
    }
  }
</style>
 