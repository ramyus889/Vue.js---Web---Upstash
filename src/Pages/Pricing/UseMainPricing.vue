<script setup>
import UsePriceTabs from '@/Pages/Pricing/componentsPricing/UsePriceTabs.vue';
</script>

<template>
  <div class="flex place-content-center mt-[150px]">
    <div class="">
      <div class="flex flex-col items-center">
        <div data-aos="fade-up" data-aos-delay="100" class="text-[60px] font-bold text-white">
          Pricing
        </div>
        <div data-aos="fade-up" data-aos-delay="200" class="text-[24px] font-semibold text-center">
          Pay only for what you use with per-request pricing.
        </div>
      </div>
      <div class="">
        <UsePriceTabs />
      </div>
    </div>
  </div>
</template>
