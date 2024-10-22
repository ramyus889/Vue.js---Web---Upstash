<script setup>
import { ref } from 'vue';

const delays = ref([]);

// Генерация случайных задержек для 30 индексов
for (let i = 0; i < 30; i++) {
  delays.value.push(Math.random() * 1000); // случайная задержка от 0 до 1000 мс
}
</script>

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
              <a href="#">
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
              </a>
            </div>
          </div>
          <div class="text-white opacity-40 mt-2 text-[16px] max-w-[524px] font-semibold">
            Data is replicated across 8+ regions worldwide to provide lowest latency for your users.
            Add/remove regions without any downtime.
          </div>
          <div class="flex flex-wrap justify-between gap-2 gap-y-4 mt-[30px]">
            <div v-for="(delay, i) in delays" :key="i" class="">
              <div class="">
                <div class="flex w-[8px] items-end h-16 rounded-full bg-black/20">
                  <span
                    :style="{ animationDelay: delay + 'ms' }"
                    class="h-4 w-full rounded-full useanimate bg-emerald-400"
                  ></span>
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
              <a href="#">
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
              </a>
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
<style scoped>
.useanimate {
  animation: useanimate 1.5s ease-in-out infinite;
  animation-delay: 200ms;
}
@keyframes useanimate {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
