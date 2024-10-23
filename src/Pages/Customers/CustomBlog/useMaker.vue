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
      <img src="/Customers/maker.webp" alt="" class="w-[1000px] rounded-xl" />
      <div class="flex flex-col mt-20 max-w-[688px] mx-auto">
        <div class="text-[20px] text-white leading-[30px] font-semibold">
          Maker develops a suite of products that enhance e-commerce sites, driving increased
          customer engagement and conversion. Maker’s offering spreads a gamut of different
          products, a page builder, link in bio, and live video sales.
        </div>
        <div class="text-[20px] text-white leading-[30px] font-semibold mt-[40px]">
          Upstash Redis as the primary database for <br />
          critical data ingestion and distribution tasks
        </div>
        <div class="text-[16px] text-white leading-[26px] font-semibold mt-[24px]">
          Maker mainly uses lambda functions and Redis from Upstash in their tech setup. They rely
          heavily on Redis as their primary database throughout their data ingestion and
          distribution pipeline for merchant product catalogs. At Upstash, we're happy to support
          them and keep their services running smoothly
        </div>
        <div class="text-[16px] text-white leading-[26px] font-semibold mt-[24px]">
          Before discovering Upstash, Maker had a mixed setup where they primarily used Redis for
          caching, alongside a main datastore like PSQL. But with Upstash's capability to exceed the
          resident memory limits of machines, they found new opportunities. This allowed them to
          read from and write directly to Redis, eliminating the need for intermediaries. Due to
          these features, Maker has increasingly depended on Upstash's Redis, experiencing enhanced
          performance, reliability, and cost-efficiency.
        </div>
        <div class="text-[20px] text-white leading-[30px] font-semibold mt-[40px]">
          Upstash Redis helped Maker to combine <br />
          Primary Database and Caching Needs
        </div>
        <div class="text-[16px] text-white leading-[26px] font-semibold mt-[24px]">
          With Upstash, Maker can utilize a fast low-latency database directly, removing the
          previous need to treat Redis solely as a caching solution. This approach reduces
          complexities associated with cache invalidation and allows Maker to utilize the advanced
          capabilities of Redis directly. Whether it's basic CRUD operations or full featured
          faceted product filtering, Maker uses Redis from start to finish, relying on Upstash with
          the management of their instances.
        </div>
      </div>
      <div
        class="flex place-content-center items-center gap-6 rounded-3xl border-4 border-white/5 p-10 text-center md:px-20 md:py-16 mt-[40px]"
      >
        <div class="flex flex-col gap-6 items-center">
          <img src="/Customers/emery.webp" class="rounded-full w-[64px] h-[64px]" alt="" />
          <div
            class="bg-gradient-to-br from-white to-[#6DBEA6] bg-clip-text text-xl max-w-[690px] text-center font-semibold text-transparent"
          >
            The ability to exceed the resident memory of the machine that Upstash has built opens up
            more possibilities, and allows reading and writing directly to Redis and skipping the
            middle-man
          </div>
          <div class="flex items-center">
            <div class="text-white opacity-80 text-[16px]">Emery Denuccio</div>
            <div class="text-white opacity-40">, Software Engineer</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <UseFooter />
  </div>
</template>
