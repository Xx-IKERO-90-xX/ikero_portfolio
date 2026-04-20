<script setup></script>
<template>
  <div class="card bg-base-200 border border-slate-800 hover:border-green-500/30 transition-all duration-500 rounded-3xl p-8 shadow-2xl hover:shadow-green-500/10">
    <figure class="px-10 pt-10">
      <img
        src="../../../assets/images/proyects/pg_backend.png"
        alt="Backend"
        class="rounded-xl shadow-lg w-full h-48 object-cover"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-3xl font-bold italic">Proyecto Back-End</h2>
      <p class="py-4">
        En este proyecto back-end se gestiona todos los datos que maneja la
        organización ya sea gestion de servidores, usuarios, eventos, etc.
        Mediante API REST se conecta con el front-end para mostrar toda la
        información a los usuarios.
      </p>
      <div class="flex items-center gap-4">
        <img
          src="../../../assets/svg/python-svgrepo-com.svg"
          class="p-2"
          width="70"
        />
        <img
          src="../../../assets/svg/flask-svgrepo-com.svg"
          class="p-2"
          width="70"
        />
        <img
          src="../../../assets/svg/postgresql-svgrepo-com.svg"
          class="p-2"
          width="70"
        />
      </div>
      <div class="card-actions justify-end mt-4">
        <div class="badge badge-outline opacity-50">API REST</div>
      </div>
    </div>
  </div>
</template>
