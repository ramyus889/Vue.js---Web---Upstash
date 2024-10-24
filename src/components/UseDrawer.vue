<template>
  <div class="card flex justify-center">
    <Drawer v-model:visible="visible" position="right" header="upstash">
      <div class="flex flex-col gap-3">
        <div v-for="item in items" :key="item.id" class="">
          <RouterLink
            :to="item.link"
            @click="visible = false"
            class="rounded-full text-[#fafafa] opacity-60 hover:opacity-100 transition-all duration-200 font-semibold"
            >{{ item.name }}</RouterLink
          >
        </div>
      </div>
    </Drawer>
    <Button icon="pi pi-bars" @click="visible = true" />
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import Drawer from 'primevue/drawer';
import { ref } from 'vue';

const visible = ref(false);

const items = [
  {
    id: 1,
    name: 'Home',
    link: '/'
  },
  {
    id: 12,
    name: 'Pricing',
    link: '/Pricing'
  },
  {
    id: 2,
    name: 'Customers',
    link: '/Customers'
  },
  {
    id: 3,
    name: 'Careers',
    link: '/Careers'
  },
  {
    id: 4,
    name: 'About',
    link: '#'
  },
  {
    id: 5,
    name: 'Support',
    link: '#'
  }
];
</script>
