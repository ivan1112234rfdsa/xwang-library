import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView.vue';
import store from '../store/store'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue';
import AdminView from '@/views/AdminView.vue';
import AddBookView from '@/views/AddBookView.vue';
import BookList from '@/components/BookList.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
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
    },
    {
      path: '/FireLogin',
      name: 'FireLogin',
      component: FirebaseSigninView
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: AdminView
    },
    {
      path: '/Addbook',
      name: 'Addbook',
      component: AddBookView
    },
    {
      path: '/bookList',
      name: 'BookList',
      component: BookList
    }
  ]
})
/* router.beforeEach((to, from, next) => {
    if (!store.state.isAuthenticated && to.name !== 'Login') {
        return ({ name: 'Login' })
    } else {
        next();
    }
});
*/



export default router