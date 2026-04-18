<template>
  <div class="h-screen w-screen bg-base-300 p-4 md:p-6 overflow-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4 h-full">
      <Profile />
      <div class="flex flex-col gap-4 h-full overflow-hidden">
        <Navbar />
        <main class="card bg-base-100 border border-[#00ff88]/40 z-3 hover:border-[#00ff88]  transition-all duration-300 rounded-3xl p-8 shadow-xl flex-1 overflow-y-auto custom-scroll">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
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
</style>