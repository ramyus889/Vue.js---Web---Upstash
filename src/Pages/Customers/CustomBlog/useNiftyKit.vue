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
      <img src="/Customers/niftykit.webp" alt="" class="w-[1000px] rounded-xl" />
      <div class="flex flex-col mt-20 max-w-[688px] mx-auto">
        <div class="text-[20px] text-white leading-[30px] font-semibold">
          NiftyKit empowers creators, artists, brands, and businesses to unlock new economic
          opportunities and build community through NFTs. NiftyKit is a no-code NFT launchpad that
          allows people to easily create, manage, and sell NFTs on their own custom smart contracts.
          They provide true ownership of smart contracts and NFTs through easy-to-use, accessible,
          and affordable tools.
        </div>
        <div class="text-[20px] text-white leading-[30px] font-semibold mt-[40px]">
          After Several Trials with Other Vendors, NiftyKit Chose Upstash
        </div>
        <div class="text-[16px] text-white leading-[26px] font-semibold mt-[24px]">
          NiftyKit tech stack is based on Next.js / Vercel / Prisma (ORM) / Supabase (Postgres) /
          Upstash (Redis). Before Upstash they tried Heroku Redis and Redis Labs, but they didn’t
          meet NiftyKit’s needs.
        </div>
        <div class="text-[20px] text-white leading-[30px] font-semibold mt-[40px]">
          Upstash bulletproof performance with almost zero issues
        </div>
        <div class="text-[16px] text-white leading-[26px] font-semibold mt-[24px]">
          When Heroku Redis experienced multiple downtimes, resulting in data loss and unresponsive
          support, they decided to explore Upstash. Upstash's service performance proved to be
          bulletproof, with almost zero issues, and the Upstash support team has always been there
          when they needed help. Redis plays a critical role in NiftyKit’s infrastructure, and
          Upstash takes pride in delivering high performance for this essential component.
        </div>
      </div>
      <div
        class="flex place-content-center items-center gap-6 rounded-3xl border-4 border-white/5 p-10 text-center md:px-20 md:py-16 mt-[40px]"
      >
        <div class="flex flex-col items-center gap-6">
          <img src="/Customers/benbiran.webp" class="rounded-full w-[64px] h-[64px]" alt="" />
          <div
            class="bg-gradient-to-br from-white to-[#6DBEA6] bg-clip-text text-xl max-w-[690px] text-center font-semibold text-transparent"
          >
            Upstash service has been bulletproof, with almost zero issues, and their support team is
            some of the most incredible people. They helped us troubleshoot issues down to the code
            level
          </div>
          <div class="flex items-center">
            <div class="text-white opacity-80 text-[16px]">Terence Pae</div>
            <div class="text-white opacity-40">, CTO, Cofounder</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <UseFooter />
  </div>
</template>
