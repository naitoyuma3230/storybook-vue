<script setup>
</script>
<template>
  <div class="file-uploder">
    <input
      class="file-uploder__text readonly"
      type="text"
    >
    <input
      class="file-uploder__btn"
      type="button"
      value="参照"
    >
    <input
      class="file-uploder__file"
      type="file"
    >
  </div>
</template>

<style lang="stylus" scoped>
.file-uploder
  position: relative
  z-index: 1
  display: inline-block
  width: 265px
  width: 100%
  padding: 0 !important

  &__text
    width: 208px
    height: 32px
    padding: 0 5px
    margin: 0
    font-size: 14px
    line-height: 32px
    color: #666
    color: #333
    background: #fff
    border: 1px solid #999
    border-radius: 6px

  &--disabled
    color: #fff
    background-color: #aaa
    border: 1px solid #888

  &__btn
    width: 44px
    height: 32px
    padding: 0
    margin: 0 0 0 3px
    overflow: hidden
    font-size: 14px
    font-weight: bold
    color: #fff
    background-color: #f39500
    border: 1px solid #f39500
    border-radius: 8px
    opacity: 1
    transition: 0.2s linear

  &__btn:disabled
    color: #666
    background: #e4e4e4
    border: 1px solid #999

  &__file
    position: absolute
    top: 0
    left: 0
    z-index: 2
    width: 265px
    height: 100%
    font-size: 14px
    cursor: pointer
    filter: "alpha(opacity=0)"
    opacity: 0

input
  cursor: text

.spanbox
  display: inline-block
  width: 10px

</style>