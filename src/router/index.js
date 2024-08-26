import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView.vue';
import { ref } from 'vue';
const isAuthenticated = ref(false);
export function useAuth() {
    function login() {
        isAuthenticated.value = true;
    }

    function logout() {
        isAuthenticated.value = false;
    }
    return { isAuthenticated, login, logout};

}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
    if (to.name == 'About' && !isAuthenticated.value) {
        alert("Login first")
        next({ name: 'Login' });
    } else {
        next();
    }
});



export default router