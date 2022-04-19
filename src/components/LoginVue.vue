<template>
  <div class="mt-5 md:mt-0 md:col-span-2">
    <form @submit.prevent="saveUsuario">
      <input type="text" placeholder="Username" v-model="usuario.username" />
      <input type="text" placeholder="Email" v-model="usuario.email" />
      <input type="text" placeholder="Password" v-model="usuario.password" />
      <button>Iniciar sesión</button>
    </form>
    <p>No tengo cuenta <router-link to="/signup">Registrarse</router-link></p>
  </div>
</template>

<script lang="ts">
import  { defineComponent } from 'vue'
import { Usuario } from '../interfaces/Usuario'
import { signinUser } from '../services/Usuario.api'

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
      const res = await signinUser(this.usuario) 
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