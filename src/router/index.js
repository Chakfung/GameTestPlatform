import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import GameInfo from '../views/analyse/GameInfo.vue'
import GameData from '../views/analyse/GameData.vue'
import GameManage from '../views/gamemanage/GameManage.vue'
import AddGame from '../views/gamemanage/AddGame.vue'
import ConfigList from '../views/listconfiguration/ConfigList.vue'
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
      },
      {
        path: '/gamemanage',
        component: GameManage
      },
      {
        path: '/addgame',
        component: AddGame
      },
      {
        path: '/configlist',
        component: ConfigList
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
