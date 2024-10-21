<script setup>
const items = [
  {
    id: 1,
    image: '/bransh.svg',
    link: 'https://www.ourbranch.com/'
  },
  {
    id: 2,
    image: '/usenzxt.svg',
    link: 'https://nzxt.com/'
  },
  {
    id: 3,
    image: '/fly.svg',
    link: 'https://fly.io/'
  },
  {
    id: 4,
    image: '/vercel.svg',
    link: 'https://vercel.com/'
  },
  {
    id: 5,
    image: '/supabase.svg',
    link: 'https://supabase.com/'
  },
  {
    id: 6,
    image: '/maker.svg',
    link: 'https://www.maker.co/'
  },
  {
    id: 7,
    image: '/material.svg',
    link: 'https://materialize.com/'
  },
  {
    id: 8,
    image: '/tinybird.svg',
    link: 'https://www.tinybird.co/'
  }
];
</script>
<template>
  <div class="flex place-content-center mt-[80px]">
    <div class="">
      <div class="text-[14px] opacity-40 text-center">Trusted by the best teams</div>
      <div class="mt-[28px]">
        <div class="grid grid-cols-4 gap-x-10 gap-y-6 justify-items-center">
          <div v-for="item in items" :key="item.id" class="">
            <a
              :href="item.link"
              target="_blank"
              class="inline-flex align-middle opacity-40 transition hover:opacity-100 hover:scale-105"
              ><img :src="item.image" class="" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
