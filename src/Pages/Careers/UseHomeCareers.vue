<script>
export default {
  name: 'UseHomeCareers',
  mounted() {
    document.title = 'Vue Upstach | Careers';
  }
};
</script>
<script setup>
import UseFooter from '@/components/UseFooter.vue';
import UseMainCareers from './UseMainCareers.vue';
</script>

<template>
  <div class="px-5">
    <UseMainCareers />
    <UseFooter />
  </div>
</template>
