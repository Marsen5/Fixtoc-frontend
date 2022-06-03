import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

//RouterRecordRaw es el tipo de ruta. Te obliga a poner nombre y componente
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/LoginVue.vue'),
    meta: {
      isPublic: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../components/SignupVue.vue')
  },
  {
    path: '/mostarClientes',
    name: 'mostrarClientes',
    component: () => import('../views/Clientes/mostrarClientes.vue')
  },
  {
    path: '/detallesCliente/:id',
    name: 'detallesCliente',
    component: () => import('../views/Clientes/detallesCliente.vue')
  },
  {
    path: '/mostarFacturas',
    name: 'mostrarFacturas',
    component: () => import('../views/Facturas/mostrarFacturas.vue')
  },
  {
    path: '/detallesFactura/:id',
    name: 'detallesFactura',
    component: () => import('../views/Facturas/detallesFacturas.vue')
  },
  {
    path: '/nuevaIncidencia',
    name: 'nuevaIncidencia',
    component: () => import('../views/Incidencias/nuevaIncidencia.vue')
  },
  {
    path: '/mostrarIncidencias',
    name: 'mostrarIncidencias',
    component: () => import('../views/Incidencias/mostrarIncidencias.vue')
  },
  {
    path: '/mostrarIncidenciasCliente/:id',
    name: 'mostrarIncidenciasCliente',
    component: () => import('../views/Incidencias/incidenciasCliente.vue')
  },
  {
    path: '/modificarPerfil',
    name: 'modificarPerfil',
    component: () => import('../views/Clientes/perfilCliente.vue')
  },
  {
    path: '/adminTecnicos',
    name: 'adminTecnicos',
    component: () => import('../views/Tecnicos/administrarTecnicos.vue')
  },
  {
    path: '/nuevoTecnico',
    name: 'nuevoTecnico',
    component: () => import('../views/Tecnicos/nuevoTecnico.vue')
  },

  /* {
    path: '/buscarCliente',
    name: 'BuscarCliente',
    component: () => import('../views/Clientes/BuscarCliente.vue')
  },
  {
    path: '/buscarIncidencia',
    name: 'buscarIncidencia',
    component: () => import('../views/Incidencias/BuscarIncidencia.vue')
  },
  {
    path: '/buscarFactura',
    name: 'BuscarFactura',
    component: () => import('../views/Facturas/BuscarFacturas.vue')
  },
  {
    path: '/buscarTecnico',
    name: 'BuscarTecnico',
    component: () => import('../views/Tecnicos/BuscarTecnico.vue')
  }, */
]

/* {
  path: '/',
  name: 'Login',
  component: LoginVue,
  meta: {
    isPublic: true
  }
},
{
  path: '/Inicio',
  name: 'Inicio',
  component: () => import('../views/Inicio.vue')
},
{
  path: '/BuscarCliente',
  name: 'BuscarCliente',
  component: () => import('../views/Clientes/BuscarCliente.vue')
}
,
{
  path: '/BuscarIncidencia',
  name: 'BuscarIncidencia',
  component: () => import('../views/Incidencias/BuscarIncidencia.vue')
},
,
{
  path: '/BuscarFactura',
  name: 'BuscarFactura',
  component: () => import('../views/Facturas/BuscarFactura.vue')
},
{
  path: '/BuscarTecnico',
  name: 'BuscarTecnico',
  component: () => import('../views/Trabajadores/BuscarTrabajador.vue')
},
{
  path: '/TecnicoVista/:id',
  name: 'TecnicoVista',
  component: () => import('../views/Trabajadores/TecnicoVista.vue')
},
{
  path: '/ClienteVista/:id',
  name: 'ClienteVista',
  component: () => import('../views/Clientes/ClienteVista.vue')
},
{
  path: '/IncidenciaVista/:id',
  name: 'IncidenciaVista',
  component: () => import('../views/Incidencias/IncidenciaVista.vue')
},
{
  path: '/Administracion',
  name: 'Administracion',
  component: () => import('../views/Administracion.vue')
} */

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
