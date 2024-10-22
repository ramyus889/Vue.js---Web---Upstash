<script setup>
import UseDrawer from './UseDrawer.vue';

const items = [
  {
    id: 1,
    name: 'Pricing',
    link: '#'
  },
  {
    id: 2,
    name: 'Docs',
    link: '#'
  },
  {
    id: 3,
    name: 'Blog',
    link: '#'
  },
  {
    id: 4,
    name: 'About',
    link: '#'
  },
  {
    id: 5,
    name: 'Support',
    link: '#'
  }
];

const adaptive =
  'min-[2300px]:mx-[570px] min-[2250px]:mx-[600px] min-[2125px]:mx-[550px] min-[2050px]:mx-[500px] min-[1920px]:mx-[450px] min-[1850px]:mx-[350px] min-[1750px]:mx-[250px] min-[1450px]:mx-[200px] min-[1330px]:mx-[150px] xl:mx-[100px]';
</script>
<template>
  <div class="fixed top-0 left-0 right-0 z-10 w-full">
    <header
      :class="adaptive"
      class="flex justify-between items-center bg-zinc-950/80 backdrop-blur py-[25px] px-5 border-b-white/5"
    >
      <div class="">
        <a href="#"><img src="/upstash.svg" alt="" /></a>
      </div>
      <div class="sm:flex hidden">
        <div v-for="item in items" :key="item.id" class="">
          <RouterLink
            :to="item.link"
            class="px-[16px] py-[8px] rounded-full text-[#fafafa] opacity-60 hover:bg-white/5 hover:opacity-100 transition-all duration-200 font-semibold"
            >{{ item.name }}</RouterLink
          >
        </div>
      </div>
      <div class="flex gap-2">
        <a
          href="#"
          class="bg-[#161618] hover:bg-green-600 border-none rounded-full py-2 px-5 text-white transition-all duration-200 font-semibold"
          >Login</a
        >
        <div class="sm:hidden">
          <UseDrawer />
        </div>
      </div>
    </header>
  </div>
</template>
