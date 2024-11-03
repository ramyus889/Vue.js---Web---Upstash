<script setup>
import UseFooter from '@/components/UseFooter.vue';
import { routeUrl } from '@/router/routes';
const adaptive =
  'min-[2300px]:mx-[570px] min-[2250px]:mx-[600px] min-[2125px]:mx-[550px] min-[2050px]:mx-[500px] min-[1920px]:mx-[450px] min-[1850px]:mx-[350px] min-[1750px]:mx-[250px] min-[1450px]:mx-[200px] min-[1330px]:mx-[150px] xl:mx-[100px]';
</script>
<template>
  <div :class="adaptive" class="px-5 border-b border-white/5">
    <RouterLink
      class="inline-flex w-full py-4 text-white opacity-40 hover:opacity-80"
      :to="`${routeUrl[2].path}`"
      >← Back to Customers</RouterLink
    >
  </div>
  <div class="flex place-content-center mt-[90px] px-5">
    <div class="">
      <img src="/Customers/dub.webp" alt="" class="w-[1000px] rounded-xl" />
      <div class="flex flex-col mt-20 max-w-[688px] mx-auto">
        <div class="text-[20px] text-white leading-[30px] font-semibold">
          Dub is an open-source link management tool tailored for the evolving needs of modern
          marketing teams to create share and track short links. Launched just in September 2022, it
          has an impressive track record with 755 custom domains, 20K short links, 3.5M link
          redirects, and an overwhelming support of 8K stars on GitHub.
        </div>
        <div class="text-[20px] text-white leading-[30px] font-semibold mt-[40px]">
          Dub's Technical Stack: Prioritizing Speed and Efficiency with Upstash
        </div>
        <div class="text-[16px] text-white leading-[26px] font-semibold mt-[24px]">
          In this stack, Dub's performance is accelerated further with its strategic database
          selections: Upstash Redis ensures very fast link retrievals (via key-value pairs):
          https://github.com/dubinc/dub/blob/main/apps/web/lib/upstash.ts. On the automation front,
          Upstash QStash plays the key role managing cron jobs efficiently
          https://github.com/dubinc/dub/blob/main/apps/web/app/api/cron/import/short/utils.ts#L164.
        </div>
        <div class="text-[20px] text-white leading-[30px] font-semibold mt-[40px]">
          The Upstash Advantage
        </div>
        <div class="text-[16px] text-white leading-[26px] font-semibold mt-[24px]">
          Right from the start, Dub has chosen Upstash. According to Dub, two key factors make
          Upstash stand out: Exceptional Developer Experience (DX) and high-speed performance.
        </div>
      </div>
      <div
        class="flex place-content-center items-center gap-6 rounded-3xl border-4 border-white/5 p-10 text-center md:px-20 md:py-16 mt-[40px]"
      >
        <div class="flex flex-col items-center gap-6">
          <img src="/Customers/steven.webp" class="rounded-full w-[64px] h-[64px]" alt="" />
          <div
            class="bg-gradient-to-br from-white to-[#6DBEA6] bg-clip-text text-xl max-w-[690px] text-center font-semibold text-transparent"
          >
            The Upstash JS SDK is incredibly easy to use – all I needed to do was run npm install,
            initialize the Redis instance, and start running redis commands – super simple! As for
            performance – our links have sub 200ms redirect times, thanks to Upstash!
          </div>
          <div class="flex items-center">
            <div class="text-white opacity-80 text-[16px]">Steven Tey</div>
            <div class="text-white opacity-40">, Founder</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <UseFooter />
  </div>
</template>
