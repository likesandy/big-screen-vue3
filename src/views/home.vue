<template>
  <main class="home">
    <div class="header"></div>

    <div class="left-top">
      <charts :echarts-datas="chargingPile" :get-option="pieGetOption"></charts>
    </div>
    <div class="left-bottom">
      <charts
        :echarts-datas="processMonitoring"
        :get-option="barGetOption"
      ></charts>
    </div>

    <div class="right-top">
      <right-top-panel></right-top-panel>
    </div>
    <div class="right-center">
      <charts
        :echarts-datas="chargingStatistics"
        :get-option="lineGetOption"
      ></charts>
    </div>
    <div class="right-bottom">
      <right-bottom-bg :echarts-datas="exceptionMonitoring"></right-bottom-bg>
    </div>

    <div class="center">
      <center-svg></center-svg>
    </div>
    <div class="bottom">
      <bottom-panel :panelItems="dataAnalysis"></bottom-panel>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getPowerScreenData } from "@/api/home";

// import PieCharts from "@/components/pie-charts/index.vue";
// import BarCharts from "@/components/bar-charts/index.vue";
// import LineCharts from "@/components/line-charts/index.vue";
import RightBottomBg from "@/components/right-bottom-bg/index.vue";
import charts from "@/components/charts/index.vue";
import { barGetOption } from "@/config/bargetOption";
import { lineGetOption } from "@/config/linegetOption";
import { pieGetOption } from "@/config/piegetOption";
import RightTopPanel from "../components/right-top-panel/index.vue";
import BottomPanel from "../components/bottom-panel/index.vue";
import CenterSvg from "@/components/center-svg/index.vue";
// import { dataAnalysisData } from "./config/home";

const chargingPile = ref();
const chargingStatistics = ref();
const chargingTop4 = ref();
const dataAnalysis = ref();
const exceptionMonitoring = ref();
const processMonitoring = ref();

setupGetPowerScreenData();

function setupGetPowerScreenData() {
  getPowerScreenData().then((res) => {
    chargingPile.value = res.chargingPile.data;
    chargingStatistics.value = res.chargingStatistics.data;
    chargingTop4.value = res.chargingTop4.data;
    dataAnalysis.value = res.dataAnalysis.data;
    exceptionMonitoring.value = res.exceptionMonitoring.data;
    processMonitoring.value = res.processMonitoring.data;
  });
}
</script>

<style scoped lang="scss">
.home {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/bg.png");

  .header {
    /* 定位 */
    position: absolute;
    top: 21px;
    left: 0;
    right: 0;
    height: 56px;

    /* 背景 */
    background-image: url(@/assets/images/bg_header.svg);
    background-repeat: no-repeat;
  }

  .left-top {
    /* 定位 */
    position: absolute;
    top: 116px;
    left: 16px;
    width: 536px;
    height: 443px;
    /* 背景 */
    background-image: url(@/assets/images/bg_left-top.svg);
    background-repeat: no-repeat;
  }

  .left-bottom {
    /* 定位 */
    position: absolute;
    bottom: 49px;
    left: 16px;
    width: 536px;
    height: 443px;
    /* 背景 */
    background-image: url(@/assets/images/bg_left_bottom.svg);
    background-repeat: no-repeat;
  }

  .right-top {
    position: absolute;
    right: 17px;
    top: 96px;
    width: 519px;
    height: 327px;

    background-image: url(../assets/images/bg_right_top.svg);
    background-repeat: no-repeat;
  }
  .right-center {
    position: absolute;
    right: 17px;
    top: 443px;
    width: 519px;
    height: 327px;

    background-image: url(../assets/images/bg_right_center.svg);
    background-repeat: no-repeat;
  }
  .right-bottom {
    position: absolute;
    right: 17px;
    bottom: 49px;
    width: 519px;
    height: 242px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(../assets/images/bg_right_bottom.svg);
    background-repeat: no-repeat;
  }

  .center {
    position: absolute;
    right: 540px;
    bottom: 272px;
    width: 823px;
    height: 710px;
  }

  .bottom {
    position: absolute;
    right: 540px;
    bottom: 49px;
    width: 823px;
    height: 209px;

    background-image: url(../assets/images/bg_bottom.svg);
    background-repeat: no-repeat;
  }
}
</style>
