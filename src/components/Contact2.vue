<template>
    <div style="background-color:red">contact2
    <DropdownMenu :items="state.selectData.provider"></DropdownMenu>
    </div>
</template>
<script>
import DropdownMenu from "@/DropdownMenu.vue";
import CommonMixin from "@/utils/CommonMixin.js"
import { onBeforeMount, reactive } from "vue";
export default {
  setup(){
    const { getJsonData } = CommonMixin();
    const state = reactive({
      selectData: {
        provider: null
      },
      selectedData: {
        provider: null,
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