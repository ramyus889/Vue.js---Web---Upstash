<script setup>
const items = [
  {
    id: 1,
    image: '/bransh.svg',
    delay: 100,
    link: 'https://www.ourbranch.com/'
  },
  {
    id: 2,
    image: '/usenzxt.svg',
    delay: 150,
    link: 'https://nzxt.com/'
  },
  {
    id: 3,
    image: '/fly.svg',
    delay: 200,
    link: 'https://fly.io/'
  },
  {
    id: 4,
    image: '/vercel.svg',
    delay: 250,
    link: 'https://vercel.com/'
  },
  {
    id: 5,
    image: '/supabase.svg',
    delay: 300,
    link: 'https://supabase.com/'
  },
  {
    id: 6,
    image: '/maker.svg',
    delay: 350,
    link: 'https://www.maker.co/'
  },
  {
    id: 7,
    image: '/material.svg',
    delay: 400,
    link: 'https://materialize.com/'
  },
  {
    id: 8,
    image: '/tinybird.svg',
    delay: 450,
    link: 'https://www.tinybird.co/'
  }
];
</script>
<template>
  <div class="flex place-content-center mt-[80px] -z-10">
    <div class="">
      <div class="text-[14px] opacity-40 text-center">Trusted by the best teams</div>
      <div class="mt-[28px]">
        <div
          class="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-10 gap-y-6 justify-items-center"
        >
          <div v-for="item in items" :key="item.id" class="">
            <a
              data-aos="fade-up"
              :data-aos-delay="item.delay"
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
