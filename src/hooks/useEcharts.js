import * as echarts from "echarts";
import { onUnmounted } from "vue";

export default function useEcharts(divEl) {
  const echartsInstance = echarts.init(divEl.value, null, { renderer: "svg" });

  onUnmounted(() => {
    echartsInstance.dispose();
  });

  function setOption(option) {
    echartsInstance.setOption(option);
  }

  function resizeEcharts() {
    echartsInstance.resize();
  }

  return {
    echartsInstance,
    setOption,
    resizeEcharts,
  };
}
