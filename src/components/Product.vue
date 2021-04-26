<template>
    <div style="background-color:red">Product - {{ $route.params.id }}</div>
</template>
<script>
export default {
  beforeRouteEnter(to, from) {
    // 在組件渲染前被呼叫，尚未能獲取組件的this，能拿到帶進路由的參數
    console.log("beforeRouteEnter");
    console.log("to: ", to);
    console.log("from: ", from);
    console.log("value: ", to.query.id);
    console.log("=====================");
  },
  beforeRouteUpdate(to, from) {
    // 在原組件路徑改變時被調用，可以獲取組件的this，能拿到帶進路由的參數
    console.log("beforeRouteUpdate");
    console.log("to: ", to);
    console.log("from: ", from);
    console.log("=====================");
  },
  beforeRouteLeave(to, from) {
    // 在離開組件時被調用，可以獲取組件的this
    console.log("beforeRouteLeave");
    console.log("to: ", to);
    console.log("from: ", from);
    console.log("=====================");
  },
};
</script>