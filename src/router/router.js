import { createWebHistory, createRouter } from 'vue-router'

// -----------------------------------------------
// Views -----------------------------------------
// -----------------------------------------------

// Home
import vHome from '@/views/v-home.vue'
// Classes
const vClasses = import('@/views/v-classes.vue')

// -----------------------------------------------
// Router ----------------------------------------
// -----------------------------------------------
const history = createWebHistory()
const router = createRouter({
    history,
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

export default router;