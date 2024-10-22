<template>
  <div class="top-box">
    <div class="logo-box">
      <img class="logo-pic" src="@/assets/images/kolento.png" alt="">
      <svg t="1729569172673" class="icon mobile" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5964" @click="openMenu">
        <path d="M274.285714 457.142857m22.125715 0l705.462857 0q22.125714 0 22.125714 22.125714l0 65.462858q0 22.125714-22.125714 22.125714l-705.462857 0q-22.125714 0-22.125715-22.125714l0-65.462858q0-22.125714 22.125715-22.125714Z" p-id="5965"></path>
        <path d="M274.285714 128m22.125715 0l705.462857 0q22.125714 0 22.125714 22.125714l0 65.462857q0 22.125714-22.125714 22.125715l-705.462857 0q-22.125714 0-22.125715-22.125715l0-65.462857q0-22.125714 22.125715-22.125714Z" p-id="5966"></path><path d="M274.285714 786.285714m22.125715 0l705.462857 0q22.125714 0 22.125714 22.125715l0 65.462857q0 22.125714-22.125714 22.125714l-705.462857 0q-22.125714 0-22.125715-22.125714l0-65.462857q0-22.125714 22.125715-22.125715Z" p-id="5967"></path>
        <path d="M73.142857 182.857143m-73.142857 0a73.142857 73.142857 0 1 0 146.285714 0 73.142857 73.142857 0 1 0-146.285714 0Z" p-id="5968"></path><path d="M73.142857 512m-73.142857 0a73.142857 73.142857 0 1 0 146.285714 0 73.142857 73.142857 0 1 0-146.285714 0Z" p-id="5969"></path><path d="M73.142857 841.142857m-73.142857 0a73.142857 73.142857 0 1 0 146.285714 0 73.142857 73.142857 0 1 0-146.285714 0Z" p-id="5970"></path>
      </svg>
    </div>
    <div class="menu-box pc">
      <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
    </div>
    <van-search v-model="keyWords" placeholder="请输入搜索关键词"  shape="round" background="#fff" />

  </div>

  <van-action-sheet v-model:show="show" :actions="menuGroup" @select="onSelect" />
</template>

<script setup>
  import { Icon,Search,ActionSheet  } from 'vant';
  import { h, ref } from 'vue';
  import { HomeOutlined,LikeOutlined,SmileOutlined,VideoCameraOutlined,MessageOutlined } from '@ant-design/icons-vue';

  // 菜单栏
  const current = ref(['1']);
  const items = ref([
    {
      key: '1',
      icon: () => h(HomeOutlined),
      label: '首页',
      title: '首页',
    },
    {
      key: '2',
      icon: () => h(LikeOutlined),
      label: '10元特价',
      title: '10元特价',
    },
    {
      key: '3',
      icon: () => h(SmileOutlined),
      label: '爆款热卖',
      title: '爆款热卖',
    },
    {
      key: '4',
      icon: () => h(VideoCameraOutlined),
      label: '使用教程',
      title: '使用教程',
    },
    {
      key: '5',
      icon: () => h(MessageOutlined),
      label: '常见问题',
      title: '常见问题',
      // children: [
      //   {
      //     label: '如何使用',
      //     key: 'use',
      //   },
      //   {
      //     label: '进阶教程',
      //     key: 'more',
      //   },
      // ],
    },

  ]);

  // 搜索框
  let keyWords = ref('');
  let onSearch=()=>{
    console.log(keyWords);
  }

  // 弹出菜单栏
  let show = ref(false);
  let menuGroup = ref([
    {name:'首页'},
    {name:'10元特价'},
    {name:'爆款热卖'},
    {name:'使用教程'},
    {name:'常见问题'}
  ])
  let openMenu=()=>{
    show.value=true;
  }
  let onSelect=()=>{
    show.value=false;
  }
</script>

<style scoped lang="scss">
  .pc {display: flex;}
  .mobile {display: none;}
  .top-box {
    z-index:199;
    position: fixed;
    padding:0 0.2rem 0 1rem;
    width: 100%;
    height: 3.5rem;
    background: #df8888;
    box-shadow:0 2px 8px rgba(0, 0, 0, 0.15);
    display:flex;
    align-items: center;
    justify-content: space-between;
    
    .logo-box {
      display:flex;
      align-items: center;
      svg {width: 1.4rem;}
      .logo-pic {width: 38px;height: 38px;margin-right: 6px;}
    }

  }

  @media screen and (max-width: 1200px) {
    .pc {display: none!important;}
    .mobile {display: block!important;}
  }
</style>
