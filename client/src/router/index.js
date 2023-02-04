import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import BookingView from '../views/BookingView.vue';

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView
  },
  {
    path: '/booking',
    name: 'BookingView',
    component: BookingView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
