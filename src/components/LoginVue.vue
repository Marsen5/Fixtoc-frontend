<template>
  <div class="grid grid-cols-1 laptop:grid-cols-3 bg-white" >
    <!--Formulario Inicio sesión-->
    <form @submit.prevent="saveUsuario" class=" grid space-y-2 justify-center mx-8 my-auto">
    <!--LOGO-->
      <i class="fa-solid fa-user"></i>
      <img src="@/assets/Logo-violeta.svg" alt="logo" class="w-6">
      <!--Titulo-->
      <h1 class="text-euclid-32 font-semibold">Accede a tu cuenta</h1>
      <div class="grid space-y-0.5">
        <label class=" font-semibold">Email</label>
        <input type="email" v-model="usuario.email" class="p-0.5 border border-gray-500 rounded-[0.5rem]" />
      </div>
      <div class="grid space-y-0.5">
        <label class="font-semibold">Password</label>
        <input type="password" v-model="usuario.password" class="p-0.5 border border-gray-500 rounded-[0.5rem]"/>
      </div>
      <div class=" grid space-y-1" >
        <button class="btn btn-primary">Iniciar sesión</button>
        <p>¿No tienes cuenta? <router-link to="/signup" class="text-blue-500">Registrate</router-link></p>
      </div>
    </form>
    <!--Explicación-->
    <div class="laptop:col-span-2" >
       <img src="@/assets/info-descripcion.jpg" alt="info">
    </div>
    <div class="laptop:col-span-1 bg-violet-600 m--1"></div>
    <div class="laptop:col-span-2" >
       <img src="@/assets/info_login3-02.jpg" alt="info">
    </div>
  </div>
</template>

<script lang="ts">
import  { defineComponent } from 'vue'
import { Usuario } from '../interfaces/Usuario'
import { signinUser } from '../services/Usuario.api'
import { useAppStore } from '@/store/app'


const appStore = useAppStore();


export default defineComponent({
  name: 'LoginVue',
  props: {
    msg: String,
  },
  data() {
    return {
      usuario: {} as Usuario //Utilizando interfaces
    }
  },
  methods: {
    async saveUsuario() {
      const res = await signinUser(this.usuario);
      
      appStore.token = res.token;
      appStore.role = res.role;
      appStore._id= res.id;
      appStore.user = res.user;
      
      /* console.log("res   :  " + res)
      console.log("token     :     " + appStore.token)
      console.log("role     :     " + appStore.role)
      console.log("id     :     " + appStore._id)
      console.log("usuaerio     :     " + appStore.user.nombre) */


      /** Para redireccionar al listado de productos un vez hayamos creado la tarea
       * name : "product" viene de: routes/index.ts name: "product"
       */
      this.$router.push({name: "home"}) 
    },
    
    
    /* saveProduct() {
      console.log(this.product)
      <router-link to="/mostarClientes">Mostrar Clientes</router-link>
    } */
  }
})
</script>