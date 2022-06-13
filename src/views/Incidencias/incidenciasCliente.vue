<template>
  <div class="mx-5 my-2">
  <img src="@/assets/icons/flecha.svg" @click="irAtras()" width="20" height="22"> 
</div>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-5">
  <table class="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-euclid-14 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <th scope="col" class="px-1 py-1">id</th>
      <th scope="col" class="px-1 py-1">Título</th>
      <th scope="col" class="px-1 py-1">Descripción</th>
      <th scope="col" class="px-1 py-1">Coste</th>
      <th scope="col" class="px-1 py-1">Producto</th>
      <th scope="col" class="px-1 py-1">Estado</th>
    </thead>
    <tbody>
      <tr v-for="(incidencia, index) in incidencias"
      :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-euclid-14" >
        <td scope="row" class="px-1 py-1 font-medium text-gray-900 dark:text-white whitespace-nowrap">{{incidencia._id}}</td> 
        <td class="px-1 py-1">{{incidencia.titulo}}</td> 
        <td class="px-1 py-1">{{incidencia.descripcion}}</td>
        <td class="px-1 py-1">{{incidencia.coste}} €</td>
        <td class="px-1 py-1">{{incidencia.producto}}</td>  
        <td class="px-1 py-1">{{incidencia.estado}}</td> 
      </tr>
    </tbody>
  </table>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { Incidencia } from '@/interfaces/Incidencia'
import { getIncidenciasUsuario} from '@/services/Incidencia.api'
import { useAppStore } from '@/store/app'

const appStore = useAppStore();


export default defineComponent({
  data() {
    return {
    incidencias: [] as Incidencia[] //Utilizando interfaces
    }
  },
  methods: { 
      async loadIncidencias() {
      const id_usuario = appStore._id
      this.incidencias = await getIncidenciasUsuario(id_usuario) 
      },
      async irAtras() {
        this.$router.go(-1)
      }
    },
    mounted() { //Espera a que cargue la pagina
      this.loadIncidencias()
    },    
})
</script>