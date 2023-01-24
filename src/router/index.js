import { createRouter, createWebHistory } from 'vue-router';
import BookingView from '../views/BookingView.vue';

const routes = [
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
