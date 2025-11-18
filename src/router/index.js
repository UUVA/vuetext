import { 
    createRouter, 
    createWebHistory 
} from 'vue-router'
import Home from '../views/Home.vue'
import New from '../views/new.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/new',
        name: 'New',
        component: New,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router