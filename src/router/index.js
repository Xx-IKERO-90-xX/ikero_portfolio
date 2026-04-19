import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../view/HomeView.vue';
import ProyectsView from '../view/ProyectsView.vue';
import ServiceView from '../view/ServiceView.vue';

const routes = [
    {
        path: '/',
        component: HomeView,
    },
    {
        path: '/proyectos',
        component: ProyectsView,
    },
    {
        path: '/servicios',
        component: ServiceView,
    }
];

export default createRouter({
    history: createWebHistory(),
    routes,
});