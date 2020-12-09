<template>
  <div class="home">
    <div class="container bg-off-white-1 text-black-2 pt-10 pb-24">
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
    <section></section>
    <footer class="bg-blue h-64"></footer>
  </div>
</template>
<script>
import AlphabetPill from '~/components/AlphabetPill'
export default {
  components: {
    AlphabetPill,
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
