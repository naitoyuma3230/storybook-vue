<script setup>
import Button from './Button.vue';
defineProps({
  argsArray: {
    type: Array
  }
})
</script>
<template>
  <div class="button-group">
    <div
      v-for="(args, i) in argsArray"
      :key="i"
      class="button-group__wrapper"
    >
      <Button v-bind="args">{{ args }}</Button>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.button-group
  display:flex
  flex-wrap:wrap
  justify-content:start
  &__wrapper
    margin: 4px


</style>