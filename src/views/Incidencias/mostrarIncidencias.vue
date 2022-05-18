<template>
  <table class="mx-auto m-4 bg-green-400">
    <thead>
      <th>id</th>
      <th>Título</th>
      <th>Descripción</th>
      <th>Coste</th>
      <th>Producto</th>
      <th>Ref-usuario</th>
      <th>Fecha pedido</th>
      <th>Estado</th>
    </thead>
    <tbody>
      <tr v-for="(incidencia, index) in incidencias"
      :key="index" @click="handleUpdate(incidencia._id,incidencia)" >
        <td>{{incidencia._id}}</td> 
        <td><input type="text" v-model="incidencia.titulo"></td> 
        <td><input type="text" v-model="incidencia.descripcion"></td>
        <td><input type="text" v-model="incidencia.coste"></td>
        <td><input type="text" v-model="incidencia.producto"></td>  
        <td><input type="text" v-model="incidencia.id_usuario.nombre"></td>
        <td><input type="text" v-model="incidencia.fechaPedido"></td> 
        <td>
            <select v-model="incidencia.estado" @click="handleUpdate(incidencia._id,incidencia)">
              <option value="PENDIENTE">Pendiente</option>
              <option value="EN_REPARACION">En Reparación</option>
              <option value="TERMINADO">Terminado</option>
              <option value="ENVIADO">Enviado</option>
              <option value="ENTREGADO">Entregado</option>
            </select>
        </td>
        <td v-for="(tecnico, index) in tecnicos" :key="index">
          
        </td>
        
      </tr>
    </tbody>
  </table>
  
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { Incidencia} from '@/interfaces/Incidencia'
import { getIncidencias, updateEstado, updateIncidencia} from '@/services/Incidencia.api'
import { Tecnico } from '@/interfaces/Tecnico'

export default defineComponent({
  data() {
    return {
    incidencias: [] as Incidencia[], //Utilizando interfaces
    tecnicos: [] as Tecnico[],
    }

  },
  methods: { 
      async loadIncidencias() {
      this.incidencias = await getIncidencias() 
      },
      //Cambio de estado
      async handleUpdate(id: string, incidencia :Incidencia) {
        await updateEstado(id, incidencia)
        console.log(id, incidencia)
        this.loadIncidencias()
      },
      //Actualizar incidencia
      async handleUpdateIncidencia(id: string, incidencia :Incidencia) {
        await updateIncidencia(id, incidencia)
        console.log(id, incidencia)
        this.loadIncidencias()
      },
    },
    mounted() { //Espera a que cargue la pagina
      this.loadIncidencias()
    },    
})
</script>