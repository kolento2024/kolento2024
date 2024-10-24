<template>
  <div class="prolist">
    <Top/>
    
    <div class="container filter-box">
      <div class="con">
        <Filter/>
      </div>
    </div>

    <div class="pro-box">
      <section class="saas-landing">
        <div class="container">
          <div class="row">
            <h2 class="title">搜索结果</h2>
            <div class="col-md-3 col-sm-6 col-xs-12" v-for="(item,idx) in proGroup" :key="idx">
              <div class="item-imag">
                <div class="img-box">
                  <img :src="item.pic" class="img-responsive radius" alt="">
                </div>
                <div class="product-title">
                  <p class="name">{{ item.name }}</p>
                  <div class="info">
                    <p class="price"><b>价格:</b>{{ item.price }}元</p>
                    <p class="num"><b>编号:</b>{{ item.num }}</p>
                    <p class="page"><b>页数:</b>{{ item.page }}</p>
                  </div>
                </div>

                </div>
            </div>
            
          </div>

          <van-pagination v-model="currentPage" :page-count="total" mode="simple" />
        </div>
      </section>
    </div>


    
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { Tag,Pagination  } from 'vant';
  import Top from '@/components/top.vue';
  import Filter from '@/components/filter.vue';

  // 列表搜索结果
  import proPic from '@/assets/images/product/blog-1.png';
  let proGroup = ref([
    {id:1,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:proPic,num:'A001'},
    {id:2,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:proPic,num:'A001'},
    {id:3,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:proPic,num:'A001'},
    {id:4,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:proPic,num:'A001'},
    {id:1,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:proPic,num:'A001'},
    {id:2,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:proPic,num:'A001'},
    {id:3,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:proPic,num:'A001'},
    {id:4,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:proPic,num:'A001'},
    {id:1,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:proPic,num:'A001'},
    {id:2,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:proPic,num:'A001'},
    {id:3,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:proPic,num:'A001'},
    {id:4,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:proPic,num:'A001'},
  ])

  // 分页
  let currentPage = ref(1);
  let total = ref(20);
  
</script>

<style scoped lang="scss">
  .filter-box {
    padding: 100px 20px 40px;
  }

  p {
      margin: 0px;
  }

  body {
    overflow-x: hidden;
  }

  .product-landing {
    padding-top: 113px;
    padding-bottom: 70px;
  }

  .radius {
    border-radius: 4px 4px 0 0;
  }

  .title {
    font-family: 'Open Sans', sans-serif;
    font-size: 30px;
    color: #000;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    padding-bottom: 80px;
  }

  .product-title {
    font-size: 15px;
    color: #4f4f4f;
    text-align: center;
    height: 95px;
    padding-top: 25px;
    overflow: hidden;
    display: block;
    position: relative;
    background: #fff !important;
    font-weight: 400;
  }

  .item-imag {
    transition: .3s;
    border-radius: 6px 6px 0 0;
    -webkit-box-shadow: 0px 0px 57px -11px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 0px 57px -11px rgba(0,0,0,0.3);
    box-shadow: 0px 0px 57px -11px rgba(0,0,0,0.3);
    position: relative;
    .name {font-size: 20px;font-weight: bold;}
    .img-box {overflow: hidden;}
    img {transition:all ease 0.3s;}
  }

  .item-imag:hover {
    transition: .3s;
    border-radius: 0 0 6px 6px;
    border-radius: 6px;
  }

  .item-imag:hover .product-title {
    background: #df8888 !important;
    color: #fff;
    transition: .5s;
    border-radius: 0 0 4px 4px;
    box-shadow: 0px 4px 6px -3px #959595;
  }

  .item-imag:hover img {
    transform: scale(1.1);
  }

  .info {
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding:16px 20px 0;
    p{margin-bottom: 0;}
    .price {color:#333;}
    .page {color:#333;}
  }

  .item-imag:hover .info {
    .price {color:#fafd00;}
    .page {color:#fff;}
  }

  .item-imag span{
    position: absolute;
    top: -13px;
    right: 0;
    background: #df8888;
    width: 60px;
    height: 25px;
    border-radius: 40px;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    line-height: 25px;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15);

  }

  .item-imag:after {
    content: '';
  }

  .saas-landing {
    background: #f7f7f7;
    padding: 120px 0;
  }

  .col-md-3 {
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 1200px) {
    .num {
      display: none;
    }
  }

  @media only screen and (max-width: 860px) {
    .view-demo {
      margin-right: 0px;
      margin-bottom: 20px;
    }
    .num {
      display: none;
    }
  }

  @media only screen and (max-width: 413px) {
    .product-landing .col-xs-12 {
      margin-bottom: 40px;
    }
    .saas-landing .col-xs-12 {
      margin-bottom: 40px;
    }
    .num {
      display: none;
    }
  }

  @media (max-width:991px){
    .col-sm-6{
        margin-bottom: 40px;
    }
    .num {
      display: none;
    }
  }
  @media all and (min-width: 412px) and (max-width: 767px) {
    .col-xs-12 {
      width: 56%;
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: 40px;
    }
    .num {
      display: none;
    }
  }


</style>
 