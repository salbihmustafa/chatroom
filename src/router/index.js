import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '../firebase/config'

//auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser; //get current user
  if(!user){
    //if user is null
    next({ name: 'Welcome' }); //redirect to welcome page
  }else{
    next(); //this will carry on to go to the route it needs to
  }
}

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser; //get current user
  if(user){
    //if user is logged in
    next({ name: 'Chatroom' }); //redirect to chatroom page
  }else{
    next(); //this will carry on to go to the route it needs to
  }
} 

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth //users that are already logged in should not be able to leave chatroom unless they logout
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth //before entering chatroom, run requireAuth function
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
