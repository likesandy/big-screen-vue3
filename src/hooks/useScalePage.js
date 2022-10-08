import { onMounted, onUnmounted } from "vue";
import { throttle } from "lodash";

export default function useScalePage(
  options = { targetX: 1920, targetY: 1080, targetRatio: 16 / 9 }
) {
  const resizeFn = throttle(changeScale, 100);

  onMounted(() => {
    changeScale();
    window.addEventListener("resize", resizeFn);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", resizeFn);
  });

  function changeScale() {
    const body = document.querySelector("body");

    const currentX =
      document.documentElement.clientWidth || document.body.clientWidth;
    const currentY =
      document.documentElement.clientHeight || document.body.clientHeight;

    let scaleRatio = currentX / options.targetX;
    const curRatio = currentX / currentY;
    if (curRatio > options.targetRatio) {
      scaleRatio = currentY / options.targetY;
      body.style = `width:${options.targetX}px; height:${options.targetY}px;transform: scale(${scaleRatio}) translateX(-50%); left: 50%`;
    } else {
      body.style = `width:${options.targetX}px; height:${options.targetY}px; transform: scale(${scaleRatio})`;
    }
  }
}
