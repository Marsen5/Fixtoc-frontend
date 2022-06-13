<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
   <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <div class="grid space-y-2 justify-center px-5 py-6 bg-white shadow w-full rounded-lg divide-y divide-gray-200 my-3 ">
   <form @submit.prevent="handleUpdate()" class=" grid space-y-2">
     <h1 class="text-euclid-32 font-semibold">{{incidencia._id}}</h1>
    <div class="grid space-y-0.5">
      <h2 class=" font-semibold">Producto</h2>
      <input type="text" v-model="incidencia.producto">
    </div>

    <div class="grid space-y-0.5">
      <h2 class=" font-semibold">Descripción</h2>
      <textarea v-model="incidencia.descripcion" class="border-b-2"></textarea>
    </div>

    <div class="grid space-y-0.5">
      <h2 class=" font-semibold">Fecha pedido</h2>
      <input type="text" v-model="incidencia.fechaPedido" class="border-b-2">
    </div>

    <div class="grid space-y-0.5">
    <h2 class=" font-semibold">Materiales</h2>
    <input type="text" v-model="incidencia.id_material">
    </div>
    <div>
      <form @submit.prevent="createMaterial()">
        <div class="columns-2">
          <div class="grid space-y-0.5">
          <label>Nombre</label> <input type="text" v-model="material.name" class="border-b-2">
          </div>
          <div class="grid space-y-0.5">
          <label>Coste</label> <input type="text" v-model="material.coste" class="border-b-2">
          </div>
        </div>
        <button>Añadir material</button> 
      </form>
    </div>

    <div class="grid space-y-0.5">
      <h2 class=" font-semibold">Estado</h2>
      <select v-model="incidencia.estado">
            <option value="PENDIENTE">Pendiente</option>
            <option value="EN_REPARACION">En Reparación</option>
            <option value="TERMINADO">Terminado</option>
            <option value="ENVIADO">Enviado</option>
            <option value="ENTREGADO">Entregado</option>
      </select>
    </div>

    <div class="grid space-y-1">
    <button class="btn btn-primary">Guardar</button>
    </div>
    </form>
  </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Incidencia } from "@/interfaces/Incidencia";
import { Material } from "@/interfaces/Material";
import { getIncidencia, updateIncidencia } from "@/services/Incidencia.api";
import { createMaterial } from "@/services/material.api";
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
  data() {
    return {
      incidencia: {} as Incidencia,
      material: {} as Material
    }
  },
  methods: {
    //Las funciones estan en services/ProductService 
    async loadIncidencia(id: string) { //Funcion que cargar un producto a partir del id que le pasamos - La creamos en services ProductServices.ts (getProduct)
      this.incidencia = await getIncidencia(id)
    },

    async handleUpdate() { //La funcion viene de updateProduct / services/ProductServices
      await updateIncidencia(this.incidencia._id, this.incidencia)
      this.$router.push({name: "home"}) 
    },

    async createMaterial(){
    await createMaterial(this.material)
    this.incidencia.id_material = this.material._id}
  },

  mounted() { //Va a hacer una petición de lo que esta recibiendo
    if (typeof this.$route.params.id === "string" ) //Solo lo ejecutara si el dato es de tipo string - Esto la hacemos porque sino al pasar el id en getProduct se tiene que pasar un string si o si
      console.log("id:"+this.$route.params.id)
      const id= this.$route.params.id
      this.loadIncidencia(id as string)
      }
})
</script>