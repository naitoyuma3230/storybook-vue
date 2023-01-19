<script setup>
defineProps({
  mainTitle: {
    type: String,
  },
  subTitle: {
    type: String,
  },
  tab: {
    type: Array
  }
})

</script>
<template>
  <div class="card">
    <h4 class="title">{{ mainTitle }}</h4>
    <p class="secondary-text">{{ subTitle }}</p>
    <span
      class="tab"
      v-for="(item, i) in tab"
    >{{ item }}</span>
  </div>
</template>

<style>
.card {
  background-color: #fff;
  border-radius: 0.2rem;
  box-shadow: rgb(150, 150, 150) 0px 1px 5px;
  width: 350px;
  padding: 0.8rem;
}

.tab {
  margin-right: 4px;
  padding: 2px 6px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>