<script setup>
import UseHeader from './components/UseHeader.vue';
</script>

<template>
  <div class="mb-5 mx-5">
    <UseHeader />
    <div class="mt-20">
      <RouterView />
    </div>
  </div>
</template>
