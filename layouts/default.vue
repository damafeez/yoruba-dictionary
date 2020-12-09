<template>
  <main>
    <Nav class="sticky top-0 z-10" />
    <Nuxt />
  </main>
</template>
<script>
import Nav from '~/components/Nav'
export default {
  components: {
    Nav,
  },
}
</script>
