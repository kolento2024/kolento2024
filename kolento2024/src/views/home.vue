<template>
  <div class="home">
    <Top/>

    <section class="hero-area-fix">
      <div class="hero-area" id="water">
        <div class="container">
          <div class="row">
            <div class="hero-text">
              <h1>Kolento</h1>
              <div id="typed-strings">
                <h3>网页模版 个人网站 官网商城 后台系统</h3>
                <h3>HTML5 CSS3 JQUERY VUE 微信小程序</h3>
                <h3>海量网页模版 供您选择</h3>
              </div>
              <h3><span id="typed"></span></h3>
              <h4>登记去向 保证不重复</h4>
              <a href="#" class="btn view-demo" data-scroll-nav="1">查看案例</a>
              <a href="#" class="btn buy-now">使用教程</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="product-landing pro_d" data-scroll-index="1">
      <div class="container">
        <div class="row">
          <h2 class="title">10元特价</h2>
          <div class="col-md-4 col-sm-6 col-xs-12 pointer" v-for="(item,idx) in specialGroup" :key="idx" @click="goDetail(item.num)">
            <a href="drimo/index.html" target="_blank">
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
            </a>
          </div>
        </div>
        <p class="more more1">查看更多</p>
      </div>
    </section>

    <section class="saas-landing">
      <div class="container">
        <div class="row">
          <h2 class="title">热卖爆款</h2>
          <div class="col-md-3 col-sm-6 col-xs-12 pointer" v-for="(item,idx) in hotGroup" :key="idx" @click="goDetail(item.num)">
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

        <p class="more more2">查看更多</p>
      </div>
    </section>

    <section class="product-landing pro_d" data-scroll-index="1">
      <div class="container">
        <div class="row">
          <h2 class="title">个人博客</h2>
          <div class="col-md-4 col-sm-6 col-xs-12 pointer" v-for="(item,idx) in blogGroup" :key="idx" @click="goDetail(item.num)">
            <a href="drimo/index.html" target="_blank">
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
            </a>
          </div>
        </div>

        <p class="more more1">查看更多</p>
      </div>
    </section>

    <section class="saas-landing">
      <div class="container">
        <div class="row">
          <h2 class="title">企业官网</h2>
          <div class="col-md-3 col-sm-6 col-xs-12 pointer" v-for="(item,idx) in webGroup" :key="idx" @click="goDetail(item.num)">
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

        <p class="more more2">查看更多</p>
      </div>
    </section>

    
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  import {useRouter} from 'vue-router';
  import Top from '@/components/top.vue';

  // 特价产品示图
  import specialPic1 from '@/assets/images/product/index-1.png';

  // 特价数据
  let specialGroup = ref([
    {id:1,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:specialPic1,num:'A001'},
    {id:2,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:specialPic1,num:'A002'},
    {id:3,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:specialPic1,num:'A003'},
    {id:4,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:specialPic1,num:'A004'},
    {id:5,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:specialPic1,num:'A005'},
    {id:6,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:specialPic1,num:'A006'},
  ])

  // 热卖爆款
  import hotPic1 from '@/assets/images/product/blog-1.png';
  let hotGroup = ref([
    {id:1,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:hotPic1,num:'A001'},
    {id:2,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:hotPic1,num:'A001'},
    {id:3,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:hotPic1,num:'A001'},
    {id:4,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:hotPic1,num:'A001'},
  ])

  // 个人博客
  import blogPic1 from '@/assets/images/product/index-1.png';
  let blogGroup = ref([
    {id:1,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:blogPic1,num:'A001'},
    {id:2,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:blogPic1,num:'A001'},
    {id:3,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:blogPic1,num:'A001'},
    {id:4,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:blogPic1,num:'A001'},
    {id:3,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:blogPic1,num:'A001'},
    {id:4,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:blogPic1,num:'A001'},
  ])

  // 企业官网
  import webPic1 from '@/assets/images/product/blog-1.png';
  let webGroup = ref([
    {id:1,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:webPic1,num:'A001'},
    {id:2,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:webPic1,num:'A001'},
    {id:3,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:webPic1,num:'A001'},
    {id:4,name:'静态页面模版',price:10,page:1,type:'special',tech:'div+css',pic:webPic1,num:'A001'},
  ])

  // 链接跳转
  let router = useRouter();
  let goDetail=(item)=>{
    router.push('/detail?num='+item.num);
  }
</script>

<style scoped lang="scss">
  .m0 {
      margin: 0;
  }

  .p0 {
      padding: 0;
  }

  body {
      font-family: 'Montserrat';
      font-weight: 300;
      font-size: 20px;
      line-height: 35px;
      color: #222;
  }

  a,
  .btn,
  button {
    text-decoration: none;
    outline: none;
    transition: all 0.6s ease-in-out;
    font-size: 16px;
  }

  a:hover,
  a:focus,
  .btn:hover,
  .btn:focus,
  button:hover,
  button:focus {
    text-decoration: none;
    outline: none;
  }

  .btn:focus,
  .btn:active:focus,
  .btn.active:focus,
  .btn.focus,
  .btn:active.focus,
  .btn.active.focus {
      outline: none !important;
      box-shadow: none !important;
  }
  .btn.view-demo.active{
      outline: none !important;
      box-shadow: none !important;
  }

  p {
      margin: 0px;
  }

  ul,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      margin: 0;
      list-style: none;
      padding: 0;
      margin: 0px;
  }

  section.row,
  header.row,
  footer.row {
      margin: 0;
  }

  body {
    overflow-x: hidden;
  }


  .hero-area-fix {
    position: relative;
    width: 100%;
    content: '';
    background: url('@/assets/images/header/slider-1.png') no-repeat scroll center center;
    background-size: cover;
    min-height: 900px;
    z-index: 1;
  }

  .product-landing .col-md-4{
    margin-bottom: 40px;
  }


  .hero-text {
    text-align: center;
    position: absolute;
    top: 25%;
    transform: translateY(-50%);
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
  }

  .hero-text h1 {
    font-family: 'Montserrat';
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 60px;
    text-shadow: 5px 5px 5px rgba(0,0,0,0.1);
  }

  .hero-text h3 {
    font-family: 'Open Sans', sans-serif;
    color: #fff;
    font-size: 24px;
    margin-top: 24px;
    margin-bottom: 25px;
    line-height: 28px;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    min-height: 40px;
    text-shadow: 5px 5px 5px rgba(0,0,0,0.1);
  }

  .hero-text h4 {
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    margin-bottom: 60px;
    text-shadow: 5px 5px 5px rgba(0,0,0,0.1);
  }

  .view-demo {
      font-family: 'Montserrat';
      font-size: 13px;
      text-transform: uppercase;
      background: #fff;
      color: #191919;
      padding: 15px 62px;
      border-radius: 50px;
      margin-right: 15px;
  }

  .view-demo:hover {
    color: #df8888;
  }

  .buy-now {
      font-family: 'Montserrat';
      font-size: 13px;
      text-transform: uppercase;
      background: #fff;
      color: #191919;
      padding: 15px 62px;
      border-radius: 50px;
  }

  @keyframes slideShow {
      0% {
          opacity: 1;
          transform: scale(1);
          -ms-transform: scale(1);
      }
      5% {
          opacity: 1
      }
      25% {
          opacity: 1;
      }
      30% {
          opacity: 1;
          transform: scale(1.1);
          -ms-transform: scale(1.1);
      }
      100% {
          opacity: 1;
          transform: scale(1);
          -ms-transform: scale(1);
      }
  }

  @-o-keyframes slideShow {
      0% {
          opacity: 1;
          -o-transform: scale(1);
      }
      5% {
          opacity: 1
      }
      25% {
          opacity: 1;
      }
      30% {
          opacity: 1;
          -o-transform: scale(1.1);
      }
      100% {
          opacity: 1;
          -o-transformm: scale(1);
      }
  }

  @-moz-keyframes slideShow {
      0% {
          opacity: 1;
          -moz-transform: scale(1);
      }
      5% {
          opacity: 1
      }
      25% {
          opacity: 1;
      }
      30% {
          opacity: 1;
          -moz-transform: scale(1.1);
      }
      100% {
          opacity: 1;
          -moz-transformm: scale(1);
      }
  }

  @-webkit-keyframes slideShow {
      0% {
          opacity: 1;
          -webkit-transform: scale(1);
      }
      5% {
          opacity: 1
      }
      25% {
          opacity: 1;
      }
      30% {
          opacity: 1;
          -webkit-transform: scale(1.1);
      }
      100% {
          opacity: 1;
          -webkit-transformm: scale(1);
      }
  }

  .buy-now:hover {
    background: #fff;
    color: #df8888;
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

  .footer-area {
    background: #161716;
    padding: 50px 0;
      
  }

  .fotter-head {
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 17px;
    line-height: 28px;
    font-weight: 400;
  }
  .fotter-head a{
    color: #78c81f;
  }
  .fotter-head a:hover{
    color: #64aa16;
  }

  .copyright {
    color: #97989b;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400px;
  }

  .line {
    background: #1aabec;
    height: 2px;
    width: 50px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 50px;
  }
  .mr{
      margin-top: 30px;
  }
  .mocc img {
      margin: 0 auto;
  }

  .mocc {
      margin-top: 75px;
  }

  .more {
    width: 180px;
    margin: 20px auto 12px;
    color: #323233;
    font-weight: 600;
    font-size: 16px;
    line-height: 50px;
    border-radius: 99px;
    transition:all ease 0.3s;
    text-align: center;
    cursor: pointer;
  }
  .more1 {
    background: #f7f8fa;
  }
  .more2 {
    background: #fff;
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
  }

  @media only screen and (max-width: 413px) {
    .product-landing .col-xs-12 {
        margin-bottom: 40px;
    }
    .saas-landing .col-xs-12 {
        margin-bottom: 40px;
    }
  }

  @media (max-width:991px){
    .col-sm-6{
        margin-bottom: 40px;
    }
  }
  @media all and (min-width: 412px) and (max-width: 767px) {
    .col-xs-12 {
        width: 56%;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 40px;
    }
  }


</style>
 