<script setup>
const items = [
  {
    id: 1,
    title: 'Serverless KV with Redis API',
    image: '/redisAPI.svg',
    textColor: 'text-[#FCA5A5]',
    bgColor: 'bg-[#FCA5A5]',
    descriptions1: 'Durable and fast with multi tier storage.',
    descriptions2: 'Fast anywhere with global replication.',
    descriptions3: 'Designed for Edge/Serverless with REST API.'
  },
  {
    id: 2,
    title: 'Vector Database',
    image: '/vector.svg',
    textColor: 'text-[#FDBA74]',
    bgColor: 'bg-[#FDBA74]',
    descriptions1: 'Serverless, price scales to zero',
    descriptions2: 'Optimized for vector search',
    descriptions3: 'Scales up to billion vectors'
  },
  {
    id: 3,
    title: 'QStash',
    image: '/QStash.svg',
    textColor: 'text-[#D8B4FE]',
    bgColor: 'bg-[#D8B4FE]',
    descriptions1: 'Serverless, HTTP based messaging',
    descriptions2: 'Scheduling via CRON',
    descriptions3: 'At-least-once delivery with auto retries'
  }
];
</script>
<template>
  <div class="flex place-content-center">
    <div class="">
      <div class="flex flex-col items-center mt-[224px]">
        <div class="text-[60px] font-bold text-white">Products</div>
        <div class="text-[24px] font-semibold">True serverless data platform</div>
      </div>
      <div class="">
        <div class="grid min-[1360px]:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 mt-[80px]">
          <div
            v-for="item in items"
            :key="item.id"
            class="flex flex-col gap-5 p-[32px] backdrop-blur bg-red-200/5 rounded-[36px]"
          >
            <div class=""><img :src="item.image" alt="" /></div>
            <div class="text-[24px] font-bold text-white">{{ item.title }}</div>
            <ul class="flex flex-col gap-2 text-[17px]">
              <li :class="item.textColor" class="flex gap-1">
                <img src="/check.svg" class="w-[24px]" alt="" /> {{ item.descriptions1 }}
              </li>
              <li :class="item.textColor" class="flex gap-1">
                <img src="/check.svg" class="w-[24px]" alt="" /> {{ item.descriptions2 }}
              </li>
              <li :class="item.textColor" class="flex gap-1">
                <img src="/check.svg" class="w-[24px]" alt="" /> {{ item.descriptions3 }}
              </li>
            </ul>
            <div class="flex gap-4 mt-[24px] text-[17px]">
              <button
                :class="item.bgColor"
                class="flex justify-between px-[20px] py-[8px] items-center text-black rounded-full bg-[#fee2e2] w-full"
              >
                Docs <span><img src="/arrowRightTop.svg" class="" alt="" /></span>
              </button>
              <button
                :class="`hover:${item.bgColor}`"
                class="flex justify-between px-[20px] py-[9px] items-center rounded-full w-full bg-white/5"
              >
                Examples
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
