<script>
export default {
  name: 'UseHomeCustomers',
  mounted() {
    document.title = 'Vue Upstach | Customers';
  }
};
</script>
<script setup>
import UseFooter from '@/components/UseFooter.vue';
import UseMainCustomers from './UseMainCustomers.vue';
</script>

<template>
  <div class="px-5">
    <UseMainCustomers />
    <UseFooter />
  </div>
</template>
