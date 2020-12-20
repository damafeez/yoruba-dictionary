<template>
  <div>
    <AlphabetPicker />
    <section class="py-12">
      <SearchBar placeholder="Search for any word" />
      <div class="flex flex-wrap py-5 mt-5 gap-6">
        <main class="text-sm">
          <div class="bg-off-white-2 pt-5 pb-8 px-6 rounded-sm">
            <h4 class="text-blue">Oro</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              eveniet odit totam vitae facilis iure consequatur molestiae sunt
              ab, cupiditate, quod atque laboriosam fugit esse, amet architecto
              at eum similique?
            </p>
          </div>
          <div class="p-6 mt-4">
            <h4 class="text-blue">Examples</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              esse dolorum provident incidunt, necessitatibus dolor nihil? Eius,
              adipisci expedita eos obcaecati quia praesentium, facere odio est
              facilis suscipit recusandae esse?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              dolorem architecto inventore natus maxime, nisi dolore iste
              repudiandae, eos quam accusamus doloribus optio consequuntur est
              nostrum sunt nesciunt, quidem tenetur.
            </p>
          </div>
        </main>
        <aside class="bg-off-white-2"></aside>
      </div>
    </section>
    <footer class="bg-blue h-64"></footer>
  </div>
</template>
<script>
import AlphabetPicker from '~/components/AlphabetPicker'
export default {
  components: {
    AlphabetPicker,
  },
}
</script>
<style lang="scss" scoped>
main {
  flex: 1 1 30rem;
}
aside {
  flex: 0.2 2 min(20rem, 30%);
}
</style>
