<script setup></script>
<template>
  <div
    class="bg-base-200 border border-slate-800 hover:border-green-500/30 transition-all duration-500 rounded-3xl p-8 shadow-2xl hover:shadow-green-500/10"
  >
    <div class="flex items-center gap-3 mb-6">
      <h2 class="text-2xl font-bold text-white tracking-tight">Idiomas</h2>
    </div>
    <div>
        <div>
            <span class="text-slate">Español</span><br>
            <progress class="progress progress-success w-56" value="100" max="100"></progress>
        </div>
        <br>
        <div>
            <span class="text-slate">Inglés</span><br>
            <progress class="progress progress-success w-56" value="40" max="100"></progress>
        </div>
    </div>
  </div>
</template>
