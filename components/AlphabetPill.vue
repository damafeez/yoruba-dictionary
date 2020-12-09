<template>
  <span
    class="w-10 h-10 flex justify-center items-center cursor-pointer bg-white rounded-full border-off-white border-solid border uppercase font-medium transition-all"
    ><slot
  /></span>
</template>
<style lang="scss" scoped>
span {
  &.active,
  &:hover {
    @apply bg-blue text-white border-blue;
  }
}
</style>
