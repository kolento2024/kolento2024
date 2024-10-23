<template>
  <div class="home">
    <Top/>
    <div class="cont-box filter-box">
      <div class="con">
        <Filter/>
      </div>
    </div>

    <div class="cont-box pro-wrap">
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

    <img class="miao" style="width: 360px" src="@/assets/images/miao.webp" alt="">

    <Bottom/>
    
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { Tag } from 'vant';
  import Top from '@/components/top.vue'
  import Filter from '@/components/filter.vue'
  import Bottom from '@/components/bottom.vue'

  let proGroup = ref([
    {name:'个人博客',id:1,num:'A001',tech:'div+css',price:10,page:1},
    {name:'个人博客',id:2,num:'A002',tech:'div+css',price:10,page:1},
    {name:'个人博客',id:3,num:'A003',tech:'div+css',price:10,page:1},
    {name:'个人博客',id:4,num:'A004',tech:'div+css',price:10,page:1},
    {name:'个人博客',id:5,num:'A005',tech:'div+css',price:10,page:1},
    {name:'个人博客',id:6,num:'A006',tech:'div+css',price:10,page:1},
    {name:'个人博客',id:7,num:'A007',tech:'div+css',price:10,page:1},
    {name:'个人博客',id:8,num:'A008',tech:'div+css',price:10,page:1},
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
  .home {
    background: #F8E6E6;
    position: relative;
    .miao {
      position: fixed;
      bottom: 0;
      right: 30px;
    }
  }
  .cont-box {
    // background: #eff2f5;
    padding: 4.8rem 1rem 1.2rem;
    .con {
      max-width: 1440px;
      margin:0 auto;
    }
  }
  // .filter-box {
  //   background: url('@/assets/images/bj2.png') no-repeat top center;
  //   background-size: cover;
  // }
  .pro-wrap {
    // background: #fff;
    padding: 0.2rem 0.8rem 1rem;
    
  }
  .pro-box {
    max-width: 1440px;
    margin:0 auto;
    position: relative;
    z-index:200;
    .pro-con {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }
    .pro-list {
      background: rgba(248,249,250,0.7);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
      cursor: pointer;
      padding-bottom: 0.6rem;
      .pro-img {
        width: 100%;
        overflow: hidden;
        height: 15rem;
        border-radius:0.4rem 0.4rem 0 0;
        position: relative;
        img{
          width: 100%;
          transition:all ease 0.3s;
          transform: scale(1);
          object-fit: cover;
        }
        // img:hover{
        //   transform: scale(1.1);
        // }
      }
      .name {
        padding:1rem 0.6rem 0.2rem 0.6rem;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: bold;
        font-size: 1.2rem;
      }
      .desc {
        padding:0.6rem 0.6rem 0 0.6rem;
        p{margin-bottom: 0.4rem;}
      }
      .info {
        position: absolute;
        bottom: 0;
        left: 0;
        background: linear-gradient(180deg,transparent,rgba(0,0,0,.8));
        display:flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding:0.6rem 0.6rem;
        p{margin-bottom: 0;}
        .price {color:#fafd00;}
        .page {color:#fff;}
      }
    }
    .pro-list:hover {
      transform: translateY(-10px);
    }
  }


</style>
 