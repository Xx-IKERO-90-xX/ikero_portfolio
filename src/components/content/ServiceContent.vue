<script setup></script>
<template>
    <div class="flex items-center gap-3 mb-6">
      <h2 class="text-3xl font-bold text-white mx-auto tracking-tight">
        Mis Servicios
      </h2>
    </div>
    <div class="min-h-screen p-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div class="card bg-base-200 border border-slate-800 hover:border-green-500/30 transition-all duration-500 rounded-3xl p-8 shadow-2xl hover:shadow-green-500/10">
          <figure class="px-10 pt-10">
            <img
              src="../../assets/images/services/web_dev.jpg"
              alt="Frontend"
              class="rounded-xl shadow-lg w-full h-48 object-cover"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-3xl font-bold italic">
              Desarrollo y diseño Web
            </h2>
            <p class="py-4">
                Ofrezco servicios de desarrollo y diseño web. Mi enfoque se centra en
                crear sitios web atractivos, funcionales y adaptados a las
                necesidades específicas de cada cliente, garantizando una
                experiencia de usuario excepcional.
                Desarrollo tanto sitios webs como soluciones web a medida.
            </p>
          </div>
        </div>

        <div class="card bg-base-200 border border-slate-800 hover:border-green-500/30 transition-all duration-500 rounded-3xl p-8 shadow-2xl hover:shadow-green-500/10">
          <figure class="px-10 pt-10">
            <img
              src="../../assets/images/services/bots.png"
              alt="Backend"
              class="rounded-xl shadow-lg w-full h-48 object-cover"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-3xl font-bold italic">
              Desarrollo de Bots y automatización de tareas.
            </h2>
            <p class="py-4">
                Ofrezco servicios de desarrollo de bots y automatización de tareas. Mi
                enfoque se centra en crear soluciones personalizadas que optimicen
                procesos, mejoren la eficiencia y ahorren tiempo a mis clientes.
                Desarrollo bots para diversas plataformas, como Discord, Telegram,
                entre otras, adaptándolos a las necesidades específicas de cada
                cliente.
            </p>  
          </div>
        </div>
      </div>
    </div>
</template>
