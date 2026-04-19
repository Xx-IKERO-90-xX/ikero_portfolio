import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../view/HomeView.vue';
import ProyectsView from '../view/ProyectsView.vue';

const routes = [
    {
        path: '/',
        component: HomeView,
    },
    {
        path: '/proyectos',
        component: ProyectsView,
    }
];

export default createRouter({
    history: createWebHistory(),
    routes,
});