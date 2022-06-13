<template>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg m-5">
  <table class=" table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-euclid-14 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <th scope="col" class="px-1 py-1">id</th>
      <th scope="col" class="px-1 py-1">Nombre</th>
      <th scope="col" class="px-1 py-1">Apellidos</th>
      <th scope="col" class="px-1 py-1">e-mail</th>
      <th scope="col" class="px-1 py-1">
        <span class="sr-only">Actualizar</span>
      </th>
      <th scope="col" class="px-1 py-1">
        <span class="sr-only">Eliminar</span>
      </th>
      <th scope="col" class="px-1 py-1">
        <span class="sr-only">Ficha completa</span>
      </th>
    </thead>
    <tbody>
      <tr v-for="(tecnico, index) in tecnicos"
      :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-euclid-14">
        <th scope="row" class="px-1 py-1 font-medium text-gray-900 dark:text-white whitespace-nowrap">{{tecnico._id}}</th> 
        <td class="px-1 py-1"><input type="text" size="12" v-model="tecnico.nombre"></td> 
        <td class="px-1 py-1"><input type="text" size="12" v-model="tecnico.apellido"></td>
        <td class="px-1 py-1"><input type="text" v-model="tecnico.email"></td>
         <td><img src="@/assets/icons/Guardar.svg" @click="handleUpdate(tecnico._id)" width="23" height="25" data-modal-toggle="popup-modal"></td>
         <td><img src="@/assets/icons/Eliminar.svg" @click="handleDelete(tecnico._id)" width="25" height="25"></td>
         <td><img src="@/assets/icons/Ficha.svg" @click="$router.push(`/detallesTecnico/${tecnico._id}`)" width="20" height="20"></td> 
      </tr>
    </tbody>
  </table>
</div>
<div class="grid">
  <button @click="$router.push(`/nuevoTecnico`)" class="btn-primary mx-auto">Nuevo técnico</button>
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
      this.tecnicos = this.tecnicos.filter(tecnico => tecnico.role === "TECNICO")
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