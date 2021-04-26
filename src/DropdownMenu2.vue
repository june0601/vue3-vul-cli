<template>
  <div class="section">
    <div class="select">
      <select :name="items" @change="dataChange" v-model="state.selected">
        <option
          v-for="item in items"
          v-bind:key="item.key"
          :value="item.value"
          :disabled="item.disabled"
          :selected="item.default"
          @change="dataChange"
        >
          {{ item.title }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
import "./assets/scss/dropdownMenu.scss";
import { reactive } from "vue";
export default {
  props: ["items", "selected"],
  setup(props, target){
    const state = reactive({
        item: props.item,
        selected: props.selected
    });
    function dataChange(){
      target.emit("dropdownmenu-change", event.target.value);
    }
    return { state, dataChange }
  }
};
</script>