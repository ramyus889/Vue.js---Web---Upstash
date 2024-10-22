<script setup></script>

<template>
  <div class="flex place-content-center mt-[225px]">
    <div class="">
      <div class="flex flex-col items-center text-center">
        <div class="text-[60px] font-bold text-white">Serverless & Edge</div>
        <div class="text-[24px] font-semibold">
          The platform tailored for the serverless revolution
        </div>
      </div>
      <div class="flex place-content-center flex-wrap gap-[24px] mt-[80px]">
        <div class="p-[32px] bg-white/5 rounded-3xl backdrop-blur group max-[800px]:w-full">
          <div class="flex text-2xl items-center font-semibold text-white gap-1">
            Global low latency
            <div
              class="opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                fill=""
                stroke="#34D399"
                viewBox="0 0 24 24"
                width="32px"
                height="32px"
                class=""
                role="icon"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </div>
          <div class="text-white opacity-40 mt-2 text-[16px] max-w-[524px] font-semibold">
            Data is replicated across 8+ regions worldwide to provide lowest latency for your users.
            Add/remove regions without any downtime.
          </div>
          <div class="flex flex-wrap justify-between gap-2 gap-y-4 mt-[30px] truncate">
            <div v-for="i in 30" :key="i" class="">
              <div class="">
                <div class="flex w-[8px] items-end h-10 md:h-16 rounded-full bg-black/20">
                  <span class="h-4 w-full rounded-full bg-emerald-400"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-[32px] bg-white/5 rounded-3xl backdrop-blur group max-[800px]:w-full">
          <div class="flex text-2xl items-center font-semibold text-white gap-1">
            Price scales to zero
            <div
              class="opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                fill=""
                stroke="#34D399"
                viewBox="0 0 24 24"
                width="32px"
                height="32px"
                class=""
                role="icon"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </div>
          <div class="text-white opacity-40 mt-2 text-[16px] max-w-[524px] font-semibold">
            Start free, then pay only for what you use with per-request pricing. You'll never pay
            more than the cap price, guaranteed.
          </div>
          <div
            class="grid sm:grid-cols-3 grid-cols-1 max-[640px]:text-center gap-4 mt-[32px] w-full"
          >
            <div class="px-[16px] py-[14px] rounded-xl bg-black/20">
              <div class="text-sm text-white opacity-40">Requests</div>
              <div class="text-[#fde68a] md:text-2xl text-xl">12,004</div>
            </div>
            <div class="px-[16px] py-[14px] rounded-xl bg-black/20">
              <div class="text-sm text-white opacity-40">Storage</div>
              <div class="text-[#fde68a] md:text-2xl text-xl">420KB</div>
            </div>
            <div class="px-[16px] py-[14px] rounded-xl bg-black/20">
              <div class="text-sm text-white opacity-40">Cost</div>
              <div class="text-[#6ee7b7] md:text-2xl text-xl">$0.02</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
