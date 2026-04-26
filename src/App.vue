<template>
  <div class="main-background min-h-screen lg:h-screen w-screen bg-base-300 p-4 md:p-6 lg:p-8 custom-scroll flex flex-col overflow-x-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4 h-auto lg:h-full">
      <Profile class="h-auto lg:h-full lg:overflow-y-auto" />
      <div class="flex flex-col gap-4 h-auto lg:h-full lg:min-h-0">
        <Navbar />

        <main class="bg-base-100 border border-[#00ff88]/40 hover:border-[#00ff88] transition-all duration-300 rounded-3xl p-6 md:p-8 shadow-xl 
                     h-auto overflow-visible 
                     lg:flex-1 lg:overflow-y-auto">
          <router-view v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component" />
            </transition>
          </router-view>
        </main>
      </div>
    </div>
</div>
</template>

<script setup>
import Profile from './components/layout/Profile.vue'
import Navbar from './components/layout/Navbar.vue'
import router from './router';
</script>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.custom-scroll::-webkit-scrollbar { width: 5px; }
.custom-scroll::-webkit-scrollbar-thumb { background: rgba(155,155,155,0.2); border-radius: 10px; }

.main-background {
  background-image: 
    linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
    url('/src/assets/images/desktop_background.png');
  background-size: cover;
  background-position: center;
}

</style>