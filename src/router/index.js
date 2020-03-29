import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import AddContact from '../views/AddContact.vue'
import UpdateContact from '../views/UpdateContact.vue'


import SuiVue from 'semantic-ui-vue'
Vue.use(SuiVue)

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/updatecontact/:id',
    name: 'UpdateContact',
    component: UpdateContact
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/addcontact',
    name: 'AddContact',
    component: AddContact
  }
]

const router = new VueRouter({
  routes
})

export default router
