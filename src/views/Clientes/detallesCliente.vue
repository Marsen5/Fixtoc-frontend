<template>
  <div>
  <h1>Hola {{usuario.name}}</h1>
   <form @submit.prevent="handleUpdate()" class=" grid space-y-3 
    justify-center">
    <h2>Nombre de usuario</h2>
    <input type="text" v-model="usuario.username">
    <h2>Email</h2>
    <input type="text" v-model="usuario.email">
    <h2>Nombre</h2>
    <input type="text" v-model="usuario.name">
    <h2>Apellidos</h2>
    <input type="text" v-model="usuario.subname">
    <h2>Edad</h2>
    <input type="text" v-model="usuario.age">

    <button class="btn btn-primary">Actualizar</button>
    <button @click="handleDelete()" class="btn btn-error">Borrar</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Usuario } from "@/interfaces/Usuario";
import { deleteUser, updateUser, getUser } from "@/services/Usuario.api";
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
  data() {
    return {
      usuario: {} as Usuario
    }
  },
  methods: {
    //Las funciones estan en services/ProductService 
    async loadProduct(id: string) { //Funcion que cargar un producto a partir del id que le pasamos - La creamos en services ProductServices.ts (getProduct)
      const res = await getUser(id)
      this.usuario=res.data
    },
    async handleUpdate() { //La funcion viene de updateProduct / services/ProductServices
      if(typeof this.$route.params.id === "string"){
      await updateUser(this.$route.params.id, this.usuario)
      this.$router.push({name: "product"})
      }
    },
    async handleDelete(){
       if(typeof this.$route.params.id === "string"){
        await deleteUser(this.$route.params.id)
        this.$router.push({name: "mostarClientes"}) 
      }
    }
  },
  mounted() { //Va a hacer una petición de lo que esta recibiendo
    if (typeof this.$route.params.id === "string" ) //Solo lo ejecutara si el dato es de tipo string - Esto la hacemos porque sino al pasar el id en getProduct se tiene que pasar un string si o si
      this.loadProduct(this.$route.params.id)
  }
})
</script>