<script setup></script>
<template>
  <nav class="shadow-sm text-center bg-base-100 border border-[#00ff88]/40 z-3 hover:border-[#00ff88] transition-all duration-300 rounded-3xl p-3 shadow-md">
    <div class="flex mx-auto gap-2">
      <router-link to="/" class="btn btn-success btn-sm rounded-xl" active-class="btn-active">
        <strong>Principal</strong>
      </router-link>
      <router-link to="/proyectos" class="btn btn-success btn-sm rounded-xl" active-class="btn-active">
        <strong>Proyectos</strong>
      </router-link>
      <router-link to="/servicios" class="btn btn-success btn-sm rounded-xl px-6">
        <strong>Mis Servicios</strong>
      </router-link>
    </div>
  </nav>
</template>