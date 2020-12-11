<template>
  <div class="home">
    <div class="container bg-off-white-1 text-black-2 py-20">
      <h5 class="font-medium flex items-center">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.7812 16.4531L29.2969 19.9219L13.6875 27.375C13.6875 27.375 11.625 28.3125 10.6406 26.8125C6.79686 20.8125 25.7812 16.4531 25.7812 16.4531Z"
            fill="#256382"
          />
          <path
            d="M13.3125 23.0156C13.3125 23.0156 10.3125 24.0469 10.875 26.0625C11.4375 28.125 13.8281 26.8594 13.8281 26.8594L28.6406 19.9687C28.6406 19.9687 27.7969 17.7656 29.2969 16.3125L13.3125 23.0156Z"
            fill="#D9E3E8"
          />
          <path
            d="M15.7969 2.34375L30 16.1719L13.2188 22.7344L2.4375 5.95312L15.7969 2.34375Z"
            fill="#42ADE2"
          />
          <path
            d="M16.2188 5.48438L18.9375 8.39062L8.76563 12.0469L6.375 8.34375L16.2188 5.48438Z"
            fill="white"
          />
          <path
            d="M28.5938 17.8125L18.7031 21.8438L28.4531 17.3906L28.5938 17.8125Z"
            fill="#94989B"
          />
          <path
            d="M28.4531 19.0313L17.9062 23.3906L28.2656 18.5625L28.4531 19.0313Z"
            fill="#94989B"
          />
          <path
            d="M28.5469 19.6875L15.0938 25.5469L28.3594 19.2656L28.5469 19.6875Z"
            fill="#94989B"
          />
          <path
            d="M10.6406 26.8125C9 23.3906 13.2188 22.7812 13.2188 22.7812L2.4375 5.95312C2.4375 5.95312 0 5.90625 0 8.4375C0 9.46875 0.46875 10.2656 0.46875 10.2656L10.6406 26.8125Z"
            fill="#428BC1"
          />
        </svg>

        <span class="ml-5"
          >There are <a href="#" class="text-blue">2335</a> words in the Yoruba
          Dictionary</span
        >
      </h5>
      <div class="flex flex-wrap gap-x-4 gap-y-6 max-w-3xl mt-12">
        <AlphabetPill
          v-for="alphabet in $options.alphabets"
          :key="alphabet"
          :class="{ active: alphabet === 'a' }"
          >{{ alphabet }}</AlphabetPill
        >
      </div>
    </div>
    <section class="py-12">
      <div class="flex items-center gap-x-6">
        <SearchBar placeholder="Search for any word" class="flex-1" />
        <span
          class="w-12 h-12 rounded-full bg-off-white-3 flex justify-center items-center text-lg text-blue-2 cursor-pointer hover:bg-blue-2 hover:text-white transition-colors"
          ><svg
            class="icon"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 18.75C12.3206 18.75 14.5462 17.8281 16.1872 16.1872C17.8281 14.5462 18.75 12.3206 18.75 10C18.75 7.67936 17.8281 5.45376 16.1872 3.81282C14.5462 2.17187 12.3206 1.25 10 1.25C7.67936 1.25 5.45376 2.17187 3.81282 3.81282C2.17187 5.45376 1.25 7.67936 1.25 10C1.25 12.3206 2.17187 14.5462 3.81282 16.1872C5.45376 17.8281 7.67936 18.75 10 18.75ZM10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.75 14.375C8.75 14.2092 8.81585 14.0503 8.93306 13.9331C9.05027 13.8158 9.20924 13.75 9.375 13.75H10.625C10.7908 13.75 10.9497 13.8158 11.0669 13.9331C11.1842 14.0503 11.25 14.2092 11.25 14.375C11.25 14.5408 11.1842 14.6997 11.0669 14.8169C10.9497 14.9342 10.7908 15 10.625 15H9.375C9.20924 15 9.05027 14.9342 8.93306 14.8169C8.81585 14.6997 8.75 14.5408 8.75 14.375ZM6.25 10.625C6.25 10.4592 6.31585 10.3003 6.43306 10.1831C6.55027 10.0658 6.70924 10 6.875 10H13.125C13.2908 10 13.4497 10.0658 13.5669 10.1831C13.6842 10.3003 13.75 10.4592 13.75 10.625C13.75 10.7908 13.6842 10.9497 13.5669 11.0669C13.4497 11.1842 13.2908 11.25 13.125 11.25H6.875C6.70924 11.25 6.55027 11.1842 6.43306 11.0669C6.31585 10.9497 6.25 10.7908 6.25 10.625ZM3.75 6.875C3.75 6.70924 3.81585 6.55027 3.93306 6.43306C4.05027 6.31585 4.20924 6.25 4.375 6.25H15.625C15.7908 6.25 15.9497 6.31585 16.0669 6.43306C16.1842 6.55027 16.25 6.70924 16.25 6.875C16.25 7.04076 16.1842 7.19973 16.0669 7.31694C15.9497 7.43415 15.7908 7.5 15.625 7.5H4.375C4.20924 7.5 4.05027 7.43415 3.93306 7.31694C3.81585 7.19973 3.75 7.04076 3.75 6.875Z"
            />
          </svg>
        </span>
      </div>
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
import AlphabetPill from '~/components/AlphabetPill'
import SearchBar from '~/components/SearchBar'
import WordCard from '~/components/WordCard'
export default {
  components: {
    AlphabetPill,
    SearchBar,
    WordCard,
  },
  alphabets: [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ],
}
</script>
<style lang="scss" scoped>
.word-cards {
  &::before {
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
