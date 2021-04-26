<template>
    <div style="background-color:red">about2
    <DropdownMenu :items="state.selectData.system"></DropdownMenu>
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
        system: null
      },
      selectedData: {
        system: null,
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