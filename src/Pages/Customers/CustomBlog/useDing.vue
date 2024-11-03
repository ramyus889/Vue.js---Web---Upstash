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
      <img src="/Customers/ding.webp" alt="" class="w-[1000px] rounded-xl" />
      <div class="flex flex-col mt-20 max-w-[688px] mx-auto">
        <div class="text-[20px] text-white leading-[30px] font-semibold">
          Ding provides a user authentication solution specifically for scale-ups. Their service
          enables authentication and verification via text messages, offering global reach,
          competitive pricing, and super fast deliverability. Their authentication solution
          effectively prevents fraudulent requests; in some cases, it has cut the number of
          fraudulent authentication attempts in half for their customers. By filtering out these
          fraud attempts, their clients save on costs that would otherwise go to SMS providers for
          handling fraudulent traffic. Some of the customers of Ding's authentication services
          include social media platforms BeReal and Bumble.
        </div>
        <div class="text-[20px] text-white leading-[30px] font-semibold mt-[40px]">
          Upstash Redis: Enhancing User Experience and Supporting Fraud Detection
        </div>
        <div class="text-[16px] text-white leading-[26px] font-semibold mt-[24px]">
          Ding's infrastructure mainly utilizes Go and runs on AWS Lambda, achieving complete
          serverlessness across all operations. They rely on DynamoDB for OLTP (Online Transaction
          Processing) and Redshift for OLAP (Online Analytical Processing) workloads. Upstash plays
          multiples roles in this architecture, serving both as a caching solution, enabling rate
          limiting and providing simple database store functionality due to durability feature.
        </div>
        <div class="text-[16px] text-white leading-[26px] font-semibold mt-[24px]">
          On the caching side, Upstash caches the results of intensive OLAP queries from Redshift.
          As part of their customer facing solution, they also offer analytics capabilities
          including customer facing dashboards monitoring acquisition metrics in real-time. Ding
          achieves this realtime speed and experience by using Upstash. They optimize this
          experience by caching the results of lengthy Redshift queries in Upstash, enabling them to
          deliver content with latencies as low as 10ms at the edge, significantly enhancing the
          user experience.
        </div>
        <div class="text-[16px] text-white leading-[26px] font-semibold mt-[24px]">
          Moreover, Upstash Redis's rate limiting is a key component of Ding's anti-fraud
          algorithms, helping in the early detection of fraudulent behavior signals and preventing
          fraud authentications and savings costs for their users
        </div>
      </div>
      <div
        class="flex place-content-center items-center gap-6 rounded-3xl border-4 border-white/5 p-10 text-center md:px-20 md:py-16 mt-[40px]"
      >
        <div class="flex flex-col items-center gap-6">
          <img src="/Customers/aymerick.webp" class="rounded-full w-[64px] h-[64px]" alt="" />
          <div
            class="bg-gradient-to-br from-white to-[#6DBEA6] bg-clip-text text-xl max-w-[690px] text-center font-semibold text-transparent"
          >
            With Upstash we minimized our operational costs and we also felt very safe that we only
            pay for what we use, this is on top of amazing support we get whenever we need it.
          </div>
          <div class="flex items-center">
            <div class="text-white opacity-80 text-[16px]">Aymerick Valette</div>
            <div class="text-white opacity-40">, Founding Engineer</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <UseFooter />
  </div>
</template>
