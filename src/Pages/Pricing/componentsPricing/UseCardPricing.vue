<script setup>
defineProps({
  name: String,
  text: String,
  price: String,
  items2: Array,
  priceM: String,
  delay: Number,
  textPrice: String,
  textCommand: String,
  borderClass: String,
  buttonColor: String
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
    <div class="flex flex-wrap justify-center gap-1 max-w-[350px]">
      <div
        v-for="item in items2"
        :key="item.id"
        :class="[item.textColor, item.borderClass]"
        class="flex items-center gap-1 font-semibold rounded-full border py-1 pl-2 pr-3 text-sm"
      >
        <img :src="item.icon" alt="" />
        <div class="">{{ item.text }}</div>
      </div>
    </div>
    <div class="w-2/3 border-0 border-b border-b-white/5"></div>
    <div class="text-emerald-200 text-[17px] font-semibold">{{ textCommand }}</div>
    <a
      href="#"
      :class="buttonColor"
      class="inline-flex cursor-pointer items-center transition gap-1 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-emerald-400 hover:text-emerald-950 disabled:bg-white/5 disabled:text-zinc-50 text-zinc-950"
      >Start Now</a
    >
  </div>
</template>
