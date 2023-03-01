import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeTab from '../components/HomeTab.vue'
import LearningTab from '../components/LearningTab.vue'
import BlogTab from '../components/BlogTab.vue'
import AboutTab from '../components/AboutTab.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeTab
  },
  {
    path: '/learning',
    name: 'learning',
    component: LearningTab
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogTab
  },
  {
    path: '/about',
    name: 'about',
    component: AboutTab
  },
  {
    path: '/question/:id',
    name: 'question',
    component: () => import(/* webpackChunkName: "question_details" */ '../views/QuestionView.vue')
  },
  {
    path: '/learn/:id',
    name: 'learnList',
    component: () => import(/* webpackChunkName: "learn_details" */ '../views/Learining/LearnList.vue')
  },
  {
    path: '/blog/:id',
    name: 'blogDetail',
    component: () => import(/* webpackChunkName: "blog_details" */ '../views/Blog/BlogDetails.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
