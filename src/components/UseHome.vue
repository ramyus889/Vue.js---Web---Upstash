<script>
export default {
  name: 'UseHome',
  mounted() {
    document.title = 'Vue Upstach';
  }
};
</script>
<script setup>
import UseCommunity from './UseCommunity.vue';
import UseEdge from './UseEdge.vue';
import UseFooter from './UseFooter.vue';
import UseIntegrations from './UseIntegrations.vue';
import UseLogoTeams from './UseLogoTeams.vue';
import UseMain from './UseMain.vue';
import UseTestSpeed from './UseTestSpeed.vue';
import UseThreeCard from './UseThreeCard.vue';
</script>
<template>
  <div class="px-5">
    <UseMain />
    <UseLogoTeams />
    <UseTestSpeed />
    <UseEdge />
    <UseThreeCard />
    <UseIntegrations />
    <UseCommunity />
    <UseFooter />
  </div>
</template>
