import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import CourseList from '@/components/course/CourseList'
import UserIndex from '@/components/user/UserIndex'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/course',
      name:'CourseList',
      component:CourseList
    },
    {
      path:'/user',
      name:'UserIndex',
      component:UserIndex
    }
  ]
})
