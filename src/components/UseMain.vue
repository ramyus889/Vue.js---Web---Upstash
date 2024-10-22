<script setup>
const items = [
  {
    id: 1,
    title: 'Redis',
    description: 'Serverless database with Redis API',
    button: 'Create Database',
    classRounded: 'lg:rounded-l-3xl',
    useSimbol: '®*',
    delay: 100,
    useClassTag: 'text-white opacity-20 text-xl',
    useClassHover: ['group-hover:bg-red-500 ', 'group-hover:from-red-500'],
    link: '#'
  },
  {
    id: 2,
    title: 'Vector',
    description: 'Serverless Vector Database',
    button: 'Create Index',
    useSimbol: 'NEW',
    delay: 200,
    useClassTag: 'bg-[#F97316] px-1 py-[2px] text-white rounded-lg text-[11px] ms-2 opacity-100',
    useClassHover: ['group-hover:bg-orange-500 ', 'group-hover:from-orange-500'],
    link: '#'
  },
  {
    id: 3,
    title: 'QStash',
    description: 'Messaging for the Serverless',
    button: 'Publish Messages',
    delay: 300,
    classRounded: 'lg:rounded-r-3xl',
    useClassHover: ['group-hover:bg-indigo-500 ', 'group-hover:from-indigo-500'],
    link: '#'
  }
];

const adaptive =
  'min-[2300px]:mx-[635px] min-[2250px]:mx-[600px] min-[2125px]:mx-[550px] min-[2050px]:mx-[500px] min-[1920px]:mx-[450px] min-[1850px]:mx-[350px] min-[1750px]:mx-[250px] min-[1450px]:mx-[200px] min-[1330px]:mx-[150px] xl:mx-[100px]';
</script>
<template>
  <div :class="adaptive" class="mt-[150px] flex place-content-center -z-10">
    <div class="">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        class="lg:text-[128px] sm:text-[74px] text-[42px] lg:leading-[128px] sm:leading-[74px] leading-[42px] font-bold text-center bg-gradient-to-r from-[#34D399] to-[#DDDE54] text-transparent bg-clip-text"
      >
        Serverless Data Platform
      </div>
      <div class="mt-[64px] flex lg:flex-row flex-col gap-2">
        <div
          v-for="item in items"
          :key="item.id"
          :class="item.classRounded"
          data-aos="fade-up"
          :data-aos-delay="item.delay"
          class="flex flex-col items-center gap-2 backdrop-blur p-8 group bg-white/5 hover:scale-[1.02] transition-all duration-300 rounded-lg w-full"
        >
          <div class="flex font-semibold items-start">
            <div class="text-white text-2xl">{{ item.title }}</div>
            <div :class="item.useClassTag" class="">{{ item.useSimbol }}</div>
          </div>
          <div class="sm:text-[17px]">{{ item.description }}</div>
          <a
            href="#"
            :class="item.useClassHover[0]"
            class="bg-white py-2 px-5 rounded-full text-black flex gap-1 text-[17px] mt-2"
            >{{ item.button }} <img src="/arrowRightTop.svg" alt=""
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
