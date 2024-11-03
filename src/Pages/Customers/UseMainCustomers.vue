<script setup>
import { routeUrl } from '@/router/routes';

const items = [
  {
    id: 1,
    image: '/Customers/zapier.svg',
    text: ' “ We chose Upstash specifically because it offers an HTTP interface for Redis, which perfectly suited our needs ”',
    name: 'Ben Biran',
    dev: 'Engineer Manager',
    link: `${routeUrl[5].path}`,
    delay: 100
  },
  {
    id: 2,
    image: '/Customers/branch.svg',
    text: ' “ Before Upstash we used Redis Cloud. This was not serverless, you had to think about instance size, memory usage etc. which. ”',
    name: 'Adithya Reddy',
    dev: 'Software Engineering Manager',
    link: `${routeUrl[6].path}`,
    delay: 150
  },
  {
    id: 3,
    image: '/Customers/ding-logo.svg',
    text: ' “ With Upstash we minimized the our operational costs and we also felt very safe that we only pay  support we get whenever we need it. ”',
    name: 'Aymerick Valette',
    dev: 'Founding Engineer',
    link: `${routeUrl[7].path}`,
    delay: 200
  },
  {
    id: 4,
    image: '/Customers/maker-logo.svg',
    text: ' “ Upstash Redis helped us combine Primary operational costs and we also felt Database and Caching Needs ”',
    name: 'Emery Denuccio',
    dev: 'Software Engineer',
    link: `${routeUrl[8].path}`,
    delay: 250
  },
  {
    id: 5,
    image: '/Customers/dubsh.svg',
    text: '“ The Upstash JS SDK is incredibly easy to use – all I needed to do was run npm install, initialize the Redis instance, and start running redis  ”',
    name: 'Steven Tey',
    dev: 'Founder',
    link: `${routeUrl[9].path}`,
    delay: 300
  },
  {
    id: 6,
    image: '/Customers/niftykit-logo.svg',
    text: '“ Upstash service has been bulletproof, with almost zero issues, and their support team is some of the most incredible people. ”',
    name: 'Terence Pae',
    dev: 'CTO, Cofounder',
    link: `${routeUrl[10].path}`,
    delay: 350
  },
  {
    id: 7,
    image: '/Customers/sweet-logo.webp',
    text: ' “ Upstash Kafka has essentially allowed us to focus more on shipping new features and provide a higher quality service ”',
    name: 'Miguel Martinez',
    dev: 'Chief Technology Officer',
    link: `${routeUrl[11].path}`,
    delay: 400
  },
  {
    id: 8,
    image: '/Customers/texture.webp',
    text: ' “ We switched from Confluent to Upstash as the pricing model is much more reasonable. Better with JavaScript/TypeScript ”',
    name: 'Victor Quinn',
    dev: 'Cofounder and CTO',
    link: `${routeUrl[12].path}`,
    delay: 450
  }
];
</script>
<template>
  <div class="flex place-content-center mt-[150px]">
    <div class="">
      <div class="flex flex-col items-center text-center">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="lg:text-[60px] sm:text-[40px] text-[30px] lg:leading-[60px] sm:leading-[40px] leading-[33px] font-bold text-white"
        >
          Meet our Customers
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="lg:text-[24px] sm:text-[20px] text-[17px] font-semibold"
        >
          Upstash enables companies of all sizes to create at the moment of inspiration
        </div>
      </div>

      <div class="grid md:grid-cols-2 grid-cols-1 gap-[32px] mt-[100px]">
        <RouterLink
          :to="item.link"
          v-for="item in items"
          :key="item.id"
          data-aos="fade-up"
          :data-aos-delay="item.delay"
          class="flex flex-col flex-shrink-0 gap-6 rounded-[36px] items-center group cursor-pointer border-4 h-full border-white/5 bg-gradient-to-br hover:from-[#00E9A3]/0 hover:to-[#00E9A3]/10 transition p-10 md:p-16"
        >
          <img :src="item.image" class="object-contain h-8 max-w-full" alt="" />
          <div class="w-1/4 border-0 border-b border-b-white/5"></div>
          <div
            class="bg-gradient-to-br from-white to-[#6DBEA6] bg-clip-text text-xl max-w-[450px] text-center font-semibold text-transparent"
          >
            {{ item.text }}
          </div>
          <div class="flex flex-col items-center mt-[50px] group-hover:hidden flex-grow">
            <div class="text-white font-semibold text-[18px]">{{ item.name }}</div>
            <div class="">{{ item.dev }}</div>
          </div>
          <div class="mt-[50px] hidden group-hover:block">
            <RouterLink
              :to="item.link"
              class="px-[20px] py-[8px] text-[17px] font-semibold bg-[#34d399] text-black rounded-full"
              >Read More</RouterLink
            >
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
