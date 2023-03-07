import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import BookingView from '../views/BookingView.vue';
import TimetableView from '../views/TimetableView.vue'

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
  },
  {
    path: '/timetable',
    name: 'TimetableView',
    component: TimetableView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
