<template>
<div>
  <table class="mx-auto m-4">
    <thead>
      <th>id</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>e-mail</th>
    </thead>
    <tbody>
      <tr v-for="(tecnico, index) in tecnicos"
      :key="index">
        <td>{{tecnico._id}}</td> 
        <td><input type="text" v-model="tecnico.nombre"></td> 
        <td><input type="text" v-model="tecnico.apellido"></td>
        <td><input type="text" v-model="tecnico.email"></td>
        <td><button @click="handleUpdate(tecnico._id)">Actualizar</button></td>
        <td><button @click="handleDelete(tecnico._id)">Eliminar</button></td>
        <td><button @click="$router.push(`/detallesCliente/${tecnico._id}`)">Ficha completa</button></td> 
      </tr>
    </tbody>
  </table>
  <button @click="$router.push(`/nuevoTecnico`)">Nuevo técnico</button>
</div>
  
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { Tecnico } from '@/interfaces/Tecnico'
import { updateTecnico, getTecnicos, deleteTecnico } from '@/services/Tecnico.api'

export default defineComponent({
  data() {
    return {
    tecnicos: [] as Tecnico[], //Utilizando interfaces
    }
  },
  methods: { 
      async loadUsers() {
      this.tecnicos = await getTecnicos();
    
      console.log(this.tecnicos)
      },

      async handleUpdate(id: string) {
        const tecnico_id = this.tecnicos.find(tecnico => tecnico._id === id)
        await updateTecnico(id, tecnico_id as Tecnico)
        console.log(tecnico_id)
        this.loadUsers()
      },

      async handleDelete(idTecnico: string) {
        await deleteTecnico(idTecnico)
        this.loadUsers()
      }
    
    },

    
    mounted() { //Espera a que cargue la pagina
      this.loadUsers()
    },    
})

</script>