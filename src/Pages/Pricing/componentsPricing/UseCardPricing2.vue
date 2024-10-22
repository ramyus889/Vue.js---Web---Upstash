<script setup>
defineProps({
  name: String,
  text: String,
  price: String,
  priceM: String,
  limit: String,
  delay: Number,
  textPrice: String,
  borderClass: String
});
</script>
<template>
  <div
    :class="borderClass"
    data-aos="fade-up"
    :data-aos-delay="delay"
    class="flex flex-col items-center gap-6 rounded-3xl bg-white/5 px-4 py-8 h-full"
  >
    <div class="flex flex-col items-center justify-between">
      <div class="mb-2 text-xl font-semibold text-emerald-400">{{ name }}</div>
      <div class="flex items-center">
        <div class="text-2xl font-bold">{{ price }}</div>
        <div class="text-base font-normal opacity-40 ml-1">{{ priceM }}</div>
      </div>
      <div class="text-sm text-white/40">{{ textPrice }}</div>
    </div>
    <div class="text-white/80 pb-[4px] text-center text-[17px] max-w-[350px] flex-grow">
      {{ text }}
    </div>
    <div class="w-2/3 border-0 border-b border-b-white/5"></div>

    <div class="flex flex-col gap-1 items-center">
      <div class="text-white/40 text-[17px] font-semibold">Daily Query / Update Limit</div>
      <div class="text-[17px] font-semibold">{{ limit }}</div>
    </div>

    <div class="w-2/3 border-0 border-b border-b-white/5"></div>

    <a
      href="#"
      class="inline-flex cursor-pointer items-center bg-zinc-50 transition gap-1 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-emerald-400 hover:text-emerald-950 disabled:bg-white/5 disabled:text-zinc-50 text-zinc-950"
      >Start Now</a
    >
  </div>
</template>
