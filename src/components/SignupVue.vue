<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
    <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <div class="grid space-y-2 justify-center px-5 py-6 bg-white shadow w-full rounded-lg divide-y divide-gray-200 ">
    <form @submit.prevent="saveUsuario" class="space-y-3" >
      <h1 class="text-euclid-32 font-semibold">Nuevo Usuario</h1>
      <!--Nombre y apellidos-->
      <div class="columns-2">
        <div class="grid space-y-0.5">
          <label class="font-semibold">Nombre</label>
          <input type="text" v-model="usuario.nombre" class="p-0.5 border border-gray-500 rounded-[0.5rem]" />
        </div>
        <div class="grid space-y-0.5">
          <label class="font-semibold">Apellidos</label>
          <input type="text" v-model="usuario.apellido" class="p-0.5 border border-gray-500 rounded-[0.5rem]" />
        </div>
      </div>
      <!--Email-->
      <div class="grid space-y-0.5">
        <label class=" font-semibold">Email</label>
        <input type="email" v-model="usuario.email" class="p-0.5 border border-gray-500 rounded-[0.5rem]" />
      </div>
      <!--Passwd-->
      <div class="grid space-y-0.5">
        <label class="font-semibold">Password</label>
        <input type="password" v-model="usuario.password" class="p-0.5 border border-gray-500 rounded-[0.5rem]"/>
      </div>
      <!--Botones-->
        <div class="grid space-y-1">
        <button class="btn btn-primary">Crear usuario</button>
        <p>¿Ya tienes una cuenta?<router-link to="/" class="text-blue-500"> Iniciar Sesion</router-link></p>
      </div>
    </form>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import  { defineComponent } from 'vue'
import { Usuario } from '../interfaces/Usuario'
import { createUser } from '../services/Usuario.api'


export default defineComponent({
  name: 'SignupVue',
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
      /* const res = await createUser(this.usuario)  */
      await createUser(this.usuario) 
/*       console.log(res) */
      this.$router.push({name: "login"})
      }
    }
})
</script>