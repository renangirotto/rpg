import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()

// -----------------------------------------------
// Views -----------------------------------------
// -----------------------------------------------

// Home
import vHome from '@/views/v-home.vue'
// Class selection
const vClasses = () => import('@/views/v-classes.vue')

// -----------------------------------------------
// Router ----------------------------------------
// -----------------------------------------------
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: vHome
        },
        {
            path: '/classes',
            name: 'classes',
            component: vClasses
        }
    ]
})

export default router