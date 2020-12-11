<template>
  <div class="relative">
    <label :for="_uid">
      <svg
        class="icon text-xl text-gray-2 absolute left-3"
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.8 21.6C9.48 21.6 6 18.12 6 13.8C6 9.48 9.48 6 13.8 6C18.12 6 21.6 9.48 21.6 13.8C21.6 18.12 18.12 21.6 13.8 21.6ZM13.8 7.2C10.14 7.2 7.2 10.14 7.2 13.8C7.2 17.46 10.14 20.4 13.8 20.4C17.46 20.4 20.4 17.46 20.4 13.8C20.4 10.14 17.46 7.2 13.8 7.2Z"
        />
        <path
          d="M19.6091 18.7602L24.9971 24.1482L24.1487 24.9966L18.7607 19.6086L19.6091 18.7602Z"
        />
      </svg>
    </label>

    <input
      :id="_uid"
      v-bind="$attrs"
      class="w-full bg-gray border-none outline-none focus:border-solid border border-blue-2 rounded p-4 pl-12 text-base placeholder-gray-2"
      type="search"
      name=""
    />
  </div>
</template>
<style lang="scss" scoped>
svg {
  top: 50%;
  transform: translateY(-50%);
}
</style>
