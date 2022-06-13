<template>
  <div class="mx-5 my-2">
  <img src="@/assets/icons/flecha.svg" @click="irAtras()" width="20" height="22"> 
</div>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-5">
  <table class=" table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-euclid-14 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <th scope="col" class="px-1 py-1">id</th>
      <th scope="col" class="px-1 py-1">Título</th>
      <th scope="col" class="px-1 py-1">Coste</th>
      <th scope="col" class="px-1 py-1">Producto</th>
      <th scope="col" class="px-1 py-1">Usuario</th>
      <th scope="col" class="px-1 py-1">Fecha pedido</th>
      <th scope="col" class="px-1 py-1">Estado</th>
     <th scope="col" class="px-1 py-1">
        Guardar
      </th>
      <th scope="col" class="px-1 py-1">
        Ficha completa
      </th>
    </thead>
    <tbody>
      <tr v-for="(incidencia, index) in incidencias"
      :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-euclid-14">
        <td scope="row" class="px-1 py-1 font-medium text-gray-900 dark:text-white whitespace-nowrap">{{incidencia._id}}</td> 
        <td class="px-1 py-1">{{incidencia.titulo}}</td> 
        <td class="px-1 py-1">{{incidencia.coste}} €</td>
        <td class="px-1 py-1">{{incidencia.producto}}</td>  
        <td class="px-1 py-1">{{incidencia.id_usuario.nombre}}</td>
        <td class="px-1 py-1">{{incidencia.fechaPedido}}</td> 
        <td class="px-1 py-1">
            <select v-model="incidencia.estado" @click="handleUpdate(incidencia._id,incidencia)">
              <option value="PENDIENTE">Pendiente</option>
              <option value="EN_REPARACION">En Reparación</option>
              <option value="TERMINADO">Terminado</option>
              <option value="ENVIADO">Enviado</option>
              <option value="ENTREGADO">Entregado</option>
            </select>
        </td>      
        <td class="px-1 py-1"> <img src="@/assets/icons/Guardar.svg" @click="handleUpdateIncidencia(incidencia._id, incidencia)" width="23" height="25" data-modal-toggle="popup-modal"> </td>
        <td class="px-1 py-1">  <img src="@/assets/icons/Ficha.svg" @click="$router.push(`/detallesIncidencia/${incidencia._id}`)" width="20" height="20"></td>
      </tr>
    </tbody>
  </table>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { Incidencia } from '@/interfaces/Incidencia'
import { getIncidencias,  updateEstado, updateIncidencia} from '@/services/Incidencia.api'
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
      this.incidencias = await getIncidencias() 
      this.incidencias = this.incidencias.filter(incidencia => incidencia.id_usuario != undefined)
      this.incidencias = this.incidencias.filter(incidencia => incidencia.id_tecnico._id == id_usuario)
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
        console.log()
        this.loadIncidencias()
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