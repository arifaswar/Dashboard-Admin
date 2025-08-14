import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Setting from '../components/Setting.vue'

const routes: RouteRecordRaw[] = [
    { path: '/', name: 'dashboard', component: Dashboard},
    { path: '/login', name: 'login', component: Login},
    { path: '/register', name: 'register', component: Register},
    { path: '/setting', name: 'setting', component: Setting}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
