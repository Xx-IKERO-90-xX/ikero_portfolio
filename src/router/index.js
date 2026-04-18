import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../view/HomeView.vue';

const routes = [
    {
        path: '/',
        component: HomeView,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});