<template>
  <div class="section">
    <div class="select">
      <select :name="items">
        <option 
          v-for="item in items"
          v-bind:key="item.key"
          :value="item.value"
          :disabled="item.disabled"
          :selected="item.default"
        >
          {{ item.title }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
import '@/assets/scss/dropdownMenu.scss';
export default {
    props: ['items'],
}
</script>