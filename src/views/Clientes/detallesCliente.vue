<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
   <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <div class="grid space-y-2 justify-center px-5 py-6 bg-white shadow w-full rounded-lg divide-y divide-gray-200 my-3 ">
   <form @submit.prevent="handleUpdate()" class=" grid space-y-3 
    justify-center">
    <h1 class="text-euclid-32 font-semibold">{{usuario.nombre}} {{usuario.apellido}}</h1>

    <!-- Email -->
    <div class="grid space-y-0.5">
      <h2  class=" font-semibold">Email</h2>
      <input type="text" v-model="usuario.email" class="border-b-2">
    </div>
    <!-- Nombre -->
    <div class="grid space-y-0.5">
      <h2 class=" font-semibold">Nombre</h2>
      <input type="text" v-model="usuario.nombre" class="border-b-2">
    </div>
    <!-- Apellidos -->
    <div class="grid space-y-0.5">
      <h2 class=" font-semibold">Apellidos</h2>
      <input type="text" v-model="usuario.apellido" class="border-b-2">
    </div>
    <!-- Direccion -->
    <div class="grid space-y-0.5">
      <h2 class=" font-semibold">Dirección</h2>
      <input type="text" v-model="usuario.direccion" class="border-b-2"> 
    </div>
    <!-- Telefono -->
    <div class="grid space-y-0.5">
      <h2 class=" font-semibold">Teléfono</h2>
      <input type="text" v-model="usuario.telefono" class="border-b-2">
    </div>

    <div class="grid space-y-1">
    <button class="btn btn-primary">Actualizar</button>
    <button @click="handleDelete()" class="text-red-500">Borrar cuenta</button>
    </div>
    </form>
    </div>
  </div>
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
      this.usuario = await getUser(id)

      /* console.log("Res:"+res.data) */
    },
    async handleUpdate() { //La funcion viene de updateProduct / services/ProductServices
      await updateUser(this.usuario._id, this.usuario)
      this.$router.push({name: "home"})
    },
    async handleDelete(){
        await deleteUser(this.usuario._id)
        this.$router.push({name: "home"}) 
    }
  },
  mounted() { //Va a hacer una petición de lo que esta recibiendo
    if (typeof this.$route.params.id === "string" ) //Solo lo ejecutara si el dato es de tipo string - Esto la hacemos porque sino al pasar el id en getProduct se tiene que pasar un string si o si
      console.log("id:"+this.$route.params.id)
      const id= this.$route.params.id
      this.loadProduct(id as string)
      }
})
</script>