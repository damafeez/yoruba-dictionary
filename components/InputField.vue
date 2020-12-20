<template>
  <div class="relative">
    <label class="absolute left-3" :for="_uid">
      <slot name="icon" />
    </label>

    <input
      :id="_uid"
      v-bind="$attrs"
      class="w-full bg-gray border-none outline-none focus:border-solid border border-blue-2 rounded p-4 pl-12 text-base placeholder-gray-2"
    />
  </div>
</template>
<style lang="scss" scoped>
label {
  top: 50%;
  transform: translateY(-50%);
}
</style>
