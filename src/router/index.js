import Vue from 'vue'
import VueRouter from 'vue-router'
import data_kantin from '../views/data_kantin.vue'
import data_makanan from '../views/data_makanan.vue'
import pembelian from '../views/pembelian.vue'
import Home from '../views/Home.vue'


import Navbar from '../views/layouts/Navbar.vue'
import Sidebar from '../views/layouts/Sidebar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home, header: Navbar, sidebar: Sidebar
    }
  },
  
  
  {
    path: '/data_kantin',
    name: 'data_kantin',
    components: { default: data_kantin, header: Navbar, sidebar: Sidebar
    }
  },
  {
    path: '/data_makanan',
    name: 'data_makanan',
    components: {
      default: data_makanan, header: Navbar, sidebar: Sidebar
    }
  },
  {
    path: '/pembelian',
    name: 'pembelian',
    components: {
      default: pembelian, header: Navbar, sidebar: Sidebar
    }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
