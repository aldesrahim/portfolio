import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectView from '@/views/ProjectView.vue'
import ContactView from '@/views/ContactView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/projects',
        name: 'project',
        component: ProjectView
    },
    {
        path: '/contacts',
        name: 'contact',
        component: ContactView
    },
    {
        path: '/404',
        component: NotFoundView
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
