<script>
export default {
  name: 'UseHomeAbout',
  mounted() {
    document.title = 'Vue Upstach | About';
  }
};
</script>
<script setup>
import UseFooter from '@/components/UseFooter.vue';
import UseMainAbout from './UseMainAbout.vue';
</script>

<template>
  <div class="">
    <UseMainAbout />
    <UseFooter />
  </div>
</template>
