<script setup>
  import PgFrontEndCard from '../common/proyects/PgFrontEndCard.vue';
  import PgBackEndCard from '../common/proyects/PgBackEndCard.vue';
</script>
<template>
  <div>
    <div class="flex items-center gap-3 mb-6">
      <h2 class="text-3xl font-bold text-white mx-auto tracking-tight">
        Pana Gaming
      </h2>
    </div>
    <div class="min-h-screen p-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <PgFrontEndCard/>
        <PgBackEndCard/>
      </div>
    </div>
  </div>
</template>
