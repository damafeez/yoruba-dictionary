<template>
  <div class="home">
    <AlphabetPicker />
    <section class="py-12">
      <SearchBar placeholder="Search for any word" />
      <div
        alhpabet="a"
        class="word-cards grid lg:grid-cols-2 xl:grid-cols-3 gap-10"
      >
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
      </div>
    </section>
    <footer class="bg-blue h-64"></footer>
  </div>
</template>
<script>
import SearchBar from '~/components/SearchBar'
import WordCard from '~/components/WordCard'
import AlphabetPicker from '~/components/AlphabetPicker'
export default {
  components: {
    SearchBar,
    WordCard,
    AlphabetPicker,
  },
}
</script>
<style lang="scss" scoped>
.home {
  .word-cards::before {
    content: attr(alhpabet);
    transform: translateY(1.5rem);
    @screen sm {
      position: sticky;
      transform: translate(-3rem, 4.4rem);
    }
    grid-column: 1/-1;
    top: 0;
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
  }
}
</style>
