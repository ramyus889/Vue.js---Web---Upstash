<script setup>
const items = [
  {
    id: 1,
    title: 'Fast',
    delay: 100,
    text: 'We understand that every millisecond matters to you.',
    image: '/About/Fast.svg'
  },
  {
    id: 2,
    title: 'Simple',
    delay: 200,
    text: 'Keep the things as simple as possible but not simpler.',
    image: '/About/Simple.svg'
  },
  {
    id: 3,
    title: 'Robust',
    delay: 300,
    text: 'We aim to earn your trust with robust solutions. ',
    image: '/About/Robust.svg'
  }
];

const itemsInvest = [
  {
    id: 1,
    name: 'a16z',
    delay: 100,
    link: 'https://twitter.com/a16z',
    image: '/About/a16z.webp'
  },
  {
    id: 2,
    name: 'Mango Capital',
    delay: 120,
    link: 'https://www.mangocapitalinc.com/',
    image: '/About/mango.webp'
  },
  {
    id: 3,
    name: 'Earlybird',
    delay: 140,
    link: 'https://earlybird.com/',
    image: '/About/early-bird.webp'
  },
  {
    id: 4,
    dev: 'CEO, Vercel',
    delay: 160,
    link: 'https://twitter.com/rauchg',
    name: 'Guillermo Rauch',
    image: '/About/rauchg.webp'
  },
  {
    id: 5,
    dev: 'Founder, Auth0',
    delay: 180,
    link: 'https://twitter.com/woloski',
    name: 'Matias Woloski',
    image: '/About/matias.webp'
  },
  {
    id: 6,
    dev: 'Creator of styled-components',
    delay: 200,
    link: 'https://twitter.com/mxstbr',
    name: 'Max Stoiber',
    image: '/About/mxstbr.webp'
  },
  {
    id: 7,
    dev: 'Founder, AngelList',
    delay: 220,
    link: 'https://twitter.com/naval',
    name: 'Naval Ravikant',
    image: '/About/naval.webp'
  },
  {
    id: 8,
    dev: 'Ground Control Ventures',
    delay: 240,
    link: 'https://twitter.com/dscape',
    name: 'Nuno Job',
    image: '/About/dscape.webp'
  },
  {
    id: 9,
    dev: 'Remote First Capital',
    delay: 260,
    link: 'https://twitter.com/andreasklinger',
    name: 'Andreas Klinger',
    image: '/About/andreas-klinger.webp'
  },
  {
    id: 10,
    dev: 'Investor/Advisor (ex-Slack)',
    delay: 280,
    link: 'https://twitter.com/josephaabebe',
    name: 'Joseph Abebe',
    image: '/About/joseph-abebe.webp'
  },
  {
    id: 11,
    dev: 'HyperGrowth Partners',
    delay: 300,
    link: 'https://twitter.com/mgonto',
    name: 'Martin Gontovnikas',
    image: '/About/mgonto.webp'
  },
  {
    id: 12,
    dev: 'Founder, Accomplice',
    delay: 320,
    link: 'https://angel.co/p/jfagnan',
    name: 'Jeff Fagnan',
    image: '/About/jfagnan.webp'
  },
  {
    id: 13,
    dev: 'Partner, AngelList',
    delay: 340,
    link: 'https://twitter.com/jake_zeller',
    name: 'Jake Zeller',
    image: '/About/jake-zeller.webp'
  },
  {
    id: 14,
    dev: 'Partner, Ravix Group',
    delay: 360,
    link: 'https://www.linkedin.com/in/morgan-dioli-author-cfo',
    name: 'Morgan Dioli',
    image: '/About/morgan-dioli.webp'
  }
];
</script>
<template>
  <div class="flex place-content-center mt-[160px] px-5">
    <div class="">
      <div class="flex flex-col items-center gap-6">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="text-white sm:text-[60px] min-[400px]:text-[40px] text-[30px] text-center sm:leading-[69px] leading-[40px] font-bold"
        >
          Data Platform <br />
          for Developers
        </div>
        <div
          class="sm:text-[24px] text-[17px] mt-2 text-white text-center opacity-60 grid gap-1 md:gap-2"
        >
          <span data-aos="fade-up" data-aos-delay="200">We manage everything for you.</span>
          <span data-aos="fade-up" data-aos-delay="300">You focus on more important things.</span>
          <span data-aos="fade-up" data-aos-delay="400"
            >With per-request pricing, you pay only for what you use.</span
          >
        </div>

        <div class="flex flex-wrap place-content-center mt-[80px] gap-[24px] mb-[128px]">
          <div
            v-for="item in items"
            :key="item.id"
            data-aos="fade-up"
            :data-aos-delay="item.delay"
            class="flex flex-col items-center px-[48px]"
          >
            <div class=""><img :src="item.image" alt="" /></div>
            <div class="mt-4 text-white font-semibold text-xl">{{ item.title }}</div>
            <div
              class="text-white opacity-60 text-[16px] mt-2 font-semibold leading-[24px] text-center max-w-[202px]"
            >
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-gradient-to-b from-white/5 to-zinc-950 w-full pt-[128px] px-10">
    <div class="flex place-content-center max-w-[800px] mx-auto">
      <div class="">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="text-white sm:text-[60px] min-[400px]:text-[40px] text-[30px] text-center sm:leading-[69px] leading-[40px] font-bold"
        >
          Our Investors
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="sm:text-[24px] text-[17px] mt-4 text-white text-center opacity-60"
        >
          We are fortunate to work with some of the best investors in the world. Chances are you are
          already using the products they helped to create.
        </div>
        <div
          class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-[40px] md:mt-24 mt-12 max-w-[800px] mx-auto"
        >
          <a
            :href="item.link"
            target="_blank"
            v-for="item in itemsInvest"
            :key="item.id"
            data-aos="fade-up"
            :data-aos-delay="item.delay"
            class="flex flex-col items-center group cursor-pointer"
          >
            <img :src="item.image" alt="" class="rounded-full w-[80px] h-[80px] object-cover" />
            <div class="flex flex-col items-center gap-1">
              <div
                class="mt-4 text-xl font-medium transition group-hover:text-emerald-400 group-hover:underline"
              >
                {{ item.name }}
              </div>
              <div class="text-white opacity-40 text-[16px] text-center">{{ item.dev }}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
