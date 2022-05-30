<template>
  <table class="mx-auto m-4 bg-green-400">
    <thead>
      <th>id</th>
      <th>Título</th>
      <th>Descripción</th>
      <th>Coste</th>
      <th>Estado</th>
    </thead>
    <tbody>
      <tr v-for="(incidencia, index) in incidencias"
      :key="index" >
        <td>{{incidencia._id}}</td> 
        <td><input type="text" v-model="incidencia.titulo"></td> 
        <td><input type="text" v-model="incidencia.descripcion"></td>
        <td><input type="text" v-model="incidencia.coste"></td>
        <td><input type="text" v-model="incidencia.estado"></td> 
      </tr>
    </tbody>
  </table>
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
      }
    },
    mounted() { //Espera a que cargue la pagina
      this.loadIncidencias()
    },    
})
</script>