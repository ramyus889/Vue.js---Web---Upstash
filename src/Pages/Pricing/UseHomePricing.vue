<script>
export default {
  name: 'UseHomePricing',
  mounted() {
    document.title = 'Vue Upstach | Pricing';
  }
};
</script>
<script setup>
import UseFooter from '@/components/UseFooter.vue';
import UseMainPricing from './UseMainPricing.vue';
import UseContact from './componentsPricing/UseContact.vue';
</script>
<template>
  <div class="px-5">
    <UseMainPricing />
    <UseContact />
    <UseFooter />
  </div>
</template>
