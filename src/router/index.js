import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '@/views/aboutMe.vue'
import Home from '@/views/index/homePage.vue'
import Catalog from '@/views/catalog/index.vue'
import Detail from '@/components/articleDetail.vue'
import Contact from '@/views/contact/contact.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Home
    },
    {
      path: '/aboutme',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutMe
    }, {
      path: '/catalog',
      name: 'catalog',
      component: Catalog

    }, {
      path: '/detail/:id',
      name: 'ArticleDetail',
      component: Detail
    }, {
      path: '/contact',
      name: 'contactMe',
      component: Contact
    }
  ]
})

export default router
