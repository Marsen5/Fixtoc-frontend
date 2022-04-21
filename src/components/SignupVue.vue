<template>
  <div class="mt-5 md:mt-0 md:col-span-2">
    <div class=" grid space-y-10 justify-center">
    <form @submit.prevent="saveUsuario" class="space-y-5" >
      <div>
        <label for="email" class="label-text">Email</label><br>
        <input type="text" placeholder="Email" class="input input-bordered w-full max-w-xs" v-model="usuario.email"/>
      </div>
      <div>
        <label for="password">Password</label><br>
        <input type="text" placeholder="Password" v-model="usuario.password" />
      </div>
      <button class="btn btn-primary">Crear usuario</button>
    </form>
    <p>Ya tengo una cuenta<router-link to="/"> Iniciar Sesion</router-link></p>
    </div>
  </div>
</template>

<script lang="ts">
import  { defineComponent } from 'vue'
import { Usuario } from '../interfaces/Usuario'
import { createUser } from '../services/Usuario.api'

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
      const res = await createUser(this.usuario) 
      console.log(res)
      /** Para redireccionar al listado de productos un vez hayamos creado la tarea
       * name : "product" viene de: routes/index.ts name: "product"
       */
      this.$router.push({name: "home"}) 
    } 
    
    /* saveProduct() {
      console.log(this.product)
    } */
  }
})
</script>