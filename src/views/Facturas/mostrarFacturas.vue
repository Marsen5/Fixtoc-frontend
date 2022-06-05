<template>
  <ul>
    <li 
      v-for="(incidencia, index) in incidencias"
      :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-euclid-14"
      @click="generarFactura(incidencia._id)">
    > 
      {{ incidencia._id }}
    </li>
  </ul>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { Incidencia } from '@/interfaces/Incidencia'
import { Factura } from '@/interfaces/Factura'
import { getIncidenciasUsuario } from '@/services/Incidencia.api'
import { createFactura } from '@/services/Factura.api'

import { useAppStore } from '@/store/app'

const appStore = useAppStore();

export default defineComponent({
  data() {
    return {
    incidencias: [] as Incidencia[], //Utilizando interfaces
    factura: {} as Factura,
    }
  },
  methods: { 
      async loadIncidencias() {
      const id_usuario = appStore._id
      this.incidencias = await getIncidenciasUsuario(id_usuario) 
      },
      async generarFactura(id : string) {
        console.log(appStore._id)
        this.factura.id_usuario = appStore._id
        console.log(this.factura.id_usuario)
        this.factura.id_incidencia= id
        console.log(this.factura.id_incidencia)
        await createFactura(this.factura)
        
        console.log("thisf    "+ this.factura)
      }
      
    },
    mounted() { //Espera a que cargue la pagina
      this.loadIncidencias()
    },    
})
</script>