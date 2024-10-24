<template>
  <div class="detail">
    <div class="tool-box">
      <div class="device-box">
        <div class="txt">设备切换</div>
        <ul class="icon-box">
          <li :class="['pc',active=='pc'?'on':'']" @click="chooseDevice('pc')">
            <svg t="1729753573747" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5674" ><path d="M0 227.555556c0-78.535111 62.520889-142.222222 139.662222-142.222223h744.675556C961.507556 85.333333 1024 149.020444 1024 227.555556v407.694222c0 78.563556-62.520889 142.222222-139.662222 142.222222H139.662222c-77.141333 0-139.662222-63.658667-139.662222-142.222222V227.555556z m139.662222-47.416889c-25.742222 0-46.563556 21.248-46.563555 47.416889v407.694222c0 26.168889 20.821333 47.416889 46.535111 47.416889h744.732444c25.685333 0 46.535111-21.219556 46.535111-47.416889V227.555556c0-26.168889-20.849778-47.416889-46.535111-47.416889H139.633778z m-139.662222 711.111111c0-26.168889 20.849778-47.388444 46.535111-47.388445h930.901333c16.64 0 32 9.016889 40.334223 23.694223a48.156444 48.156444 0 0 1 0 47.416888 46.392889 46.392889 0 0 1-40.334223 23.694223H46.535111C20.849778 938.666667 0 917.447111 0 891.249778z" fill="#ffffff" p-id="5675"></path><path d="M455.111111 270.222222c0-23.552 21.219556-42.666667 47.416889-42.666666h47.416889C576.113778 227.555556 597.333333 246.670222 597.333333 270.222222s-21.219556 42.666667-47.388444 42.666667h-47.416889C476.359111 312.888889 455.111111 293.774222 455.111111 270.222222z" fill="#ffffff" p-id="5676"></path></svg>
          </li>
          <li  :class="['ipad',active=='ipad'?'on':'']" @click="chooseDevice('ipad')">
            <svg t="1729753173771" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4502" ><path d="M902.144 190.464q43.008 1.024 64.512 24.064t21.504 60.928l0 41.984q0 36.864-0.512 88.576t-0.512 111.616-0.512 112.128-0.512 90.112l0 45.056q0 32.768-18.944 54.784t-46.592 22.016l-784.384 0q-32.768-1.024-57.344-24.064t-24.576-59.904l0-481.28q0-16.384 5.632-31.744t16.384-27.648 26.112-19.968 35.84-7.68l44.032 0 88.064 0 116.736 0 133.12 0 131.072 0q65.536 0 118.272 0.512t88.576 0.512l44.032 0zM857.088 286.72l-694.272 0 1.024 452.608 692.224-1.024zM924.672 477.184q-15.36 0-26.624 10.752t-11.264 26.112 11.264 26.112 26.624 10.752 26.624-10.752 11.264-26.112-11.264-26.112-26.624-10.752z" p-id="4503" fill="#ffffff"></path></svg>
          </li>
          <li :class="['mobile',active=='mobile'?'on':'']" @click="chooseDevice('mobile')">
            <svg t="1729753611020" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6846" width="32" height="32"><path d="M820.409449 797.228346q0 25.19685-10.07874 46.866142t-27.716535 38.299213-41.322835 26.204724-50.897638 9.574803l-357.795276 0q-27.212598 0-50.897638-9.574803t-41.322835-26.204724-27.716535-38.299213-10.07874-46.866142l0-675.275591q0-25.19685 10.07874-47.370079t27.716535-38.80315 41.322835-26.204724 50.897638-9.574803l357.795276 0q27.212598 0 50.897638 9.574803t41.322835 26.204724 27.716535 38.80315 10.07874 47.370079l0 675.275591zM738.771654 170.330709l-455.559055 0 0 577.511811 455.559055 0 0-577.511811zM510.992126 776.062992q-21.165354 0-36.787402 15.11811t-15.622047 37.291339q0 21.165354 15.622047 36.787402t36.787402 15.622047q22.173228 0 37.291339-15.622047t15.11811-36.787402q0-22.173228-15.11811-37.291339t-37.291339-15.11811zM591.622047 84.661417q0-8.062992-5.03937-12.598425t-11.086614-4.535433l-128 0q-5.03937 0-10.582677 4.535433t-5.543307 12.598425 5.03937 12.598425 11.086614 4.535433l128 0q6.047244 0 11.086614-4.535433t5.03937-12.598425z" p-id="6847" fill="#ffffff"></path></svg>
          </li>
        </ul>
      </div>
      <div class="title">{{ currentName }}</div>
      <div class="btn-list">使用教程</div>
    </div>
    <div class="iframe-box">
      <iframe src="https://www.mobanwang.com/mb/ind/" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  let currentName = ref('');

  // 修改显示设备
  let active = ref('pc');
  let chooseDevice=(type)=>{
    console.log('type',type);
    active.value=type;
  }
</script>

<style scoped lang="scss">
  .detail {
    height: 100vh;
    overflow: hidden;
  }
  .tool-box {
    position: fixed;
    left: 0;
    top: 0;
    height: 60px;
    background: #df8888;
    display: flex;
    align-items: center;
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color:#fff;
    padding:0 20px;
    .device-box {
      display:flex;
      align-items: center;
      .icon-box {
        margin-left: 20px;
        display:flex;
        align-items: center;
        li {cursor: pointer;transition:all ease 0.3s;opacity: 0.5;}
        li:hover {opacity: 1;}
        .on {opacity: 1;;}
        .pc {width: 30px;}
        .ipad {width: 30px;margin:0 14px;}
        .mobile {width: 26px;margin-top: 4px;}
        svg {width: 100%;}
      }
    }
    .btn-list {
      font-family: "Montserrat";
      font-size: 13px;
      text-transform: uppercase;
      background: #fff;
      color: #191919;
      padding: 12px 40px;
      border-radius: 50px;
      cursor: pointer;
      transition:all ease 0.3s;
      opacity: 1;
    }
    .btn-list:hover {
      opacity: 0.75;
    }
  }
  iframe {
    width: 100%;
    height: 100vh;
  }
</style>