<template>
    <h1>{{ "Hello World !!!" }}</h1>
    <hr>
    <h1>{{ "Please select the item you like below I" }}</h1>
    <DropdownMenu :items="state.selectData.system"></DropdownMenu>
    <DropdownMenu :items="state.selectData.provider"></DropdownMenu>

    <div class="linkArea">
    <h1>{{ "Please select the item you like below II" }}</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/product/a1023931">Product</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link :to="{path: '/product2', query: { id: 'a1023931', category: '1' }}">Product2</router-link>
    </div>

  
  <div class="linkArea">
    <h1>{{ "Please select the item you like below III" }}</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/about2">About2</router-link>
    <router-link
      :to="{ path: '/product2', query: { id: 'a1023931', category: '1' } }"
      >Product2</router-link
    >
    <router-link to="/contact2">Contact2</router-link>
  </div>

  <div class="linkArea">
    <h1>{{ "Please select the item you like below IV" }}</h1>
    <router-link
      :to="{ path: '/product3', query: { system: 'iOS', provider: 'CHT' } }"
      >Product-iOS_CHT</router-link>
    <router-link
      :to="{ path: '/product3', query: { system: 'Android', provider: 'FET' } }"
      >Product-Android_CHT</router-link>
  </div>
  
  <router-view :key="$route.query"></router-view>
</template>
<style lang="scss" scoped src="./assets/scss/main.scss"></style>
<!-- css -->
<!--
<style>
    h1{
        color: darkblue;
    }
</style>
-->
<!-- scss 方法一. 在App.vue中引入 -->
<style lang="scss" scoped>
    @import './assets/scss/main.scss';
</style>
<!-- or -->
<style lang="scss" scoped src="./assets/scss/main.scss"></style>
<script>
import axios from "axios";
import DropdownMenu from "@/DropdownMenu.vue";
import { reactive, onBeforeMount } from "vue";
export default {
  setup() {
    const state = reactive({
      selectData: {
        system: null,
        provider: null,
      },
      selectedData: {
        system: null,
        provider: null,
      },
    });
    onBeforeMount(() => {
      axios.get("json/vueComponent.json").then((response) => {
        state.selectData = response.data;
      }).catch(function (response) {
        console.log(response);
      });
    })
    return { state };
  },
  components: {
    DropdownMenu
  }
};
</script>