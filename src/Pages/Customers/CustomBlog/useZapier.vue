<script setup>
import UseFooter from '@/components/UseFooter.vue';

const adaptive =
  'min-[2300px]:mx-[570px] min-[2250px]:mx-[600px] min-[2125px]:mx-[550px] min-[2050px]:mx-[500px] min-[1920px]:mx-[450px] min-[1850px]:mx-[350px] min-[1750px]:mx-[250px] min-[1450px]:mx-[200px] min-[1330px]:mx-[150px] xl:mx-[100px]';
</script>
<template>
  <div :class="adaptive" class="border-white/5 border-b">
    <RouterLink
      class="text-white opacity-40 hover:opacity-80 py-4 w-full inline-flex"
      to="/Customers"
      >← Back to Customers</RouterLink
    >
  </div>
  <div class="flex place-content-center mt-[90px]">
    <div class="">
      <img src="/Customers/zapier.webp" alt="" class="w-[1000px] rounded-xl" />
      <div class="flex flex-col mt-20 max-w-[688px] mx-auto">
        <div class="text-[20px] text-white leading-[30px] font-semibold">
          Zapier needs no introduction, but briefly from their website Zapier is an online
          automation tool that connects your apps and services. You can connect two or more apps to
          automate repetitive tasks without coding or relying on developers to build the integration
        </div>
        <div class="text-[20px] text-white leading-[30px] font-semibold mt-[40px]">
          Upstash enhancing the resiliency of <br />
          Zapier tech stack against malicious actors
        </div>
        <div class="text-[16px] text-white leading-[26px] font-semibold mt-[24px]">
          One of the core components of Zapier’s tech stack is their middleware, which is designed
          to be robust and scalable, running in Vercel's edge runtime. Within this context, Zapier
          leverages Upstash for their Redis storage needs. The main functionalities Zapier have
          integrated Upstash for are malicious IP blocking and global request rate limiting. These
          features have played a critical role for Zapier’s infrastructure, ensuring both safety
          from malicious actors and stability under high traffic loads.
        </div>
        <div class="text-[20px] text-white leading-[30px] font-semibold mt-[40px]">
          Overcoming TCP Constraints with Upstash's Redis Integration
        </div>
        <div class="text-[16px] text-white leading-[26px] font-semibold mt-[24px]">
          Before Upstash, Zapier had a separate Redis instance that was connected to from their node
          serverless functions, hosted on Redis Labs. However, they faced limitations in the Vercel
          edge runtime, which does not support TCP connections. This made it challenging to
          implement certain features like API rate limiting by IP from their middleware. To overcome
          these challenges, they chose Upstash. This decision was majorly influenced by the fact
          that their middleware always runs in the Vercel edge runtime, which only supports web APIs
          due to its reliance on Cloudflare Workers that can't establish TCP connections for
          traditional Redis instance integrations.
        </div>
      </div>
      <div
        class="flex place-content-center items-center gap-6 rounded-3xl border-4 border-white/5 p-10 text-center md:px-20 md:py-16 mt-[40px]"
      >
        <div class="flex flex-col gap-6 items-center">
          <img src="/Customers/benbiran.webp" class="rounded-full w-[64px] h-[64px]" alt="" />
          <div
            class="bg-gradient-to-br from-white to-[#6DBEA6] bg-clip-text text-xl max-w-[690px] text-center font-semibold text-transparent"
          >
            With Upstash, we were able to seamlessly implement features like API rate limiting by IP
            from our middleware without needing to work around the limitations posed by the Vercel
            edge runtime. The HTTP interface for Redis that Upstash provides made this transition
            much more straightforward for us, allowing our team to focus on optimizing other aspects
            of our platform.
          </div>
          <div class="flex items-center">
            <div class="text-white opacity-80 text-[16px]">Ben Biran</div>
            <div class="text-white opacity-40">, Engineering Manager</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <UseFooter />
  </div>
</template>
