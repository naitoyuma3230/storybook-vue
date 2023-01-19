<script setup>
defineProps({
  type: {
    type: String
  },
  tagType: {
    type: String,
  },
  label: {
    type: String,
  },
  isSmall: {
    type: Boolean,
  },
  isDisabled: {
    type: Boolean,
  },
  iconName: {
    type: String,
  },
})
</script>

<template>
  <a
    v-if="tagType == 'anker'"
    class="btn"
    :class="`btn-${type}`, { 'a-small': isSmall, 'a-disabled': isDisabled }"
  >
    <span v-text="label"></span>
    <span :class="`icon-${iconName}`"></span>
  </a>
  <button
    v-if="tagType == 'button'"
    class="btn"
    :class="`btn-${type}`, { 'btn-small': isSmall, 'btn-disabled': isDisabled }"
  >
    <span v-text="label"></span>
    <span :class="`icon-${iconName}`"></span>
  </button>
</template>

<style lang="stylus" scoped>
@import "../assets/base.styl"
button.btn
a.btn
  box-sizing: border-box
  height: 40px
  line-height: 40px
  padding: 0 15px
  background: $main-grey
  font-size: 1rem
  font-weight: bold
  border: none
  box-shadow: 0px 2px 1px #00000029
  border-radius: 5px
  cursor: pointer
  transition: 0.2s linear
  &:focus
    outline: 0
  &--disabled
    pointer-events: none
    opacity: .6
  span[class^='icon-']
  span[class*=' icon-']
    font-size: 1.1rem
    line-height: 1.1rem
  span
    +span 
      margin-left: 5px
  +sp()
    width: 100%

a.btn
  display: inline-block

a.a-disabled
  pointer-events: none
  opacity: .6
  color: rgba(16, 16, 16, 0.3)

button.btn-save
button.btn-delete
button.btn-edit
button.btn-add
button.btn-search
a.btn-save
a.btn-delete
a.btn-edit
a.btn-add
a.btn-search
  color: $btn-txt-white
  span
    color: $btn-txt-white
    
button.btn-cancel
button.btn-return
a.btn-cancel
a.btn-return   
  background: $btn-cancel
  color: $btn-txt-black
  &:hover
    background: #eee
  span
    color: $btn-txt-black

button.btn-pdf
a.btn-pdf  
  background: #fff
  border: 1px solid $border
  color: $btn-txt-black
  &:hover
    background: #f5f5f5
  span
    color: $btn-delete
    &:not(:empty)
      color: $btn-txt-black

button.btn-save
a.btn-save
  background: $btn-save
  &:hover
    background: #fc8f2fcc

button.btn-delete
a.btn-delete
  background: $btn-delete
  &:hover
    background: #d65252cc

button.btn-edit
a.btn-edit  
  background: $btn-edit
  &:hover
    background: #53ada2cc
    
button.btn-add
a.btn-add
  background: $btn-add
  &:hover
    background: #549f52cc
    
button.btn-search
a.btn-search
  background: $btn-search
  &:hover
    background: #2172c4cc

button.btn-small
a.btn-small
  height: 30px
  line-height: 30px
  padding: 0 10px
</style>