<script setup></script>
<template>
  <aside
    class="card bg-base-100 border border-[#00ff88]/40 z-3 hover:border-[#00ff88] transition-all duration-300 border-base-content/20 rounded-3xl p-8 flex flex-col justify-between shadow-xl"
  >
    <div class="flex flex-col items-center w-full">
      <div class="avatar mb-6">
        <div
          class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
        >
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            alt="Profile"
          />
        </div>
      </div>

      <h2 class="text-1xl font-light opacity-80 mb-1 text-center text-bold">Full-Stack Web Developer y Entusiasta de la Ciberseguridad</h2>
      <h1 class="text-2xl font-bold text-center">Iker Javier Rodriguez Hernandez</h1>
    </div>

    <div class="w-full mt-10">
      <p class="text-center text-sm mb-6 break-all">theikero@gmail.com</p>

      <div class="flex justify-center gap-4">
        <a
          href="#"
          class="btn btn-ghost btn-circle text-2xl hover:text-secondary"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" class="btn btn-ghost btn-circle text-2xl hover:text-info">
          <i class="fab fa-facebook"></i>
        </a>
        <a
          href="#"
          class="btn btn-ghost btn-circle text-2xl hover:text-primary"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </aside>
</template>
