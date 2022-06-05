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
    </thead>
    <tbody>
      <tr v-for="(incidencia, index) in incidencias"
      :key="index">
        <td>{{incidencia._id}}</td> 
        <td><input type="text" v-model="incidencia.titulo"></td> 
        <td><input type="text" v-model="incidencia.descripcion"></td>
        <td><input type="text" v-model="incidencia.coste"></td>
        <td><input type="text" v-model="incidencia.producto"></td>  
        <td><input type="text" v-model="incidencia.id_usuario.nombre"></td>
        <td><input type="text" v-model="incidencia.fechaPedido"></td>
        <td><input type="text" v-model="incidencia.estado"></td>

      </tr>
    </tbody>
  </table>
  
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { Incidencia} from '@/interfaces/Incidencia'
import { getIncidencias, updateEstado, updateIncidencia } from '@/services/Incidencia.api'



export default defineComponent({
  data() {
    return {
    incidencias: [] as Incidencia[], //Utilizando interfaces
    }

  },
  methods: { 
      async loadIncidencias(id : string) {
      this.incidencias = await getIncidencias()
      this.incidencias = this.incidencias.filter(incidencia => incidencia.id_tecnico != undefined)
      this.incidencias = this.incidencias.filter(incidencia => incidencia.id_tecnico._id == id)
      console.log(this.incidencias)
      },
      //Cambio de estado
      async handleUpdate(id: string, incidencia :Incidencia) {
        await updateEstado(id, incidencia)
        console.log(id, incidencia)
        this.$router.go(0)
      },
      //Actualizar incidencia
      async handleUpdateIncidencia(id: string, incidencia :Incidencia) {
        await updateIncidencia(id, incidencia)
        console.log()
        this.$router.go(0)
      },
  
    },
    mounted() { //Espera a que cargue la pagina
      if (typeof this.$route.params.id === "string" ) //Solo lo ejecutara si el dato es de tipo string
      console.log("id:"+this.$route.params.id)
      const id= this.$route.params.id
      this.loadIncidencias(id as string)
    }    
})
</script>