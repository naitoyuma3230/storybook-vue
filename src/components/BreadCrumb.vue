<script setup>

defineProps({
  pathNames: {
    type: Array,
  },
  number: {
    type: Number,
  },
  label: {
    type: String,
  },
  isSmall: {
    type: Boolean,
  },
})

</script>

<template>
  <div class="topicPath">
    <ul>
      <li
        v-for="(pathName, i) in pathNames"
        :key="i"
        class="topicPath__li"
      >
        <a
          class="topicPath__a"
          :class="i !== pathNames.length - 1 ? 'ispast' : 'iscurrent'"
        >{{ pathName }}</a>
        <span
          v-if="i !== pathNames.length - 1"
          class="icon-Aarrow-right topicPath__icon-arrow"
        ></span>
      </li>
    </ul>
  </div>
</template>

<style lang="stylus">
// @import "../assets/stylus/*.styl" -> stylus is able to import
// @import "../assets/css/*.css" ->css disable
// @import "../assets/css/fonts.css" ->css disable
@import "../assets/base.styl"

.topicPath
  width: 100%
  overflow: hidden


  &__li
    display: inline
    font-size: 14px
    line-height: 34px
    white-space: nowrap

  &__icon-arrow
    margin: 4px 8px 0
    font-size: 14px
    color: #ddd

  &__a
    position: relative
    z-index: 1
    // padding: 6px 12px
    padding: 2px 12px
    color: $txt
    text-decoration: none
    cursor: pointer
    background: $breadcrumb
    background: linear-gradient(to right, #eee, #ddd)
    border-radius: 50px

    &.ispast:hover
      background: $breadcrumb-hover

    &.iscurrent
      cursor: default
      background: $main-yelow
      border-radius: 20px
</style>