import HelloWorld from '@/components/HelloWorld'
import Question from '@/components/Question'
import Scoreboard from '@/components/Scoreboard'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'HelloWorld', component: HelloWorld},
    {path: '/question', name: 'Question', component: Question},
    {path: '/scoreboard', name: 'Scoreboard', component: Scoreboard}
  ]
})
