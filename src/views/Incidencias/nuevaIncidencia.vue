<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
    <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <div class="grid space-y-2 justify-center px-5 py-6 bg-white shadow w-full rounded-lg divide-y divide-gray-200 ">
    <form @submit.prevent="saveIncidencia" class="space-y-3" >
      <h1 class="text-euclid-32 font-semibold">Nueva incidencia</h1>
      <!--Titulo-->
      <div class="grid space-y-0.5">
        <label class="font-semibold">Titulo</label>
        <input type="text" v-model="incidencia.titulo" class="p-0.5 border border-gray-500 rounded-[0.5rem]" />
      </div>
      <!--Descripcion-->
      <div class="grid space-y-0.5">
        <label class="font-semibold">Descripcion</label>
        <textarea type="text" v-model="incidencia.descripcion" class="p-0.5 border border-gray-500 rounded-[0.5rem]" />
      </div>
      <!--Producto-->
      <div class="grid space-y-0.5">
        <label class="font-semibold">Producto</label>
        <input type="text" v-model="incidencia.producto" class="p-0.5 border border-gray-500 rounded-[0.5rem]" />
      </div>
      <!--Coste-->
      <div class="grid space-y-0.5">
        <label class=" font-semibold">Coste</label>
        <input type="number" v-model="incidencia.coste" class="p-0.5 border border-gray-500 rounded-[0.5rem]" />
      </div>
      <!--Fecha acabado-->
      <div class="grid space-y-0.5">
        <label class="font-semibold">Fecha de finalización aprox.</label>
        <input type="date" v-model="incidencia.fechaAcabado" class="p-0.5 border border-gray-500 rounded-[0.5rem]"/>
      </div>
      <!--Boton-->
      <div class="grid space-y-1">
        <button class="btn btn-primary">Añadir Incidencia</button>
      </div>
    </form>
    </div>
    </div>
  </div>
</template>


<script lang="ts">
import  { defineComponent } from 'vue'
import { Incidencia } from '@/interfaces/Incidencia'
import { createIncidencia } from '@/services/Incidencia.api'

export default defineComponent({
  name: 'IncidenciaVue',
  props: {
    msg: String,
  },
  data() {
    return {
      incidencia: {} as Incidencia //Utilizando interfaces
    }
  },
  methods: {
    async saveIncidencia() {
      const res = await createIncidencia(this.incidencia) 
      console.log(res)
      /** Para redireccionar al listado de productos un vez hayamos creado la tarea
       * name : "product" viene de: routes/index.ts name: "product"
       */
      this.$router.push({name: "home"}) 
    } 
    
    /* saveProduct() {
      console.log(this.product)
    } */
  }
})
</script>