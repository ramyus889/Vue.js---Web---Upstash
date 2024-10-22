<script setup></script>
<template>
  <div data-aos="fade-up" data-aos-delay="100" class="flex place-content-center mt-[120px]">
    <div
      class="flex md:flex-row flex-col max-[768px]:w-full gap-16 px-[48px] py-[15px] backdrop-blur bg-white/5 rounded-[36px]"
    >
      <div data-aos="fade-up" data-aos-delay="200" class="flex flex-col items-center">
        <div class="text-[36px] text-[#34D399] font-bold">25B</div>
        <div class="text-[#a7f3d0] opacity-40">REDIS COMANDS / WEEK</div>
      </div>
      <div data-aos="fade-up" data-aos-delay="300" class="flex flex-col items-center">
        <div class="text-[36px] text-[#34D399] font-bold">7.1B</div>
        <div class="text-[#a7f3d0] opacity-40">KAFKA MESSAGES / WEEK</div>
      </div>
      <div data-aos="fade-up" data-aos-delay="400" class="flex flex-col items-center">
        <div class="text-[36px] text-[#34D399] font-bold">{{ '>99.99%' }}</div>
        <div class="text-[#a7f3d0] opacity-40">UPTIME</div>
      </div>
    </div>
  </div>
</template>
