<template>
  <div ref="divEl" :style="{ width: width, height: height }"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import useEcharts from "@/hooks/useecharts";
import { getOption } from "./config";

const props = defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "100%",
  },
  echartsDatas: {
    type: Array,
    default: () => [],
  },
});

const divEl = ref(null);
let tEcahrts = null;

onMounted(() => {
  setupOption(props.echartsDatas);
});

function setupOption(echartsDatas) {
  if (!tEcahrts) {
    tEcahrts = useEcharts(divEl);
  }
  if (echartsDatas?.length) {
    const option = getOption(echartsDatas);
    tEcahrts.setOption(option);
  }
}
</script>

<style scoped lang="scss"></style>
