<template>
  <div style="background-color:red;text-align:center; margin-bottom:20px;">Product3 - {{ $route.query }}</div>
  <DropdownMenu :items="state.selectData.system" :selected="state.selectedData.system"></DropdownMenu>
  <DropdownMenu :items="state.selectData.provider" :selected="state.selectedData.provider"></DropdownMenu>
</template>
<script>
import DropdownMenu from "@/DropdownMenu2.vue";
import CommonMixin from "@/utils/CommonMixin.js"
import { onBeforeMount, reactive } from "vue";
import { useRoute } from "vue-router"
export default {
  setup(){
    const { query } = useRoute();
    const { getJsonData } = CommonMixin();
    const state = reactive({
      selectData: {
        system: null,
        provider: null,
      },
      selectedData: {
        system: query.system,
        provider: query.provider,
      },
    })
    onBeforeMount( async () => {
        const { data } = await getJsonData("json/vueComponent.json");
        state.selectData = data;
    })
    return { state }
  },components:{
    DropdownMenu
  },
};
</script>