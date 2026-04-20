<script setup>
  import WebDevCard from '../common/services/WebDevCard.vue';
  import BotsDevCard from '../common/services/BotsDevCard.vue';
</script>
<template>
    <div class="flex items-center gap-3 mb-6">
      <h2 class="text-3xl font-bold text-white mx-auto tracking-tight">
        Mis Servicios
      </h2>
    </div>
    <div class="min-h-screen p-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <WebDevCard/>
        <BotsDevCard/>
      </div>
    </div>
</template>
