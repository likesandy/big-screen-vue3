<template>
  <div ref="divEl" :style="{ width: width, height: height }"></div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import useEcharts from "@/hooks/useecharts";

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
  getOption: {
    type: Function,
    default: "",
  },
});

const divEl = ref(null);
let tEcahrts = null;

watch(
  () => props.echartsDatas,
  (newV) => {
    if (newV) {
      setupOption(props.echartsDatas);
    }
  }
);

onMounted(() => {
  setupOption(props.echartsDatas);
});

function setupOption(echartsDatas) {
  if (!tEcahrts) {
    tEcahrts = useEcharts(divEl);
  }
  if (props.getOption) {
    const option = props.getOption(echartsDatas);
    tEcahrts.setOption(option);
  }
}
</script>

<style scoped lang="scss"></style>
