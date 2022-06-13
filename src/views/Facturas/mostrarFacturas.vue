<template>
  <ul>
    <li 
      v-for="(incidencia, index) in incidencias"
      :key="index" class="bg-white border-b text-euclid-14 mx-7 my-2" >
      <div class="grid grid-cols-2 laptop:grid-cols-4">
      <div class="font-semibold">
      Titulo: {{incidencia.titulo}}
      </div>
      {{ incidencia._id }}
      <button  @click="generarFactura(incidencia._id)" class="text-blue-600">Generar Factura</button>
      </div>
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
import router from '@/router'

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
      async generarFactura(id_incidencia : string) {
        this.factura.id_usuario = appStore._id
        this.factura.id_incidencia= id_incidencia
        const res = await createFactura(this.factura)
        
        appStore.id_factura = res.id
        console.log(appStore.id_factura)
        router.push('/detallesFactura/'+appStore.id_factura)
      },
      
    },
    mounted() { //Espera a que cargue la pagina
      this.loadIncidencias()
    },    
})
</script>