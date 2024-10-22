<script setup>
const items = [
  {
    id: 1,
    delay: 100,
    title: 'Redis JS SDK',
    link: 'https://github.com/upstash/redis-js',
    descriptions: 'HTTP based Redis client for edge and serverless runtimes.',
    textBlock: 'JavaScript SDK',
    colorBlock: 'bg-[#34d399]',
    colorText: 'text-[#34d399]',
    svgColor: '34d399'
  },
  {
    id: 2,
    delay: 150,
    title: 'QStash SDK',
    link: 'https://github.com/upstash/qstash-js',
    descriptions: 'HTTP based SDK for QStash and serverless runtimes.',
    textBlock: 'JavaScript SDK',
    colorBlock: 'bg-[#34d399]',
    colorText: 'text-[#34d399]',
    svgColor: '34d399'
  },
  {
    id: 3,
    delay: 200,
    title: 'Edge flags',
    link: 'https://github.com/upstash/edge-flags',
    descriptions: 'Feature flags with Redis at edge and serverless runtimes.',
    textBlock: 'JavaScript SDK',
    colorBlock: 'bg-[#34d399]',
    colorText: 'text-[#34d399]',
    svgColor: '34d399'
  },
  {
    id: 4,
    delay: 250,
    title: 'Rate limiting',
    link: 'https://github.com/upstash/ratelimit-js',
    descriptions: 'Protect your serverless functions with Redis rate limiting.',
    textBlock: 'JavaScript SDK',
    colorBlock: 'bg-[#34d399]',
    colorText: 'text-[#34d399]',
    svgColor: '34d399'
  },
  {
    id: 5,
    delay: 300,
    title: 'Claps',
    link: 'https://github.com/upstash/claps',
    descriptions: 'Add a claps button to your website backed by Upstash Redis.',
    textBlock: 'Template',
    colorBlock: 'bg-[#fde047]',
    colorText: 'text-[#fde047]',
    svgColor: 'fde047'
  },
  {
    id: 6,
    delay: 350,
    title: 'Roadmap',
    link: 'https://github.com/upstash/roadmap',
    descriptions: 'Build and deploy a roadmap app for your project/product.',
    textBlock: 'Template',
    colorBlock: 'bg-[#fde047]',
    colorText: 'text-[#fde047]',
    svgColor: 'fde047'
  },
  {
    id: 7,
    delay: 400,
    title: 'Fly',
    link: 'https://fly.io/docs/upstash/redis/',
    descriptions: 'Global Redis replicated in 20+ regions of Fly.io',
    textBlock: 'Integrations',
    colorBlock: 'bg-[#f472b6]',
    colorText: 'text-[#f472b6]',
    svgColor: 'f472b6'
  },
  {
    id: 8,
    delay: 450,
    title: 'Vercel KV',
    link: 'https://vercel.com/docs/storage/vercel-kv',
    descriptions: 'Durable and Global Redis with Vercel experience.',
    textBlock: 'Integrations',
    colorBlock: 'bg-[#f472b6]',
    colorText: 'text-[#f472b6]',
    svgColor: 'f472b6'
  }
];
</script>
<template>
  <div class="flex place-content-center mt-[230px]">
    <div class="">
      <div class="flex flex-col items-center text-center">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="lg:text-[60px] sm:text-[40px] text-[30px] lg:leading-[60px] sm:leading-[40px] leading-[33px] font-bold text-white"
        >
          Open Source & Integrations
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="lg:text-[24px] sm:text-[20px] text-[17px] font-semibold"
        >
          Tools and integrations to simplify developers' lives
        </div>
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[21px] mt-[80px]">
        <a
          :href="item.link"
          v-for="item in items"
          :key="item.id"
          data-aos="fade-up"
          :data-aos-delay="item.delay"
          target="_blank"
          class="p-[32px] backdrop-blur cursor-pointer bg-white/5 rounded-3xl transition hover:scale-[1.02] group hover:bg-white/10"
        >
          <div class="text-[20px] text-white font-semibold pb-1 flex items-center gap-3">
            {{ item.title }}
            <div
              class="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                fill=""
                :stroke="`#${item.svgColor}`"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                class=""
                role="icon"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </div>
          <div class="text-white opacity-40 grow text-[16px] max-w-[320px]">
            {{ item.descriptions }}
          </div>
          <div
            class="inline-flex items-center gap-2 rounded-full px-2 py-1 mt-[16px] self-start text-sm opacity-80 bg-emerald-300/10 text-emerald-400"
          >
            <div class="inline-flex h-3 w-3 rounded-full" :class="item.colorBlock"></div>
            <div class="text-[16px]" :class="item.colorText">{{ item.textBlock }}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
