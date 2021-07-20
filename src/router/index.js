import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import GameInfo from '../views/analyse/GameInfo.vue'
import GameData from '../views/analyse/GameData.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children: [
      // 数据分析
      {
        path: '/gameinfo',
        component: GameInfo
      },
      {
        path: '/gamedata',
        component: GameData
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
