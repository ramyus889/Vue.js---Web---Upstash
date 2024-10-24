<script setup>
import UseFooter from '@/components/UseFooter.vue';

const adaptive =
  'min-[2300px]:mx-[570px] min-[2250px]:mx-[600px] min-[2125px]:mx-[550px] min-[2050px]:mx-[500px] min-[1920px]:mx-[450px] min-[1850px]:mx-[350px] min-[1750px]:mx-[250px] min-[1450px]:mx-[200px] min-[1330px]:mx-[150px] xl:mx-[100px]';
</script>
<template>
  <div :class="adaptive" class="border-white/5 border-b px-5">
    <RouterLink
      class="text-white opacity-40 hover:opacity-80 py-4 w-full inline-flex"
      to="/Customers"
      >← Back to Customers</RouterLink
    >
  </div>
  <div class="flex place-content-center mt-[90px] px-5">
    <div class="">
      <img src="/Customers/Sweet.webp" alt="" class="w-[1000px] rounded-xl" />
      <div class="flex flex-col mt-20 max-w-[688px] mx-auto">
        <div class="text-[20px] text-white leading-[30px] font-semibold">
          Sweet Analytics is a customer and marketing data platform designed for ecommerce brands.
          It seamlessly connects all customer data points and interactions, offering a comprehensive
          360-degree view of business performance. The platform not only provides tools to track
          against business goals but also enables a deep understanding of customer behavior and its
          impact on revenue. Ultimately, Sweet Analytics equips businesses with the essential tools
          to better understand their customers and foster growth.
        </div>
        <div class="text-[20px] text-white leading-[30px] font-semibold mt-[40px]">
          Upstash Kafka as the primary messaging engine <br />
          to allow cross-microservice communication
        </div>
        <div class="text-[16px] text-white leading-[26px] font-semibold mt-[24px]">
          As a Customer Data Platform (CDP), Sweet ingests vast amounts of data from various
          sources, including ecommerce, email, and marketing platforms, as well as live behavioral
          data from website users. Sweet relies on Upstash's managed Kafka service as its primary
          messaging engine, enabling different microservices to communicate seamlessly. These
          services publish key events that other services might need to act upon. For example, when
          the ecommerce data sync service creates an order in the system, it triggers a need for
          Sweet to update certain customer stats. This is due to changes in metrics like the total
          number of orders, sales, and other key customer-related figures. The customer stats
          service subscribes to these events and recalculates the relevant statistics. While this is
          a simplified illustration, the primary use of Upstash Kafka for Sweet is to facilitate
          cross-microservice communication within their real-time system
        </div>
      </div>
      <div
        class="flex place-content-center items-center gap-6 rounded-3xl border-4 border-white/5 p-10 text-center md:px-20 md:py-16 mt-[40px]"
      >
        <div class="flex flex-col gap-6 items-center">
          <img src="/Customers/miguel.webp" class="rounded-full w-[64px] h-[64px]" alt="" />
          <div
            class="bg-gradient-to-br from-white to-[#6DBEA6] bg-clip-text text-xl max-w-[690px] text-center font-semibold text-transparent"
          >
            Upstash Kafka has essentially allowed us to focus more on shipping new features and
            provide a higher quality service, as well as simplify our operations by using a managed
            service rather than setting it up and managing it ourselves.
          </div>
          <div class="flex items-center">
            <div class="text-white opacity-80 text-[16px]">Miguel Martinez</div>
            <div class="text-white opacity-40">, CTO</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <UseFooter />
  </div>
</template>
