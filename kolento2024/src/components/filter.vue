<template>
  <div class="filter">
    <van-collapse v-model="active">
      <van-collapse-item title="主题" name="1">
        <ul class="tag-con">
          <li :class="['tag-list',item.choosed?'list-on':'']" v-for="(item,idx1) in themeGroup" :key="idx1" @click="choose(item,themeGroup)">
            {{ item.name }}
          </li>
        </ul>
      </van-collapse-item>
      <van-collapse-item title="技术栈" name="2">
        <ul class="tag-con">
          <li :class="['tag-list',item.choosed?'list-on':'']" v-for="(item,idx2) in techGroup" :key="idx2" @click="choose(item,techGroup)">
            {{ item.name }}
          </li>
        </ul>
      </van-collapse-item>
      <van-collapse-item title="价格" name="3">
        <ul class="tag-con">
          <li :class="['tag-list',item.choosed?'list-on':'']" v-for="(item,idx3) in priceGroup" :key="idx3" @click="choose(item,priceGroup)">
            {{ item.name }}
          </li>
        </ul>
      </van-collapse-item>
      <van-collapse-item title="页数" name="4">
        <ul class="tag-con">
          <li :class="['tag-list',item.choosed?'list-on':'']" v-for="(item,idx4) in pageGroup" :key="idx4" @click="choose(item,pageGroup)">
            {{ item.name }}
          </li>
        </ul>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  import {Collapse, CollapseItem} from 'vant';
  let active = ref(['1','2','3','4']);

  // 主题
  let themeGroup = ref([
    {name:'全部',id:1,choosed:true},
    {name:'企业官网',id:2,choosed:false},
    {name:'后台管理系统',id:3,choosed:false},
    {name:'毕业设计',id:4,choosed:false},
    {name:'动漫卡通',id:5,choosed:false},
    {name:'节日',id:6,choosed:false},
    {name:'美食',id:7,choosed:false},
    {name:'电商',id:8,choosed:false},
    {name:'影视',id:9,choosed:false},
    {name:'汽车',id:10,choosed:false},
    {name:'体育',id:11,choosed:false},
    {name:'宠物',id:12,choosed:false},
    {name:'体育',id:13,choosed:false},
    {name:'其他',id:14,choosed:false},
  ])
  // 技术栈
  let techGroup = ref([
    {name:'全部',id:1,choosed:true},
    {name:'div+css',id:2,choosed:false},
    {name:'h5+css+js',id:3,choosed:false},
    {name:'vue',id:4,choosed:false},
    {name:'微信小程序',id:5,choosed:false},
  ])
  // 价格
  let priceGroup = ref([
    {name:'全部',id:1,choosed:true},
    {name:'10元特价',id:2,choosed:false},
    {name:'15元',id:3,choosed:false},
    {name:'20元',id:4,choosed:false},
    {name:'25元',id:5,choosed:false},
    {name:'30元',id:6,choosed:false},
    {name:'30元以上',id:7,choosed:false},
  ])
  // 页数
  let pageGroup = ref([
    {name:'全部',id:1,choosed:true},
    {name:'1页',id:2,choosed:false},
    {name:'2-5页',id:3,choosed:false},
    {name:'6-10页',id:4,choosed:false},
    {name:'10页以上',id:5,choosed:false},
  ])
  // 选择筛选项
  let choose=(item,group)=>{
    group.map(list=>{
      list.choosed=false;
    })
    item.choosed=true;
  }
</script>

<style scoped lang="scss">
  .filter {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius:0.5rem;
    overflow: hidden;
  }
  .tag-con {
    display:flex;
    align-items: center;
    flex-wrap: wrap;
    .tag-list {
      cursor: pointer;
      color:#f8395d;
      border-radius:0.3rem;
      margin:0.2rem 0.5rem 0.2rem 0;
      padding:0.1rem 0.4rem 0.05rem;
      border:1px solid #f8395d;
      transition:all ease 0.2s;
    }
    .tag-list:hover {
      background: #f8395d;
      color:#fff;
      border-color:#f8395d;
    }
    .list-on {
      background: #f8395d;
      color:#fff;
      border-color:#f8395d;
    }
  }
</style>