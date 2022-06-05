<template>
  <div>
  <h1>{{tecnico.nombre}}</h1>
   <form @submit.prevent="handleUpdate()" class=" grid space-y-3 
    justify-center">
    <h2>Email</h2>
    <input type="text" v-model="tecnico.email">
    <h2>Nombre</h2>
    <input type="text" v-model="tecnico.nombre">
    <h2>Apellidos</h2>
    <input type="text" v-model="tecnico.apellido">
    <h2>Telefono</h2>
    <input type="text" v-model="tecnico.telefono">
    <h2>Puesto</h2>
    <input type="text" v-model="tecnico.puesto">
    <h2>Incidencias</h2>
    <button @click="$router.push(`/incidenciasTecnico/${tecnico._id}`)">Ver incidencias del técnico</button>
  
    <button class="btn btn-primary">Actualizar</button>
    <button @click="handleDelete()" class="btn btn-error">Borrar</button>
    </form>
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
      await updateTecnico(this.$route.params._id, this.tecnico)
      this.$router.push({name: "adminTecnicos"})
      }
    },
    async handleDelete(){
        await deleteTecnico(this.tecnico._id)
        this.$router.push({name: "adminTecnicos"}) 
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