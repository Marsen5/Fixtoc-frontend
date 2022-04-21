<template>
  <ul>
    <li 
      v-for="(usuario, index) in usuarios"
      :key="index"
      @click="$router.push(`/detallesCliente/${usuario._id}`)"
    > 
      {{ usuario.username }}
    </li>
  </ul>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { Usuario } from '@/interfaces/Usuario'
import { getUsuarios } from '@/services/Usuario.api'

export default defineComponent({
  data() {
    return {
    usuarios: [] as Usuario[] //Utilizando interfaces
    }
  },
  methods: { 
      async loadUsers() {
      const res = await getUsuarios() 
      this.usuarios = res.data
      }
    },
    mounted() { //Espera a que cargue la pagina
      this.loadUsers()
    },    
})
</script>