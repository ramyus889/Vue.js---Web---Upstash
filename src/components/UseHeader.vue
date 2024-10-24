<script setup>
import UseDrawer from './UseDrawer.vue';

const items = [
  {
    id: 1,
    name: 'Pricing',
    link: '/Pricing'
  },
  {
    id: 2,
    name: 'Customers',
    link: '/Customers'
  },
  {
    id: 3,
    name: 'Careers',
    link: '/Careers'
  },
  {
    id: 4,
    name: 'About',
    link: '/About'
  }
];

const adaptive =
  'min-[2300px]:mx-[570px] min-[2250px]:mx-[600px] min-[2125px]:mx-[550px] min-[2050px]:mx-[500px] min-[1920px]:mx-[450px] min-[1850px]:mx-[350px] min-[1750px]:mx-[250px] min-[1450px]:mx-[200px] min-[1330px]:mx-[150px] xl:mx-[100px]';
</script>
<template>
  <div class="fixed top-0 left-0 right-0 z-10 bg-zinc-950/80 backdrop-blur">
    <header
      :class="adaptive"
      class="flex justify-between items-center px-5 py-[25px] border-b-white/5"
    >
      <div class="">
        <RouterLink to="/"><img src="/upstash.svg" alt="" /></RouterLink>
      </div>
      <div class="md:flex hidden">
        <div v-for="item in items" :key="item.id" class="">
          <RouterLink
            :to="item.link"
            class="px-[16px] py-[8px] rounded-full text-[#fafafa] opacity-60 text-[16px] hover:bg-white/5 hover:opacity-100 transition-all duration-200 font-semibold"
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
        <div class="md:hidden">
          <UseDrawer />
        </div>
      </div>
    </header>
  </div>
</template>
