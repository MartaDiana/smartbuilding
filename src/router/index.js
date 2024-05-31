import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import CameraPage from '../views/Camera.vue'
import AccessControlPage from '../views/AccessControl.vue'
import ElectricityPage from '../views/Electricity.vue'
import LightingPage from '../views/Lighting.vue'
import AirQualityPage from '../views/AirQuality.vue'
import CleanWaterPage from '../views/CleanWater.vue'
import WastePage from '../views/Waste.vue'
import ParkingPage from '../views/Parking.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/camera',
      name: 'camera',
      component: CameraPage
    },
    {
      path: '/access_control',
      name: 'access_control',
      component: AccessControlPage
    },
    {
      path: '/electricity',
      name: 'electricity',
      component: ElectricityPage
    },
    {
      path: '/lighting',
      name: 'lighting',
      component: LightingPage
    },
    {
      path: '/air_quality',
      name: 'air_quality',
      component: AirQualityPage
    },
    {
      path: '/clean_water',
      name: 'clean_water',
      component: CleanWaterPage
    },
    {
      path: '/waste',
      name: 'waste',
      component: WastePage
    },
    {
      path: '/parking',
      name: 'parking',
      component: ParkingPage
    }
  ]
})

export default router
