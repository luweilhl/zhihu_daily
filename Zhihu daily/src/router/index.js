import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NewsDetails from '@/components/NewsDetails'
import Setting from '@/components/Setting'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  
  routes: [
    
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/NewsDetails/:nid',
      name: 'NewsDetails',
      component: NewsDetails,
      props:true
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting,
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound,
    }
  ]
})
