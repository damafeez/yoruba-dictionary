<template>
  <div class="relative">
    <input
      :id="_uid"
      v-bind="$attrs"
      class="w-full bg-gray border-solid outline-none border border-transparent focus:border-blue-2 transition-all rounded p-4 pl-12 text-base placeholder-gray-2"
    />
    <label
      class="absolute left-3 text-gray-2 transition-all hover:text-blue-2"
      :for="_uid"
    >
      <slot name="icon" />
    </label>
  </div>
</template>
<style lang="scss" scoped>
label {
  top: 50%;
  transform: translateY(-50%);
  input:focus + & {
    color: theme('colors.blue-2');
  }
}
</style>
