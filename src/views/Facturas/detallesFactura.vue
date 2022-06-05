<template>
  <div>
  <h1>{{factura._id}}</h1>
   <form @submit.prevent="handleUpdate()" class=" grid space-y-3 
    justify-center">
    <h2>NIF</h2>
    <input type="text" v-model="factura.NIF">
    <h2>Usuario</h2>
    <input type="text" v-model="factura.usuario">
    <h2>Precio</h2>
    <input type="text" v-model="factura.precio">
    <h2>Incidencias</h2>
    <input type="text" v-model="factura.incidencias">
    <button class="btn btn-primary">Actualizar</button>
    <button @click="handleDelete()" class="btn btn-error">Borrar</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Factura } from "@/interfaces/Factura";
import { deleteFactura, updateFactura, getFactura } from "@/services/Factura.api";
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
  data() {
    return {
      factura: {} as Factura
    }
  },
  methods: {
    //Las funciones estan en services/ProductService 
    async loadFactura(id: string) { //Funcion que cargar un producto a partir del id que le pasamos - La creamos en services ProductServices.ts (getProduct)
      const res = await getFactura(id)
      this.factura=res.data
    },
    async handleUpdate() { //La funcion viene de updateProduct / services/ProductServices
      if(typeof this.$route.params.id === "string"){
      await updateFactura(this.$route.params.id, this.factura)
      this.$router.push({name: "facturas"})
      }
    },
    async handleDelete(){
        await deleteFactura(this.factura._id)
        this.$router.push({name: "mostrarFacturas"}) 
    }
  },
  mounted() { //Va a hacer una petición de lo que esta recibiendo
    if (typeof this.$route.params.id === "string" ) //Solo lo ejecutara si el dato es de tipo string - Esto la hacemos porque sino al pasar el id en getProduct se tiene que pasar un string si o si
      this.loadFactura(this.$route.params.id)
  }
})
</script>