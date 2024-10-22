<script setup>
const items = [
  {
    id: 1,
    title: 'Blog',
    image: '/blog.svg',
    text: 'Read the latest news and product updates from the Upstash Blog.',
    buttonText: 'Read',
    link: '#'
  },
  {
    id: 2,
    title: 'Discord',
    image: '/discord.svg',
    text: 'Join our Discord community to chat with other developers and the Upstash team.',
    buttonText: 'Join',
    link: 'https://discord.gg/3q8p3k9'
  },
  {
    id: 3,
    title: 'Twitter',
    image: '/twitter.svg',
    text: 'Follow us on Twitter to stay up to date with the latest news from Upstash.',
    buttonText: 'Follow',
    link: 'https://twitter.com/upstash'
  },
  {
    id: 4,
    title: 'Github',
    image: '/github.svg',
    text: 'You can view all the projects we have developed as open source on our Github page.',
    buttonText: 'View',
    link: 'https://github.com/upstash'
  }
];
</script>
<template>
  <div class="flex place-content-center mt-[225px]">
    <div class="">
      <div class="flex flex-col items-center text-center">
        <div class="text-[60px] font-bold text-white">Community</div>
        <div class="text-[24px] font-semibold">The help you need, when you need it</div>
      </div>
      <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[5px] mt-[80px]">
        <div
          v-for="item in items"
          :key="item.id"
          class="flex flex-col p-[32px] group text-white items-center transition bg-white/5 hover:scale-[1.02] hover:bg-white/10 rounded-lg"
        >
          <div class="">
            <img :src="item.image" alt="" />
          </div>
          <div class="text-[24px] font-semibold">{{ item.title }}</div>
          <div class="max-w-[230px] text-center opacity-40 text-[16px] mt-[8px]">
            {{ item.text }}
          </div>
          <a
            :href="item.link"
            target="_blank"
            class="px-[20px] py-[8px] text-[17px] font-semibold mt-[24px] flex items-center transition gap-1 rounded-full bg-white/5 group-hover:text-black group-hover:bg-[#34D399]"
          >
            {{ item.buttonText }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              class=""
              role="icon"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
