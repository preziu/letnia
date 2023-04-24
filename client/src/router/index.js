import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import OrderView from '../views/OrderView.vue';
import TimetableView from '../views/TimetableView.vue'
import StayView from '../views/StayView.vue'
import MerchView from '../views/MerchView.vue'
import BookingView from '../views/BookingView.vue'

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView
  },
  {
    path: '/order',
    name: 'OrderView',
    component: OrderView
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
  },
  {
    path: '/stay',
    name: 'StayView',
    component: StayView
  },
  {
    path: '/merch',
    name: 'MerchView',
    component: MerchView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
