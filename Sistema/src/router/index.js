import Vue from 'vue'
import Router from 'vue-router'
import session from '@/helpers/session'
import Login from '@/views/Login.vue'
import CadastrarUsuario from '@/views/CadastrarUsuario'
import Home from '@/views/Home.vue'
import PerfilUsuario from '@/views/PerfilUsuario'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { public: true, title: 'Login' }
    },
    {
      path: '/cadastrar-usuario',
      name: 'cadastrar-usuario',
      component: CadastrarUsuario,
      meta: { public: true, title: 'Cadastrar Usuario' }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/perfil-usuario/:id',
      name: 'perfil-usuario',
      component: PerfilUsuario,
      meta: { title: 'Perfil' }

    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || ''
  isLogged(to, next)
})



function isLogged(to, next) {
  if (session.exists()) {
    if (to.name === 'login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else if (!to.meta.public) {
    next({ name: 'login' })
  } else {
    next()
  }
}

export default router
