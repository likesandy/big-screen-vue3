import request from "@/utils/request";

export function getPowerScreenData() {
  return request.get({
    url: "/powerscreen",
  });
}
