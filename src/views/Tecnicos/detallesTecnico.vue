<template>
<div class="mx-5 my-2">
  <img src="@/assets/icons/flecha.svg" @click="irAtras()" width="20" height="22"> 
</div>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
   <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <div class="grid space-y-2 justify-center px-5 py-6 bg-white shadow w-full rounded-lg divide-y divide-gray-200 my-3 ">
   
   <form @submit.prevent="handleUpdate()" class="space-y-2">
     <h1 class="text-euclid-32 font-semibold">{{tecnico.nombre}}</h1>
    <!-- Email -->
    <div class="grid space-y-0.5">
      <h2  class=" font-semibold">Email</h2>
      <input type="text" v-model="tecnico.email" class="border-b-2">
    </div>
    
    <!-- Nombre -->
    <div class="grid space-y-0.5">
      <h2 class=" font-semibold">Nombre</h2>
      <input type="text" v-model="tecnico.nombre" class="border-b-2">
    </div>
    <!-- Apellidos -->
    <div class="grid space-y-0.5">
      <h2 class=" font-semibold">Apellidos</h2>
      <input type="text" v-model="tecnico.apellido" class="border-b-2">
    </div>

    <!-- Telefono -->
    <div class="grid space-y-0.5">
      <h2 class=" font-semibold">Telefono</h2>
      <input type="text" v-model="tecnico.telefono" class="border-b-2">
    </div>

    <!-- Telefono -->
    <div class="grid space-y-0.5">
      <h2 class=" font-semibold">Precio/hora</h2>
      <input type="text" v-model="tecnico.precio_hora" class="border-b-2">
    </div>

    <div class="grid space-y-0.5">
    <h2 class=" font-semibold">Puesto</h2>
      <input type="text" v-model="tecnico.puesto" class="border-b-2">
    </div>

    <div class="grid space-y-1">
      <button class="btn btn-primary">Actualizar</button>
      <button @click="handleDelete()" class="text-red-500">Borrar</button>
    </div>
    </form>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Tecnico } from "@/interfaces/Tecnico";
import { deleteTecnico, updateTecnico, getTecnico } from "@/services/Tecnico.api";
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
  data() {
    return {
      tecnico: {} as Tecnico
    }
  },
  methods: {
    async loadTecnico(id: string) { 
      this.tecnico = await getTecnico(id)
    },
    async handleUpdate() { 
      if(typeof this.$route.params._id === "string"){
      await updateTecnico(this.tecnico._id, this.tecnico)
      this.$router.push({name: "adminTecnicos"})
      }
    },
    async handleDelete(){
        await deleteTecnico(this.tecnico._id)
        this.$router.push({name: "adminTecnicos"}) 
    },
    async irAtras() {
        this.$router.go(-1)
      }
  },
  mounted() { //Va a hacer una petición de lo que esta recibiendo
    if (typeof this.$route.params.id === "string" ) //Solo lo ejecutara si el dato es de tipo string - Esto la hacemos porque sino al pasar el id en getProduct se tiene que pasar un string si o si
      console.log("id:"+this.$route.params.id)
      const id= this.$route.params.id
      this.loadTecnico(id as string)
    }
})
</script>