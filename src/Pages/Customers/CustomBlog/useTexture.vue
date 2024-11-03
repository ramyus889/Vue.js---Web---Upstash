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
      <img src="/Customers/texture2.webp" alt="" class="w-[1000px] rounded-xl" />
      <div class="flex flex-col mt-20 max-w-[688px] mx-auto">
        <div class="text-[20px] text-white leading-[30px] font-semibold">
          Texture is an energy data platform that simplifies the process for developers to connect
          to energy devices, retrieve data from them, and control them. They offer data
          transformations and aggregations, as well as analytics and automated device control
          functionalities. To achieve this, they normalize data and APIs across manufacturers and
          allow grouping and batch control of devices, making it easier for developers to build and
          manage a network of energy devices
        </div>

        <div class="text-[16px] text-white leading-[26px] font-semibold mt-[24px]">
          Texture make heavy use of Upstash Kafka to enable scalable cross-microservice
          communication. They rely on Upstash Kafka for gathering telemetry data from energy devices
          at regular intervals, typically ranging from 5 to 15 minutes. Their long-term goal is to
          shift towards even smaller intervals, eventually achieving real-time data updates.
        </div>
        <div class="text-[16px] text-white leading-[26px] font-semibold mt-[24px]">
          Each data update received from an energy device is put into a Kafka topic as a message,
          from where it flows downstream and undergoes various transformations, potentially
          triggering automations and more. Streaming, transforming and processing such substantial
          volumes of data from every device can be a daunting task, but Upstash Kafka allows Texture
          to do so efficiently while letting their costs scale with their business growth.
        </div>
        <div class="text-[20px] text-white leading-[30px] font-semibold mt-[40px]">
          Cost Savings and Superior JavaScript/TypeScript <br />
          Support Compared to Confluent
        </div>
        <div class="text-[16px] text-white leading-[26px] font-semibold mt-[24px]">
          Before Upstash, Texture used Confluent. From Texture’s perspective, what sets Upstash
          apart is not just its cost-effectiveness, where they pay for actual usage rather than
          maintaining and paying for a dedicated cluster. It also brings peace of mind by
          eliminating the need for manual cluster scaling when traffic surges. Additionally, Texture
          has also experienced that Upstash works much more seamlessly with KafkaJS, their preferred
          method for connecting to Kafka. In contrast, they encountered difficulties with
          Confluent's support for JavaScript/TypeScript and experienced numerous issues when using
          KafkaJS with Confluent-hosted Kafka
        </div>
      </div>
      <div
        class="flex place-content-center items-center gap-6 rounded-3xl border-4 border-white/5 p-10 text-center md:px-20 md:py-16 mt-[40px]"
      >
        <div class="flex flex-col items-center gap-6">
          <img src="/Customers/victor.webp" class="rounded-full w-[64px] h-[64px]" alt="" />
          <div
            class="bg-gradient-to-br from-white to-[#6DBEA6] bg-clip-text text-xl max-w-[690px] text-center font-semibold text-transparent"
          >
            We switched from Confluent to Upstash as the pricing model is much more reasonable. Not
            only on cost, technically Upstash also works better with JavaScript/TypeScript
          </div>
          <div class="flex items-center">
            <div class="text-white opacity-80 text-[16px]">Victor Quinn</div>
            <div class="text-white opacity-40">, Cofounder and CTO</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <UseFooter />
  </div>
</template>
